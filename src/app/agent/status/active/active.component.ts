import { Component, OnInit, HostListener, ViewChild, Inject ,OnDestroy} from '@angular/core';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutoDialService } from '../../../autoDialer.service';
import { AgentService } from '../../../shared/services/agent';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import { ToastrService } from 'ngx-toastr';

//Dialog Box
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

//calendar
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

//Time Picker
// import { AmazingTimePickerService } from 'amazing-time-picker';

//Plivo
import Plivo from 'plivo-browser-sdk';

//interval
import { interval } from 'rxjs';

//Routing
import { Router, NavigationEnd } from '@angular/router';

//For Mat table
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';


declare var $: any;

export interface DialogData {
  animal: string;
  name: string;
  number: string;
  duration: string;
  notes: string;
}

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit, OnDestroy {
  plivoWebSdk;
  Call;
  Number;
  CallUUID;
  uuidObject;
  timepicker;

  callBoolean: Boolean = false;

  displayedColumns = ['Caller Name','Caller No','Date','Note'];
  selection = new SelectionModel(true, []);
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
  

  ];

  // notes;
  notes;
  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog, public service: AutoDialService, private agentService: AgentService, private toastrService: ToastrService) {

  }
  payload;
  showCreatedCall;
  ngOnInit() {

    //------------plivo login----------------------

    this.initPhone(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
    if(!localStorage.getItem('endpointID') && !localStorage.getItem('csio_auth_data')){

        delay(2000),
        this.login(localStorage.getItem("PlivoUserId"),localStorage.getItem("PlivoPassword"))

    }else{
      this.LogOut();
      delay(2000),
        this.login(localStorage.getItem("PlivoUserId"),localStorage.getItem("PlivoPassword"));
    }
   
    // this.login("shubham125559174721784","12345");
    let agentId = localStorage.getItem('PlivoUserId');
    agentId = agentId.concat('@phone.plivo.com');
    let Ojb = {
      status: "active",
      currentstatus: "NotOnCall",
      sipendpoint: agentId,
      reason:null
    }

      // set agent status time
      // let statusChange = {status: "active"}
      // this.agentService.setAgentStatusTime(statusChange).subscribe((data)=>{
      //     console.log(data);
      // })

      this.service.sendAgentStatus(Ojb).subscribe((data) => {
        console.log(data);
      })
    //-------------------------------------

   // let agentId = localStorage.getItem('PlivoUserId');
   // agentId = agentId.concat('@phone.plivo.com');
    debugger;
    let startTime = new Date().setHours(0,0,0,0);
    let endTime = new Date().getTime();

    let data = { agentid: `${agentId}`,startTime,endTime }
    this.service.getScheduledCallForAgent(data).subscribe((data) => {
      console.log('scheduled calendar:', data);
      this.showCreatedCall = data['message'];
              this.dataSource = new MatTableDataSource(this.showCreatedCall);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

        let CallSchedule = [];
       for (let i = 0; i < data['message']['length']; i++) {
        CallSchedule.push({
          id: data['message'][i]['_id'],
          title: data['message'][i]['customerName'],
          start: new Date(parseInt(data['message'][i]['callBackStartTime'])),
          end: new Date(parseInt(data['message'][i]['callBackEndTime'])),
        })
      }
      this.calendarEvents = CallSchedule;
    
    })

    // this.service.getScheduledCallForAgent(data).subscribe((data) => {
    //   console.log('scheduled calendar:', data);
    //   let CallSchedule = [];
    //   for (let i = 0; i < data['message']['length']; i++) {
    //     CallSchedule.push({
    //       id: data['message'][i]['_id'],
    //       title: data['message'][i]['customerMobNo'],
    //       start: new Date(data['message'][i]['callBackStartTime']),
    //       end: new Date(data['message'][i]['callBackEndTime']),
    //     })
    //   }
    //   this.calendarEvents = CallSchedule;
    // })
  }
  ngOnDestroy(){
    this.LogOut()
  }

  autoClick() {
    alert('auto Click');
  }

  // on reloading logout agent from plivo // this also works if someone kill web application
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    this.LogOut();
    console.log("Processing beforeunload...");
    // Do more processing...
    event.returnValue = false;
  }

  // Timer to show sec hour and min but not using now in active mode 
  hours: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  sub;
  async getTalkTime() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.sub = interval(1000)
      .subscribe((val) => { //console.log('called'); 
        this.seconds += 1
        if (this.seconds > 60) {
          this.seconds = 0;
          this.minutes += 1;
        }
        if (this.minutes > 60) {
          this.minutes = 0;
          this.hours += 1;
        }
      });
  }

  end() { // stop timer
    this.sub.unsubscribe();
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

    //this.createEvent(arg.dateStr); // dialog popup will come

    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //     title: 'New Event',
    //     start: arg.date,
    //     allDay: arg.allDay
    //   })
    // }
  }



  //Plivo Code
  //initialize Plivo
  initPhone(username, password) {
    var options = {
      "debug": "DEBUG",
      "permOnClick": true,
      "audioConstraints": { "optional": [{ "googAutoGainControl": false }, { "googEchoCancellation": false }] },
      "enableTracking": true
    };

    this.plivoWebSdk = new Plivo(options);
    // this.plivoWebSdk.client.on('onWebrtcNotSupported', this.onWebrtcNotSupported);
    this.plivoWebSdk.client.on('onLogin', this.onLogin); // msg not showing //this function gets called when user successfully login/ login failed
      this.plivoWebSdk.client.on('onLogout', this.onLogout); // plivo method not working
    //  this.plivoWebSdk.client.on('onLoginFailed', this.onLoginFailed);
    this.plivoWebSdk.client.on('onCallRemoteRinging', this.onCallRemoteRinging);
    this.plivoWebSdk.client.on('onIncomingCallCanceled', this.onIncomingCallCanceled);
    //  this.plivoWebSdk.client.on('onCallFailed', this.onCallFailed);
    this.plivoWebSdk.client.on('onCallAnswered', this.onCallAnswered);// req send to server 
    this.plivoWebSdk.client.on('onMediaConnected', this.onMediaConnected);
    this.plivoWebSdk.client.on('onCallTerminated', this.onCallTerminated);
    this.plivoWebSdk.client.on('onCalling', this.onCalling);
    this.plivoWebSdk.client.on('onIncomingCall', this.onIncomingCall);   // when incomming call trigger this function is called
    this.plivoWebSdk.client.on('onMediaPermission', this.onMediaPermission);
     this.plivoWebSdk.client.on('mediaMetrics', this.mediaMetrics);
    //  this.plivoWebSdk.client.on('audioDeviceChange',this.audioDeviceChange);

    this.plivoWebSdk.client.setRingTone(true);
    this.plivoWebSdk.client.setRingToneBack(true);
    console.log('initPhone ready!')
  }

  login(username, password) {
    // username = 'shubham125559174721784';
    // password = ' 12345';
    if (username && password) {
      var data = this.plivoWebSdk.client.login(username, password);
      console.log('login:', data);
    } else {
      console.error('username/password missing!')
    }
  }

  onLogin() {
    // alert('successfully login');
    console.log('login successfully');
    localStorage.setItem('PlivoLogin','true');
    //this.showLoginSuccess()
    //this.showToaster('plivo Login Successfully');
    //this.toastrService.success('plivo Login Successfully'); //toastrService
  }
  

  LogOut() { // sending req to logout
    //alert('LogOut');
    this.plivoWebSdk.client.logout();
    console.log('logOut function called')
  }

  onLogout(){ // response from plivo
    //alert('successfully log Out');
    console.log('successfully log Out');
    localStorage.removeItem('PlivoLogin');
    localStorage.removeItem('endpointID'); 
    localStorage.removeItem('csio_auth_data');
  }

  async OnCallReceive() {
    await this.plivoWebSdk.client.answer();

    $('#dialogBox').click();
  }

  OnCallReject() {
    alert(' call Reject');
    this.plivoWebSdk.client.reject();
  }

  async onIncomingCall(callerName, extraHeaders) {
    //debugger;
    var str = callerName;
    str = str.split("@");
    console.log('splitMethod:', str[0]);
    this.callerNumber = this.Call = str[0];
    this.Number = str[0];
    console.log('Call', this.Call);
    console.log(callerName, extraHeaders);
    this.callerName = extraHeaders['X-Ph-Test'];
    this.customerId = extraHeaders['X-Ph-Userid'];
    localStorage.setItem('Name', this.callerName);
    localStorage.setItem('Number', this.callerNumber);
    localStorage.setItem('CustomerId',this.customerId)
    console.log('callerName: ', this.callerName);
    $('#btnOnCallReceive').click();

  }

  HangUp() {
    //debugger
    if (this.plivoWebSdk.client.callSession) {
      console.log('call hangup');
      this.plivoWebSdk.client.hangup();
      // setTimeout(()=>{
      //   $('#callDetails').click();
      //  },4000);
    } else {
      // callOff();
      alert('no call to HangUp');
    }
  }
  onIncomingCallCanceled() {
    //alert('call cancellec');
    console.log('call cancelled ...');
    $('#endTime').click();
    this.callBoolean = false;
    //this.hours = this.minutes = this.seconds = 0;
  }
  // onCallFailed(){
  //   alert('call Failed function');
  //   console.log('call failed function');
  // }
  async onCallTerminated(hangupInfo, callInfo) {
    // alert('call terminated');
    $('#endTime').click();
    console.log('call terminated function hangupInfo:', hangupInfo, 'callInfo:', callInfo);
    //await delay(6000);
    this.callBoolean = false;
   // $('#callDetails').click();
     setTimeout(()=>{
      $('#callDetails').click();
     },4000);
  }

  hitCallDetail() {
    debugger;
    this.uuidObject = { uuid: localStorage.getItem('uuid') };
    console.log('sending obj: ', this.uuidObject);
    this.service.getCallDetails(this.uuidObject).subscribe((data) => {
      console.log('res:', data);

      if (data['success'] == true) {
        var callDuration = data['message'][0]['callDurationwithCustomer'];
        if (data['message'][0]['isCallPIckedUp'] === "normal_clearing") {
          this.feedBack(callDuration);
        } else{
          console.log('EXCEPTIONAL CASE: SHOULD HANDLE PROPERLY This the case when call is not normal_clearing ');
        }
        // ----------end -------------------------

      }
    })
    //  localStorage.removeItem('uuid');
  }

  onCallAnswered() {
    // alert('call req to server');
    console.log('call req to server');
  }

  onCalling() { //not a working func
    //alert('on calling');
    console.log('on calling func');
  }
  onCallRemoteRinging() {
    //alert('remote ringing');
    $('#startTime').click();
    this.callBoolean = true;
    console.log('remote ringing');
  }
  callerName;
  callerNumber;
  customerId;
  onMediaConnected(UUID) {
    debugger;
    this.CallUUID = UUID['callUUID'];
    localStorage.setItem('uuid', UUID['callUUID']);
    console.log('media connected', UUID);
    //  this.callerName = UUID['extraHeaders']['X-Ph-Test'];
    //  this.callerNumber = UUID['src'];
    console.log('uuid: ', this.CallUUID);
  }
  onMediaPermission() {
    debugger
    console.log('media permission');
  }

  mediaMetrics(){
    debugger
    console.log('media Metrics');
  }

  //Dialog function
  openDialog(): void {
   // debugger;
    console.log(this.Call);
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '550px',
      data: { number: localStorage.getItem('Number'), name: localStorage.getItem('Name') },
      disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

  }

  feedBack(callDuration): void {
    const dialogRef = this.dialog.open(FeedBackComponent, {
      width: '650px',
      data: { customerId: localStorage.getItem('CustomerId'), customerName: localStorage.getItem('Name'), customerMobNo: localStorage.getItem('Number'),
       callDuration: callDuration, descrptionOnCall: this.notes, sip:'random', DialALegUUID:localStorage.getItem('uuid') },
       disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      console.log('The dialog was closed', result);
      // this.animal = result;
      if (result) {
        this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
          title: result['customerName'],
          start: result['startdate'],
          allDay: true
        })
      }

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

      // result['DialALegUUID'] = localStorage.getItem('uuid');
      // result['isCustomerInterseted'] = result['customerInterested'];
      // result['descrptionOnCall'] = result['notes'];
      // // result['callBackStartTime'] = new Date(result['startdate']).getTime();
      // // result['callBackEndTime'] = new Date(result['callBackEndTime']).getTime();
      // result['customerMobNo'] = result['number'];
      // result['customerName'] = result['name'];
      // result['sip'] = "random";
debugger;
      console.log('data going to servcer', result);
      this.service.sendCustomerFeedback(result).subscribe((data) => {
        console.log(data);
        if (data['success'] == 'true') {
          this.showToaster('Feedback Saved Successfully');
          this.notes = '';
        }
        localStorage.removeItem('uuid');
      })
    });
  }

  createEvent(date): void {
    const dialogRef = this.dialog.open(CreateEventComponent, {
      width: '650px',
      data: { name: 'Jone Doe', number: '9090876543' },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      console.log(result);
      if (result != undefined) {
        // this.animal = result;
        this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
          title: result.title,
          start: result.date,
          allDay: result.notes
        })
      } else {
        console.log('No thanks button clicked');
      }

    });
  }
  //notification
  showToaster(msg) {
    this.toastrService.success(msg);
  }
  showLoginSuccess(){
    this.toastrService.success('Plivo login success');
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



//Dialog Box
//dialog box 2
@Component({
  selector: 'feedback',
  templateUrl: 'feedback.html',
})
export class FeedBackComponent {
  select;
  // callerName;
  // callerNumber;
  // duration;
  // callBackStartTime;
  // callBackEndTime;
  // notes;
  selectedValue:Number;
  constructor( public dialogRef: MatDialogRef<FeedBackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log('feedback details', data);
 
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

  onNoClick(): void {
    this.dialogRef.close();
    localStorage.removeItem('Number'),
      localStorage.removeItem('Name'),
      localStorage.removeItem('CustomerId')
  }

  cancel() {
    localStorage.removeItem('Number'),
      localStorage.removeItem('Name'),
      localStorage.removeItem('CustomerId')
  }
  ok() {

    this.dialogRef.close("can pass string");
    //save the doc
      localStorage.removeItem('Number'),
      localStorage.removeItem('Name'),
      localStorage.removeItem('CustomerId')
  }

  //select feedback list
  onChange(){
  if(this.data['isCustomerInterseted'] ===3 || this.data['isCustomerInterseted'] ===2){
    this.select = true;
  }
  else{
    this.select = false;
  }
  }

}


//Draggable Dialog code
@Component({
  selector: 'createEvent-dialog',
  templateUrl: 'createEvent.html',
})
export class CreateEventComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}