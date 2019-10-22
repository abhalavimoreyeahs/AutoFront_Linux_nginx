import { Component, OnInit, ViewChild } from '@angular/core';
import { Event,Router,NavigationStart,NavigationEnd,NavigationCancel,NavigationError, RouterEvent} from '@angular/router';
import { AutoDialService } from '../autoDialer.service'
@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

    ViewCompaignboolean = false;
    AllCompaign=[];
    collapedSideBar: boolean;
    
    showLoadingindicator:Boolean
    constructor(private _router:Router, private service: AutoDialService) {

        this.showLoadingindicator = true;
        this._router.events.subscribe((routerEvent:Event )=>{
            if(routerEvent instanceof NavigationStart){
                this.showLoadingindicator = true;
            }
            if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
                this.showLoadingindicator = false;
            }
            
        })
    }

    ngOnInit() {}

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
        this._router.navigate(['/login']);
    }

    
   // dummyData = this.service.getDummyData();
    dummyData =   this.AllCompaign ;
    displayDummyData = [ 'S No', 'campingname', 'startdate', 'getCreatedByname', 'assignedtoByname', 'createdAt', 'campingmembers']
    
}
