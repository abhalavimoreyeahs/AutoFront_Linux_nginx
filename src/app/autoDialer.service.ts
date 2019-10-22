import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay } from "rxjs/operators"; 
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
// import { map, filter, mergeMap } from "rxjs/operators";
// import 'rxjs/add/observable/interval';
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

//import { Observable } from 'rxjs';
//import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/mergeMap'; // flatMap

@Injectable({
  providedIn: 'root'
})
export class AutoDialService {
  path = 'http://18.189.120.48:8081';//'https://auto-dialer-application.herokuapp.com';

  constructor(private http: HttpClient, private router: Router) { }

  private _userLogIn = `${this.path}/v0.1/login`;
  private _fileUpload = `${this.path}/v0.1/excelUpload`;
  private _campaign = `${this.path}/v0.1/createCamping`;
  private _getAllCampaign = `${this.path}/v0.1/getAllCamping`;
  private _registerEmployee = `${this.path}/v0.1/auth`;
  private _getAllManagers = `${this.path}/v0.1/RequestMangerDetails`;
  private _editCampaign = `${this.path}/v0.1/editCamping`;
  private _getAllCustomer = `${this.path}/v0.1/RequestCustomerDetails`;
  private _deleteCampaign = `${this.path}/v0.1/deleteCamping`;
  private _getSingleCampaign = `${this.path}/v0.1/getSingleCamping`;
  private _getAllAgents = `${this.path}/v0.1/getAllAgents`;
  private _getManagerDetails = `${this.path}/v0.1/getAssignedAgent`;
  private _getAllManagerData =`${this.path}/v0.1/getAllManagers`;

  private _getAgentDataForDashboard =`${this.path}/v0.1/DashboardDataForAllAgent`;
  private _getParentAndChildCallDetail =`${this.path}/v0.1/getParentAndChildScheduleCalls?recordid=5d4bf6f9698dc220246def94`;
  private _getCallInfoDashboard = `${this.path}/v0.1/callStatus`;
  private _getAssignAgentToManager = `${this.path}/v0.1/assignAgentToManager`;

  // Run and Stop Campaign
  private _run_campaign = `${this.path}/v0.1/runCamping`;
  private _stop_campaign = `${this.path}/v0.1/stopCamping`;
  private _stopAll_campaign = `${this.path}/v0.1/stopAllCamping`;

  //Manager Url
  private _viewManagerCampaign = `${this.path}/v0.1/campingAssignedToManager`; 

  //Agent URl
  private _sendAgentCurrentStatus =`${this.path}/v0.1/agentCurrentStatus`;
  private _getCallDetails = `${this.path}/v0.1/getInfoaftercallTerminated`;
  private _sendFeedbackDetails =`${this.path}/v0.1/AgentSubmitFeedback`;
  private _getScheduledCall = `${this.path}/v0.1/getScheduleCallForAgent`;
  private _sendManualCallFeedback = `${this.path}/v0.1/scheduleCallback`;

 UserName;
  setUserName(name){
  this.UserName = name;
  console.log('User Name:',this.UserName);
  }
  getUserName(){
    return this.UserName;
  }


  //-----------------------------------------------------------

  getToken() {
    return localStorage.getItem('token');
  }
  loggedIn() {
    if (localStorage.getItem('token') == "undefined" || localStorage.getItem('token') === "")
      return !!localStorage.getItem('0')
    return !!localStorage.getItem('token')
  }

  login(data) {
  
    return this.http.post<any>(this._userLogIn, data);
  }
  link;
  excelUploading(file){
    // this.link ={ fileName:"https://vybe-images.s3.us-east-2.amazonaws.com/Data+Example.xlsx"}
    return this.http.post<any>(this._fileUpload, file);

  }
  createCampaign(data){
    return this.http.post<any>(this._campaign, data);
  }
  // getAllCampaignStart(){
  //   return this.http.get(this._getAllCampaign);
  // }
//-----------------------------------------------------------------------------
getAllCampaign() {
 // return Observable.interval(45000).startWith(0).flatMap(() => {
    return this.http.get(this._getAllCampaign)
     // .map(res => res.json());
 // });
}

//-----------------------------------------------------------------------------
  getAllManagers(){ //sshort Desc
    return this.http.get(this._getAllManagers);
  }
 
  getAllManagerDetails(){
 return this.http.get(this._getAllManagerData);
  }

  getAllAgents(){
    return this.http.get(this._getAllAgents);
  }

 

  saveEmployee(data){
    return this.http.post<any>(this._registerEmployee,data);
  }
  editCampaign(data){
  return this.http.put<any>(this._editCampaign, data);
  }
  deleteCampaign(camping){
    console.log(camping);
   // alert(camName.campingname);
    return this.http.delete(`${this._deleteCampaign}?campingId=${camping['campingId']}`);
  }

  getAllCustomer(){
    return this.http.get(this._getAllCustomer);
  }

  editId;
  setEditId(id){
   this.editId  = id;
  }
  getEditId(){
    return this.editId;
  }
  getSingleCampaign(campaignId){
    console.log('body data:',campaignId);
  return this.http.post<any>(this._getSingleCampaign, campaignId);
  }

  getAgentDashboardDetails(){
    return this.http.get(this._getAgentDataForDashboard);
  }

  run_Campaign(camping){
    return this.http.post(this._run_campaign, camping);
  }
  stop_Campaign(camping){
    return this.http.put(this._stop_campaign, camping);
  }
  stop_All_Campaign(camping){
    return this.http.put(this._stopAll_campaign, camping);
  }
  getAdminDashboardCallInfo(data){
    return this.http.put(this._getCallInfoDashboard,data)
  }

