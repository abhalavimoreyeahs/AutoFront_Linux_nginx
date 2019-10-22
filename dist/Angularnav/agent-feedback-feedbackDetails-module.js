(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agent-feedback-feedbackDetails-module"],{

/***/ "./src/app/manager/agent-feedback/feedbackDetails-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/manager/agent-feedback/feedbackDetails-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FeedbackDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackDetailsRoutingModule", function() { return FeedbackDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feedbackDetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedbackDetails.component */ "./src/app/manager/agent-feedback/feedbackDetails.component.ts");




var routes = [
    {
        path: '',
        component: _feedbackDetails_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackDetailsComponent"]
    }
];
var FeedbackDetailsRoutingModule = /** @class */ (function () {
    function FeedbackDetailsRoutingModule() {
    }
    FeedbackDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FeedbackDetailsRoutingModule);
    return FeedbackDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/manager/agent-feedback/feedbackDetails.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/manager/agent-feedback/feedbackDetails.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\r\n    position: relative;\r\n      padding: 15px 15px 0 15px;\r\n      background-color:transparent;\r\n      font:normal\r\n  }\r\n  \r\n  .box{\r\n    position: relative;\r\n      border-radius: 3px;\r\n      background: #ffffff;\r\n      border-top: 3px solid #d2d6de;\r\n      margin-bottom: 20px;\r\n      /* width: 100%; */\r\n      box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n      margin: 1% 1% 1% 1%;\r\n      /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n  }\r\n  \r\n  .box-header{\r\n    color: #444;\r\n      display: block;\r\n      padding: 10px;\r\n      position: relative;\r\n  }\r\n  \r\n  small{\r\n      font-size: 15px;\r\n        display: inline-block;\r\n        padding-left: 4px;\r\n        font-weight: 300;\r\n        line-height: 1; \r\n        color: #777;\r\n        font-family: sans-serif;\r\n    }\r\n  \r\n  /*------------------Mat table -----RESPONSIVE-------*/\r\n  \r\n  body {\r\n    font-family: 'Covered By Your Grace', cursive;\r\n    line-height: 1.25;\r\n    \r\n  }\r\n  \r\n  @media screen and (max-width: 960px) {\r\n    .mat-table {\r\n      border: 0;\r\n      vertical-align: middle\r\n    }\r\n  \r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n    \r\n  \r\n    .mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\r\n    .mat-table .mat-cell {\r\n      border-bottom: 1px solid #ddd;\r\n      display: block;\r\n      font-size: 1em;\r\n      text-align: right;\r\n      margin: 2% 2% 2% 2%;\r\n      /* font-weight: bold; */\r\n      height:30px;\r\n      /* margin-bottom: 4%; */\r\n    }\r\n    .mat-table .mat-cell:before {\r\n      /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\r\n      content: attr(data-label);\r\n      float: left;\r\n      text-transform: uppercase;\r\n      font-weight: normal;\r\n      \r\n      font-size: .85em;\r\n    }\r\n    .mat-table .mat-cell:last-child {\r\n      border-bottom: 0;\r\n    }\r\n      .mat-table .mat-cell:first-child {\r\n      margin-top: 4%;\r\n    }\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci9hZ2VudC1mZWVkYmFjay9mZWVkYmFja0RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtNQUNoQix5QkFBeUI7TUFDekIsNEJBQTRCO01BQzVCO0VBQ0o7O0VBRUE7SUFDRSxrQkFBa0I7TUFDaEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixxQ0FBcUM7TUFDckMsbUJBQW1CO01BQ25CLGdHQUFnRztFQUNwRzs7RUFFQTtJQUNFLFdBQVc7TUFDVCxjQUFjO01BQ2QsYUFBYTtNQUNiLGtCQUFrQjtFQUN0Qjs7RUFHRTtNQUNFLGVBQWU7UUFDYixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsV0FBVztRQUNYLHVCQUF1QjtJQUMzQjs7RUFDQSxxREFBcUQ7O0VBSXZEO0lBQ0UsNkNBQTZDO0lBQzdDLGlCQUFpQjs7RUFFbkI7O0VBR0E7SUFDRTtNQUNFLFNBQVM7TUFDVDtJQUNGOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7O0lBR0E7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztJQUNoQjtJQUNBOzs7S0FHQztJQUNEO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7TUFDZCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsV0FBVztNQUNYLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0U7OztPQUdDO01BQ0QseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsbUJBQW1COztNQUVuQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtNQUNFO01BQ0EsY0FBYztJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlci9hZ2VudC1mZWVkYmFjay9mZWVkYmFja0RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWhlYWRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgZm9udDpub3JtYWxcclxuICB9XHJcbiAgXHJcbiAgLmJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgIG1hcmdpbjogMSUgMSUgMSUgMSU7XHJcbiAgICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDsgKi9cclxuICB9XHJcbiAgXHJcbiAgLmJveC1oZWFkZXJ7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgICBzbWFsbHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOyBcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tTWF0IHRhYmxlIC0tLS0tUkVTUE9OU0lWRS0tLS0tLS0qL1xyXG4gICAgXHJcbiAgXHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdmVyZWQgQnkgWW91ciBHcmFjZScsIGN1cnNpdmU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgLm1hdC10YWJsZSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hdC10YWJsZSBjYXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cge1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxyXG4gICAgKi9cclxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbjogMiUgMiUgMiUgMiU7XHJcbiAgICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgLyogbWFyZ2luLWJvdHRvbTogNCU7ICovXHJcbiAgICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xyXG4gICAgICAvKlxyXG4gICAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gICAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xyXG4gICAgICAqL1xyXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgICAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/manager/agent-feedback/feedbackDetails.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/manager/agent-feedback/feedbackDetails.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;width:100%; height:100%;\">\r\n\r\n    <section class=\"content-header\">\r\n      <h2>\r\n        CallbackScheduled\r\n        <small>All Agents Callback</small>\r\n      </h2>\r\n    </section>\r\n  \r\n    <div class=\"box\">\r\n  \r\n      <mat-form-field [hideRequiredMarker]=\"true\" class=\"alignment\" style=\"padding-left:1%\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n  \r\n    </div>\r\n  \r\n    <div class=\"example-container box\">\r\n  \r\n      <mat-table [dataSource]=\"dataSource\" matSort>\r\n  \r\n        <ng-container matColumnDef=\"S No\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>S No</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user; let i = index;\" data-label=\"S No\"> {{i+1}} </mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"customerName\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"customerName\">{{user.customerName | titlecase }}</mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"customerMobNo\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Number </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"customerMobNo\">{{user.customerMobNo  }} </mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"callDuration\">\r\n          <mat-header-cell *matHeaderCellDef>Call Duration </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"callDuration\">{{user.callDuration }} </mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"registered\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Registered </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"registered\">{{user.registered }}</mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"callType\">\r\n          <mat-header-cell *matHeaderCellDef>Call Type</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"callType\">{{user.callType }}</mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"descrptionOnCall\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Notes </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"descrptionOnCall\"> {{user.descrptionOnCall }} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"agent\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Agent </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let user\" data-label=\"agent\"> {{user.agent }} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"createdAt\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Created At </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let user\" data-label=\"createdAt\">{{user.createdAt | date: 'dd/MM/yyyy'}}</mat-cell>\r\n          </ng-container>\r\n  \r\n        <mat-header-row *matHeaderRowDef=\"displayDummyData\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayDummyData\"></mat-row>\r\n      </mat-table>\r\n  \r\n      <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/manager/agent-feedback/feedbackDetails.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/manager/agent-feedback/feedbackDetails.component.ts ***!
  \*********************************************************************/
/*! exports provided: FeedbackDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackDetailsComponent", function() { return FeedbackDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/manager.service */ "./src/app/shared/services/manager.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");








//Dialog Box

var FeedbackDetailsComponent = /** @class */ (function () {
    function FeedbackDetailsComponent(toastrService, formBuilder, service, dialog) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.dialog = dialog;
        this.displayDummyData = ['S No', 'customerName', 'customerMobNo', 'callType', 'agent', 'descrptionOnCall', 'createdAt'];
    }
    FeedbackDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAgentFeedbackData().subscribe(function (data) {
            console.log(data);
            _this.AgentData = data['message'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.AgentData);
            // Assign the paginator *after* dataSource is set
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    FeedbackDetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //notification
    FeedbackDetailsComponent.prototype.showToaster = function () {
        this.toastrService.success('Data Saved Successfully');
    };
    FeedbackDetailsComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed to save Data');
    };
    FeedbackDetailsComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    FeedbackDetailsComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('warning : Duplicate Data');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], FeedbackDetailsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], FeedbackDetailsComponent.prototype, "sort", void 0);
    FeedbackDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedbackDetails',
            template: __webpack_require__(/*! ./feedbackDetails.component.html */ "./src/app/manager/agent-feedback/feedbackDetails.component.html"),
            styles: [__webpack_require__(/*! ./feedbackDetails.component.css */ "./src/app/manager/agent-feedback/feedbackDetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], FeedbackDetailsComponent);
    return FeedbackDetailsComponent;
}());



/***/ }),

/***/ "./src/app/manager/agent-feedback/feedbackDetails.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/manager/agent-feedback/feedbackDetails.module.ts ***!
  \******************************************************************/
/*! exports provided: FeedBackDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackDetailsModule", function() { return FeedBackDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _feedbackDetails_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedbackDetails-routing.module */ "./src/app/manager/agent-feedback/feedbackDetails-routing.module.ts");
/* harmony import */ var _feedbackDetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedbackDetails.component */ "./src/app/manager/agent-feedback/feedbackDetails.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var FeedBackDetailsModule = /** @class */ (function () {
    function FeedBackDetailsModule() {
    }
    FeedBackDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _feedbackDetails_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackDetailsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            entryComponents: [
                _feedbackDetails_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackDetailsComponent"]
            ],
            declarations: [_feedbackDetails_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackDetailsComponent"]]
        })
    ], FeedBackDetailsModule);
    return FeedBackDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=agent-feedback-feedbackDetails-module.js.map