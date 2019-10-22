(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AssignedAgent-assignedAgent-module"],{

/***/ "./src/app/layout/AssignedAgent/assignedAgent-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AssignedAgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedAgentRoutingModule", function() { return AssignedAgentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assignedAgent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignedAgent.component */ "./src/app/layout/AssignedAgent/assignedAgent.component.ts");




var routes = [
    {
        path: '',
        component: _assignedAgent_component__WEBPACK_IMPORTED_MODULE_3__["AssignedAgentComponent"]
    }
];
var AssignedAgentRoutingModule = /** @class */ (function () {
    function AssignedAgentRoutingModule() {
    }
    AssignedAgentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AssignedAgentRoutingModule);
    return AssignedAgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\n  position: relative;\n    padding: 15px 15px 0 15px;\n    background-color:transparent;\n    font:normal\n}\n\n.box{\n  position: relative;\n    border-radius: 3px;\n    background: #ffffff;\n    border-top: 3px solid #d2d6de;\n    margin-bottom: 20px;\n    /* width: 100%; */\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n    margin: 1% 1% 1% 1%;\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\n}\n\n.box-header{\n  color: #444;\n    display: block;\n    padding: 10px;\n    position: relative;\n}\n\nsmall{\n    font-size: 15px;\n      display: inline-block;\n      padding-left: 4px;\n      font-weight: 300;\n      line-height: 1; \n      color: #777;\n      font-family: sans-serif;\n  }\n\n/*------------------Mat table -----RESPONSIVE-------*/\n\nbody {\n  font-family: 'Covered By Your Grace', cursive;\n  line-height: 1.25;\n  \n}\n\n@media screen and (max-width: 960px) {\n  .mat-table {\n    border: 0;\n    vertical-align: middle\n  }\n\n  .mat-table caption {\n    font-size: 1em;\n  }\n  \n\n  .mat-table .mat-row {\n    border-bottom: 5px solid #ddd;\n    display: block;\n  }\n  /*\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\n  */\n  .mat-table .mat-cell {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 1em;\n    text-align: right;\n    margin: 2% 2% 2% 2%;\n    /* font-weight: bold; */\n    height:30px;\n    /* margin-bottom: 4%; */\n  }\n  .mat-table .mat-cell:before {\n    /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    \n    font-size: .85em;\n  }\n  .mat-table .mat-cell:last-child {\n    border-bottom: 0;\n  }\n    .mat-table .mat-cell:first-child {\n    margin-top: 4%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0Fzc2lnbmVkQWdlbnQvYXNzaWduZWRBZ2VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsZ0dBQWdHO0FBQ3BHOztBQUVBO0VBQ0UsV0FBVztJQUNULGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUdFO0lBQ0UsZUFBZTtNQUNiLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO01BQ1gsdUJBQXVCO0VBQzNCOztBQUNBLHFEQUFxRDs7QUFJdkQ7RUFDRSw2Q0FBNkM7RUFDN0MsaUJBQWlCOztBQUVuQjs7QUFHQTtFQUNFO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOzs7RUFHQTtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0VBQ2hCO0VBQ0E7OztHQUdDO0VBQ0Q7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRTs7O0tBR0M7SUFDRCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0lBQ0U7SUFDQSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvQXNzaWduZWRBZ2VudC9hc3NpZ25lZEFnZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgZm9udDpub3JtYWxcbn1cblxuLmJveHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDJkNmRlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBtYXJnaW46IDElIDElIDElIDElO1xuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDsgKi9cbn1cblxuLmJveC1oZWFkZXJ7XG4gIGNvbG9yOiAjNDQ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbiAgc21hbGx7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7IFxuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLU1hdCB0YWJsZSAtLS0tLVJFU1BPTlNJVkUtLS0tLS0tKi9cbiAgXG5cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnQ292ZXJlZCBCeSBZb3VyIEdyYWNlJywgY3Vyc2l2ZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIFxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGJvcmRlcjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gIH1cblxuICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIFxuXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC8qXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxuICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxuICAqL1xuICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAyJSAyJSAyJSAyJTtcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbiAgICBoZWlnaHQ6MzBweDtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA0JTsgKi9cbiAgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xuICAgIC8qXG4gICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcbiAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xuICAgICovXG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgXG4gICAgZm9udC1zaXplOiAuODVlbTtcbiAgfVxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICB9XG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;width:100%; height:100%;\">\n  <div style=\"margin-right: 1%;\">\n\n    <button mat-button (click)=\"manager()\"\n      style=\"float: right;background-color:rgb(146, 84, 226); max-width: 200px; max-height: 100px; margin-top:1%; color:white\">\n      <mat-icon>add</mat-icon> Assign Agent\n    </button>\n\n  </div>\n\n  <section class=\"content-header\" style=\"max-width:50%\">\n    <h2>\n      Manager\n      <small>Agent assigned to Managers</small>\n    </h2>\n  </section>\n\n  <div class=\"box\">\n\n    <mat-form-field [hideRequiredMarker]=\"true\" class=\"alignment\" style=\"padding-left:1%\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n  </div>\n\n  <div class=\"example-container box\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"S No\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> S No. </mat-header-cell>\n        <mat-cell *matCellDef=\"let user; let i = index;\" data-label=\"S No\"> {{i+1}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"assignToManager\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Manager </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"assignToManager\"> {{row.assignToManager}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"agent\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Agent </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"agent\"> {{row.agent}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"assignedByadmin\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Assigned By Admin </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"assignedByadmin\"> {{row.assignedByadmin}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"createdAt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Created At </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"createdAt\"> {{row.createdAt | date: 'dd/MMM/yyyy h:mm:ss a'}}\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"remark\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Remark </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" data-label=\"remark\"> {{row.remark}} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssignedAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedAgentComponent", function() { return AssignedAgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");



//import { AutoDialService } from '../../autoDialer.service';



//For Mat table




var AssignedAgentComponent = /** @class */ (function () {
    function AssignedAgentComponent(toastrService, formBuilder, service, router) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        // Flags that control the expansion panel
        this.f_firstPanel = false;
        this.M_firstPanel = false;
        this.f_secondPanel = false;
        this.displayedColumns = ['S No', 'assignToManager', 'agent', 'assignedByadmin', 'createdAt', 'remark'];
    }
    AssignedAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllAssignedAgent().subscribe(function (data) {
            _this.AllAssignedAgents = data['message'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.AllAssignedAgents);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        this.service.getAllManagers().subscribe(function (data) {
            _this.Manager = data['message'];
        });
        this.M_firstPanel = true;
        this.f_firstPanel = true;
    };
    AssignedAgentComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AssignedAgentComponent.prototype.getAgent = function () {
        //this.dataSource=[];
        if (this.managerId) {
            // this.object = { managerid : this.managerId }
            // this.service.getAllAssignedAgent(this.object).subscribe((data)=>{
            //     this.dataSource = new MatTableDataSource(data['message']);
            //     this.f_secondPanel = true;
            // })
        }
    };
    //-------------------------------------------------------------------
    AssignedAgentComponent.prototype.manager = function () {
        alert('manager calling');
        this.router.navigate(['/admin/manager']);
    };
    //-------------------------------------------------------------------------------
    AssignedAgentComponent.prototype.editTrainer = function () {
        // this.selectedTrainer = trainer; 
        this.f_firstPanel = false;
        this.f_secondPanel = true;
    };
    AssignedAgentComponent.prototype.cancelEdit = function () {
        this.f_firstPanel = true;
        this.f_secondPanel = false;
    };
    AssignedAgentComponent.prototype.finishEdit = function () {
        this.f_firstPanel = true;
        this.f_secondPanel = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], AssignedAgentComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"])
    ], AssignedAgentComponent.prototype, "sort", void 0);
    AssignedAgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignedAgent',
            template: __webpack_require__(/*! ./assignedAgent.component.html */ "./src/app/layout/AssignedAgent/assignedAgent.component.html"),
            styles: [__webpack_require__(/*! ./assignedAgent.component.css */ "./src/app/layout/AssignedAgent/assignedAgent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AssignedAgentComponent);
    return AssignedAgentComponent;
}());



/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.module.ts ***!
  \**************************************************************/
/*! exports provided: AssignedAgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedAgentModule", function() { return AssignedAgentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assignedAgent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignedAgent-routing.module */ "./src/app/layout/AssignedAgent/assignedAgent-routing.module.ts");
/* harmony import */ var _assignedAgent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignedAgent.component */ "./src/app/layout/AssignedAgent/assignedAgent.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var AssignedAgentModule = /** @class */ (function () {
    function AssignedAgentModule() {
    }
    AssignedAgentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _assignedAgent_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssignedAgentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_assignedAgent_component__WEBPACK_IMPORTED_MODULE_4__["AssignedAgentComponent"]]
        })
    ], AssignedAgentModule);
    return AssignedAgentModule;
}());



/***/ })

}]);
//# sourceMappingURL=AssignedAgent-assignedAgent-module.js.map