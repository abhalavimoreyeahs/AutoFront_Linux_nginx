(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agentFeedbackForm-agentfeedback-module"],{

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AgentFeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFeedbackRoutingModule", function() { return AgentFeedbackRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agentfeedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agentfeedback.component */ "./src/app/agent/agentFeedbackForm/agentfeedback.component.ts");




var routes = [
    {
        path: '',
        component: _agentfeedback_component__WEBPACK_IMPORTED_MODULE_3__["AgentFeedbackComponent"]
    }
];
var AgentFeedbackRoutingModule = /** @class */ (function () {
    function AgentFeedbackRoutingModule() {
    }
    AgentFeedbackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AgentFeedbackRoutingModule);
    return AgentFeedbackRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  .example-form {\r\n    min-width: 250px;\r\n    max-width: 100%;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .center{\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .mat-card{\r\n    width:60%;\r\n  }\r\n  \r\n  .form-division{\r\n    margin:\"5% 5% 0% 5%\"\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnRGZWVkYmFja0Zvcm0vYWdlbnRmZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9hZ2VudEZlZWRiYWNrRm9ybS9hZ2VudGZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJke1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1kaXZpc2lvbntcclxuICAgIG1hcmdpbjpcIjUlIDUlIDAlIDUlXCJcclxuICB9XHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"center\">\r\n\r\n<mat-card class=\"mat-card md-elevation-z5\">\r\n    <div class=\"form-division\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\" >\r\n    <mat-card-header style=\"display: inline;padding:2%\">\r\n      <mat-card-title><h3 style=\"color:primary;text-align:center\">Feedback</h3></mat-card-title>\r\n      <!-- <mat-divider></mat-divider> -->\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n       \r\n        <!-- <form class=\"example-form\"> -->\r\n  \r\n          <h4>Title</h4>\r\n            <mat-form-field class=\"example-full-width\" [color]=\"primary\" appearance=\"outline\">\r\n              <input matInput placeholder=\"Favorite food\" formControlName=\"title\" style=\"font-size: 1.2rem;\">\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"!formGroup.controls['title'].valid && formGroup.controls['title'].touched\">\r\n                {{ getErrorTitle() }}\r\n              </mat-error>\r\n            <h4>Comment</h4>\r\n            <mat-form-field class=\"example-full-width\"  [color]=\"primary\" appearance=\"outline\">\r\n              <textarea matInput placeholder=\"Leave a comment\"  formControlName=\"note\" style=\"height:200px;font-size: 1rem\" ></textarea>\r\n            </mat-form-field>\r\n            <mat-error *ngIf=\"!formGroup.controls['note'].valid && formGroup.controls['note'].touched\">\r\n                {{ getErrorNote() }}\r\n              </mat-error>\r\n         \r\n     \r\n   \r\n    </mat-card-content>\r\n    <mat-card-actions style=\"text-align:center\">\r\n      <!-- <button mat-raised-button  color=\"primary\" style=\"padding:0% 7%\">Submit</button> -->\r\n      <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\">Submit Form</button>\r\n    </mat-card-actions>\r\n  </form>\r\n</div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFeedbackComponent", function() { return AgentFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");






var AgentFeedbackComponent = /** @class */ (function () {
    function AgentFeedbackComponent(toastrService, formBuilder, service, userService) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.userService = userService;
    }
    AgentFeedbackComponent.prototype.ngOnInit = function () {
        //   this.service.getAgentFeedbackData().subscribe((data)=>{
        //       console.log(data);
        //       this.AgentData = data['message'];
        //       this.dataSource = new MatTableDataSource(this.AgentData);
        //       Assign the paginator *after* dataSource is set
        //       this.dataSource.paginator = this.paginator;
        //       this.dataSource.sort = this.sort;
        //   })
        this.formGroup = this.formBuilder.group({
            'title': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
            'note': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
        });
    };
    AgentFeedbackComponent.prototype.getErrorTitle = function () {
        return this.formGroup.get('title').hasError('required') ? 'Field is required' : this.formGroup.get('title').hasError('minlength') ? 'title must be at least 4 characters' : '';
    };
    // getErrorNote() {
    //   return this.formGroup.get('note').hasError('required') ? 'Field is required' : this.formGroup.get('note').hasError('minLength')? 'Its too short': ''; 
    // }
    AgentFeedbackComponent.prototype.getErrorNote = function () {
        return this.formGroup.get('note').hasError('required') ? 'Field is required' : this.formGroup.get('note').hasError('minlength') ? 'title must be at least 4 characters' : '';
    };
    //notification
    AgentFeedbackComponent.prototype.showToaster = function () {
        this.toastrService.success('Data Saved Successfully');
    };
    AgentFeedbackComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed to save Data');
    };
    AgentFeedbackComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    AgentFeedbackComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('warning : Duplicate Data');
    };
    AgentFeedbackComponent.prototype.onSubmit = function () {
        //this.submitted = true;
        var _this = this;
        // stop here if form is invalid
        if (this.formGroup.invalid) {
            this.getErrorTitle();
            this.getErrorNote();
            return;
        }
        this.userService.employeeFeedback(this.formGroup.value).subscribe(function (data) {
            debugger;
            console.log(data);
            _this.showToaster();
        }, function (err) {
            debugger;
            console.log(err);
        });
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value))
    };
    AgentFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agentfeedback',
            template: __webpack_require__(/*! ./agentfeedback.component.html */ "./src/app/agent/agentFeedbackForm/agentfeedback.component.html"),
            styles: [__webpack_require__(/*! ./agentfeedback.component.css */ "./src/app/agent/agentFeedbackForm/agentfeedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_agent__WEBPACK_IMPORTED_MODULE_2__["AgentService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AgentFeedbackComponent);
    return AgentFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback.module.ts ***!
  \*****************************************************************/
/*! exports provided: AgentFeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFeedbackModule", function() { return AgentFeedbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agentfeedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agentfeedback-routing.module */ "./src/app/agent/agentFeedbackForm/agentfeedback-routing.module.ts");
/* harmony import */ var _agentfeedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agentfeedback.component */ "./src/app/agent/agentFeedbackForm/agentfeedback.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var AgentFeedbackModule = /** @class */ (function () {
    function AgentFeedbackModule() {
    }
    AgentFeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _agentfeedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgentFeedbackRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            entryComponents: [
                _agentfeedback_component__WEBPACK_IMPORTED_MODULE_4__["AgentFeedbackComponent"]
            ],
            declarations: [_agentfeedback_component__WEBPACK_IMPORTED_MODULE_4__["AgentFeedbackComponent"]]
        })
    ], AgentFeedbackModule);
    return AgentFeedbackModule;
}());



/***/ })

}]);
//# sourceMappingURL=agentFeedbackForm-agentfeedback-module.js.map