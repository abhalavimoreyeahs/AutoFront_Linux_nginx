(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agent-agent-module"],{

/***/ "./src/app/agent/agent-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/agent/agent-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentRoutingModule", function() { return AgentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent.component */ "./src/app/agent/agent.component.ts");




var routes = [
    {
        path: '',
        component: _agent_component__WEBPACK_IMPORTED_MODULE_3__["AgentComponent"],
        children: [
            { path: '', redirectTo: 'agentDashboard', pathMatch: 'prefix' },
            { path: 'agentDashboard', loadChildren: './agent-dashboard/agent-dashboard.module#AgentDashboardModule' },
            { path: 'call', loadChildren: './calls/call.module#CallModule' },
            // { path: 'calendar', loadChildren: './calendar/view.module#ViewModule'},
            // { path: 'callStatus', loadChildren: './callStatus/callStatus.module#CallStatusModule'},
            { path: 'active', loadChildren: './status/active/active.module#ActiveModule', runGuardsAndResolvers: 'always' },
            { path: 'break', loadChildren: './status/break/break.module#BreakModule' },
            { path: 'callback', loadChildren: './status/callback/callback.module#CallBackModule' },
            { path: 'manualdial', loadChildren: './status/manualDial/manualDial.module#ManualDialModule' },
            { path: 'training', loadChildren: './status/training/training.module#TrainingModule' },
            { path: 'meetwithcustomer', loadChildren: './status/meetingWithCustomer/customerMeet.module#CustomerMeetModule' },
            //Testing
            { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
            { path: 'scheduledCalls', loadChildren: './scheduled-calls/scheduledCall.module#ScheduledCallModule' },
            { path: 'myNotes', loadChildren: './my-notes/my-notes.module#MyNotesModule' },
            { path: 'feedback', loadChildren: './agentFeedbackForm/agentfeedback.module#AgentFeedbackModule' },
        ]
    }
];
var AgentRoutingModule = /** @class */ (function () {
    function AgentRoutingModule() {
    }
    AgentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AgentRoutingModule);
    return AgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/agent.component.css":
/*!*******************************************!*\
  !*** ./src/app/agent/agent.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*code*/\n/*------------------------------*/\n/*tool bar*/\n/*------------------------------*/\n.floating-header-div {\n    position: fixed;  \n    z-index: 999;\n    width: 100%;  \n  }\n/* red pulsating dot*/\n.ring-container {\n    position: relative;\n}\n.circle {\n    width: 12px;\n    height: 12px;\n    background-color: red;\n    border-radius: 50%;\n    position: absolute;\n    top: 23px;\n    left: 23px;\n}\n.ringring {\n    border: 3px solid red;\n    -webkit-border-radius: 20px;\n    height: 22px;\n    width: 22px;\n    position: absolute;\n    left: 18px;\n    top: 18px;\n    -webkit-animation: pulsate 2s ease-out;\n    -webkit-animation-iteration-count: infinite; \n    opacity: 0.0\n}\n@-webkit-keyframes pulsate {\n    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}\n    50% {opacity: 1.0;}\n    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}\n}\n.example-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\nhr { \n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n    margin-left: auto;\n    margin-right: auto;\n    border-style: inset;\n    border-width: 1px;\n  }\n.mat-nav-list a.active {\n    background:rgb(119, 21, 175);\n}\n.active-link {\n    background-color: grey;\n}\n/* a.hover{\n    color:#039be5;\n    background-color:gray;\n} */\na.active{\n    color:rgb(44, 153, 11);\n    background-color:rgb(238, 65, 50);\n}\n#btn{\n    margin: 2% 2% 2% 2%;\n}\nbutton.active{\n    background-color:mediumpurple;\n}\n.is-active {\n    background-color: red;\n    margin:1% 1% 1% 1%;\n}\n#profile{\n    width:200px;\n}\nbutton:focus, button:active {\n    outline: none !important;\n    box-shadow: none !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPO0FBQ1AsaUNBQWlDO0FBQ2pDLFdBQVc7QUFDWCxpQ0FBaUM7QUFDakM7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUVGLHFCQUFxQjtBQUNyQjtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDJDQUEyQztJQUMzQztBQUNKO0FBQ0E7SUFDSSxJQUFJLGtDQUFrQyxFQUFFLFlBQVksQ0FBQztJQUNyRCxLQUFLLFlBQVksQ0FBQztJQUNsQixNQUFNLGtDQUFrQyxFQUFFLFlBQVksQ0FBQztBQUMzRDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDVjtBQUdGO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBOzs7R0FHRztBQUNIO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2FnZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmNvZGUqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyp0b29sIGJhciovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmxvYXRpbmctaGVhZGVyLWRpdiB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAgXG4gICAgei1pbmRleDogOTk5O1xuICAgIHdpZHRoOiAxMDAlOyAgXG4gIH1cblxuLyogcmVkIHB1bHNhdGluZyBkb3QqL1xuLnJpbmctY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaXJjbGUge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIzcHg7XG4gICAgbGVmdDogMjNweDtcbn1cblxuLnJpbmdyaW5nIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICB3aWR0aDogMjJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMThweDtcbiAgICB0b3A6IDE4cHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgMnMgZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgXG4gICAgb3BhY2l0eTogMC4wXG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XG4gICAgMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7IG9wYWNpdHk6IDAuMDt9XG4gICAgNTAlIHtvcGFjaXR5OiAxLjA7fVxuICAgIDEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7IG9wYWNpdHk6IDAuMDt9XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAgIFxuXG5ociB7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICB9XG5cbiAgLm1hdC1uYXYtbGlzdCBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDpyZ2IoMTE5LCAyMSwgMTc1KTtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4vKiBhLmhvdmVye1xuICAgIGNvbG9yOiMwMzliZTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xufSAqL1xuYS5hY3RpdmV7XG4gICAgY29sb3I6cmdiKDQ0LCAxNTMsIDExKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzgsIDY1LCA1MCk7XG59XG5cbiNidG57XG4gICAgbWFyZ2luOiAyJSAyJSAyJSAyJTtcbn1cblxuYnV0dG9uLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm1lZGl1bXB1cnBsZTtcbn1cbi5pcy1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBtYXJnaW46MSUgMSUgMSUgMSU7XG59XG5cbiNwcm9maWxle1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG5idXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/agent/agent.component.html":
/*!********************************************!*\
  !*** ./src/app/agent/agent.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<script type=\"text/javascript\" src=\"https://cdn.plivo.com/sdk/browser/v2/plivo.min.js\"></script>\n<!--floating header-->\n<div class=\"floating-header-div\">\n<mat-toolbar id=\"mainToolbar\" color=\"primary\" class=\"mat-elevation-z6 tbar\">\n  <mat-icon (click)=\"onToolbarMenuToggle()\" id=\"toolbarMenu\">menu</mat-icon>\n  <h4 style=\"margin-left:1%\"> Auto Dialer </h4>\n  <span class=\"toolbar-spacer\"></span>\n  <!-- <mat-menu #rootMenu=\"matMenu\">\n      <button mat-menu-item [matMenuTriggerFor]=\"subMenu\">Power</button>\n      <button mat-menu-item>System settings</button>\n    </mat-menu>\n    \n    <mat-menu #subMenu=\"matMenu\">\n      <button mat-menu-item>Shut down</button>\n      <button mat-menu-item>Restart</button>\n      <button mat-menu-item>Hibernate</button>\n    </mat-menu>\n    \n    <button mat-icon-button [matMenuTriggerFor]=\"rootMenu\">\n      <mat-icon>more_vert</mat-icon>\n    </button> -->\n    <button *ngIf=\"live\" mat-button style=\"margin-top:-60px\">\n      <a class=\"ringring\"></a>\n       <a class=\"circle\"></a> \n  </button>  \n  <button mat-button [matMenuTriggerFor]=\"afterMenu\">{{status | titlecase }}</button>\n <mat-menu #afterMenu=\"matMenu\" xPosition=\"after\"> \n  <a href='http://3.16.206.107/#/agent/active'> <button mat-menu-item>Active</button> </a><!---\"changeStatus('active')\"-->\n\n   <!-- <button mat-menu-item (click)=\"changeStatus('callback')\">Callback</button> -->\n   <a href='http://3.16.206.107/#/agent/manualdial'> <button mat-menu-item >Manual Dial</button></a> <!------changeStatus('manual dial')------->\n   <button mat-menu-item (click)=\"changeStatus('break')\">Break</button>\n   \n   <!-- <button mat-menu-item (click)=\"changeStatus('training')\">Training</button>\n   <button mat-menu-item (click)=\"changeStatus('meeting with customer')\">Meeting With Customer</button> -->\n </mat-menu>\n <mat-icon  class=\"toolbar-icon\" matBadge=\"8\" matBadgePosition=\"after\" matBadgeColor=\"warn\" style=\"margin:1%\"> email</mat-icon>\n  <mat-icon [matMenuTriggerFor]=\"notification\" class=\"toolbar-icon\" matBadge=\"8\" matBadgePosition=\"after\" matBadgeColor=\"accent\" style=\"margin:1%\">notifications</mat-icon>\n \n  <img  [matMenuTriggerFor]=\"menu\" src=\"../../assets/men.jpg\" style=\"width:40px; height:40px;border-radius: 50%;margin:1%\">\n\n    <mat-menu id=\"notification\" #notification=\"matMenu\" style=\"max-height:500px;\">\n    <img src=\"../../assets/men.jpg\" style=\"width:50px;height:50px; border-radius: 50%\"> Luv want to be friend with you.   \n    </mat-menu>  \n  <button mat-icon-button>\n      <mat-icon (click)=\"sideNav.toggle()\">apps</mat-icon>\n    </button>\n  \n    <mat-menu #menu=\"matMenu\">\n      <button id=\"profile\" mat-menu-item>\n          <mat-icon>person</mat-icon>\n        <span>My Profile</span>\n      </button>\n      \n      <button id=\"profile\" mat-menu-item >\n          <mat-icon>feedback</mat-icon>\n        <span>Feedback</span>\n      </button>\n      <button id=\"profile\" mat-menu-item >\n          <mat-icon> live_help</mat-icon>\n        <span>Help</span>\n      </button>\n      <button id=\"profile\" mat-menu-item >\n          <mat-icon>settings</mat-icon>\n        <span>Settings</span>\n      </button>\n      <button id=\"profile\" mat-menu-item (click)=\"logOut()\">\n        <!-- <mat-icon>exit_to_app</mat-icon> -->\n        <mat-icon>power_settings_new</mat-icon>\n        <span>Log Out</span>\n      </button>\n\n  </mat-menu>\n</mat-toolbar>\n<div *ngIf = \"showLoadingindicator\"> Loading...</div>\n<!-- <md-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\" color=\"accent\"></md-progress-bar> -->\n</div>\n\n<mat-sidenav-container id=\"sidenavContainer\" fullscreen style=\"margin-top:50px\">\n  <mat-sidenav mode=\"side\" #sidenav id=\"sidenav\" [class.menu-open]=\"isMenuOpen\" [class.menu-close]=\"!isMenuOpen\" opened >\n    <mat-list id=\"menus\" >\n      <mat-card style=\"font:normal\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"avatar\"></div>\n          <mat-card-title>{{userName}}</mat-card-title>\n          <mat-card-subtitle style=\"text-align: center\">Agent</mat-card-subtitle>\n\n        </mat-card-header>\n        <hr>\n      </mat-card>\n      <!-- <mat-list-item>\n        \n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/agent/calendar']\" id=\"btn\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>date_range</mat-icon>\n          Calendar\n        </button>\n      </mat-list-item> -->\n\n      <mat-list-item >\n        <button class=\"menu-item\" id=\"btn\" mat-flat-button routerLink=\"/agent/agentDashboard\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>dashboard</mat-icon>\n          Dashboard\n        </button>\n      </mat-list-item >\n\n   \n      <a href='http://3.16.206.107/#/agent/manualdial'> \n      <mat-list-item>\n         <button  id=\"btn\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\"\n            class=\"menu-item\" mat-flat-button>\n            <mat-icon> call</mat-icon>\n            Calls\n          </button>\n  \n        </mat-list-item>       </a>\n\n      <!-- <mat-list-item>\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" (click)=\"viewCampaign()\">\n          <mat-icon>list</mat-icon>\n          View Assigned Campaign\n        </button>\n      </mat-list-item> -->\n\n      <mat-list-item>\n        <button class=\"menu-item\" id=\"btn\" mat-flat-button routerLink=\"/agent/scheduledCalls\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>schedule</mat-icon>\n          Scheduled Calls\n        </button>\n      </mat-list-item>\n\n      <mat-list-item>\n        <button class=\"menu-item\" id=\"btn\" mat-flat-button routerLink=\"/agent/myNotes\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>note</mat-icon>\n          My Notes\n        </button>\n      </mat-list-item>\n\n      <!-- <mat-list-item>\n        <button class=\"menu-item\" id=\"btn\" mat-flat-button routerLink=\"/agent/feedback\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>feedback</mat-icon>\n           FeedBack\n        </button>\n      </mat-list-item> -->\n\n      <!-- <mat-list-item>\n        <button class=\"menu-item\" mat-flat-button id=\"btn\">\n          <mat-icon>shuffle</mat-icon>\n          Predictive Dialer\n        </button>\n      </mat-list-item> -->\n\n      <!-- <mat-list-item>\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" mat-flat-button routerLink=\"/agent/setting\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\"> \n          <mat-icon>settings_application</mat-icon>\n          Settings\n        </button>\n      </mat-list-item> -->\n      <!-- <mat-list-item>\n        <button class=\"menu-item\" mat-flat-button id=\"btn\">\n          <mat-icon>feedback</mat-icon>\n          FeedBack\n        </button>\n      </mat-list-item> -->\n    </mat-list> \n  </mat-sidenav>\n\n  <mat-sidenav-content [ngStyle]=\"{ 'margin-left.px': contentMargin }\">\n    <!------------------------------------------------------------------->\n    <mat-drawer-container class=\"example-container\">\n      <mat-drawer #sideNav mode=\"side\" opened=\"false\" [position]=\"nav_position\">\n        <!--- Drawer content -->\n        Drawer data\n      </mat-drawer>\n      <mat-drawer-content>\n        <!-- <button (click)=\"sideNav.toggle()\" mat-button>Toggle SideNav</button> -->\n        <!--------------------------->\n        <router-outlet></router-outlet>\n        <!-------------------------->\n      </mat-drawer-content>\n    </mat-drawer-container>\n    <!------------------------------------------------------------------->\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n\n\n<!-------------------------------Working in place of mat-drawer------------------------------------>\n<!-- <mat-sidenav-container class=\"example-container\" >\n            <mat-sidenav #sidenav [mode]=\"mode.value\" position=\"end\">\n              <p><button mat-button (click)=\"sidenav.toggle()\">Toggle1</button></p>\n              <p>\n                  <mat-radio-group class=\"example-radio-group\" >\n                    <label>Mode:</label>\n                    <mat-radio-button value=\"over\">Over</mat-radio-button>\n                    <mat-radio-button value=\"side\">Side</mat-radio-button>\n                    <mat-radio-button value=\"push\">Push</mat-radio-button>\n                  </mat-radio-group>\n                </p>\n            </mat-sidenav>\n          \n            <mat-sidenav-content>\n              <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n              \n              <router-outlet></router-outlet>\n            </mat-sidenav-content>\n          </mat-sidenav-container> -->"

/***/ }),

