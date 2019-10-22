(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./src/app/agent/setting/setting-routing.ts":
/*!**************************************************!*\
  !*** ./src/app/agent/setting/setting-routing.ts ***!
  \**************************************************/
/*! exports provided: SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.component */ "./src/app/agent/setting/setting.component.ts");




var routes = [
    {
        path: '',
        component: _setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"],
    }
];
var SettingRoutingModule = /** @class */ (function () {
    function SettingRoutingModule() {
    }
    SettingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingRoutingModule);
    return SettingRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/setting/setting.component.css":
/*!*****************************************************!*\
  !*** ./src/app/agent/setting/setting.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  background-image: url('AutoDialDesk.jpg');\n  background-repeat:no-repeat;\n  background-size: 100%;\n  background-position-x: 100%;\n  background-position-y: 100%;\n  height:100%;\n  opacity: 0.9;\n}\nimg.bg {\n  min-height:100%;\n  min-width: 100%;\n  height: auto;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUQ7RUFDekQsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztBQUNUIiwiZmlsZSI6InNyYy9hcHAvYWdlbnQvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9BdXRvRGlhbERlc2suanBnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbmltZy5iZyB7XG4gIG1pbi1oZWlnaHQ6MTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/agent/setting/setting.component.html":
/*!******************************************************!*\
  !*** ./src/app/agent/setting/setting.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n  \n  <script type=\"text/javascript\" src=\"https://cdn.plivo.com/sdk/browser/v2/plivo.min.js\"></script>\n \n</head>\n<body >\n\n<img src=\"../../../assets/Moreyeahs (2).png\" height=\"100px\" />\n<form action=\"javascript:makeCall()\">\n  <h2>Enter the phone number to call </h2><input type=\"text\" name=\"number\" [(ngModel)]=\"Mobile.number\" id=\"number\"/>\n  <input type=\"submit\" value=\"Call\" (click)=\"makeCall()\"/>\n</form>\n\n<button (click)=\"OnCallReceive()\">Accept Call </button>\n<button (click)=\"OnCallReject()\">Reject Call </button>\n\n<button (click)=\"login(shubham125559174721784, 12345)\">Login plivo call</button>\n<button (click)=\"logOut()\">LogOut</button>\n\n<button (click)=\"HangUp()\">Hangup</button>\n\n\n</body>\n"

/***/ }),

/***/ "./src/app/agent/setting/setting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/agent/setting/setting.component.ts ***!
  \****************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! plivo-browser-sdk */ "./node_modules/plivo-browser-sdk/dist/plivo.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_3__);



//Plivo

