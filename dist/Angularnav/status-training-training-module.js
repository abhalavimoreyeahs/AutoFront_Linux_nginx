(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-training-training-module"],{

/***/ "./src/app/agent/status/training/training-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/agent/status/training/training-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: TrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingRoutingModule", function() { return TrainingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training.component */ "./src/app/agent/status/training/training.component.ts");




var routes = [
    {
        path: '',
        component: _training_component__WEBPACK_IMPORTED_MODULE_3__["TrainingComponent"],
    }
];
var TrainingRoutingModule = /** @class */ (function () {
    function TrainingRoutingModule() {
    }
    TrainingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TrainingRoutingModule);
    return TrainingRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/status/training/training.component.css":
/*!**************************************************************!*\
  !*** ./src/app/agent/status/training/training.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n    margin: 20px;\n  }\n  \n  .dashboard-card {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n  }\n  \n  .more-button {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n  }\n  \n  .dashboard-card-content {\n    text-align: center;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL3RyYWluaW5nL3RyYWluaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9zdGF0dXMvdHJhaW5pbmcvdHJhaW5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5tb3JlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/agent/status/training/training.component.html":
/*!***************************************************************!*\
  !*** ./src/app/agent/status/training/training.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "training"

/***/ }),

/***/ "./src/app/agent/status/training/training.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/agent/status/training/training.component.ts ***!
  \*************************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");




var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(breakpointObserver) {
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
    TrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/agent/status/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/agent/status/training/training.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/agent/status/training/training.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/agent/status/training/training.module.ts ***!
  \**********************************************************/
/*! exports provided: TrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./training-routing.module */ "./src/app/agent/status/training/training-routing.module.ts");
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training.component */ "./src/app/agent/status/training/training.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _training_routing_module__WEBPACK_IMPORTED_MODULE_4__["TrainingRoutingModule"]
            ],
            declarations: [_training_component__WEBPACK_IMPORTED_MODULE_5__["TrainingComponent"]]
        })
    ], TrainingModule);
    return TrainingModule;
}());



/***/ })

}]);
//# sourceMappingURL=status-training-training-module.js.map