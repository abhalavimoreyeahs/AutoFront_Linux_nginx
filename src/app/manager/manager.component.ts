import { Component, OnInit, ViewChild } from '@angular/core';
import { Event,Router,NavigationStart,NavigationEnd,NavigationCancel,NavigationError, RouterEvent} from '@angular/router';
import { AutoDialService } from '../autoDialer.service';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

    ViewCompaignboolean = false;
    AllCompaign=[];
    collapedSideBar: boolean;
    // for chart
    BarChart = []; 
    
    showLoadingindicator:Boolean
    constructor(private _router:Router, private service: AutoDialService) {

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
    userName;
    ngOnInit() {
    this.userName = localStorage.getItem('username');
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
    isMenuOpen = true;
    contentMargin = 240;
    onToolbarMenuToggle() {
     //   console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;
    
        if(!this.isMenuOpen) {
          this.contentMargin = 70;
        } else {
          this.contentMargin = 240;
        }
      }

      viewCampaign(){
          alert('msg');
          this.service.campaignAssignedToManager().subscribe((data)=>{
              if(data['success']=== true){
                this.ViewCompaignboolean = true;
                this.AllCompaign = data['message'];
              }
              console.log(data);
          })
      }
       //logOut
       logOut(){
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this._router.navigate(['/login']);
    }
    call(){
        alert('working');

        this._router.navigate(['/manager/managerDashboard']);
    }
    
   // dummyData = this.service.getDummyData();
    dummyData =   this.AllCompaign ;
    displayDummyData = [ 'S No', 'campingname', 'startdate', 'getCreatedByname', 'assignedtoByname', 'createdAt', 'campingmembers']



    
}
