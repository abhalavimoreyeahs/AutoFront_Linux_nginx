(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EditAssignedAgent-editAssignedAgent-module"],{

/***/ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EditAssignedAgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAssignedAgentRoutingModule", function() { return EditAssignedAgentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editAssignedAgent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editAssignedAgent.component */ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.ts");




var routes = [
    {
        path: '',
        component: _editAssignedAgent_component__WEBPACK_IMPORTED_MODULE_3__["EditAssignedAgentComponent"]
    }
];
var EditAssignedAgentRoutingModule = /** @class */ (function () {
    function EditAssignedAgentRoutingModule() {
    }
    EditAssignedAgentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EditAssignedAgentRoutingModule);
    return EditAssignedAgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n margin:2% 2% 2% 2%;\n}\n\n  .actions {\n    justify-content: flex-end;\n  }\n\n  .container {\n    height: 100%;\n  }\n\n  .active-list-item {\n    color: #3F51B5 !important; /* Note: You could also use a custom theme */\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0VtcGxveWVlL0VkaXRBc3NpZ25lZEFnZW50L2VkaXRBc3NpZ25lZEFnZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0VBRUU7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUIsRUFBRSw0Q0FBNEM7RUFDekUiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvRW1wbG95ZWUvRWRpdEFzc2lnbmVkQWdlbnQvZWRpdEFzc2lnbmVkQWdlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcbiBtYXJnaW46MiUgMiUgMiUgMiU7XG59XG5cbiAgLmFjdGlvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5hY3RpdmUtbGlzdC1pdGVtIHtcbiAgICBjb2xvcjogIzNGNTFCNSAhaW1wb3J0YW50OyAvKiBOb3RlOiBZb3UgY291bGQgYWxzbyB1c2UgYSBjdXN0b20gdGhlbWUgKi9cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 style=\"color:black\">Edit Assaigned Agents Data</h3>\n"

/***/ }),

/***/ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditAssignedAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAssignedAgentComponent", function() { return EditAssignedAgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';



var EditAssignedAgentComponent = /** @class */ (function () {
    function EditAssignedAgentComponent(toastrService, formBuilder, service, router) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
    }
    EditAssignedAgentComponent.prototype.ngOnInit = function () {
    };
    EditAssignedAgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editAssignedAgent',
            template: __webpack_require__(/*! ./editAssignedAgent.component.html */ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.html"),
            styles: [__webpack_require__(/*! ./editAssignedAgent.component.css */ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditAssignedAgentComponent);
    return EditAssignedAgentComponent;
}());



/***/ }),

/***/ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EditAssignedAgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAssignedAgentModule", function() { return EditAssignedAgentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _editAssignedAgent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editAssignedAgent-routing.module */ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent-routing.module.ts");
/* harmony import */ var _editAssignedAgent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editAssignedAgent.component */ "./src/app/layout/Employee/EditAssignedAgent/editAssignedAgent.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");







var EditAssignedAgentModule = /** @class */ (function () {
    function EditAssignedAgentModule() {
    }
    EditAssignedAgentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _editAssignedAgent_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditAssignedAgentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_editAssignedAgent_component__WEBPACK_IMPORTED_MODULE_4__["EditAssignedAgentComponent"]]
        })
    ], EditAssignedAgentModule);
    return EditAssignedAgentModule;
}());



/***/ })

}]);
//# sourceMappingURL=EditAssignedAgent-editAssignedAgent-module.js.map