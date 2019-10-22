(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo-module"],{

/***/ "./src/app/layout/demo/demo-routing.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/demo/demo-routing.ts ***!
  \*********************************************/
/*! exports provided: DemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutingModule", function() { return DemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo.component */ "./src/app/layout/demo/demo.component.ts");




var routes = [
    {
        path: '',
        component: _demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"]
    }
];
var DemoRoutingModule = /** @class */ (function () {
    function DemoRoutingModule() {
    }
    DemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DemoRoutingModule);
    return DemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/demo/demo.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/demo/demo.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  td th{\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RlbW8vZGVtby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGVtby9kZW1vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICB0ZCB0aHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/layout/demo/demo.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/demo/demo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n    <h4  style=\"padding-top: 20px; margin-left:20%\"><b>Parent and Child Scheduled Call Details</b></h4>\n    \n  </div>\n  <hr>\n  <div class=\"row\">\n    \n    <!-- <div  class=\"col-6\">\n        <div class=\"form-group\">\n            <label for=\"name\">First Name</label>\n            <input ng-required=\"true\" type=\"text\" class=\"form-control\" id=\"firstname\"  [(ngModel)]=\"people.PeopleFirstName\" placeholder=\"First Name\" >\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Last Name</label>\n            <input  type=\"text\" class=\"form-control\" id=\"lastname\"  [(ngModel)]=\"people.PeopleLastName\" placeholder=\"Last Name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"email\"  [(ngModel)]=\"people.Email\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Password</label>\n            <input type=\"text\" class=\"form-control\" id=\"password\"  [(ngModel)]=\"people.Password\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Mobile</label>\n            <input type=\"text\" class=\"form-control\" id=\"mobile\"  [(ngModel)]=\"people.Mobile\" placeholder=\"Mobile\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\">Status</label>\n            <input  type=\"text\" class=\"form-control\" id=\"status\"  [(ngModel)]=\"people.status\" placeholder=\"Status\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Select State</label>\n          <select id=\"state\" name=\"state\"  class=\"form-control\" [(ngModel)]=\"people.Stateid\"  placeholder=\"Select State\">\n              <option *ngFor=\"let state of stateList\" [ngValue]=\"state.Stateid\">\n                {{ state.StateName }}\n              </option>\n            </select>\n  \n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Select City</label>\n        <select id=\"city\" name=\"city\" class=\"form-control\" [(ngModel)]=\"people.Cityid\">\n            <option *ngFor=\"let city of cityList\" [ngValue]=\"city.Cityid\">\n              {{ city.CityName }}\n            </option>\n          </select>\n    </div>\n       \n    </div>  -->\n  \n  \n    <div  class=\"col-6\" >\n        <div>\n          <h4>First Scheduled Calls (Parent)</h4>\n                <table class=\"table\" style=\"border: 1px solid\">\n                        <thead style=\"height: 10%\">\n                        <tr>\n <th>S.NO</th>\n<th>  _id </th> \n<th>aLegUUID:       </th>        \n<th>isCustomerIntereseted</th> \n<th>descrptionOnCall</th> \n<th>callBackEndTime</th> \n<th>agentid</th> \n<th>customerMobNo</th> \n<th>callbackStatus</th> \n<th>parentid</th> \n<th>createdAt</th> \n<th>updatedAt</th> \n<th>callhangupsource</th> \n<th>durationCallEnd</th> \n<th>durationCallStart </th> \n                          <!-- <th *ngIf=\"isAdminBoolean\">Edit </th>       \n                          <th *ngIf=\"isAdminBoolean\">Delete</th> -->\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor =\"let item of parent; index as row\">\n                          <th scope=\"row\">{{row + 1}}</th>\n                          <!-- <td><img src={{item.productImage}} style=\"width:70px; height:60px\">&nbsp;&nbsp;{{item.name}} </td>\n                          <td>{{item.brand}}</td>\n                          <td>{{item.quantity}}</td>\n                          <td>{{item.price}}</td> -->\n<td> {{item._id}}</td>\n<td>{{item.aLegUUID}}</td>\n<td>{{item.isCustomerIntereseted}}</td>\n<td>{{item.descrptionOnCall}}</td>\n<td>{{item.callBackEndTime}}</td>\n<td>{{item.agentid}}</td>\n<td>{{item.customerMobNo}}</td>\n<td>{{item.callbackStatus}}</td>\n<td>{{item.parentid}}</td>\n<td>{{item.createdAt}}</td>\n<td>{{item.updatedAt}}</td>\n<td>{{item.callhangupsource}}</td>\n<td>{{item.durationCallEnd}}</td>\n<td>{{item.durationCallStart}}</td>\n                          <!-- <td> <button type=\"button\" class=\"btn btn-warning\" *ngIf=\"isAdminBoolean\"  (click)=\"editProduct(item._id)\">Edit</button></td>\n                          <td> <button type=\"button\" class=\"btn btn-danger\"  *ngIf=\"isAdminBoolean\" (click)=\"deleteProduct(item._id)\">Delete</button></td> -->\n                        </tr>\n                        </tbody>\n                      </table>\n        </div>\n        <div>\n          <h4>Child Scheduled calls </h4>\n                <table class=\"table\" style=\"border: 1px solid\">\n                        <thead style=\"height: 10%\">\n                        <tr>\n <th>S.NO</th>\n<th>  _id </th> \n<th>descrptionOnCall      </th>        \n<th>callBackStartTime</th> \n<th>callBackEndTime</th> \n\n<th>agentid</th> \n<th>customerMobNo</th> \n<th>callbackStatus</th> \n<th>parentid</th> \n<th>createdAt</th> \n<th>updatedAt</th> \n<th>callhangupsource</th> \n<th>durationCallEnd</th> \n<th>durationCallStart </th> \n                          <!-- <th *ngIf=\"isAdminBoolean\">Edit </th>       \n                          <th *ngIf=\"isAdminBoolean\">Delete</th> -->\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor =\"let item of child; index as row\">\n                          <th scope=\"row\">{{row + 1}}</th>\n                          <!-- <td><img src={{item.productImage}} style=\"width:70px; height:60px\">&nbsp;&nbsp;{{item.name}} </td>\n                          <td>{{item.brand}}</td>\n                          <td>{{item.quantity}}</td>\n                          <td>{{item.price}}</td> -->\n<td> {{item._id}}</td>\n<td>{{item.descrptionOnCall}}</td>\n<td>{{item.callBackStartTime}}</td>\n<td>{{item.callBackEndTime}}</td>\n\n<td>{{item.agentid}}</td>\n<td>{{item.customerMobNo}}</td>\n<td>{{item.callbackStatus}}</td>\n<td>{{item.parentid}}</td>\n<td>{{item.createdAt}}</td>\n<td>{{item.updatedAt}}</td>\n<td>{{item.callhangupsource}}</td>\n<td>{{item.durationCallEnd}}</td>\n<td>{{item.durationCallStart}}</td>\n                          <!-- <td> <button type=\"button\" class=\"btn btn-warning\" *ngIf=\"isAdminBoolean\"  (click)=\"editProduct(item._id)\">Edit</button></td>\n                          <td> <button type=\"button\" class=\"btn btn-danger\"  *ngIf=\"isAdminBoolean\" (click)=\"deleteProduct(item._id)\">Delete</button></td> -->\n                        </tr>\n                        </tbody>\n                      </table>\n        </div>\n      \n    </div>\n    \n  </div>\n  <!-- <div class=\"row  float-right\">\n      <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\" >\n        <i class=\"ft-x\"></i> Cancel\n      </button>\n      <button type=\"button\" class=\"btn btn-raised btn-primary\" (click) = \"onSave()\">\n        <i class=\"fa fa-check-square-o\"></i> Save\n      </button>\n    </div> -->\n"

/***/ }),

/***/ "./src/app/layout/demo/demo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/demo/demo.component.ts ***!
  \***********************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//import { FarmService } from '../../farm.service';

//import { Router } from '@angular/router';

var DemoComponent = /** @class */ (function () {
    function DemoComponent(toastrService, formBuilder, service, router) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.people = {};
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.service.getParentAndChildScheduleCall().subscribe(function (data) {
            console.log(data);
            _this.parent = data['message'];
            _this.child = data['getChilds'];
        });
    };
    DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/layout/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./src/app/layout/demo/demo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/layout/demo/demo.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/demo/demo.module.ts ***!
  \********************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-routing */ "./src/app/layout/demo/demo-routing.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo.component */ "./src/app/layout/demo/demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _demo_routing__WEBPACK_IMPORTED_MODULE_3__["DemoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-demo-module.js.map