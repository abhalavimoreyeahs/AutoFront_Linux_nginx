import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AdminService {
    apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = environment.apiURL;
    }

    login(data) {
        return this.http.post<any>(this.apiURL + '/v0.1/login', data);
    }

    excelUploading(file) {
        return this.http.post<any>(this.apiURL + '/v0.1/excelUpload', file);
    }

    createCampaign(data) {
        return this.http.post<any>(this.apiURL + '/v0.1/createCamping', data);
    }

    getAllCampaign() {
        return this.http.get(this.apiURL + '/v0.1/getAllCamping');
    }

    getAllManagers() {
        return this.http.get(this.apiURL + '/v0.1/RequestMangerDetails');
    }

    getAllAgents() {
        return this.http.get(this.apiURL + '/v0.1/getAllAgents');
    }

    saveEmployee(data) {
        return this.http.post<any>(this.apiURL + '/v0.1/auth', data);
    }

    editCampaign(data) {
        return this.http.put<any>(this.apiURL + '/v0.1/editCamping', data);
    }

    deleteCampaign(camName) {
        return this.http.delete(this.apiURL + `/v0.1/deleteCamping?campingname=${camName['campingname']}`);
    }

    getAllCustomer() {
        return this.http.get(this.apiURL + '/v0.1/RequestCustomerDetails');
    }

    editId;
    setEditId(id) {
        this.editId = id;
    }

    getEditId() {
        return this.editId;
    }

    getSingleCampaign(campaignId) {
        console.log('body data:', campaignId);
        return this.http.post<any>(this.apiURL + '/v0.1/getSingleCamping', campaignId);
    }

    getAgentDashboardDetails() {
        return this.http.get(this.apiURL + '/v0.1/DashboardDataForAllAgent');
    }

    getParentAndChildScheduleCall() {
        return this.http.get(this.apiURL + '/v0.1/getParentAndChildScheduleCalls?recordid=5d4bf6f9698dc220246def94');
    }
   
    getAdminDashboardCallInfo(data){
        return this.http.post(this.apiURL + '/v0.1/callStatus',data);
      }

    getManagerDetails(){
        return this.http.get(this.apiURL + '/v0.1/getAllManagerDetails');
    }  

    getSingleManagerDetails(managerId){
        return this.http.get(this.apiURL + '/v0.1/getSingleManagerDetails?managerId='+managerId);
    }

    getAvailabelAgent(){
        return this.http.get(this.apiURL + '/v0.1/getAvailableAgent');
    }

    assignAgentToManager(data){
        return this.http.post(this.apiURL + '/v0.1/assignAgentToManager',data);
      }

      getAllAssignedAgent(){
          return this.http.get(this.apiURL + '/v0.1/getAllAssignedAgent');
      }

      getCallbackScheduledByAgent(){
          return this.http.get(this.apiURL + '/v0.1/getAllScheduledCallback');
      }
 
    //dashboard apis
      getAllAgnetStatus(){
          return this.http.get(this.apiURL + '/v0.1/AgentCampaignStatus');
      }

      getAllCampaignStatus(){
        return this.http.get(this.apiURL + '/v0.1/GetCampaignDetails');
      }

      getAllCallHangupInfo(){
          return this.http.get(this.apiURL + '/v0.1/getCallHangupInfo');
      }

      //get running Campaing Details
      getRunningCampaignDetails(){
          return this.http.get(this.apiURL + '/v0.1/getRunningCampaignDetails');
      }

      getTodaysCallDetails(){
          return this.http.get(this.apiURL + '/v0.1/getTodayCallDetails');
      }
    // this need to be deleted
    data

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
}
