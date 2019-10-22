(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onBoardEmployee-employee-module"],{

/***/ "./src/app/layout/onBoardEmployee/employee-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/layout/onBoardEmployee/employee.component.ts");




var routes = [
    {
        path: '',
        component: _employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"]
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

/***/ "./src/app/layout/onBoardEmployee/employee.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .my-form{\n    min-width: 150px;\n    max-width: 500px;\n    width: 80%;\n  }\n   \n  .full-width {\n    width: 60%;\n  }\n   \n  .center{\n    width: 75%;\n    margin: 10px auto;\n  }\n   \n  .main-div{\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L29uQm9hcmRFbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBR0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L29uQm9hcmRFbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5teS1mb3Jte1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gICBcbiAgLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiA2MCU7XG4gIH0gXG5cblxuICAuY2VudGVye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cbiAgXG4gIC5tYWluLWRpdntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/onBoardEmployee/employee.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n \n    <mat-toolbar >\n            <div style=\"text-align:center\">\n                    <span style=\"  display: inline-block;\n                   \n                    margin: 10px 10px 0 0;\n                    padding: 5px 10px\">Register Employee</span>\n            </div>\n      </mat-toolbar>\n      <mat-card class=\"my-card\">      \n          <!-- CONTENT HERE -->\n      \n      <mat-card-content class=\"z-depth center\" flex=\"50\">\n        <form class=\"my-form\">\n           <mat-form-field class=\"full-width\">\n                  <mat-label>Employee First Name</mat-label>\n                  <input  matInput  placeholder=\"Employee First Name\"  [(ngModel)]=\"Employee.firstName\" name=\"firstName\"  required>\n               </mat-form-field><br>\n    \n               <mat-form-field class=\"full-width\">\n                  <mat-label>Employee Last Name</mat-label>\n                  <input  matInput  placeholder=\"Employee Last Name\"  [(ngModel)]=\"Employee.lastName\" name=\"lastName\"  required>\n               </mat-form-field><br>\n    \n               <mat-form-field class=\"full-width\">\n                  <mat-label>Employee Email</mat-label>\n                  <input  matInput type=\"email\" placeholder=\"Employee Email\" name=\"email\"  [(ngModel)]=\"Employee.email\" required>\n               </mat-form-field><br>\n               <!-- <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" (input)=\"onPasswordInput()\">\n                    <mat-error *ngIf=\"password.hasError('required')\">Password is required</mat-error>\n                    <mat-error *ngIf=\"password.hasError('minlength')\">Password must have at least {{minPw}} characters</mat-error>\n                  </mat-form-field>\n                \n                  <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Confirm password\" formControlName=\"password2\" (input)=\"onPasswordInput()\">\n                    <mat-error *ngIf=\"password2.hasError('required')\">Please confirm your password</mat-error>\n                    <mat-error *ngIf=\"password2.invalid && !password2.hasError('required')\">Passwords don't match</mat-error>\n                  </mat-form-field> -->\n                  <mat-form-field>\n                        <input matInput placeholder=\"New password\" type=\"password\" [(ngModel)]=\"Employee.password\" name=\"password\" required>\n                        <mat-error *ngIf=\"myForm.hasError('required', 'password')\">\n                            Please enter your newpassword\n                        </mat-error>\n                    </mat-form-field><br>\n                \n                    <mat-form-field>\n                        <input matInput placeholder=\"Confirm password\" type=\"password\"  [errorStateMatcher]=\"matcher\">\n                          <mat-error *ngIf=\"myForm.hasError('notSame')\">\n                            Passwords do not match\n                        </mat-error>  \n                    </mat-form-field><br>\n    \n                  <mat-form-field class=\"full-width\">\n                        <mat-label>Age</mat-label>\n                        <input  matInput  placeholder=\"age\" name=\"age\" [(ngModel)]=\"Employee.age\"  required>\n                     </mat-form-field><br>\n    \n                  <section class=\"example-section\">\n                        <label class=\"example-margin\">Gender:</label>\n                        <mat-radio-group name=\"gender\" [(ngModel)]=\"Employee.gender\" required> <!--[(ngModel)]=\"gender\"-->\n                          <mat-radio-button class=\"example-margin\" value=\"after\" style=\"margin-left: 5px\" value=\"male\"  >Male</mat-radio-button>\n                          <mat-radio-button class=\"example-margin\" value=\"before\" style=\"margin-left: 5px\" value=\"female\"   >Female</mat-radio-button>\n                          <mat-radio-button class=\"example-margin\" value=\"before\" style=\"margin-left: 5px\" value=\"other\"  >Other</mat-radio-button>\n                        </mat-radio-group>\n                      </section>\n    \n                      <mat-form-field class=\"full-width\">\n                            <mat-label>Mobile No</mat-label>\n                            <input  matInput  placeholder=\"Mobile Number\" name=\"mobile\" [(ngModel)]=\"Employee.mobile\" required>\n                         </mat-form-field><br>\n    \n                         <mat-form-field hintLabel=\"select one\">\n                                <mat-select placeholder=\"Select Role\" [(ngModel)]=\"Employee.role\" name=\"role\" (ngModelChange)=\"selectRole()\">\n                                \n                                    <mat-option *ngFor=\"let role of roles\" [value]=\"role.id\" >\n                                                        {{ role.name }}\n                                    </mat-option>\n                                </mat-select>\n                                </mat-form-field><br>\n    \n                                <mat-form-field class=\"full-width\" *ngIf=\"AgentBoolean\">\n                                  <mat-label>Plivo Agent Username</mat-label>\n                                  <input  matInput  placeholder=\"Plivo Agent User name\" name=\"plivoagentusername\" [(ngModel)]=\"Employee.plivoagentusername\" required>\n                               </mat-form-field>\n    \n                               <mat-form-field class=\"full-width\" *ngIf=\"AgentBoolean\">\n                                <mat-label>Plivo Agent Password</mat-label>\n                                <input  matInput  placeholder=\"Plivo Agent Password\" name=\"plivoagentPassword\" [(ngModel)]=\"Employee.plivoagentPassword\" required>\n                             </mat-form-field>\n    \n                             <mat-form-field class=\"full-width\" *ngIf=\"AgentBoolean\">\n                              <mat-label>Plivo Agent Alias</mat-label>\n                              <input  matInput  placeholder=\"Plivo Agent Alias\" name=\"plivoagnetalias\" [(ngModel)]=\"Employee.plivoagnetalias\" required>\n                           </mat-form-field>\n    \n    \n               <mat-form-field class=\"full-width\">\n                  <mat-label>Address</mat-label>\n                  <input  matInput  placeholder=\"Address\" name=\"address\" [(ngModel)]=\"Employee.address\">\n               </mat-form-field><br>\n    \n               <mat-form-field class=\"full-width\">\n                  <mat-label>City</mat-label>\n                  <input  matInput  placeholder=\"City\"  name=\"city\" [(ngModel)]=\"Employee.city\">\n               </mat-form-field>\n            \n           \n              <!-- <mat-form-field>\n                <mat-label>Date of Birth</mat-label>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field> -->\n    \n          <mat-card-content>\n            <form class=\"my-form\">\n               <!--FORM FIELDS-->\n            </form>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-raised-button (click)=\"register()\" color=\"primary\">REGISTER</button>\n          </mat-card-actions>\n        </form>\n      </mat-card-content>\n        \n        <mat-card-actions>\n          <!-- REGISTER BUTTON -->\n        </mat-card-actions>\n      </mat-card>\n    \n    </div>"

/***/ }),

/***/ "./src/app/layout/onBoardEmployee/employee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.Employee = {};
        this.AgentBoolean = false;
        this.roles = [
            { id: 1, name: 'Admin' },
            { id: 2, name: 'Manager' },
            { id: 3, name: 'Agent' },
        ];
        this.matcher = new MyErrorStateMatcher();
        this.myForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirmPassword: ['']
        }, { validator: this.checkPasswords });
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent.prototype.selectRole = function () {
        debugger;
        if (this.Employee['role'] == 3) {
            this.AgentBoolean = true;
        }
        else {
            this.AgentBoolean = false;
        }
    };
    EmployeeComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    EmployeeComponent.prototype.register = function () {
        this.service.saveEmployee(this.Employee).subscribe(function (data) {
            console.log(data);
            if (data.success === true) {
                alert('data successfully saved');
            }
        });
        //console.log(this.Employee);
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/layout/onBoardEmployee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/layout/onBoardEmployee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_2__["AutoDialService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/layout/onBoardEmployee/employee.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee.module.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/layout/onBoardEmployee/employee-routing.module.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee.component */ "./src/app/layout/onBoardEmployee/employee.component.ts");
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
//# sourceMappingURL=onBoardEmployee-employee-module.js.map