import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

//Plivo
import Plivo from 'plivo-browser-sdk';
declare const myTest: any;

declare var $: any;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit  {
  plivoWebSdk;
   Mobile = { };
   Incomming;

   userName='shubham125559174721784';
   password='';
  constructor(private http: HttpClient) {
   
  }

  ngOnInit() {
    this.initPhone('shubham125559174721784','12345'); 
    this.login("shubham125559174721784","12345")
   }
   // on reloading logout agnet from plivo
   @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    this.plivoWebSdk.client && this.plivoWebSdk.client.logout();
    console.log("Processing beforeunload...");
    // Do more processing...
    event.returnValue = false;
}

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
       //  this.plivoWebSdk.client.on('onLogout', this.onLogout); // plivo method not working
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
      //  this.plivoWebSdk.client.on('mediaMetrics', this.mediaMetrics);
      //  this.plivoWebSdk.client.on('audioDeviceChange',this.audioDeviceChange);
     // this.plivoWebSdk.client.on('onMediaConnected',this.onMediaConnected);
      
    
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
        alert('successfully login');
      }

       logOut(){
         alert('LogOut');
         this.plivoWebSdk.client.logOut();
       }

      // onLogout(){
      //   alert('successfully log Out');
      // }

      makeCall(){
        //var dest = document.getElementById('number')
        alert(this.Mobile['number']);
        var dest = this.Mobile['number'];
        console.log(dest)
        var extraHeaders = {'X-PH-Test1': 'test1', 'X-PH-Test2': 'test2'};
        this.plivoWebSdk.client.call(dest, extraHeaders);
      }

      OnCallReceive(){
        alert('receiving call');
        this.plivoWebSdk.client.answer();
      }

      OnCallReject(){
        alert(' call Reject');
        this.plivoWebSdk.client.reject();
      }
   
      onIncomingCall(callerName, extraHeaders){
      // var data =  this.plivoWebSdk.client.onIncomingCall();
      // alert('auto pickup call ');  
       console.log(callerName, extraHeaders);
      }
    
      HangUp(){
        if(this.plivoWebSdk.client.callSession){
          this.plivoWebSdk.client.hangup();
        }else{
         // callOff();
         alert('no call to HangUp');
        }
      }
      onIncomingCallCanceled(){
        alert('call cancellec');
        console.log('call cancelled ...');
      }
      // onCallFailed(){
      //   alert('call Failed function');
      //   console.log('call failed function');
      // }
      onCallTerminated(){
        alert('call terminated function ');
        console.log('call terminated function ');
      }

      onCallAnswered(){
       // alert('call req to server');
        console.log('call req to server');
      }

      onCalling(){ //not a working func
        alert('on calling');
        console.log('on calling func');
      }
      onCallRemoteRinging(){
        alert('remote ringing');
        console.log('remote ringing');
      }
      onMediaConnected(){
        console.log('media connected');
      }
      onMediaPermission(){
        console.log('media permission');
      }

}