  //Assing Agent to Manager
  assignAgentToManager(data){
    return this.http.post(this._getAssignAgentToManager,data)
  }

  //Manager API Hit
  campaignAssignedToManager(){
    return this.http.get(this._viewManagerCampaign);
  }
  getAssaignedAgentToManager(data){
    return this.http.post(this._getManagerDetails,data);
  }


 //Agent Api Hit
 sendAgentStatus(data){
   
   return this.http.put(this._sendAgentCurrentStatus, data);
 }
 getCallDetails(uuid){

   return this.http.post(this._getCallDetails,uuid);
 }
sendCustomerFeedback(feedback){
  return this.http.post(this._sendFeedbackDetails,feedback);
}

sendManualCallFeedBack(feedback){
  return this.http.post(this._sendManualCallFeedback, feedback);
}
getScheduledCallForAgent(data){
  return this.http.get(`${this._getScheduledCall}`+"?agentid="+data['agentid']+"&startTime="+data['startTime']+"&endTime="+data['endTime']);
}

getParentAndChildScheduleCall(){
  return this.http.get(`${this._getParentAndChildCallDetail}`);
}

  data
  //test
  getUsers(){

    return this.data=[
      { name: 'Avinash', email:"a@gmail.com", phone:'46415454'},
      { name: 'Shyam', email:"shyam@gmail.com", phone:'46415454'},
      { name: 'Rohit', email:"rohit@gmail.com", phone:'46415454'},
      { name: 'David', email:"david@gmail.com", phone:'46415454'},
      { name: 'Pyush', email:"pyush@gmail.com", phone:'46415454'},
      { name: 'Avinash1', email:"a@gmail.com", phone:'46415454'},
      { name: 'Shyam2', email:"shyam@gmail.com", phone:'46415454'},
      { name: 'Rohit3', email:"rohit@gmail.com", phone:'46415454'},
      { name: 'David4', email:"david@gmail.com", phone:'46415454'},
      { name: 'Avinash5', email:"a@gmail.com", phone:'46415454'},
      { name: 'Shyam6', email:"shyam@gmail.com", phone:'46415454'},
      { name: 'Rohit7', email:"rohit@gmail.com", phone:'46415454'},
      { name: 'David8', email:"david@gmail.com", phone:'46415454'},
    ]
  }

  getDummyData(){
    return this.data= [
      { Name:'Avinash', Age:23, DOB:'31/05/1996', Mobile:'9479831284', Domicile:'Rajendra Nager', City:'Indore'},
      { Name:'Avinash', Age:23, DOB:'31/05/1996', Mobile:'9479831284', Domicile:'Rajendra Nager', City:'Indore'},
      { Name:'Avinash', Age:23, DOB:'31/05/1996', Mobile:'9479831284', Domicile:'Rajendra Nager', City:'Indore'},
      { Name:'Avinash', Age:23, DOB:'31/05/1996', Mobile:'9479831284', Domicile:'Rajendra Nager', City:'Indore'},
    ]
  }

  getDummyCampaign(){
    return this.data=[
      { campigname :'Save Tree', startdate :1558636199059, getCreatedByname:'Iron Man', assignedToByname:'Hulk', createdAt :1558636199059, campingmembers :[
        { name: 'Chris Brown'},
        { name: 'James Hemsworth'},
        { name: 'Ronaldo'},
        { name: 'Anny'},
        { name: 'My Name'},
      ]},
      { campigname :'Save Tree', startdate :1558636199059, getCreatedByname:'Iron Man', assignedToByname:'Hulk', createdAt :1558636199059, campingmembers :[
        { name: 'Chris Brown'},
        { name: 'James Hemsworth'},
        { name: 'Ronaldo'},
        { name: 'Anny'},
        { name: 'My Name'},
      ]},
      { campigname :'Save Tree', startdate :1558636199059, getCreatedByname:'Iron Man', assignedToByname:'Hulk', createdAt :1558636199059, campingmembers :[
        { name: 'Chris Brown'},
        { name: 'James Hemsworth'},
        { name: 'Ronaldo'},
        { name: 'Anny'},
        { name: 'My Name'},
      ]},
      { campigname :'Save Tree', startdate :1558636199059, getCreatedByname:'Iron Man', assignedToByname:'Hulk', createdAt :1558636199059, campingmembers :[
        { name: 'Chris Brown'},
        { name: 'James Hemsworth'},
        { name: 'Ronaldo'},
        { name: 'Anny'},
        { name: 'My Name'},
      ]},
    ]
  }
  getCallData(){
    return this.data= [
      { name:'Avinash', dateOfBirth :'31/05/1996', mobile:'9479831284', address:'Rajendra Nager', details:'Indore'},
      { name:'Avinash', dateOfBirth:'31/05/1996', mobile:'9479831284', address:'Rajendra Nager', details:'Indore'},
      { name:'Avinash', dateOfBirth:'31/05/1996', mobile:'9479831284', address:'Rajendra Nager', details:'Indore'},
      { name:'Avinash',  dateOfBirth:'31/05/1996', mobile:'9479831284', address:'Rajendra Nager', details:'Indore'},
    ]
  }

  //Progress bar 
  progressBar(){
    setTimeout(()=>{
      return this.data=[
        { name:'Avinash', message:'data',  details:'Indore'},
      ]
    },5000);
    return this.data=[ { name:'Avinash', message:'data',  details:'Indore'}, ]
  }
}