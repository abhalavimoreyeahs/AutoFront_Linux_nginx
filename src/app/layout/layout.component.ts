import { Component, OnInit, ViewChild } from '@angular/core';
import {trigger, state, animate, transition, style} from '@angular/animations'
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AutoDialService } from '../autoDialer.service';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/operators';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;
    progress = 10;

    showLoadingindicator:Boolean
    userName; loading = false;
    constructor(private toastrService: ToastrService,private _router:Router, private service: AutoDialService) {

        // this.showLoadingindicator = true;
        // this._router.events.subscribe((routerEvent:Event )=>{
        //     if(routerEvent instanceof NavigationStart){
        //         this.showLoadingindicator = true;
               
        //     }
        //     if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){

        //         setTimeout( () => { this.showLoadingindicator = false; }, 3000 );
                
        //     }
            
        // })

        //second loading
        this._router.events.subscribe((event: Event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    setTimeout(() =>  {
                        this.loading = false;
                    }, 2000);
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }

    ngOnInit() {
     this.userName =  this.service.getUserName()
     console.log(this.userName);
    }



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
          localStorage.removeItem('username');
          this.showToaster();
          this._router.navigate(['/login']);
      }

      showToaster(){
        this.toastrService.success('LogOut Successful');
      }
}
