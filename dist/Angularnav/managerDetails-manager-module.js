(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["managerDetails-manager-module"],{

/***/ "./src/app/layout/managerDetails/assignAgent.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/managerDetails/assignAgent.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!---------------------------------------------------------------------------------------------------------->\n    <section id=\"basic-form-layouts\">\n      <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n          <div class=\"content-header\" style=\"text-align:center\">\n          <!-- <h2> Feedback </h2> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"row text-left\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n  \n            <div class=\"card-content\">\n              <div class=\"px-3\">\n                <form class=\"form\" style=\"text-align:center\">\n                  <div class=\"form-body\">\n                    <h4 class=\"form-section\" style=\"text-align:center;padding:3%\" ><i class=\"ft-user\"></i> Assign Agent to Manager</h4>\n                    <div class=\"row\">\n                          <div class=\"col\">\n                \n                            <mat-form-field>\n                              <mat-label>Manger Name</mat-label>\n                            \n                              <input matInput placeholder=\"Caller Name\"  [(ngModel)]=\"data.Manager.ManagerName\" name=\"managerName\" [value]=\"\" disabled>\n                            </mat-form-field>\n                          </div>\n                          <div class=\"col\">\n                  \n                            <mat-form-field>\n                              <mat-label>E-mail</mat-label>\n                              <input  matInput  placeholder=\"email\" [(ngModel)]=\"data.Manager.ManagerEmail\" name=\"ManagerEmail\" [value]=\"\" disabled>                             \n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                              <div class=\"col-md-6\">\n                    \n                                <mat-form-field>\n                                  <mat-label>Running Campaign</mat-label>\n                                  <input  matInput  placeholder=\"Running Campaing\"  [(ngModel)]=\"data.Manager.Running\" name=\"Running\" [value]=\"\" disabled>                             \n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                            \n                                <mat-form-field>\n                                  <mat-label>Stopped Campaign</mat-label>\n                                  <input  matInput  placeholder=\"Stopped Campaign\"   [(ngModel)]=\"data.Manager.Stop\" name=\"Stop\" [value]=\"\" disabled>                             \n                                </mat-form-field>\n                              </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                              <div class=\"col-md-6\">\n                    \n                                <mat-form-field>\n                                  <mat-label>Campaign in Queue</mat-label>\n                                  <input  matInput  placeholder=\"Campaign in Queue\"  [(ngModel)]=\"data.Manager.Queue\" name=\"Queue\" [value]=\"\" disabled>                             \n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                            \n                                <mat-form-field>\n                                  <mat-label>Campaign Completed</mat-label>\n                                  <input  matInput  placeholder=\"Campaign Completed\"   [(ngModel)]=\"data.Manager.Completed\" name=\"Completed\" [value]=\"\" disabled>                             \n                                </mat-form-field>\n                              </div>\n                            </div>\n\n                            \n                            <div class=\"row\">\n                              <div class=\"col-md-6\">\n                    \n                                <mat-form-field>\n                                  <mat-label> Campaign Idle</mat-label>\n                                  <input  matInput  placeholder=\"Running Campaing\"  [(ngModel)]=\"data.Manager.Idle\" name=\"Idle\" [value]=\"\" disabled>                             \n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                               \n                                  <!-- <mat-label>Manger Id</mat-label> -->\n                                  <!-- <input  matInput  placeholder=\"ManagerId\"   [(ngModel)]=\"data.managerId\" name=\"managerId\" [value]=\"\" hidden>    -->\n                                                     \n                               \n                                <!-- <mat-form-field>\n                                  <mat-label>Stopped Campaign</mat-label>\n                                  <input  matInput  placeholder=\"Stopped Campaign\"   [(ngModel)]=\"data.Manager.Stop\" name=\"Stop\" [value]=\"\" disabled>                             \n                                </mat-form-field> -->\n                              </div>\n                            </div>\n\n    \n                    <h4 class=\"form-section\"><i class=\"ft-file-text\"></i> Assign Agent</h4>\n    \n                    <div class=\"row\">\n                        <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n                    <mat-form-field style=\"width:100%\">\n                      <mat-label>Add Remark</mat-label>\n                      <textarea matInput placeholder=\"Leave a comment\"   [(ngModel)]=\"data.remark\" name=\"remark\" value=\"\" required></textarea>                           \n                    </mat-form-field>\n                  </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n                        <mat-form-field style=\"width:100%\">\n                          <mat-label>Available  Agent</mat-label>\n                          \n                           <mat-select [(ngModel)]=\"data.agentId\" name=\"agentId\" required>\n                              <mat-option *ngFor=\"let item of data.Agent.data\" [value]=\"item.id\">\n                                {{item.firstName}} {{item.lastName}}\n                              </mat-option>\n                            </mat-select>\n                             </mat-form-field> \n                  </div>\n                  </div>\n  \n                  </div>\n    \n                  <div class=\"form-actions\" style=\"padding:3%\">\n                          <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\"\n                          style=\"width:100px\">Submit</button>\n                \n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n      </div>\n  </section>   \n  \n  \n<!------------------------------------------------------------------------------>\n\n\n\n<!-- <h2 mat-dialog-title style=\"text-align: center\">FeedBack</h2> -->\n<!-- \n<mat-dialog-content style=\"justify-content: center;\">\n  <div class=\"px-3\">\n    <form class=\"form\">\n      <div class=\"form-body\">\n        <h4 class=\"form-section\"><i class=\"ft-user\"></i> Manager Info</h4>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n\n            <mat-form-field>\n              <mat-label>Manger Name</mat-label>\n              <input  matInput  placeholder=\"Caller Name\"   name=\"name\" value=\"Annop Jain\" disabled>   \n                                 \n            </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n  \n            <mat-form-field>\n              <mat-label>E-mail</mat-label>\n              <input  matInput  placeholder=\"email\"  name=\"email\" value=\"anoop@moreyeahs.in\" disabled>                             \n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n\n            <mat-form-field>\n              <mat-label>Running Campaign</mat-label>\n              <input  matInput  placeholder=\"Running Campaing\"   name=\"runningCampaign\" value=\"1\" disabled>                             \n            </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n        \n            <mat-form-field>\n              <mat-label>Stopped Campaign</mat-label>\n              <input  matInput  placeholder=\"Stopped Campaign\"   name=\"StoppedCampaign\" value=\"0\" disabled>                             \n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n     \n            <mat-form-field>\n              <mat-label>Campaign in Queue</mat-label>\n              <input  matInput  placeholder=\"Campaign in Queue\"   name=\"campaignInQueue\" value=\"1\" disabled>                             \n            </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n   \n            <mat-form-field>\n              <mat-label>Campaign Completed</mat-label>\n              <input  matInput  placeholder=\"Campaign Completed\"   name=\"campaignCompleted\" value=\"5\" disabled>                             \n            </mat-form-field>\n          </div>\n        </div>\n\n        <h4 class=\"form-section\"><i class=\"ft-file-text\"></i> Assign Agent</h4>\n\n  \n\n        <div class=\"row\">\n\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"projectinput6\">Available Agent</label>\n              <select id=\"projectinput6\" name=\"budget\" class=\"form-control\">\n                <option value=\"0\" selected=\"\" disabled=\"\">Agent</option>\n                <option value=\"1\">Shruit</option>\n                <option value=\"2\">Ravi</option>\n                <option value=\"3\">Shivam</option>\n                <option value=\"4\">Raj</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n\n        <mat-form-field style=\"width:100%\">\n          <mat-label>Add Remark</mat-label>\n          <textarea matInput placeholder=\"Leave a comment\"  name=\"comment\" value=\"\" required></textarea>                           \n        </mat-form-field>\n      </div>\n\n      <div class=\"form-actions\">\n        <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\">\n          <i class=\"ft-x\"></i> Cancel\n        </button>\n        <button type=\"button\" class=\"btn btn-raised btn-raised btn-primary\">\n          <i class=\"fa fa-check-square-o\"></i> Save\n        </button>\n      </div>\n    </form>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\n   \n\n</mat-dialog-actions> -->"

/***/ }),

