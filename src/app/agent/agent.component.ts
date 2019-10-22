import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { Event,Router,NavigationStart,NavigationEnd,NavigationCancel,NavigationError, RouterEvent} from '@angular/router';
import { AutoDialService } from '../autoDialer.service';
import {FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/services/user.service';

export interface Status {
    value: string;
    viewValue: string;
  }



@Component({
    selector: 'app-agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.css']
})


export class AgentComponent implements OnInit, OnDestroy {
  nav_position: string = 'end';
  mode = new FormControl('side'); //over side 
  live = false;
    collapedSideBar: boolean;

    showLoadingindicator:Boolean
    userName;

    status = 'Status';//Agent Status

    f_firstPanel = false;
    constructor(private toastrService: ToastrService,private _router:Router, private service: AutoDialService, private userService: UserService) {

        this.showLoadingindicator = true;
        this._router.events.subscribe((routerEvent:Event )=>{
            if(routerEvent instanceof NavigationStart){
                this.showLoadingindicator = true;
            }
            if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
              setTimeout(()=>{
                this.showLoadingindicator = false;
              },2000)
            }
            
        })
    }

    
    ngOnInit() {
    this.userName = localStorage.getItem('username');
    this.userService.userloginStatus().subscribe((data)=>{
      console.log(data)
      alert('user login status saved successfully');
      event.returnValue = false;
    })
    }

    // page reload
    @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
     
      console.log("Processing beforeunload...");
      this.logout();
    }

    ngOnDestroy(){
      alert('destroy chala...');
      this.logout();
    }

    logout(){
      this.userService.userLogoutStatus().subscribe((data)=>{
        console.log(data);
        alert('api response');
      })
    }
    // ngOnInit() {
    //  this.userName =  this.service.getUserName()
    //  console.log(this.userName);
    //  this.f_firstPanel = true;
    // }

  

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    isMenuOpen = true;
    contentMargin = 240;
    onToolbarMenuToggle() {
        console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;
    
        if(!this.isMenuOpen) {
          this.contentMargin = 70;
        } else {
          this.contentMargin = 240;
        }
      }

      //logOut
      logOut(){

          localStorage.removeItem('token');
          localStorage.removeItem('PlivoUserId');
          localStorage.removeItem('PlivoPassword');
          localStorage.removeItem('username');
          this._router.navigate(['/login']);
      }
      Status: Status[] = [
        {value: '0', viewValue: 'Active'},
        {value: '1', viewValue: 'Callback'},
        {value: '2', viewValue: 'Manual dial'},
        {value: '3', viewValue: 'Break'},
        {value: '4', viewValue: 'Training'},
        {value: '5', viewValue: 'Meeting with customer'}  
      ];

      changeStatus(status){
        this.status = status;
       if(status == 'active'){
        this.live = true;
        this._router.navigate(['/agent/active']);
       }else if(status == 'callback'){
        this.live = true;
        this._router.navigate(['/agent/callback']);
       }else if(status == 'manual dial'){
        this.live = true;
        this._router.navigate(['/agent/manualdial']);
       }else if(status == 'break'){
        this.live = false;
        this._router.navigate(['/agent/break']);
       }else if(status == 'training'){
        this.live = false;
        this._router.navigate(['/agent/training']);
       }else if(status == 'meeting with customer'){
        this.live = false;
        this._router.navigate(['/agent/meetwithcustomer']);
       }
      }

    
}
