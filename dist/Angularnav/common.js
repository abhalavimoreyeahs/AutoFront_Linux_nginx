(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/interval.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].interval = rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"];
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./src/app/agent/call-dialog/call-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/agent/call-dialog/call-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2NhbGwtZGlhbG9nL2NhbGwtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/agent/call-dialog/call-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/agent/call-dialog/call-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Caller Details</h2>\n<mat-dialog-content>\n  <!-- <p style=\"color:red\">{{data.message}}</p>\n  <p style=\"color:red\">{{data.name}}</p>\n  <p style=\"color:red\">{{data.mobile}}</p> -->\n  <!-- <div>\n      <img src=\"../../../assets/men.jpg\" style=\"width:100px;height: 100px;\">\n      <p>  {{data.name}} </p>\n      <p>   {{data.mobile}}</p>\n     \n  </div> -->\n  <div class=\"container-fluid\">\n \n      <div class=\"row\">\n        <div class=\"col-sm-4\">   <img src=\"../../../assets/no-photo.png\" style=\"width:100px;height: 100px;\"></div>\n        <div class=\"col-sm-8\">\n            <h3>  {{data.name | titlecase}} </h3>\n            <h3>   {{data.mobile}}</h3>\n            <h3></h3>\n            <h3></h3>\n        </div>\n      </div>\n    </div>\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n        <div class=\"row\" style=\"width:100%;height: 60px; margin-top: 5%;\">\n          <div class=\"col-sm-6\" style=\"width:50%;height:100%\">   \n        <button mat-button matDialogClose=\"cancel\" color=\"primary\" style=\"background-color: rgb(231, 71, 71);height:10%;width:100%;height:80%; color: white\">Cancel</button>\n          </div>\n          <div class=\"col-sm-6\" style=\"width:50%;height:100%\">\n              <button mat-button matDialogClose=\"confirm\" color=\"primary\" (click)=\"ok()\" style=\"background-color: rgb(66, 165, 66);height:80%;width:100%; color: white\">Call</button>\n          </div>\n        </div>\n  <!-- <button mat-button matDialogClose=\"cancel\" color=\"primary\" style=\"background-color: red;\">Cancel</button>\n  <button mat-button matDialogClose=\"confirm\" color=\"primary\" (click)=\"ok()\" style=\"background-color: rgb(29, 196, 29);\">Call</button> -->\n</mat-dialog-actions>\n\n<!-- <mat-card class=\"example-card\">\n    <mat-card-header>\n  \n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n   \n    </mat-card-content>\n    <mat-card-actions>\n      <div class=\"container\">\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n      </div>\n    </mat-card-actions>\n  </mat-card> -->"

/***/ }),

