(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewCampaign-viewCampaign-module"],{

/***/ "./src/app/manager/viewCampaign/viewCampaign-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewCampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCampaignRoutingModule", function() { return ViewCampaignRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewCampaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewCampaign.component */ "./src/app/manager/viewCampaign/viewCampaign.component.ts");




var routes = [
    {
        path: '',
        component: _viewCampaign_component__WEBPACK_IMPORTED_MODULE_3__["ViewCampaignComponent"]
    }
];
var ViewCampaignRoutingModule = /** @class */ (function () {
    function ViewCampaignRoutingModule() {
    }
    ViewCampaignRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewCampaignRoutingModule);
    return ViewCampaignRoutingModule;
}());



/***/ }),

/***/ "./src/app/manager/viewCampaign/viewCampaign.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\n  position: relative;\n    padding: 15px 15px 0 15px;\n    background-color:transparent;\n    font:normal\n}\n\n.box{\n  position: relative;\n    border-radius: 3px;\n    background: #ffffff;\n    border-top: 3px solid #d2d6de;\n    margin-bottom: 20px;\n    /* width: 100%; */\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n    margin: 1% 1% 1% 1%;\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\n}\n\n.box-header{\n  color: #444;\n    display: block;\n    padding: 10px;\n    position: relative;\n}\n\nsmall{\n    font-size: 15px;\n      display: inline-block;\n      padding-left: 4px;\n      font-weight: 300;\n      line-height: 1; \n      color: #777;\n      font-family: sans-serif;\n  }\n\n/*------------------Mat table -----RESPONSIVE-------*/\n\nbody {\n  font-family: 'Covered By Your Grace', cursive;\n  line-height: 1.25;\n  \n}\n\n@media screen and (max-width: 960px) {\n  .mat-table {\n    border: 0;\n    vertical-align: middle\n  }\n\n  .mat-table caption {\n    font-size: 1em;\n  }\n  \n\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block;\n  }\n  /*\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\n  */\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    margin: 2% 2% 2% 2%;\n    /* font-weight: bold; */\n    height:30px;\n    /* margin-bottom: 4%; */\n  }\n  .mat-table .mat-cell:before {\n    /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    \n    font-size: .85em;\n  }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0;\n  }\n    .mat-table .mat-cell:first-child {\n    margin-top: 4%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci92aWV3Q2FtcGFpZ24vdmlld0NhbXBhaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7SUFDaEIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QjtBQUNKOztBQUVBO0VBQ0Usa0JBQWtCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixnR0FBZ0c7QUFDcEc7O0FBRUE7RUFDRSxXQUFXO0lBQ1QsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBR0U7SUFDRSxlQUFlO01BQ2IscUJBQXFCO01BQ3JCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFdBQVc7TUFDWCx1QkFBdUI7RUFDM0I7O0FBQ0EscURBQXFEOztBQUl2RDtFQUNFLDZDQUE2QztFQUM3QyxpQkFBaUI7O0FBRW5COztBQUdBO0VBQ0U7SUFDRSxTQUFTO0lBQ1Q7RUFDRjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7OztFQUdBO0lBQ0UsNkJBQTZCO0lBQzdCLGNBQWM7RUFDaEI7RUFDQTs7O0dBR0M7RUFDRDtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7RUFDQTtJQUNFOzs7S0FHQztJQUNELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjs7SUFFbkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7SUFDRTtJQUNBLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvdmlld0NhbXBhaWduL3ZpZXdDYW1wYWlnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGZvbnQ6bm9ybWFsXG59XG5cbi5ib3h7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgbWFyZ2luOiAxJSAxJSAxJSAxJTtcbiAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7ICovXG59XG5cbi5ib3gtaGVhZGVye1xuICBjb2xvcjogIzQ0NDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4gIHNtYWxse1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOyBcbiAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS1NYXQgdGFibGUgLS0tLS1SRVNQT05TSVZFLS0tLS0tLSovXG4gIFxuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ0NvdmVyZWQgQnkgWW91ciBHcmFjZScsIGN1cnNpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAubWF0LXRhYmxlIHtcbiAgICBib3JkZXI6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxuICB9XG5cbiAgLm1hdC10YWJsZSBjYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICBcblxuICAubWF0LXRhYmxlIC5tYXQtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAvKlxuICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cbiAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cbiAgKi9cbiAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjogMiUgMiUgMiUgMiU7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogNCU7ICovXG4gIH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAvKlxuICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXG4gICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcbiAgICAqL1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gIH1cbiAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/manager/viewCampaign/viewCampaign.component.html":
/*!******************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;width:100%; height:100%;\">\n\n  <section class=\"content-header\">\n    <h2>\n      Campaign Details\n      <small>All Campaign</small>\n    </h2>\n  </section>\n\n  <div class=\"box\">\n\n    <mat-form-field [hideRequiredMarker]=\"true\" class=\"alignment\" style=\"padding-left:1%\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n  </div>\n\n  <div class=\"example-container box\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"S No\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>S No</mat-header-cell>\n        <mat-cell *matCellDef=\"let user; let i = index;\" data-label=\"S No\"> {{i+1}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"campaignName\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Campaign Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"campaignName\">{{user.campaignName | titlecase }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"startdate\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Start Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"startdate\">{{user.startdate | date: 'dd/MMM/yyyy' }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"createdByAdmin\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Created By </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"createdByAdmin\">{{user.createdByAdmin | titlecase }} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"assignToManager\">\n        <mat-header-cell *matHeaderCellDef>Assigned To </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"assignToManager\">{{user.assignToManager | titlecase }} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"createdAt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Created At </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"createdAt\">{{user.createdAt | date: 'yyyy/MM/dd'}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"campaignMembers\">\n        <mat-header-cell *matHeaderCellDef>Campaign Members</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"campaignMembers\">{{user.campaignMembers }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Campaign Status </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"status\"> {{user.status }} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayDummyData\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayDummyData\"></mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/manager/viewCampaign/viewCampaign.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCampaignComponent", function() { return ViewCampaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { FarmService } from '../../farm.service';


//For Mat table




var ViewCampaignComponent = /** @class */ (function () {
    function ViewCampaignComponent(toastrService, formBuilder, service) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true, []);
        //displayDummyData = [ 'S No', 'campingname', 'startdate', 'getCreatedByname', 'assignedtoByname', 'campingmembers','campaignStatus']
        this.displayDummyData = ['S No', 'campaignName', 'startdate', 'createdByAdmin', 'assignToManager', 'campaignMembers', 'status'];
        this.ViewCompaignboolean = false;
        this.AllCompaign = [];
        // dummyData = this.service.getDummyData();
        this.dummyData = this.AllCompaign;
    }
    ViewCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.campaignAssignedToManager().subscribe(function (data) {
            if (data['success'] === true) {
                _this.ViewCompaignboolean = true;
                _this.AllCompaign = data['message'];
                // this.CallDetailsData = data['CallDetails'];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.AllCompaign);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
            console.log(data);
        });
    };
    ViewCampaignComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //notification
    ViewCampaignComponent.prototype.showToaster = function () {
        this.toastrService.success('Data Saved Successfully');
    };
    ViewCampaignComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed to save Data');
    };
    ViewCampaignComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    ViewCampaignComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('warning : Duplicate Data');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], ViewCampaignComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], ViewCampaignComponent.prototype, "sort", void 0);
    ViewCampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewCampaign',
            template: __webpack_require__(/*! ./viewCampaign.component.html */ "./src/app/manager/viewCampaign/viewCampaign.component.html"),
            styles: [__webpack_require__(/*! ./viewCampaign.component.css */ "./src/app/manager/viewCampaign/viewCampaign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], ViewCampaignComponent);
    return ViewCampaignComponent;
}());



/***/ }),

/***/ "./src/app/manager/viewCampaign/viewCampaign.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewCampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCampaignModule", function() { return ViewCampaignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _viewCampaign_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewCampaign-routing.module */ "./src/app/manager/viewCampaign/viewCampaign-routing.module.ts");
/* harmony import */ var _viewCampaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewCampaign.component */ "./src/app/manager/viewCampaign/viewCampaign.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var ViewCampaignModule = /** @class */ (function () {
    function ViewCampaignModule() {
    }
    ViewCampaignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _viewCampaign_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewCampaignRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_viewCampaign_component__WEBPACK_IMPORTED_MODULE_4__["ViewCampaignComponent"]]
        })
    ], ViewCampaignModule);
    return ViewCampaignModule;
}());



/***/ })

}]);
//# sourceMappingURL=viewCampaign-viewCampaign-module.js.map