/***/ "./src/app/agent/agent.component.ts":
/*!******************************************!*\
  !*** ./src/app/agent/agent.component.ts ***!
  \******************************************/
/*! exports provided: AgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");







var AgentComponent = /** @class */ (function () {
    function AgentComponent(toastrService, _router, service, userService) {
        var _this = this;
        this.toastrService = toastrService;
        this._router = _router;
        this.service = service;
        this.userService = userService;
        this.nav_position = 'end';
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('side'); //over side 
        this.live = false;
        this.status = 'Status'; //Agent Status
        this.f_firstPanel = false;
        this.isMenuOpen = true;
        this.contentMargin = 240;
        this.Status = [
            { value: '0', viewValue: 'Active' },
            { value: '1', viewValue: 'Callback' },
            { value: '2', viewValue: 'Manual dial' },
            { value: '3', viewValue: 'Break' },
            { value: '4', viewValue: 'Training' },
            { value: '5', viewValue: 'Meeting with customer' }
        ];
        this.showLoadingindicator = true;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.showLoadingindicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                setTimeout(function () {
                    _this.showLoadingindicator = false;
                }, 2000);
            }
        });
    }
    AgentComponent.prototype.ngOnInit = function () {
        this.userName = localStorage.getItem('username');
        this.userService.userloginStatus().subscribe(function (data) {
            console.log(data);
            alert('user login status saved successfully');
            event.returnValue = false;
        });
    };
    // page reload
    AgentComponent.prototype.unloadHandler = function (event) {
        console.log("Processing beforeunload...");
        this.logout();
    };
    AgentComponent.prototype.ngOnDestroy = function () {
        alert('destroy chala...');
        this.logout();
    };
    AgentComponent.prototype.logout = function () {
        this.userService.userLogoutStatus().subscribe(function (data) {
            console.log(data);
            alert('api response');
        });
    };
    // ngOnInit() {
    //  this.userName =  this.service.getUserName()
    //  console.log(this.userName);
    //  this.f_firstPanel = true;
    // }
    AgentComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    AgentComponent.prototype.onToolbarMenuToggle = function () {
        console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;
        if (!this.isMenuOpen) {
            this.contentMargin = 70;
        }
        else {
            this.contentMargin = 240;
        }
    };
    //logOut
    AgentComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('PlivoUserId');
        localStorage.removeItem('PlivoPassword');
        localStorage.removeItem('username');
        this._router.navigate(['/login']);
    };
    AgentComponent.prototype.changeStatus = function (status) {
        this.status = status;
        if (status == 'active') {
            this.live = true;
            this._router.navigate(['/agent/active']);
        }
        else if (status == 'callback') {
            this.live = true;
            this._router.navigate(['/agent/callback']);
        }
        else if (status == 'manual dial') {
            this.live = true;
            this._router.navigate(['/agent/manualdial']);
        }
        else if (status == 'break') {
            this.live = false;
            this._router.navigate(['/agent/break']);
        }
        else if (status == 'training') {
            this.live = false;
            this._router.navigate(['/agent/training']);
        }
        else if (status == 'meeting with customer') {
            this.live = false;
            this._router.navigate(['/agent/meetwithcustomer']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AgentComponent.prototype, "unloadHandler", null);
    AgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent',
            template: __webpack_require__(/*! ./agent.component.html */ "./src/app/agent/agent.component.html"),
            styles: [__webpack_require__(/*! ./agent.component.css */ "./src/app/agent/agent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], AgentComponent);
    return AgentComponent;
}());



/***/ }),

