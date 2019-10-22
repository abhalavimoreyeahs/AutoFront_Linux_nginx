import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = environment.apiURL;
    }

    login(data) {
        return this.http.post<any>(this.apiURL + '/v0.1/login', data);
    }

    employeeFeedback(data){
        return this.http.post<any>(this.apiURL + '/v0.1/saveEmployeeFeedback', data);
    }

    userloginStatus(){
        return this.http.get<any>(this.apiURL + '/v0.1/auth/userLoginStatus');
    }

    userLogoutStatus(){
        return this.http.get<any>(this.apiURL + '/v0.1/auth/userLogoutStatus');
    }
}
