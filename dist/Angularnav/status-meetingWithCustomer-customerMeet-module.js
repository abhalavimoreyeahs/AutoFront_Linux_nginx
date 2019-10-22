(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-meetingWithCustomer-customerMeet-module"],{

/***/ "./src/app/agent/status/meetingWithCustomer/customerMeet-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/agent/status/meetingWithCustomer/customerMeet-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerMeetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMeetRoutingModule", function() { return CustomerMeetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customerMeet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerMeet.component */ "./src/app/agent/status/meetingWithCustomer/customerMeet.component.ts");




var routes = [
    {
        path: '',
        component: _customerMeet_component__WEBPACK_IMPORTED_MODULE_3__["CustomerMeetComponent"],
    }
];
var CustomerMeetRoutingModule = /** @class */ (function () {
    function CustomerMeetRoutingModule() {
    }
    CustomerMeetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomerMeetRoutingModule);
    return CustomerMeetRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/status/meetingWithCustomer/customerMeet.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/agent/status/meetingWithCustomer/customerMeet.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n    margin: 20px;\n  }\n  \n  .dashboard-card {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n  }\n  \n  .more-button {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n  }\n  \n  .dashboard-card-content {\n    text-align: center;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL21lZXRpbmdXaXRoQ3VzdG9tZXIvY3VzdG9tZXJNZWV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9zdGF0dXMvbWVldGluZ1dpdGhDdXN0b21lci9jdXN0b21lck1lZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5tb3JlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/agent/status/meetingWithCustomer/customerMeet.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/agent/status/meetingWithCustomer/customerMeet.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Customer meet"

/***/ }),

/***/ "./src/app/agent/status/meetingWithCustomer/customerMeet.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/agent/status/meetingWithCustomer/customerMeet.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerMeetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMeetComponent", function() { return CustomerMeetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var CustomerMeetComponent = /** @class */ (function () {
    function CustomerMeetComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
        this.AgentStatus = [
            { value: '0', name: 'Active' },
            { value: '1', name: 'Callback' },
            { value: '2', name: 'Manual Dial' },
            { value: '3', name: 'Break' },
            { value: '4', name: 'Training' },
            { value: '5', name: 'Meeting With Customer' }
        ];
    }
    CustomerMeetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customerMeet',
            template: __webpack_require__(/*! ./customerMeet.component.html */ "./src/app/agent/status/meetingWithCustomer/customerMeet.component.html"),
            styles: [__webpack_require__(/*! ./customerMeet.component.css */ "./src/app/agent/status/meetingWithCustomer/customerMeet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], CustomerMeetComponent);
    return CustomerMeetComponent;
}());



/***/ }),

/***/ "./src/app/agent/status/meetingWithCustomer/customerMeet.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/agent/status/meetingWithCustomer/customerMeet.module.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerMeetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMeetModule", function() { return CustomerMeetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customerMeet_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customerMeet-routing.module */ "./src/app/agent/status/meetingWithCustomer/customerMeet-routing.module.ts");
/* harmony import */ var _customerMeet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerMeet.component */ "./src/app/agent/status/meetingWithCustomer/customerMeet.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var CustomerMeetModule = /** @class */ (function () {
    function CustomerMeetModule() {
    }
    CustomerMeetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _customerMeet_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerMeetRoutingModule"]
            ],
            declarations: [_customerMeet_component__WEBPACK_IMPORTED_MODULE_5__["CustomerMeetComponent"]]
        })
    ], CustomerMeetModule);
    return CustomerMeetModule;
}());



/***/ })

}]);
//# sourceMappingURL=status-meetingWithCustomer-customerMeet-module.js.map