import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ManagerService {
    apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = environment.apiURL;
    }

    campaignAssignedToManager() {
        return this.http.get(this.apiURL + '/v0.1/campingAssignedToManager');
    }

    getAssaignedAgentToManager(data) {
        return this.http.post(this.apiURL + '/v0.1/getAssignedAgent', data);
    }

    getCampaignDetails(){
        debugger;
        return this.http.get(this.apiURL + '/v0.1/getCampingDetails');
    }

    getAgentStatus(){
        return this.http.get(this.apiURL + '/v0.1/getAgentDetails');
    }

    getAgentFeedbackData(){
        return this.http.get(this.apiURL + '/v0.1/getAgentFeedbackData');
    }

    //manager dashboard

    getCallInfo(){
        return this.http.get(this.apiURL + '/v0.1/callInfoTypeForManager');
    }

    getCallDetailsForBadges(){
        return this.http.get(this.apiURL + '/v0.1/getCallDetailsForBadgesManager');
    }
}
