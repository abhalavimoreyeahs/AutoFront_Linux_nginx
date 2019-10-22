(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Dialler-dialler-module"],{

/***/ "./src/app/agent/calls/Dialler/dialler-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DiallerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiallerRoutingModule", function() { return DiallerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialler.component */ "./src/app/agent/calls/Dialler/dialler.component.ts");




var routes = [
    {
        path: '',
        component: _dialler_component__WEBPACK_IMPORTED_MODULE_3__["DiallerComponent"],
    }
];
var DiallerRoutingModule = /** @class */ (function () {
    function DiallerRoutingModule() {
    }
    DiallerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DiallerRoutingModule);
    return DiallerRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/calls/Dialler/dialler.component.css":
/*!***********************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dialler code*/\n\n\n.row {\n    margin: 0 auto;\n    width: 250px;\n    clear: both;\n    text-align: center;\n    font-family: 'Exo';\n  }\n\n\n.digit,\n  .digit {\n    float: left;\n    padding: 10px 30px; /* 10px 30px*/\n    width: 80px; \n    font-size: 2rem;\n    cursor: pointer;\n  }\n\n\n.sub {\n    font-size: 0.8rem;\n    color: grey;\n  }\n\n\n.container {\n    background-color: white;\n    width: 320px;\n    padding: 20px;\n    margin: 30px auto;\n    height: 480px;\n    text-align: center;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n\n#usr {\n    font-family: \"Exo\";\n   font-size: 1rem;\n   font-weight: bold;\n  }\n\n\n#output {\n    font-family: \"Exo\";\n    font-size: 2rem;\n    height: 40px;\n    font-weight: bold;\n    color: #1976d2;\n  }\n\n\n#call {\n    display: inline-block;\n    background-color: #66bb6a;\n    padding: 4px 30px;\n    margin: 10px;\n    color: white;\n    border-radius: 4px;\n    float: left;\n    cursor: pointer;\n  }\n\n\n.botrow {\n    margin: 0  auto;\n    margin-left: 5%;\n    width: 320px; \n    clear: both;\n    text-align: center;\n    font-family: 'Exo';\n  }\n\n\n.digit:active,\n  .dig:active {\n    background-color: #e6e6e6;\n  }\n\n\n#call:hover {\n    background-color: #81c784;\n  }\n\n\n.dig {\n    float: left;\n    padding: 10px 25px;\n    margin: 10px;\n    width: 30px;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvY2FsbHMvRGlhbGxlci9kaWFsbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCOzs7QUFHaEI7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOzs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUUsYUFBYTtJQUNqQyxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0RUFBNEU7RUFDOUU7OztBQUNBO0lBQ0Usa0JBQWtCO0dBQ25CLGVBQWU7R0FDZixpQkFBaUI7RUFDbEI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7OztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7OztBQUVBOztJQUVFLHlCQUF5QjtFQUMzQjs7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9jYWxscy9EaWFsbGVyL2RpYWxsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERpYWxsZXIgY29kZSovXG5cblxuLnJvdyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0V4byc7XG4gIH1cbiAgXG4gIC5kaWdpdCxcbiAgLmRpZ2l0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7IC8qIDEwcHggMzBweCovXG4gICAgd2lkdGg6IDgwcHg7IFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5zdWIge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiBncmV5O1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICB9XG4gICN1c3Ige1xuICAgIGZvbnQtZmFtaWx5OiBcIkV4b1wiO1xuICAgZm9udC1zaXplOiAxcmVtO1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gICNvdXRwdXQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkV4b1wiO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gIH1cbiAgXG4gICNjYWxsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcbiAgICBwYWRkaW5nOiA0cHggMzBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5ib3Ryb3cge1xuICAgIG1hcmdpbjogMCAgYXV0bztcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgd2lkdGg6IDMyMHB4OyBcbiAgICBjbGVhcjogYm90aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdFeG8nO1xuICB9XG4gIFxuICAuZGlnaXQ6YWN0aXZlLFxuICAuZGlnOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgfVxuICBcbiAgI2NhbGw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MWM3ODQ7XG4gIH1cbiAgXG4gIC5kaWcge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/agent/calls/Dialler/dialler.component.html":
/*!************************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Exo\" rel=\"stylesheet\">\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\">\n<div class=\"container\" style=\"margin-left:2%\">\n  <!-- <div id=\"output\">{{MobileNumber}}</div> -->\n  <div class=\"form-group\">\n    \n      <input type=\"text\" class=\"form-control\" id=\"output\" value=\"MobileNumber\" [(ngModel)]=\"MobileNumber\" placeholder=\"+91801XXXXXXX\">\n    </div>\n  <div class=\"row\" >\n    <div class=\"digit\" id=\"one\" (click)=\"pushNumbers(1)\"><h4><b>1</b></h4></div>\n    <div class=\"digit\" id=\"two\" (click)=\"pushNumbers(2)\"><h4><b>2</b></h4>\n      <div class=\"sub\"><h5>ABC</h5></div>\n    </div>\n    <div class=\"digit\" id=\"three\" (click)=\"pushNumbers(3)\"><h4><b>3</b></h4>\n      <div class=\"sub\"><h5>DEF</h5></div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"digit\" id=\"four\" (click)=\"pushNumbers(4)\"><h4><b>4</b></h4>\n      <div class=\"sub\"><h5>GHI</h5></div>\n    </div>\n    <div class=\"digit\" id=\"five\" (click)=\"pushNumbers(5)\"><h4><b>5</b></h4>\n      <div class=\"sub\"><h5>JKL</h5></div>\n    </div>\n    <div class=\"digit\" (click)=\"pushNumbers(6)\"><h4><b>6</b></h4>\n      <div class=\"sub\"><h5>MNO</h5></div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"digit\" (click)=\"pushNumbers(7)\"><h4><b>7</b></h4>\n      <div class=\"sub\"><h5>PQRS</h5></div>\n    </div>\n    <div class=\"digit\" (click)=\"pushNumbers(8)\"><h4><b>8</b></h4>\n      <div class=\"sub\"><h5>TUV</h5></div>\n    </div>\n    <div class=\"digit\" (click)=\"pushNumbers(9)\"><h4><b>9</b></h4>\n      <div class=\"sub\"><h5>WXYZ</h5></div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"digit\" (click)=\"pushNumbers('*')\"><h4>*</h4>\n    </div>\n    <div class=\"digit\" (click)=\"pushNumbers(0)\"><h4><b>0</b></h4>\n    </div>\n    <div class=\"digit\" (click)=\"pushNumbers('#')\"><h4>#</h4>\n    </div>\n  </div>\n  <div class=\"botrow\"><i class=\"fa fa-star-o dig\" aria-hidden=\"true\"></i>\n    <div id=\"call\" style=\"margin-left: 5%;\" (click)=\"call()\"><i class=\"fa fa-phone\" aria-hidden=\"true\" ></i></div>\n    <i class=\"fa fa-long-arrow-left dig\" aria-hidden=\"true\" style=\"margin-left: 1%;\" (click)=\"removeNumber()\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/agent/calls/Dialler/dialler.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler.component.ts ***!
  \**********************************************************/
/*! exports provided: DiallerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiallerComponent", function() { return DiallerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var DiallerComponent = /** @class */ (function () {
    function DiallerComponent(breakpointObserver, service, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.dialog = dialog;
        //For Mobile Number
        this.MobileNumber = '';
    }
    DiallerComponent.prototype.ngOnInit = function () {
    };
    DiallerComponent.prototype.pushNumbers = function (number) {
        this.MobileNumber = this.MobileNumber.concat(number);
    };
    DiallerComponent.prototype.removeNumber = function () {
        this.MobileNumber = this.MobileNumber.slice(0, -1);
    };
    DiallerComponent.prototype.call = function () {
        alert(this.MobileNumber);
        console.log(this.MobileNumber);
    };
    DiallerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialler',
            template: __webpack_require__(/*! ./dialler.component.html */ "./src/app/agent/calls/Dialler/dialler.component.html"),
            styles: [__webpack_require__(/*! ./dialler.component.css */ "./src/app/agent/calls/Dialler/dialler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], DiallerComponent);
    return DiallerComponent;
}());



/***/ }),

/***/ "./src/app/agent/calls/Dialler/dialler.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler.module.ts ***!
  \*******************************************************/
/*! exports provided: DiallerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiallerModule", function() { return DiallerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dialler_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialler-routing.module */ "./src/app/agent/calls/Dialler/dialler-routing.module.ts");
/* harmony import */ var _dialler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialler.component */ "./src/app/agent/calls/Dialler/dialler.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);








//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var DiallerModule = /** @class */ (function () {
    function DiallerModule() {
    }
    DiallerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _dialler_routing_module__WEBPACK_IMPORTED_MODULE_4__["DiallerRoutingModule"],
                _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["ScheduleModule"]
            ],
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["AgendaService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["DragAndDropService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["ResizeService"]],
            declarations: [_dialler_component__WEBPACK_IMPORTED_MODULE_5__["DiallerComponent"]]
        })
    ], DiallerModule);
    return DiallerModule;
}());



/***/ })

}]);
//# sourceMappingURL=Dialler-dialler-module.js.map