(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/component/nav/nav.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/component/nav/nav.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnQvbmF2L25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/component/nav/nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/component/nav/nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/component/nav/nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/component/nav/nav.component.ts ***!
  \*******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    };
    NavComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    NavComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    NavComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    NavComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    NavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    NavComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    NavComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    NavComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "collapsedEvent", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/layout/component/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/layout/component/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");




var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'adminDashboard', pathMatch: 'prefix' },
            { path: 'adminDashboard', loadChildren: './admin/adminDashboard.module#AdminDashboardModule' },
            { path: 'addEmployee', loadChildren: './onBoardEmployee/employee.module#EmployeeModule' },
            { path: 'addCustomer', loadChildren: './onBoardCustomer/customer.module#CustomerModule' },
            { path: 'viewEmployee', loadChildren: './Employee/employee.module#EmployeeModule' },
            { path: 'AgentAssignment', loadChildren: './AssignedAgent/assignedAgent.module#AssignedAgentModule' },
            { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule' },
            { path: 'editCampaign', loadChildren: './editCampaign/editCampaign.module#EditCampaignModule' },
            { path: 'demoRoute', loadChildren: './demo/demo.module#DemoModule' },
            { path: 'manager', loadChildren: './managerDetails/manager.module#ManagerModule' },
            { path: 'customer', loadChildren: './viewCustomer/customer.module#CustomerModule' },
            { path: 'callInfo', loadChildren: './callInfo/callInfo.module#CallInfoModule' },
            { path: 'createCampaign', loadChildren: './newCampaign/newCampaign.module#NewCampaignModule' },
            { path: 'agentfeedback', loadChildren: './feedbackDetails/feedbackDetails.module#FeedBackDetailsModule' },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidenav-container {\n  position: relative;\n  z-index: -1 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n/* #mat-toolbar {\n  position: relative;\n  z-index: -12;\n} */\n\n.example-toolbar {\n  padding: 0 14px;\n}\n\n.tbar {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n\ntable {\n    width: 100%;\n  }\n\n.add-files-btn {\n    float: right;\n  }\n\n:host {\n    height: 100%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n  }\n\n.actions {\n    justify-content: flex-end;\n  }\n\n.container {\n    height: 100%;\n  }\n\n.active-list-item {\n    color: #3F51B5 !important; /* Note: You could also use a custom theme */\n  }\n\n#btn{\n  margin: 2% 2% 2% 2%;\n}\n\nbutton.active{\n  background-color:mediumpurple;\n}\n\n.is-active {\n  background-color: red;\n  margin:1% 1% 1% 1%;\n}\n\n@media screen and (max-width: 700px) and (min-width: 400px) { \n  .heading-left { left: -0.5%; }\n}\n\n#profile{\n  width:200px;\n}\n\nbutton:focus, button:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7OztHQUdHOztBQUNIO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSx5QkFBeUIsRUFBRSw0Q0FBNEM7RUFDekU7O0FBR0Y7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCLFdBQVcsRUFBRTtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZW5hdi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcbn1cblxuLyogI21hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTI7XG59ICovXG4uZXhhbXBsZS10b29sYmFyIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4udGJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmFkZC1maWxlcy1idG4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICBcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmFjdGlvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5hY3RpdmUtbGlzdC1pdGVtIHtcbiAgICBjb2xvcjogIzNGNTFCNSAhaW1wb3J0YW50OyAvKiBOb3RlOiBZb3UgY291bGQgYWxzbyB1c2UgYSBjdXN0b20gdGhlbWUgKi9cbiAgfVxuXG4gIFxuI2J0bntcbiAgbWFyZ2luOiAyJSAyJSAyJSAyJTtcbn1cblxuYnV0dG9uLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjptZWRpdW1wdXJwbGU7XG59XG4uaXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW46MSUgMSUgMSUgMSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHsgXG4gIC5oZWFkaW5nLWxlZnQgeyBsZWZ0OiAtMC41JTsgfVxufVxuXG4jcHJvZmlsZXtcbiAgd2lkdGg6MjAwcHg7XG59XG5cbmJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-progress-bar *ngIf=\"!loading\" mode=\"determinate\" value=\"100\"></mat-progress-bar>\n<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar> -->\n<mat-toolbar id=\"mainToolbar\" class=\"mat-elevation-z6 tbar\" color=\"primary\">\n  <mat-icon (click)=\"onToolbarMenuToggle()\" id=\"toolbarMenu\">menu</mat-icon>\n  <h4 style=\"margin-left:1%\"> Auto Dialer </h4>\n  <span class=\"toolbar-spacer\"></span>\n\n  <mat-icon  class=\"toolbar-icon\" matBadge=\"5\" matBadgePosition=\"after\" matBadgeColor=\"warn\" style=\"margin:1%\"> email</mat-icon>\n  <mat-icon [matMenuTriggerFor]=\"notification\" class=\"toolbar-icon\" matBadge=\"12\" matBadgePosition=\"after\" matBadgeColor=\"accent\" style=\"margin:1%\">notifications</mat-icon>\n\n  <mat-icon class=\"toolbar-icon\" matBadge=\"3\" matBadgePosition=\"after\" matBadgeColor=\"warn\" style=\"margin:1%\">flag</mat-icon>\n \n  <img  [matMenuTriggerFor]=\"menu\" src=\"../../assets/men.jpg\" style=\"width:40px; height:40px;border-radius: 50%;margin:1%\">\n\n  <mat-icon  class=\"toolbar-icon\" >more_vert</mat-icon>\n\n    <mat-menu id=\"notification\" #notification=\"matMenu\" style=\"max-height:500px;\">\n    <img src=\"../../assets/men.jpg\" style=\"width:50px;height:50px; border-radius: 50%\"> Luv want to be friend with you.   \n    </mat-menu>  \n\n\n  \n  <mat-menu #menu=\"matMenu\">\n    <button id=\"profile\" mat-menu-item>\n        <mat-icon>person</mat-icon>\n      <span>My Profile</span>\n    </button>\n    \n    <button id=\"profile\" mat-menu-item >\n        <mat-icon>feedback</mat-icon>\n      <span>Feedback</span>\n    </button>\n    <button id=\"profile\" mat-menu-item >\n        <mat-icon> live_help</mat-icon>\n      <span>Help</span>\n    </button>\n    <button id=\"profile\" mat-menu-item >\n        <mat-icon>settings</mat-icon>\n      <span>Settings</span>\n    </button>\n    <button id=\"profile\" mat-menu-item (click)=\"logOut()\">\n      <!-- <mat-icon>exit_to_app</mat-icon> -->\n      <mat-icon>power_settings_new</mat-icon>\n      <span>Log Out</span>\n    </button>\n\n  </mat-menu>\n \n</mat-toolbar>\n\n<mat-sidenav-container class=\"md-elevation-z15\" id=\"sidenavContainer\" fullscreen>\n\n  <mat-sidenav mode=\"side\" #sidenav id=\"sidenav\"  [class.menu-open]=\"isMenuOpen\" [class.menu-close]=\"!isMenuOpen\" opened>\n\n    <mat-list id=\"menus\">\n      <mat-card>\n        <mat-card-header>\n          <div mat-card-avatar class=\"avatar\"></div>\n\n          <mat-card-title>{{userName}}</mat-card-title>\n          <mat-card-subtitle>Admin</mat-card-subtitle>\n        </mat-card-header>\n      </mat-card>\n      <mat-list-item>\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/adminDashboard']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>dashboard</mat-icon>\n          Dashboard\n        </button>\n      </mat-list-item>\n\n      <mat-list-item  >\n      <button class=\"menu-item\" mat-flat-button  id=\"btn\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n        <mat-icon>trending_up</mat-icon>\n        Statistics\n      </button>\n    </mat-list-item>\n    \n\n      <mat-list-item >\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/campaign']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>view_list</mat-icon>\n          <!-- <a [routerLink]=\"['/employee']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\n                <span>Add Employee</span>\n            </a> -->\n          View Campaign\n        </button>\n      </mat-list-item>\n\n      <mat-list-item >\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/addCustomer']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>person_add</mat-icon>\n          <!-- <a [routerLink]=\"['/employee']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\n                <span>Add Employee</span>\n            </a> -->\n          Add Customer\n        </button>\n      </mat-list-item>\n      \n      <mat-list-item >\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/addEmployee']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>person_add</mat-icon>\n          <!-- <a [routerLink]=\"['/employee']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\n                <span>Add Employee</span>\n            </a> -->\n          On Board Employee\n        </button>\n      </mat-list-item>\n\n      <mat-list-item >\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>group</mat-icon>\n          View Employee\n        </button>\n      </mat-list-item>\n\n      <mat-list-item >\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/customer']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>group</mat-icon>\n          View Customer\n        </button>\n      </mat-list-item>\n\n      <mat-list-item >\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/callInfo']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon> call</mat-icon>\n          View Calls Details\n        </button>\n      </mat-list-item>\n\n      <mat-list-item >\n          <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/AgentAssignment']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n            <mat-icon>assignment</mat-icon>\n            Agent Assignment\n          </button>\n        </mat-list-item>\n\n        <mat-list-item >\n          <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/agentfeedback']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n            <mat-icon> call</mat-icon>\n            Call By Status\n          </button>\n        </mat-list-item>\n      <!-- <mat-list-item>\n        <button class=\"menu-item\" mat-flat-button>\n          <mat-icon>group</mat-icon>\n          Agents\n        </button>\n      </mat-list-item> -->\n\n      <mat-list-item routerLinkActive=\"active-list-item\">\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/demoRoute']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n          <mat-icon>work</mat-icon>\n          Project\n        </button>\n      </mat-list-item>\n\n      <mat-list-item routerLinkActive=\"active-list-item\" id=\"btn\">\n        <button class=\"menu-item\" mat-flat-button>\n          <mat-icon>settings_application</mat-icon>\n          Settings\n        </button>\n      </mat-list-item>\n\n    </mat-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content [ngStyle]=\"{ 'margin-left.px': contentMargin }\">\n     \n\n   <!--     <mat-progress-bar mode=\"determinate\" [value]=\"progress\"></mat-progress-bar> -->\n  \n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(toastrService, _router, service) {
        // this.showLoadingindicator = true;
        // this._router.events.subscribe((routerEvent:Event )=>{
        //     if(routerEvent instanceof NavigationStart){
        //         this.showLoadingindicator = true;
        var _this = this;
        this.toastrService = toastrService;
        this._router = _router;
        this.service = service;
        this.progress = 10;
        this.loading = false;
        this.isMenuOpen = true;
        this.contentMargin = 240;
        //     }
        //     if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        //         setTimeout( () => { this.showLoadingindicator = false; }, 3000 );
        //     }
        // })
        //second loading
        this._router.events.subscribe(function (event) {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]: {
                    _this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]: {
                    setTimeout(function () {
                        _this.loading = false;
                    }, 2000);
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.userName = this.service.getUserName();
        console.log(this.userName);
    };
    LayoutComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LayoutComponent.prototype.onToolbarMenuToggle = function () {
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
    LayoutComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.showToaster();
        this._router.navigate(['/login']);
    };
    LayoutComponent.prototype.showToaster = function () {
        this.toastrService.success('LogOut Successful');
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/nav/nav.component */ "./src/app/layout/component/nav/nav.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");











// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map