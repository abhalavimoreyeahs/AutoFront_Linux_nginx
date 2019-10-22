import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AgentService {
    apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = environment.apiURL;
    }


    sendAgentStatus(data) {
        return this.http.put(this.apiURL + '/v0.1/agentCurrentStatus', data);
    }

    getCallDetails(uuid) {
        return this.http.post(this.apiURL + '/v0.1/getInfoaftercallTerminated', uuid);
    }

    sendCustomerFeedback(feedback) {
        return this.http.post(this.apiURL + '/v0.1/AgentSubmitFeedback', feedback);
    }

    getScheduledCallForAgent(agentId) {
        return this.http.get(this.apiURL + `/v0.1/getScheduleCallForAgent?agentid=${agentId['agentid']}`);
    }

    getMyAllNotes(){
        return this.http.get(this.apiURL + '/v0.1/getAgentNotes');
    }

    setAgentStatusTime(data){
        return this.http.post(this.apiURL + '/v0.1/saveAgentStatusTime', data);
    }

    // Agent Dashboard 
    getAgentCallStatus(data){
        return this.http.post(this.apiURL + '/v0.1/getIndividualAgentCallDetails' ,data);
    }
}