/***/ "./src/app/agent/call-dialog/call-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/agent/call-dialog/call-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: CallDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallDialogComponent", function() { return CallDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CallDialogComponent = /** @class */ (function () {
    function CallDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CallDialogComponent.prototype.ngOnInit = function () {
    };
    CallDialogComponent.prototype.cancel = function () {
    };
    CallDialogComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    CallDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-call-dialog',
            template: __webpack_require__(/*! ./call-dialog.component.html */ "./src/app/agent/call-dialog/call-dialog.component.html"),
            styles: [__webpack_require__(/*! ./call-dialog.component.css */ "./src/app/agent/call-dialog/call-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CallDialogComponent);
    return CallDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/admin.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/admin.service.ts ***!
  \**************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
    }
    AdminService.prototype.login = function (data) {
        return this.http.post(this.apiURL + '/v0.1/login', data);
    };
    AdminService.prototype.excelUploading = function (file) {
        return this.http.post(this.apiURL + '/v0.1/excelUpload', file);
    };
    AdminService.prototype.createCampaign = function (data) {
        return this.http.post(this.apiURL + '/v0.1/createCamping', data);
    };
    AdminService.prototype.getAllCampaign = function () {
        return this.http.get(this.apiURL + '/v0.1/getAllCamping');
    };
    AdminService.prototype.getAllManagers = function () {
        return this.http.get(this.apiURL + '/v0.1/RequestMangerDetails');
    };
    AdminService.prototype.getAllAgents = function () {
        return this.http.get(this.apiURL + '/v0.1/getAllAgents');
    };
    AdminService.prototype.saveEmployee = function (data) {
        return this.http.post(this.apiURL + '/v0.1/auth', data);
    };
    AdminService.prototype.editCampaign = function (data) {
        return this.http.put(this.apiURL + '/v0.1/editCamping', data);
    };
    AdminService.prototype.deleteCampaign = function (camName) {
        return this.http.delete(this.apiURL + ("/v0.1/deleteCamping?campingname=" + camName['campingname']));
    };
    AdminService.prototype.getAllCustomer = function () {
        return this.http.get(this.apiURL + '/v0.1/RequestCustomerDetails');
    };
    AdminService.prototype.setEditId = function (id) {
        this.editId = id;
    };
    AdminService.prototype.getEditId = function () {
        return this.editId;
    };
    AdminService.prototype.getSingleCampaign = function (campaignId) {
        console.log('body data:', campaignId);
        return this.http.post(this.apiURL + '/v0.1/getSingleCamping', campaignId);
    };
    AdminService.prototype.getAgentDashboardDetails = function () {
        return this.http.get(this.apiURL + '/v0.1/DashboardDataForAllAgent');
    };
    AdminService.prototype.getParentAndChildScheduleCall = function () {
        return this.http.get(this.apiURL + '/v0.1/getParentAndChildScheduleCalls?recordid=5d4bf6f9698dc220246def94');
    };
    AdminService.prototype.getAdminDashboardCallInfo = function (data) {
        return this.http.post(this.apiURL + '/v0.1/callStatus', data);
    };
    AdminService.prototype.getManagerDetails = function () {
        return this.http.get(this.apiURL + '/v0.1/getAllManagerDetails');
    };
    AdminService.prototype.getSingleManagerDetails = function (managerId) {
        return this.http.get(this.apiURL + '/v0.1/getSingleManagerDetails?managerId=' + managerId);
    };
    AdminService.prototype.getAvailabelAgent = function () {
        return this.http.get(this.apiURL + '/v0.1/getAvailableAgent');
    };
    AdminService.prototype.assignAgentToManager = function (data) {
        return this.http.post(this.apiURL + '/v0.1/assignAgentToManager', data);
    };
    AdminService.prototype.getAllAssignedAgent = function () {
        return this.http.get(this.apiURL + '/v0.1/getAllAssignedAgent');
    };
    AdminService.prototype.getCallbackScheduledByAgent = function () {
        return this.http.get(this.apiURL + '/v0.1/getAllScheduledCallback');
    };
    //dashboard apis
    AdminService.prototype.getAllAgnetStatus = function () {
        return this.http.get(this.apiURL + '/v0.1/AgentCampaignStatus');
    };
    AdminService.prototype.getAllCampaignStatus = function () {
        return this.http.get(this.apiURL + '/v0.1/GetCampaignDetails');
    };
    AdminService.prototype.getAllCallHangupInfo = function () {
        return this.http.get(this.apiURL + '/v0.1/getCallHangupInfo');
    };
    //get running Campaing Details
    AdminService.prototype.getRunningCampaignDetails = function () {
        return this.http.get(this.apiURL + '/v0.1/getRunningCampaignDetails');
    };
    AdminService.prototype.getTodaysCallDetails = function () {
        return this.http.get(this.apiURL + '/v0.1/getTodayCallDetails');
    };
    AdminService.prototype.getUsers = function () {
        return this.data = [
            { name: 'Avinash', email: "a@gmail.com", phone: '46415454' },
            { name: 'Shyam', email: "shyam@gmail.com", phone: '46415454' },
            { name: 'Rohit', email: "rohit@gmail.com", phone: '46415454' },
            { name: 'David', email: "david@gmail.com", phone: '46415454' },
            { name: 'Pyush', email: "pyush@gmail.com", phone: '46415454' },
            { name: 'Avinash1', email: "a@gmail.com", phone: '46415454' },
            { name: 'Shyam2', email: "shyam@gmail.com", phone: '46415454' },
            { name: 'Rohit3', email: "rohit@gmail.com", phone: '46415454' },
            { name: 'David4', email: "david@gmail.com", phone: '46415454' },
            { name: 'Avinash5', email: "a@gmail.com", phone: '46415454' },
            { name: 'Shyam6', email: "shyam@gmail.com", phone: '46415454' },
            { name: 'Rohit7', email: "rohit@gmail.com", phone: '46415454' },
            { name: 'David8', email: "david@gmail.com", phone: '46415454' },
        ];
    };
    AdminService.prototype.getDummyData = function () {
        return this.data = [
            { Name: 'Avinash', Age: 23, DOB: '31/05/1996', Mobile: '9479831284', Domicile: 'Rajendra Nager', City: 'Indore' },
            { Name: 'Avinash', Age: 23, DOB: '31/05/1996', Mobile: '9479831284', Domicile: 'Rajendra Nager', City: 'Indore' },
            { Name: 'Avinash', Age: 23, DOB: '31/05/1996', Mobile: '9479831284', Domicile: 'Rajendra Nager', City: 'Indore' },
            { Name: 'Avinash', Age: 23, DOB: '31/05/1996', Mobile: '9479831284', Domicile: 'Rajendra Nager', City: 'Indore' },
        ];
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/shared/services/agent.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/agent.ts ***!
  \******************************************/
/*! exports provided: AgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentService", function() { return AgentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var AgentService = /** @class */ (function () {
    function AgentService(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
    }
    AgentService.prototype.sendAgentStatus = function (data) {
        return this.http.put(this.apiURL + '/v0.1/agentCurrentStatus', data);
    };
    AgentService.prototype.getCallDetails = function (uuid) {
        return this.http.post(this.apiURL + '/v0.1/getInfoaftercallTerminated', uuid);
    };
    AgentService.prototype.sendCustomerFeedback = function (feedback) {
        return this.http.post(this.apiURL + '/v0.1/AgentSubmitFeedback', feedback);
    };
    AgentService.prototype.getScheduledCallForAgent = function (agentId) {
        return this.http.get(this.apiURL + ("/v0.1/getScheduleCallForAgent?agentid=" + agentId['agentid']));
    };
    AgentService.prototype.getMyAllNotes = function () {
        return this.http.get(this.apiURL + '/v0.1/getAgentNotes');
    };
    AgentService.prototype.setAgentStatusTime = function (data) {
        return this.http.post(this.apiURL + '/v0.1/saveAgentStatusTime', data);
    };
    // Agent Dashboard 
    AgentService.prototype.getAgentCallStatus = function (data) {
        return this.http.post(this.apiURL + '/v0.1/getIndividualAgentCallDetails', data);
    };
    AgentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AgentService);
    return AgentService;
}());



/***/ }),

/***/ "./src/app/shared/services/manager.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/manager.service.ts ***!
  \****************************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ManagerService = /** @class */ (function () {
    function ManagerService(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
    }
    ManagerService.prototype.campaignAssignedToManager = function () {
        return this.http.get(this.apiURL + '/v0.1/campingAssignedToManager');
    };
    ManagerService.prototype.getAssaignedAgentToManager = function (data) {
        return this.http.post(this.apiURL + '/v0.1/getAssignedAgent', data);
    };
    ManagerService.prototype.getCampaignDetails = function () {
        debugger;
        return this.http.get(this.apiURL + '/v0.1/getCampingDetails');
    };
    ManagerService.prototype.getAgentStatus = function () {
        return this.http.get(this.apiURL + '/v0.1/getAgentDetails');
    };
    ManagerService.prototype.getAgentFeedbackData = function () {
        return this.http.get(this.apiURL + '/v0.1/getAgentFeedbackData');
    };
    //manager dashboard
    ManagerService.prototype.getCallInfo = function () {
        return this.http.get(this.apiURL + '/v0.1/callInfoTypeForManager');
    };
    ManagerService.prototype.getCallDetailsForBadges = function () {
        return this.http.get(this.apiURL + '/v0.1/getCallDetailsForBadgesManager');
    };
    ManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ManagerService);
    return ManagerService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
    }
    UserService.prototype.login = function (data) {
        return this.http.post(this.apiURL + '/v0.1/login', data);
    };
    UserService.prototype.employeeFeedback = function (data) {
        return this.http.post(this.apiURL + '/v0.1/saveEmployeeFeedback', data);
    };
    UserService.prototype.userloginStatus = function () {
        return this.http.get(this.apiURL + '/v0.1/auth/userLoginStatus');
    };
    UserService.prototype.userLogoutStatus = function () {
        return this.http.get(this.apiURL + '/v0.1/auth/userLogoutStatus');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map