var SettingComponent = /** @class */ (function () {
    function SettingComponent(http) {
        this.http = http;
        this.Mobile = {};
        this.userName = 'shubham125559174721784';
        this.password = '';
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.initPhone('shubham125559174721784', '12345');
        this.login("shubham125559174721784", "12345");
    };
    // on reloading logout agnet from plivo
    SettingComponent.prototype.unloadHandler = function (event) {
        this.plivoWebSdk.client && this.plivoWebSdk.client.logout();
        console.log("Processing beforeunload...");
        // Do more processing...
        event.returnValue = false;
    };
    //initialize Plivo
    SettingComponent.prototype.initPhone = function (username, password) {
        var options = {
            "debug": "DEBUG",
            "permOnClick": true,
            "audioConstraints": { "optional": [{ "googAutoGainControl": false }, { "googEchoCancellation": false }] },
            "enableTracking": true
        };
        this.plivoWebSdk = new plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_3___default.a(options);
        // this.plivoWebSdk.client.on('onWebrtcNotSupported', this.onWebrtcNotSupported);
        this.plivoWebSdk.client.on('onLogin', this.onLogin); // msg not showing //this function gets called when user successfully login/ login failed
        //  this.plivoWebSdk.client.on('onLogout', this.onLogout); // plivo method not working
        //  this.plivoWebSdk.client.on('onLoginFailed', this.onLoginFailed);
        this.plivoWebSdk.client.on('onCallRemoteRinging', this.onCallRemoteRinging);
        this.plivoWebSdk.client.on('onIncomingCallCanceled', this.onIncomingCallCanceled);
        //  this.plivoWebSdk.client.on('onCallFailed', this.onCallFailed);
        this.plivoWebSdk.client.on('onCallAnswered', this.onCallAnswered); // req send to server 
        this.plivoWebSdk.client.on('onMediaConnected', this.onMediaConnected);
        this.plivoWebSdk.client.on('onCallTerminated', this.onCallTerminated);
        this.plivoWebSdk.client.on('onCalling', this.onCalling);
        this.plivoWebSdk.client.on('onIncomingCall', this.onIncomingCall); // when incomming call trigger this function is called
        this.plivoWebSdk.client.on('onMediaPermission', this.onMediaPermission);
        //  this.plivoWebSdk.client.on('mediaMetrics', this.mediaMetrics);
        //  this.plivoWebSdk.client.on('audioDeviceChange',this.audioDeviceChange);
        // this.plivoWebSdk.client.on('onMediaConnected',this.onMediaConnected);
        this.plivoWebSdk.client.setRingTone(true);
        this.plivoWebSdk.client.setRingToneBack(true);
        console.log('initPhone ready!');
    };
    SettingComponent.prototype.login = function (username, password) {
        // username = 'shubham125559174721784';
        // password = ' 12345';
        if (username && password) {
            var data = this.plivoWebSdk.client.login(username, password);
            console.log('login:', data);
            // $('#sipUserName').html('sip:'+username+'@'+ this.plivoWebSdk.client.phone.configuration.hostport_params);
            // document.querySelector('title').innerHTML=username;
        }
        else {
            console.error('username/password missing!');
        }
    };
    SettingComponent.prototype.onLogin = function () {
        alert('successfully login');
    };
    SettingComponent.prototype.logOut = function () {
        alert('LogOut');
        this.plivoWebSdk.client.logOut();
    };
    // onLogout(){
    //   alert('successfully log Out');
    // }
    SettingComponent.prototype.makeCall = function () {
        //var dest = document.getElementById('number')
        alert(this.Mobile['number']);
        var dest = this.Mobile['number'];
        console.log(dest);
        var extraHeaders = { 'X-PH-Test1': 'test1', 'X-PH-Test2': 'test2' };
        this.plivoWebSdk.client.call(dest, extraHeaders);
    };
    SettingComponent.prototype.OnCallReceive = function () {
        alert('receiving call');
        this.plivoWebSdk.client.answer();
    };
    SettingComponent.prototype.OnCallReject = function () {
        alert(' call Reject');
        this.plivoWebSdk.client.reject();
    };
    SettingComponent.prototype.onIncomingCall = function (callerName, extraHeaders) {
        // var data =  this.plivoWebSdk.client.onIncomingCall();
        // alert('auto pickup call ');  
        console.log(callerName, extraHeaders);
    };
    SettingComponent.prototype.HangUp = function () {
        if (this.plivoWebSdk.client.callSession) {
            this.plivoWebSdk.client.hangup();
        }
        else {
            // callOff();
            alert('no call to HangUp');
        }
    };
    SettingComponent.prototype.onIncomingCallCanceled = function () {
        alert('call cancellec');
        console.log('call cancelled ...');
    };
    // onCallFailed(){
    //   alert('call Failed function');
    //   console.log('call failed function');
    // }
    SettingComponent.prototype.onCallTerminated = function () {
        alert('call terminated function ');
        console.log('call terminated function ');
    };
    SettingComponent.prototype.onCallAnswered = function () {
        // alert('call req to server');
        console.log('call req to server');
    };
    SettingComponent.prototype.onCalling = function () {
        alert('on calling');
        console.log('on calling func');
    };
    SettingComponent.prototype.onCallRemoteRinging = function () {
        alert('remote ringing');
        console.log('remote ringing');
    };
    SettingComponent.prototype.onMediaConnected = function () {
        console.log('media connected');
    };
    SettingComponent.prototype.onMediaPermission = function () {
        console.log('media permission');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SettingComponent.prototype, "unloadHandler", null);
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/agent/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/agent/setting/setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/agent/setting/setting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/agent/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _setting_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-routing */ "./src/app/agent/setting/setting-routing.ts");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting.component */ "./src/app/agent/setting/setting.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _setting_routing__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"]
            ],
            declarations: [_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"]]
        })
    ], SettingModule);
    return SettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=setting-setting-module.js.map