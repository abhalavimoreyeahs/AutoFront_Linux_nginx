(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Employee-employee-module"],{

/***/ "./src/app/layout/Employee/employee-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/Employee/employee-routing.module.ts ***!
  \************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/layout/Employee/employee.component.ts");




var routes = [
    {
        path: '',
        component: _employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"],
        children: [
            { path: '', redirectTo: 'AllManager', pathMatch: 'prefix' },
            { path: 'AllManager', loadChildren: './AllManager/allmanager.module#AllManagerModule' },
            { path: 'AllAgents', loadChildren: './AllAgent/allagents.module#AllAgentsModule' },
            // { path: 'AgentAssignment', loadChildren: './AssignedAgent/assignedAgent.module#AssignedAgentModule' },
            { path: 'edit', loadChildren: './EditAssignedAgent/editAssignedAgent.module#EditAssignedAgentModule' },
        ]
    }
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/Employee/employee.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/Employee/employee.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item {\n  margin: 2% 2% 2% 2%;\n}\n\nbutton{\n  background-color: #f5f5f5;\n  margin: 2% 2% 2% 2%;\n}\n\nbutton.active{\n  background-color:mediumpurple;\n}\n\n/* .my-form{\n    min-width: 150px;\n    max-width: 500px;\n    width: 80%;\n  }\n   \n  .full-width {\n    width: 60%;\n  } \n\n\n  .center{\n    width: 75%;\n    margin: 10px auto;\n  }\n  \n  .main-div{\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  table {\n    width: 95%;\n    margin: 20px 20px 20px 20px; \n  }\n\n  .add-files-btn {\n    float: right;\n  }\n  \n  :host {\n    height: 100%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n  }\n  \n  .actions {\n    justify-content: flex-end;\n  }\n  \n  .container {\n    height: 100%;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2Q0siLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvRW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1saXN0LWl0ZW0ge1xuICBtYXJnaW46IDIlIDIlIDIlIDIlO1xufVxuXG5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIG1hcmdpbjogMiUgMiUgMiUgMiU7XG59XG5cbmJ1dHRvbi5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6bWVkaXVtcHVycGxlO1xufVxuXG4vKiAubXktZm9ybXtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAgXG4gIC5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogNjAlO1xuICB9IFxuXG5cbiAgLmNlbnRlcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIFxuICAubWFpbi1kaXZ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7IFxuICB9XG5cbiAgLmFkZC1maWxlcy1idG4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICBcbiAgOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmFjdGlvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/layout/Employee/employee.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/Employee/employee.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\n  <mat-toolbar-row>\n    <!-- <span>Employees</span>\n    <span class=\"example-spacer\"></span> -->\n    <!-- <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon> -->\n\n    <mat-list-item >\n    <button  mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee/AllManager']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n      <mat-icon>group</mat-icon>\n      Manager\n    </button>\n  </mat-list-item>\n\n  <mat-list-item >\n    <button  mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee/AllAgents']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n      <mat-icon>group</mat-icon>\n      Agent\n    </button>\n  </mat-list-item>\n\n  <!-- <mat-list-item >\n    <button  mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee/AgentAssignment']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n      <mat-icon>assignment</mat-icon>\n      Agent Assignment Module\n    </button>\n  </mat-list-item> -->\n\n  <!-- <mat-list-item>\n    <button  mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee/edit']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\n     \n      Edit Assigned Agent\n    </button>\n  </mat-list-item> -->\n\n  </mat-toolbar-row>\n\n  <!-- <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\" style=\"background-color:lavender;\">.col-sm-4</div>\n      <div class=\"col-sm-8\" style=\"background-color:lavenderblush;\">.col-sm-8</div>\n    </div>\n  </div> -->\n</mat-toolbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/Employee/employee.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/Employee/employee.component.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(toastrService, formBuilder, service, router) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/layout/Employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/layout/Employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/layout/Employee/employee.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/Employee/employee.module.ts ***!
  \****************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/layout/Employee/employee-routing.module.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee.component */ "./src/app/layout/Employee/employee.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"]]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ })

}]);
//# sourceMappingURL=Employee-employee-module.js.map