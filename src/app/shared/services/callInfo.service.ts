import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CallInfoService {
    apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = environment.apiURL;
    }

    getCallInfo(data) {
        return this.http.post<any>(this.apiURL + '/v0.1/getCallDetails', data);
    }
}