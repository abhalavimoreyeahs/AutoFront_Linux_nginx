import { Component, OnInit, HostListener, ViewChild, Inject, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { delay } from 'rxjs/operators';
import { AgentService } from '../../../shared/services/agent';

//toastr
import { ToastrService } from 'ngx-toastr';

//interval
import { interval } from 'rxjs';

//serive
import { AutoDialService } from '../../../autoDialer.service';

//Dialog Box
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//Time Picker
import { AmazingTimePickerService } from 'amazing-time-picker';

//Plivo
import Plivo from 'plivo-browser-sdk';

//Routing
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

export interface DialogData {
  animal: string;
  name: string;
  number: string;
  duration: string;
  notes: string;
}

@Component({
  selector: 'app-manualDial',
  templateUrl: './manualDial.component.html',
  styleUrls: ['./manualDial.component.css']
})
export class ManualDialComponent implements  OnDestroy{
  dataSource;
  displayedColumns = ['CustomerName','CustomerMobileNo','CallBackStartTime','CallBackEndTime','Description','Call'];

  plivoWebSdk;
  Call;
  Number;
  callBoolean: Boolean = false;
  pickUpTime:Number;
  callEndTime: Number;
  recordId;
  customerName;
  customerId;

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Avinash Bhalavi', start: new Date() }
  ];


  callStatus="Idle";
  phoneStatus ="";
  phoneNo="";
  callDuration:Number;
    // notes;
    notes;
  constructor(private agentService : AgentService,private toastrService: ToastrService,private router: Router,private breakpointObserver: BreakpointObserver, private service : AutoDialService, public dialog: MatDialog,) {
   
    // this.router.events.subscribe((ev) => {
    //   if (ev instanceof NavigationEnd) { /* Your code goes here on every router change */
    //    console.log(ev);
      //  if(localStorage.getItem('endpointID') && localStorage.getItem('csio_auth_data')){
      //    debugger;
      //   this.logOut();
      //   localStorage.removeItem('endpointID');
      //   localStorage.removeItem('csio_auth_data');
      //  // console.log('Plivo logout ...',ev.url);
      //  }else if(localStorage.getItem('PlivoLogin')) {
      //   this.logOut();
      //   console.log('else part for logout');
      //  }else{
      //    console.log('2 nd else');
      //  }
    //   }
    // });
    console.log(this.router.url);
    this.router.navigateByUrl(this.router.url).then(e=>{
      this.phoneStatus ="Not Ready";
     this.initPhone(localStorage.getItem("PlivoUserId"),localStorage.getItem("PlivoPassword")); 
if(!localStorage.getItem('endpointID') && !localStorage.getItem('csio_auth_data')){
 // setTimeout(()=>{
    console.log('login is initiated');
    delay(2000),
    this.login(localStorage.getItem("PlivoUserId"),localStorage.getItem("PlivoPassword"));
 // }, 5000); 
}else{
 // this.logOut();
 //setTimeout(()=>{
  delay(2000),
   console.log('login is initiated')
  this.login(localStorage.getItem("PlivoUserId"),localStorage.getItem("PlivoPassword"));
//}, 5000); 
}

let agentId =  localStorage.getItem('PlivoUserId');
agentId = agentId.concat('@phone.plivo.com');
 let Ojb = {status:"manual",
 currentstatus: "NotOnCall",
 sipendpoint: agentId,
 reason:null
}

 // set agent status time
//  let statusChange = {status: "manual"}
//  this.agentService.setAgentStatusTime(statusChange).subscribe((data)=>{
//      console.log(data);
    
//  })
this.service.sendAgentStatus(Ojb).subscribe((data)=>{
  console.log(data);
})


//----------------------------------------------------------
    // agentId =  localStorage.getItem('PlivoUserId');
     // agentId = agentId.concat('@phone.plivo.com');
     let startTime = new Date().setHours(0,0,0,0);
     let endTime = new Date().setHours(23,59,59,59);
 
     let data = { agentid: `${agentId}`,startTime,endTime }
    this.service.getScheduledCallForAgent(data).subscribe((data)=>{
      debugger;
      console.log('scheduled calendar:',data);
     let CallSchedule =[];
      for(let i = 0; i< data['message']['length']; i++){
        if(data['message'][i]['callBackStartTime']){
          if( new Date(parseInt(data['message'][i]['callBackStartTime'])).getTime() >= new Date().setHours(0, 0, 0, 0)){
            CallSchedule.push({
              data: data['message'][i]
            })
          }
        }
         
      }
      this.calendarEvents = CallSchedule;
      console.log('display:', CallSchedule);
      this.dataSource = new MatTableDataSource(CallSchedule);
    })
       })
  }

 // this.router.navigateByUrl(this.router.url).then(e=>{
   // this.dslkflks()
  //   })

//   ngOnInitFuncion() {
//     this.router.navigate(['/agent/manualdial'])
// //---------------------plivo login------------------------

//     }

    ngOnDestroy(){
      this.logOut()
    }


      // on reloading logout agnet from plivo
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    // this.plivoWebSdk.client && this.plivoWebSdk.client.logout();
    // this.plivoWebSdk.client.logout();
     this.logOut();
     console.log("Processing beforeunload...");
     // Do more processing...
     event.returnValue = false;
   }

  //Dial Pad
    //For Mobile Number
    MobileNumber='';
    pushNumbers(number){
      this.MobileNumber = this.MobileNumber.concat(number);
    }
    removeNumber(){
      this.MobileNumber = this.MobileNumber.slice(0, -1);
    }
  
    call(){
      ////alert(this.MobileNumber);
      console.log(this.MobileNumber);
      this.phoneNo =this.MobileNumber;
      this.callStatus="On Call";
    }

  //Calendar  

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2019-07-12'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

  //calculate Second Min and Hours
   seconds = 0;
   minutes = 0;
   hours = 0 ;
   sub;
 async getTalkTime(){
    this.seconds = 0;
   this.minutes = 0;
   this.hours = 0 ;
   this.sub = interval(1000)
    .subscribe((val) => { //console.log('called'); 
    this.seconds += 1
       if(this.seconds > 60){
        this.seconds = 0;
        this.minutes += 1;
       }
       if(this.minutes > 60){
        this.minutes = 0;
        this.hours += 1;
       }
  });
    
  }

  redirectToCall(id, customerId, name, number){
    console.log('id:',id, 'mobile NO:',number);
  this.MobileNumber = number;
  this.customerName = name;
  this.customerId = customerId;
  this.recordId = id;
  }
  time;
  getTimer(){
    console.log(`hours: ${this.hours} minutes: ${this.minutes} seconds: ${this.seconds}`);
     this.time =  ((this.hours *60 *60) + (this.minutes * 60)+ this.seconds);
    $('#pickUpTime').click();
  }

  pickUpTimeFunc(){
    debugger;
    console.log('time',`hours: ${this.hours} minutes: ${this.minutes} seconds: ${this.seconds}`);
    this.pickUpTime =  ((this.hours *60 *60) + (this.minutes * 60)+ this.seconds);
    localStorage.setItem('callStartTime',`${this.pickUpTime}`);
    console.log('pickUp:',this.pickUpTime);
  }
  callEndTimeFunc(){
     debugger;
     console.log('time',`hours: ${this.hours} minutes: ${this.minutes} seconds: ${this.seconds}`);
     this.callEndTime =  ((this.hours *60 *60) + (this.minutes * 60)+ this.seconds);
     console.log('callEndTime:',this.callEndTime);
     localStorage.setItem('callEndTime',`${this.callEndTime}`);
   }

  end(){
    debugger;
    this.callEndTime =  ((this.hours *60 *60) + (this.minutes * 60)+ this.seconds);
    console.log('callEndTime:',this.callEndTime);
    localStorage.setItem('callEndTime',`${this.callEndTime}`);
    this.callDuration = (<any> parseInt(localStorage.getItem('callEndTime')) - <any>parseInt(localStorage.getItem('callStartTime')) );
    localStorage.setItem('callDuration',`${this.callDuration}`)
    this.sub.unsubscribe();
  }
  clearTime(){
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0 ;
  }

   //Plivo Code
 //initialize Plivo
 initPhone(username, password){
  var options = {
   "debug":"DEBUG",
   "permOnClick":true,
   "audioConstraints":{"optional":[{"googAutoGainControl":false},{"googEchoCancellation":false}]},
   "enableTracking":true
   };

  this.plivoWebSdk = new Plivo(options);
  // this.plivoWebSdk.client.on('onWebrtcNotSupported', this.onWebrtcNotSupported);
   this.plivoWebSdk.client.on('onLogin', this.onLogin); // msg not showing //this function gets called when user successfully login/ login failed
    this.plivoWebSdk.client.on('onLogout', this.onLogout); // plivo method not working
 //  this.plivoWebSdk.client.on('onLoginFailed', this.onLoginFailed);
   this.plivoWebSdk.client.on('onCallRemoteRinging', this.onCallRemoteRinging);
   this.plivoWebSdk.client.on('onIncomingCallCanceled', this.onIncomingCallCanceled);
   this.plivoWebSdk.client.on('onCallFailed', this.onCallFailed);
 this.plivoWebSdk.client.on('onCallAnswered', this.onCallAnswered);// req send to server 
 this.plivoWebSdk.client.on('onMediaConnected', this.onMediaConnected);
 this.plivoWebSdk.client.on('onCallTerminated', this.onCallTerminated);
  this.plivoWebSdk.client.on('onCalling', this.onCalling);
   this.plivoWebSdk.client.on('onIncomingCall', this.onIncomingCall);   // when incomming call trigger this function is called
   this.plivoWebSdk.client.on('onMediaPermission', this.onMediaPermission);
 //  this.plivoWebSdk.client.on('mediaMetrics', this.mediaMetrics);
 //  this.plivoWebSdk.client.on('audioDeviceChange',this.audioDeviceChange);

  this.plivoWebSdk.client.setRingTone(true);
  this.plivoWebSdk.client.setRingToneBack(true);
  console.log('initPhone ready!')
  }

  
  login(username, password) {
    // username = 'shubham125559174721784';
    // password = ' 12345';
     if(username && password){
     var  data = this.plivoWebSdk.client.login(username, password);
       console.log('login:', data);
      // $('#sipUserName').html('sip:'+username+'@'+ this.plivoWebSdk.client.phone.configuration.hostport_params);
      // document.querySelector('title').innerHTML=username;
     }else{
       console.error('username/password missing!')
     }
   }
  
   onLogin(){
    alert('plivo successfully login');
    this.phoneStatus = "Ready"
    console.log('login successfully');
    localStorage.setItem('PlivoLogin','true');
    //this.showToaster('Plivo Login Successfully')
    //this.toastrService.success('Campaign Saved Successful');
   }
  
    logOut(){
      //alert('LogOut');
      this.plivoWebSdk.client.logout();
    }

  
    onLogout(){ // response from plivo
      //alert('successfully log Out');
      console.log('successfully log Out');
      localStorage.removeItem('PlivoLogin');
      localStorage.removeItem('endpointID'); 
      localStorage.removeItem('csio_auth_data');
    }
    makeCall(){
      //var dest = document.getElementById('number')
      ////alert(this.MobileNumber);
      this.phoneNo =this.MobileNumber;
      var dest = this.MobileNumber;
      console.log(dest)
      var extraHeaders = {'X-PH-Test1': 'test1', 'X-PH-Test2': 'test2'};
      this.plivoWebSdk.client.call(dest, extraHeaders);
    }
   // onLogout(){
   //   //alert('successfully log Out');
   // }
  
  async OnCallReceive(){
    await this.plivoWebSdk.client.answer();
    this.callStatus = "OnCall";
    $('#dialogBox').click();
   }
  
   OnCallReject(){
     //alert(' call Reject');
     this.callStatus = "Not OnCall";
     this.plivoWebSdk.client.reject();
   }
  
   async onIncomingCall(callerName, extraHeaders){
     //debugger;
     var str = callerName;
     str = str.split("@");
     console.log('splitMethod:',str[0]);
     this.Call = str[0];
     this.Number = str[0];
     console.log('Call',this.Call);
     $('#btnOnCallReceive').click();
     console.log(callerName, extraHeaders);
   }
  
   HangUp(){
    //alert('calling'); //working
    debugger;
     if(this.plivoWebSdk.client.callSession){
       console.log('call hangup');
       $('#endTime').click();
       this.plivoWebSdk.client.hangup();
       this.callStatus = "Not OnCall";
       this.phoneNo ="";
     }else{
      // callOff();
      this.callStatus = "Not OnCall";
      this.phoneNo ="";
      alert('no call to HangUp');
     }
   }
   onIncomingCallCanceled(){
     //alert('call cancellec');
     $('#endTime').click();
     console.log('call cancelled ...');
   }
   onCallFailed(){
     //alert('call Failed function');
     $('#endTime').click();
     this.callStatus = "Not OnCall"
     console.log('call failed function');
   }
   onCallTerminated(hangupInfo, callInfo){
    //alert('call terminated');
    this.callStatus="Idle";
   
    $('#endTime').click();

    // this.dialog.closeAll();
     console.log('call terminated function hangupInfo:',hangupInfo, 'callInfo:',callInfo);
  
     console.log('Call End Time: hours:' ,   this.callEndTime);
     //this.feedBack(5);
     debugger;
     //this.callDuration = (<any>this.callEndTime - <any>this.pickUpTime); 
 
     $('#feedBack').click();
   }
  
   onCallAnswered(){
     ////alert('call req to server');
     // time when user pickup the call
  
     $('#pickUpTime').click();
     console.log('time when user pickup the call: hours',this.pickUpTime);
     console.log('call req to server');
   }
 
   onCalling(){ //not a working func
     ////alert('on calling');
     console.log('on calling func:----------------------->');
   }
   onCallRemoteRinging(){
     ////alert('remote ringing');
     this.callBoolean = true;
     $('#startTime').click();
     console.log('when end user get call from Auto Dialler');
   }
   onMediaConnected(callUUID){
     //debugger;
     console.log('media connected', callUUID);
     //get time
   }
   onMediaPermission(){
     console.log('media permission');
   }
 

   // feedBack
   feedBack(callDuration): void {
     debugger;
    let agentId = localStorage.getItem('PlivoUserId');
    agentId = agentId.concat('@phone.plivo.com');
    
    const dialogRef = this.dialog.open(FeedBackComponent, {
     width: '650px',
     
     data: { recordid : this.recordId, customerId:this.customerId, customerName: this.customerName,customerMobNo: this.MobileNumber,
       agentid: agentId, durationCallStart: this.pickUpTime, durationCallEnd:this.callEndTime,  descrptionOnCall: this.notes,
       callhangupsource:'calle', callDuration:localStorage.getItem('callDuration')},
       disableClose: true 
   });
     debugger
    dialogRef.afterClosed().subscribe(result => {
      this.MobileNumber= "";
      debugger;
      localStorage.removeItem('callStartTime');
      localStorage.removeItem('callEndTime');
      $('#clearTime').click();
      this.phoneNo ="";
     console.log('The dialog was closed', result);

     if(result['startdate']){
      if(result['callBackEndTime'] && result['callBackStartTime']){
        let startDate = result['callBackStartTime'].split(':');
        let endDate = result['callBackEndTime'].split(':');
        result['callBackStartTime'] =new Date(result['startdate'].getFullYear(),result['startdate'].getMonth(),result['startdate'].getDate()).setHours(parseInt(startDate[0]),parseInt(startDate[1]),0);
        result['callBackEndTime'] = new Date(result['startdate'].getFullYear(),result['startdate'].getMonth(),result['startdate'].getDate()).setHours(parseInt(endDate[0]),parseInt(endDate[1]),0);
        result['callScheduledForWholeDay'] = false;
      }
      else{
        result['callBackStartTime'] = new Date(result['startdate']).getTime();
        result['callBackEndTime'] = new Date(result['startdate']).setHours(23,59,59);
        result['callScheduledForWholeDay'] = true;
      }
    }
  debugger;
      console.log(result);
      if(result){  // if result is not undef then api hit
       this.service.sendManualCallFeedBack(result).subscribe((data)=>{
         console.log(data);
         if(data['success']== 'true'){
           this.notes = '';
          // this.showToaster();
         }
        // localStorage.removeItem('uuid');
       })
      }
   });
 }

   //notification
   showToaster(msg) {
    this.toastrService.success(msg);
  }
  ErrorSuccess() {
    this.toastrService.error('Failed: Unable to Save Campaign');
  }
  infoSuccess() {
    this.toastrService.info('info msg', 'Info!');
  }
  warningSuccess() {
    this.toastrService.warning('this is warning');
  }
}
//-------------------------------------------------------------------------------