/***/ "./src/app/layout/managerDetails/manager-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/managerDetails/manager-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRoutingModule", function() { return ManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager.component */ "./src/app/layout/managerDetails/manager.component.ts");




var routes = [
    {
        path: '',
        component: _manager_component__WEBPACK_IMPORTED_MODULE_3__["ManagerComponent"]
    }
];
var ManagerRoutingModule = /** @class */ (function () {
    function ManagerRoutingModule() {
    }
    ManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManagerRoutingModule);
    return ManagerRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/managerDetails/manager.component.css":
/*!*************************************************************!*\
  !*** ./src/app/layout/managerDetails/manager.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\n    position: relative;\n      padding: 15px 15px 0 15px;\n      background-color:transparent;\n      font:normal\n  }\n  \n  .box{\n    position: relative;\n      border-radius: 3px;\n      background: #ffffff;\n      border-top: 3px solid #d2d6de;\n      margin-bottom: 20px;\n      /* width: 100%; */\n      box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n      margin: 1% 1% 1% 1%;\n      /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\n  }\n  \n  .box-header{\n    color: #444;\n      display: block;\n      padding: 10px;\n      position: relative;\n  }\n  \n  h2{\n    margin: 0;\n    font-size: 28px;\n    font:normal;\n    font-weight:normal;\n  \n  }\n  \n  h3{\n    display: inline-block;\n    font-size: 18px;\n    margin: 0;\n    line-height: 1;\n    font:normal;\n    font-weight:normal;\n  }\n  \n  .pointer {cursor: pointer;}\n  \n  h6{\n    color:black;\n  }\n  \n  /*For table*/\n  \n  /* td{\n   padding:16px;\n  }  */\n  \n  tr{\n    height:58px;\n }\n  \n  small{\n    font-size: 15px;\n      display: inline-block;\n      padding-left: 4px;\n      font-weight: 300;\n      line-height: 1; \n      color: #777;\n      font-family: sans-serif;\n  }\n  \n  .my-form{\n      min-width: 150px;\n      max-width: 500px;\n      width: 80%;\n    }\n  \n  .full-width {\n      width: 60%;\n    }\n  \n  .center{\n      width: 75%;\n      margin: 10px auto;\n    }\n  \n  .main-div{\n      height: 100vh;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  \n  table {\n      width: 100%;\n      /* margin: 20px 20px 20px 20px;  */\n    }\n  \n  .add-files-btn {\n      float: right;\n    }\n  \n  :host {\n      height: 100%;\n      display: flex;\n      flex: 1;\n      flex-direction: column;\n    }\n  \n  .actions {\n      justify-content: flex-end;\n    }\n  \n  .container {\n      height: 100%;\n    }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21hbmFnZXJEZXRhaWxzL21hbmFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtNQUNoQix5QkFBeUI7TUFDekIsNEJBQTRCO01BQzVCO0VBQ0o7O0VBRUE7SUFDRSxrQkFBa0I7TUFDaEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixxQ0FBcUM7TUFDckMsbUJBQW1CO01BQ25CLGdHQUFnRztFQUNwRzs7RUFFQTtJQUNFLFdBQVc7TUFDVCxjQUFjO01BQ2QsYUFBYTtNQUNiLGtCQUFrQjtFQUN0Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7SUFDVCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFDQSxVQUFVLGVBQWUsQ0FBQzs7RUFFMUI7SUFDRSxXQUFXO0VBQ2I7O0VBRUEsWUFBWTs7RUFDWjs7TUFFSTs7RUFDTDtJQUNHLFdBQVc7Q0FDZDs7RUFFQztJQUNFLGVBQWU7TUFDYixxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsV0FBVztNQUNYLHVCQUF1QjtFQUMzQjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsVUFBVTtJQUNaOztFQUVBO01BQ0UsVUFBVTtJQUNaOztFQUdBO01BQ0UsVUFBVTtNQUNWLGlCQUFpQjtJQUNuQjs7RUFFQTtNQUNFLGFBQWE7TUFDYixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxrQ0FBa0M7SUFDcEM7O0VBRUE7TUFDRSxZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLE9BQU87TUFDUCxzQkFBc0I7SUFDeEI7O0VBRUE7TUFDRSx5QkFBeUI7SUFDM0I7O0VBRUE7TUFDRSxZQUFZO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFuYWdlckRldGFpbHMvbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAwIDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgICAgZm9udDpub3JtYWxcbiAgfVxuICBcbiAgLmJveHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkMmQ2ZGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgbWFyZ2luOiAxJSAxJSAxJSAxJTtcbiAgICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDsgKi9cbiAgfVxuICBcbiAgLmJveC1oZWFkZXJ7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIGgye1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udDpub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICBcbiAgfVxuICBcbiAgaDN7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDpub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICB9XG4gIC5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxuICBcbiAgaDZ7XG4gICAgY29sb3I6YmxhY2s7XG4gIH1cbiAgXG4gIC8qRm9yIHRhYmxlKi9cbiAgLyogdGR7XG4gICBwYWRkaW5nOjE2cHg7XG4gIH0gICovXG4gdHJ7XG4gICAgaGVpZ2h0OjU4cHg7XG4gfVxuICBcbiAgc21hbGx7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7IFxuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLm15LWZvcm17XG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgICBcbiAgICAuZnVsbC13aWR0aCB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH0gXG4gIFxuICBcbiAgICAuY2VudGVye1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAubWFpbi1kaXZ7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLyogbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4OyAgKi9cbiAgICB9XG4gIFxuICAgIC5hZGQtZmlsZXMtYnRuIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgXG4gICAgOmhvc3Qge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aW9ucyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgICBcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/layout/managerDetails/manager.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layout/managerDetails/manager.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;\">\n\n    <section class=\"content-header\" style=\"max-width:50%\">\n        <h2>\n            Manager\n            <small>All Managers</small>\n        </h2>\n    </section>\n\n    <div class=\"box\">\n        <div>\n\n            <table mat-table matSort [dataSource]=\"ManagerData\" style=\"width:100%\">\n                <ng-container matColumnDef=\"S No\">\n\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\n                        <h6>S No </h6>\n                    </th>\n                    <td mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\n                        <h6>Manager Name </h6>\n                    </th>\n                    <td mat-cell *matCellDef=\"let user\"> {{user.users.firstName | titlecase }} {{user.users.lastName | titlecase }}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"email\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\n                        <h6> Email </h6>\n                    </th>\n                    <td mat-cell *matCellDef=\"let user\"> {{user.users.email}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"associatedCampaign\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\n                        <h6> Associated Campaign </h6>\n                    </th>\n                    <td mat-cell *matCellDef=\"let user\"> {{user.associatedCampaign}}\n                       </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"agents\">\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\n                        <h6> Assigned Agent </h6>\n                    </th>\n                    <td mat-cell *matCellDef=\"let user\"> {{user.assignedAgents}}</td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"removeAgent\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <h6> Remove Agent </h6>\n                    </th>\n                    <td mat-cell *matCellDef=\"let user\" style=\"min-width: 50px;text-align: center\">\n                        <button mat-raised-button style=\"color:#ce2b2b;\">  Remove Agent  </button>\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"assignAgent\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <h6> Assign Agent </h6>\n                    </th>\n                    <td mat-cell *matCellDef=\"let user\" style=\"min-width: 50px;text-align: center\">\n                        <button mat-raised-button color=\"primary\" (click)=\"assignAgent(user._id)\">  Assign Agent  </button>\n                 \n                    </td>\n                </ng-container>\n  \n                <tr mat-header-row *matHeaderRowDef=\"manager\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: manager;\"></tr>\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n\n\n            </table>\n        </div>\n    </div>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/layout/managerDetails/manager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/managerDetails/manager.component.ts ***!
  \************************************************************/
/*! exports provided: ManagerComponent, AssignAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAgentComponent", function() { return AssignAgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");








//Dialog Box

var ManagerComponent = /** @class */ (function () {
    function ManagerComponent(toastrService, formBuilder, service, dialog) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.dialog = dialog;
        this.manager = ['S No', 'name', 'email', 'associatedCampaign', 'agents', 'assignAgent'];
    }
    ManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getManagerDetails().subscribe(function (data) {
            console.log(data);
            _this.ManagerData = data['data'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.ManagerData);
            // Assign the paginator *after* dataSource is set
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ManagerComponent.prototype.assignAgent = function (managerId) {
        var _this = this;
        this.service.getAvailabelAgent().subscribe(function (data) {
            console.log('available agent', data);
            _this.AvailableAgent = data;
        });
        this.service.getSingleManagerDetails(managerId).subscribe(function (data) {
            console.log('manager Details', data);
            _this.ManagerDetails = data;
            if (_this.ManagerDetails.success == true) {
                var running = 0;
                var queue = 0;
                var stop_1 = 0;
                var completed = 0;
                var idle = 0;
                var managerName = void 0;
                var managerEmail = void 0;
                var managerId_1;
                if (_this.ManagerDetails.getManager) {
                    if (_this.ManagerDetails.getManager[0].users) {
                        managerName = _this.ManagerDetails.getManager[0].users.firstName + "  " + _this.ManagerDetails.getManager[0].users.lastName;
                        managerEmail = _this.ManagerDetails.getManager[0].users.email;
                        managerId_1 = _this.ManagerDetails.getManager[0]._id;
                    }
                }
                debugger;
                if (_this.ManagerDetails.campaignDetails.length > 0) {
                    for (var i = 0; i < _this.ManagerDetails.campaignDetails.length; i++) {
                        if (_this.ManagerDetails.campaignDetails[i].campingStatus != undefined) { //ManagerHistory
                            if (_this.ManagerDetails.campaignDetails[i].campingStatus.status == 1) {
                                running++;
                            }
                            else if (_this.ManagerDetails.campaignDetails[i].campingStatus.status == 2) {
                                queue++;
                            }
                            else if (_this.ManagerDetails.campaignDetails[i].campingStatus.status == 3) {
                                stop_1++;
                            }
                            else if (_this.ManagerDetails.campaignDetails[i].campingStatus.status == 4) {
                                completed++;
                            }
                        }
                        else {
                            idle++;
                        }
                    }
                }
                // obj
                _this.ManagerHistory = {
                    ManagerName: managerName,
                    ManagerEmail: managerEmail,
                    managerId: managerId_1,
                    Running: running,
                    Queue: queue,
                    Stop: stop_1,
                    Completed: completed,
                    Idle: idle
                };
                //}
                _this.openDialog(_this.AvailableAgent, _this.ManagerHistory);
            }
            //  this.openDialog(this.AvailableAgent, this.ManagerHistory)
        });
    };
    ManagerComponent.prototype.openDialog = function (agent, manager) {
        var _this = this;
        var dialogRef = this.dialog.open(AssignAgentComponent, {
            width: '650px',
            data: { Agent: agent, Manager: manager }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            if (result) {
                if (result['agentId'] && result['managerId']) {
                    _this.service.assignAgentToManager(result).subscribe(function (data) {
                        console.log(data);
                    });
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], ManagerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], ManagerComponent.prototype, "sort", void 0);
    ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agentToManager',
            template: __webpack_require__(/*! ./manager.component.html */ "./src/app/layout/managerDetails/manager.component.html"),
            styles: [__webpack_require__(/*! ./manager.component.css */ "./src/app/layout/managerDetails/manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], ManagerComponent);
    return ManagerComponent;
}());

// assign Agent to manager dialog Box
var AssignAgentComponent = /** @class */ (function () {
    function AssignAgentComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log('feedback details', data);
        data['managerId'] = data['Manager']['managerId'];
    }
    AssignAgentComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AssignAgentComponent.prototype.cancel = function () {
    };
    AssignAgentComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    AssignAgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'assignAgent',
            template: __webpack_require__(/*! ./assignAgent.component.html */ "./src/app/layout/managerDetails/assignAgent.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], AssignAgentComponent);
    return AssignAgentComponent;
}());



/***/ }),

/***/ "./src/app/layout/managerDetails/manager.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/managerDetails/manager.module.ts ***!
  \*********************************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager-routing.module */ "./src/app/layout/managerDetails/manager-routing.module.ts");
/* harmony import */ var _manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager.component */ "./src/app/layout/managerDetails/manager.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var ManagerModule = /** @class */ (function () {
    function ManagerModule() {
    }
    ManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            entryComponents: [
                _manager_component__WEBPACK_IMPORTED_MODULE_4__["AssignAgentComponent"]
            ],
            declarations: [_manager_component__WEBPACK_IMPORTED_MODULE_4__["ManagerComponent"], _manager_component__WEBPACK_IMPORTED_MODULE_4__["AssignAgentComponent"]]
        })
    ], ManagerModule);
    return ManagerModule;
}());



/***/ })

}]);
//# sourceMappingURL=managerDetails-manager-module.js.map