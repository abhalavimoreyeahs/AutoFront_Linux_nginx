(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header{\n background-color: #673ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXJ7XG4gYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" style=\"display: flex; align-items: center;justify-content: center;\">\n    <mat-card class=\"example-card\">\n        <mat-card-header style=\"display: flex; align-items: center;justify-content: center;\">\n          <mat-card-title><h2><b>Login</b></h2></mat-card-title>\n        </mat-card-header>\n        <mat-card-content style=\"margin-left: 150px;\">\n            <img style=\"width:100px;height:100px;margin-top:10%;margin-left:10%\" src=\"../../assets/user-login-icon.png\"/>\n          <form class=\"example-form\">\n            <table class=\"example-full-width\" cellspacing=\"0\">\n              <tr>\n                <td>\n                  <mat-form-field class=\"example-full-width\" style=\"margin-top:15%\">\n                  <input matInput  placeholder=\"email\" [(ngModel)]=\"loginData.email\"  name=\"email\" autocomplete=\"off\" required>\n                  </mat-form-field>\n                </td>\n              </tr>\n              <tr>\n              <td><mat-form-field class=\"example-full-width\">\n                <input matInput  placeholder=\"Password\" [(ngModel)]=\"loginData.password\" type=\"password\"  name=\"password\" autocomplete=\"off\" required>\n              </mat-form-field></td>\n            </tr></table>\n          </form>\n          <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\" style=\"display: none;   width: 10px; height: 100px;\"></mat-spinner>\n          <h5 *ngIf=\"loginFalse\"> <span style=\"color:red\">The user name or password is required </span></h5>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button (click)=\"login()\" color=\"primary\" style=\"margin-left: 185px; padding:0% 7%\">Login</button>\n        </mat-card-actions>\n      </mat-card>\n\n</div> -->\n\n\n\n\n\n       <div layout=\"row\" layout-align=\"center center\">\n        <mat-card class=\"example-card\" style=\" max-width: 500px;margin-left: 700px; margin-top: 150px;\">\n            <mat-card-header style=\"margin-left: 160px;\">\n              <mat-card-title><h2><b>Login</b></h2></mat-card-title>\n            </mat-card-header>\n            <mat-card-content style=\"margin-left: 150px;\">\n                <img style=\"width:100px;height:100px;margin-top:10%;margin-left:10%\" src=\"../../assets/user-login-icon.png\"/>\n              <form class=\"example-form\">\n                <table class=\"example-full-width\" cellspacing=\"0\">\n                  <tr>\n                    <td>\n                      <mat-form-field class=\"example-full-width\" style=\"margin-top:15%\">\n                      <input matInput  placeholder=\"email\" [(ngModel)]=\"loginData.email\"  name=\"email\" autocomplete=\"off\" required>\n                      </mat-form-field>\n                    </td>\n                  </tr>\n                  <tr>\n                  <td><mat-form-field class=\"example-full-width\">\n                    <input matInput  placeholder=\"Password\" [(ngModel)]=\"loginData.password\" type=\"password\"  name=\"password\" autocomplete=\"off\" required>\n                  </mat-form-field></td>\n                </tr></table>\n              </form>\n              <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\" style=\"display: none;   width: 10px; height: 100px;\"></mat-spinner>\n              <h5 *ngIf=\"loginFalse\"> <span style=\"color:red\">The user name or password is required </span></h5>\n            </mat-card-content>\n            <mat-card-actions>\n              <button mat-raised-button (click)=\"login()\" color=\"primary\" style=\"margin-left: 185px; padding:0% 7%\">Login</button>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/my-dialog/my-dialog.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




//import { MyAlertDialogComponent } from '../alert-dialog/alert-dialog.component';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastrService, snackBar, dialog, router, service) {
        this.toastrService = toastrService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.service = service;
        this.payload = {};
        this.loginData = {
            email: null,
            password: null
        };
        this.loginFalse = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginData.email !== null && this.loginData.password !== null && this.loginData.email !== undefined && this.loginData.password !== undefined
            && this.loginData.email !== '' && this.loginData.password !== '') {
            this.service.login(this.loginData).subscribe(function (data) {
                console.log(data);
                if (data.success == true) {
                    localStorage.setItem('token', data.apiKey);
                    localStorage.setItem('role', data.user.users.role);
                    localStorage.setItem('username', data.user.users.firstName + " " + data.user.users.lastName);
                    _this.Role = data.user.users.role;
                    _this.UserName = data.user.users.firstName + ' ' + data.user.users.lastName;
                    _this.service.setUserName(_this.UserName);
                    _this.showToaster();
                    if (_this.Role === 1) {
                        _this.router.navigate(["/admin/"]);
                    }
                    else if (_this.Role === 2) {
                        _this.router.navigate(["/manager/"]);
                    }
                    else if (_this.Role === 3) {
                        if (data['user']['users']) {
                            localStorage.setItem('PlivoUserId', data['user']['users']['plivoagentusername']);
                            localStorage.setItem('PlivoPassword', data['user']['users']['plivoagentPassword']);
                        }
                        _this.router.navigate(["/agent"]);
                    }
                }
                else if (data.success == false) {
                    //  alert('sth went wrong');
                    _this.payload = {
                        message: 'Login Error',
                        error: data.error.errors[0].message
                    };
                    _this.openDialog(_this.payload);
                    _this.loginData = {
                        email: null,
                        password: null
                    };
                }
            });
        }
        else {
            //  alert('else fill pass or email');
            this.loginFalse = true;
        }
    };
    LoginComponent.prototype.openDialog = function (payload) {
        console.log(payload);
        var dialogRef = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MyDialogComponent"], {
            width: '550px',
            data: { message: payload.message, error: payload.error },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    LoginComponent.prototype.openSnackBar = function (message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['warning']
        });
    };
    //notification
    LoginComponent.prototype.showToaster = function () {
        this.toastrService.success('Login Successful');
    };
    LoginComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Login Failed');
    };
    LoginComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    LoginComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('this is warning');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _my_dialog_my_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../my-dialog/my-dialog.module */ "./src/app/my-dialog/my-dialog.module.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/my-dialog/my-dialog.component.ts");