//Dialog Box
//dialog box 2
@Component({
  selector: 'feedback',
  templateUrl: 'feedback.html',
})
export class FeedBackComponent {
   select:Boolean=false;
  // callerName;
  // callerNumber;
  // duration;
   callBackStartTime;
   callBackEndTime;
  // notes;
  constructor( private atp: AmazingTimePickerService,
    public dialogRef: MatDialogRef<FeedBackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
   console.log('feedback details', data);
  //  this.callerName = data.name;
  //  this.callerNumber  =data.number;
  //  this.duration = data.duration ;
  //  this.notes = data.notes;
    }


    Agent =[
      {value:0, name: "Deal done"},
      {value:1, name: "Introduction calls"},
      {value:2, name: "Follow up calls"},
     //{value:3, name: "Deal done"},
      {value:3, name: "Callback"},
      {value:4, name: "Voicemail"},
      {value:5, name: "Blacklist"},
      {value:6, name: "Number does not match"},
      {value:7, name: "Underage"},
      {value:8, name: "Duplicate"},
    ]

      //select feedback list
  onChange(){
  if(this.data['isCustomerInterested'] == 3 || this.data['isCustomerInterseted'] ===2){
    this.select = true;
    this.data['ischeduldedCallBack'] = true;
  }
  else{
    this.select = false;
    this.data['ischeduldedCallBack'] = false;
  }
  }
  onNoClick(): void {
    this.dialogRef.close();
    localStorage.removeItem('Number'),
    localStorage.removeItem('Name')
  }

  cancel(){
    localStorage.removeItem('Number'),
    localStorage.removeItem('Name')
  }
  ok(){
    this.dialogRef.close("can pass string");
    //save the doc
    localStorage.removeItem('Number'),
    localStorage.removeItem('Name')
  }

   //TimePicker function
   startTime(){
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time=>{
      console.log('time:',time);
      this.callBackStartTime= time;
    })
  }

  endTime(){
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time=>{
      console.log('time:',time);
    
      this.callBackEndTime= time;
    })
  }
}