/***/ "./src/app/agent/agent.module.ts":
/*!***************************************!*\
  !*** ./src/app/agent/agent.module.ts ***!
  \***************************************/
/*! exports provided: AgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _agent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-routing.module */ "./src/app/agent/agent-routing.module.ts");
/* harmony import */ var _agent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agent.component */ "./src/app/agent/agent.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _call_dialog_call_dialog_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./call-dialog/call-dialog.module */ "./src/app/agent/call-dialog/call-dialog.module.ts");
/* harmony import */ var _call_dialog_call_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./call-dialog/call-dialog.component */ "./src/app/agent/call-dialog/call-dialog.component.ts");










//for angular calender scheduler
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
//for calling


var AgentModule = /** @class */ (function () {
    function AgentModule() {
    }
    AgentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _agent_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgentRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _call_dialog_call_dialog_module__WEBPACK_IMPORTED_MODULE_10__["CallDialogModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            entryComponents: [
                _call_dialog_call_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CallDialogComponent"],
            ],
            declarations: [_agent_component__WEBPACK_IMPORTED_MODULE_6__["AgentComponent"]]
        })
    ], AgentModule);
    return AgentModule;
}());



/***/ }),

/***/ "./src/app/agent/call-dialog/call-dialog.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/agent/call-dialog/call-dialog.module.ts ***!
  \*********************************************************/
/*! exports provided: CallDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallDialogModule", function() { return CallDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _call_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-dialog.component */ "./src/app/agent/call-dialog/call-dialog.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);






//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var CallDialogModule = /** @class */ (function () {
    function CallDialogModule() {
    }
    CallDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ],
            declarations: [_call_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CallDialogComponent"]]
        })
    ], CallDialogModule);
    return CallDialogModule;
}());



/***/ })

}]);
//# sourceMappingURL=agent-agent-module.js.map