//import { MyAlertDialogModule } from '../alert-dialog/alert-dialog.module'
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _my_dialog_my_dialog_module__WEBPACK_IMPORTED_MODULE_8__["MyDialogModule"],
                //    MyAlertDialogModule,
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]
            ],
            entryComponents: [
                _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__["MyDialogComponent"],
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],] // MyAlertDialogComponent
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-dialog/my-dialog.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWRpYWxvZy9teS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-dialog/my-dialog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{data.message}}</h2>\n<mat-dialog-content>\n  <p style=\"color:red\">{{data.error}}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button matDialogClose=\"cancel\" color=\"primary\">Cancel</button>\n  <button mat-button matDialogClose=\"confirm\" color=\"primary\" (click)=\"ok()\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/my-dialog/my-dialog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-dialog/my-dialog.component.ts ***!
  \**************************************************/
/*! exports provided: MyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponent", function() { return MyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MyDialogComponent.prototype.ngOnInit = function () {
    };
    MyDialogComponent.prototype.cancel = function () {
    };
    MyDialogComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    MyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/app/my-dialog/my-dialog.component.html"),
            styles: [__webpack_require__(/*! ./my-dialog.component.css */ "./src/app/my-dialog/my-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/my-dialog/my-dialog.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-dialog/my-dialog.module.ts ***!
  \***********************************************/
/*! exports provided: MyDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogModule", function() { return MyDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-dialog.component */ "./src/app/my-dialog/my-dialog.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);






//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var MyDialogModule = /** @class */ (function () {
    function MyDialogModule() {
    }
    MyDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ],
            declarations: [_my_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MyDialogComponent"]]
        })
    ], MyDialogModule);
    return MyDialogModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map