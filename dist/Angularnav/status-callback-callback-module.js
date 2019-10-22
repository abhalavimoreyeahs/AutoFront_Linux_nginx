(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-callback-callback-module"],{

/***/ "./src/app/agent/status/callback/callback-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/agent/status/callback/callback-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CallBackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallBackRoutingModule", function() { return CallBackRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback.component */ "./src/app/agent/status/callback/callback.component.ts");




var routes = [
    {
        path: '',
        component: _callback_component__WEBPACK_IMPORTED_MODULE_3__["CallBackComponent"],
    }
];
var CallBackRoutingModule = /** @class */ (function () {
    function CallBackRoutingModule() {
    }
    CallBackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CallBackRoutingModule);
    return CallBackRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/status/callback/callback.component.css":
/*!**************************************************************!*\
  !*** ./src/app/agent/status/callback/callback.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n    margin: 20px;\n  }\n  \n  .dashboard-card {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n  }\n  \n  .more-button {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n  }\n  \n  .dashboard-card-content {\n    text-align: center;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9zdGF0dXMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5tb3JlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/agent/status/callback/callback.component.html":
/*!***************************************************************!*\
  !*** ./src/app/agent/status/callback/callback.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ol>\n        <li>\n\n        </li>\n        <li>\n          <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n        </li>\n        <li *ngIf=\"animal\">\n          You chose: <i>{{animal}}</i>\n        </li>\n      </ol>\n      <button mat-raised-button (click)=\"openDialog2()\">Open Dialog box2</button> -->\n\n      CallBack"

/***/ }),

/***/ "./src/app/agent/status/callback/callback.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/agent/status/callback/callback.component.ts ***!
  \*************************************************************/
/*! exports provided: CallBackComponent, DialogOverviewExampleDialog, DialogBox2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallBackComponent", function() { return CallBackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBox2", function() { return DialogBox2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var CallBackComponent = /** @class */ (function () {
    function CallBackComponent(dialog) {
        this.dialog = dialog;
    }
    CallBackComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    CallBackComponent.prototype.openDialog2 = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogBox2, {
            width: '550px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    CallBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/agent/status/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/agent/status/callback/callback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CallBackComponent);
    return CallBackComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/agent/status/callback/dialog-overview-example-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());

//dialog box 2
var DialogBox2 = /** @class */ (function () {
    function DialogBox2(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogBox2.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogBox2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-box2',
            template: __webpack_require__(/*! ./dialog-box2.html */ "./src/app/agent/status/callback/dialog-box2.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogBox2);
    return DialogBox2;
}());



/***/ }),

/***/ "./src/app/agent/status/callback/callback.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/agent/status/callback/callback.module.ts ***!
  \**********************************************************/
/*! exports provided: CallBackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallBackModule", function() { return CallBackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _callback_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./callback-routing.module */ "./src/app/agent/status/callback/callback-routing.module.ts");
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./callback.component */ "./src/app/agent/status/callback/callback.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);








//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import { MyDialogModule } from '../my-dialog/my-dialog.module'
var CallBackModule = /** @class */ (function () {
    function CallBackModule() {
    }
    CallBackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _callback_routing_module__WEBPACK_IMPORTED_MODULE_4__["CallBackRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]
            ],
            entryComponents: [
                // MyDialogComponent,
                _callback_component__WEBPACK_IMPORTED_MODULE_5__["DialogOverviewExampleDialog"], _callback_component__WEBPACK_IMPORTED_MODULE_5__["DialogBox2"]
            ],
            declarations: [_callback_component__WEBPACK_IMPORTED_MODULE_5__["CallBackComponent"], _callback_component__WEBPACK_IMPORTED_MODULE_5__["DialogOverviewExampleDialog"], _callback_component__WEBPACK_IMPORTED_MODULE_5__["DialogBox2"]]
        })
    ], CallBackModule);
    return CallBackModule;
}());



/***/ }),

/***/ "./src/app/agent/status/callback/dialog-box2.html":
/*!********************************************************!*\
  !*** ./src/app/agent/status/callback/dialog-box2.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " dialog box 2"

/***/ }),

/***/ "./src/app/agent/status/callback/dialog-overview-example-dialog.html":
/*!***************************************************************************!*\
  !*** ./src/app/agent/status/callback/dialog-overview-example-dialog.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hi this is dialog box"

/***/ })

}]);
//# sourceMappingURL=status-callback-callback-module.js.map