import { Injectable } from '@angular/core';
import { CanActivate,Router, CanActivateChild } from '@angular/router';
import { AutoDialService} from '../../autoDialer.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //authguard implements CanActive method service override
  constructor( private router :Router,private service:AutoDialService) { }
  roleId;
  canActivate():boolean{
    this.roleId = localStorage.getItem('role')
    if(this.service.loggedIn() && (this.roleId == 1)){    
      return true;
    }
    this.router.navigate(['/login']);  
    return false;
  }
  canActivateChild(): boolean {
    this.roleId = localStorage.getItem('role');
    if(this.service.loggedIn() && (this.roleId == 2)){
     return true;
    }
   
    this.router.navigate(['/login']);
    return false;
  }
  canActivateAgent(): boolean {
    this.roleId = localStorage.getItem('role');
    if(this.service.loggedIn() && (this.roleId == 3)){
     return true;
    }
   
    this.router.navigate(['/login']);
    return false;
  }
}
