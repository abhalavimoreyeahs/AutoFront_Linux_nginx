(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-adminDashboard-module"],{

/***/ "./src/app/layout/admin/adminDashboard-routing.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard-routing.ts ***!
  \********************************************************/
/*! exports provided: AdminDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardRoutingModule", function() { return AdminDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminDashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminDashboard.component */ "./src/app/layout/admin/adminDashboard.component.ts");




var routes = [
    {
        path: '',
        component: _adminDashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]
    }
];
var AdminDashboardRoutingModule = /** @class */ (function () {
    function AdminDashboardRoutingModule() {
    }
    AdminDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminDashboardRoutingModule);
    return AdminDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/admin/adminDashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\np {\n    font-family: Lato;\n  }\n  table{\n    width: 95%;\n  }\n  #upload_button {\n    display: inline-block;\n  }\n  #upload_button input[type=file] {\n    display:none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluRGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluRGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnAge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB9XG4gIHRhYmxle1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbiAgI3VwbG9hZF9idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAjdXBsb2FkX2J1dHRvbiBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/layout/admin/adminDashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mainDiv\" style=\"background-color:#ecf0f5\"> \n  <div class=\"content-wrapper\" style=\"padding: 1.8rem;\">\n   <div class=\"content-header row\">\n   \n   </div>\n   <div class=\"content-body\">\n    <div class=\"row\">\n      <div class=\"col-sm\"> \n          <div class=\"card\">\n              <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#00cc6a, #4cdb96);\">\n                  <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/right.png\" style=\"width: 50px;  height: 40px;\">\n                    </div>\n                      <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                          <h5>Successfully Call Placed</h5>\n                          <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i>{{successfullCall}}</h5>\n                      </div>\n                  </div>\n              </div>\n          </div> </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF425C, #FF7588 );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/ringing.png\" style=\"width: 50px;  height: 40px; transform: rotate(10deg);\">\n                    \n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent Active on Call</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{agentOnCall}}</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n     </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF864A, #FFA87D );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent On Call Back</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{callback}}</h5>\n                    </div>\n                </div>\n            </div>\n        </div> </div>\n     <div class=\"col-sm\"> \n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #11A578, #32EAB2 );\">\n                <div class=\"media align-items-stretch\">\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                    <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                  </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent on Break</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{ agentOnBreak}}</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n       </div>\n    </div>\n    <div class= \"row\" style=\"margin-top:1%\">\n        <div class=\"col-sm\"> \n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,  #008385, #00E7EB  );\">\n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                          <img src=\"../../assets/—Pngtree—agents_1261867@2x.png\" style=\"width: 50px;  height: 40px;\">                      \n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >                       \n                            <h5>Agents Waiting For Call</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{agentWaitingForCall}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#FF6347, #FF917E);\"> \n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/phone-hang-up@2x.png\" style=\"width: 50px;  height: 40px;\">\n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5>Call Hangup By Agent</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{CallDisconnedtedByAgent}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #1AB0C3, #5AD9E9 );\">\n                    <div class=\"media align-items-stretch\">\n                        <div style=\"width:100px; height:90px\">\n                          <i class=\"material-icons\" style=\"font-size:58px;padding:15% 15% 15% 15%;color:white\">group</i>\n                        </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5> Call Hangup by Customer</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{CallDisconnedtedByCustomer}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#ef4f4f, #f37b7b  );\">\n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/calendar-with-a-clock-time-tools (2)@2x.png\" style=\"width: 50px;  height: 40px;\">\n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >                        \n                            <h5>Call Failed</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{CallFailed}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n        </div>\n    </div>\n    <div class=\"row match-height\" style=\"margin-top:1%\">\n      <div  class=\"col-xl-8 col-lg-12\">\n          <div class=\"card\" style=\"width:100%; height:402px\">\n              <!-- <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Call Status</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div> -->\n\n            \n              <div class=\"chart-container\" style=\"position: relative; height:100%; width:100%; padding:2% 2% 2% 2%\">    \n                  <canvas *ngIf=\"BarChartlabel\" id=\"doubleBarChart\" style=\"width:100%; height:100% \">{{ BarChart }}</canvas>  \n                </div> \n       \n          </div>  \n    </div>\n    <div  class=\"col-xl-4 col-lg-12\">\n\n          \n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div >\n                        <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;margin: 2% 2% 2% 2%;text-align:center\">Agent Status</h4><hr>\n                    </div>\n                    <div class=\"card-body sales-growth-chart\">\n                 \n                       <canvas id=\"canvasDoughnut\" class=\"height-250\" style=\"position: relative;\" >{{ DoughnutChart }}</canvas>   \n                    </div>\n                    \n                </div>\n    \n            </div>\n    </div>\n    </div>\n    <div class=\"row match-height\" style=\"margin-top:1%\">\n        <div  class=\"col-xl-4 col-lg-12\">\n            <div class=\"card\" style=\"width:100%; height:402px\">\n                <div class=\"card-header\" style=\"background-color: none;\">\n                    <h4 class=\"card-title\" style=\"font-weight:normal\">Todays Call Status</h4>\n                    <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                    <div class=\"heading-elements\">\n                        <ul class=\"list-inline mb-0\">\n                            <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                            <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"card-content\">\n             \n                    <div class=\"table-responsive\">\n                        <table id=\"recent-orders\" class=\"table table-hover mb-0 ps-container ps-theme-default\" style=\"font-size: 1rem; font-weight: 400;  line-height: 2.45;width: 100%\">\n                            <thead>\n                                <tr>\n                                    <!-- <th>SKU</th>\n                              \n                                    <th>Status</th>\n                                    <th>Call</th> -->\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td class=\"text-truncate\">Call Picked Up By Customer</td>\n                           \n                                    <td class=\"text-truncate\"><span class=\"badge badge-success\"> Successful</span></td>\n                                    <td class=\"text-truncate\">{{TodaysuccessfullCall}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"text-truncate\">Being Called</td>\n                          \n                                    <td class=\"text-truncate\"><span class=\"badge badge-warning\">on call</span></td>\n                                    <td class=\"text-truncate\">{{customerOnCall}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"text-truncate\">Feedback submitted </td>\n                              \n                                    <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                                    <td class=\"text-truncate\">{{TodayfeedbackSubmitted}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"text-truncate\">Ringing Time out </td>\n                              \n                                    <td class=\"text-truncate\"><span class=\"badge badge-warning\">call canceled by plivo </span></td>\n                                    <td class=\"text-truncate\">{{TodayCallDisconnedtedByPlivo}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"text-truncate\"><h5 style=\"color:red\"><b>Call Failed</b></h5> </td>\n                    \n                                    <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                                    <td class=\"text-truncate\"><h5 style=\"color:red\"><b>{{TodayCallFailed}}</b></h5></td>\n                                </tr>\n                        \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"height: 402px;\">\n          <div class=\"card-header\" style=\"background-color: white;\">\n              <h4 class=\"card-title\" style=\"font-weight:normal\">Campaings </h4>\n              <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n              <div class=\"heading-elements\">\n                  <ul class=\"list-inline mb-0\">\n                      <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                      <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                  </ul>\n              </div>\n          </div>\n          <div class=\"card-content\">\n              <div class=\"table-responsive\">\n                  <table id=\"recent-orders\" class=\"table table-hover mb-0 ps-container ps-theme-default\" style=\"font-size: 1rem; font-weight: 400;  line-height: 1.45;width:100%\">\n                      <thead>\n\n                      </thead>\n                      <tbody>\n                          <tr *ngIf=\"RunningCampaign.name\">\n                              <td class=\"text-truncate\">Campaign Running now: <h5 style=\"color:hotpink\"><b>{{RunningCampaign.name | titlecase}} </b> </h5></td>\n                              <td class=\"text-truncate\"> Total Customers: <h5 style=\"color:green\"><b>{{RunningCampaign.customers}} </b></h5></td>\n                          </tr>\n\n                          <tr>\n                              <td class=\"text-truncate\">Campaign in Queue </td>\n                              <td class=\"text-truncate\"> <h5 style=\"color:green\"><b> {{QueueCount}} </b></h5></td>\n                          </tr>\n                                    \n                      </tbody>\n                  </table>\n                  <table id=\"recent-orders\" class=\"table table-hover mb-0 ps-container ps-theme-default\" style=\"font-size: 1rem; font-weight: 400;  line-height: 1.45;width:100%\">\n                    <thead>\n                      <tr>\n                         <th>Campaign Name</th> \n                         <th>Queue Status</th> \n                         <th>Total Customers</th> \n                        <!-- <th>Status</th>\n                        <th>Call</th> -->\n                    </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let data of campaignInQueue;\">\n                        <td class=\"text-truncate\">{{data.campaignName | titlecase}} </td>\n                        <td class=\"text-truncate\">{{data.queueStatus}}</td>\n                        <td class=\"text-truncate\">{{data.customers}}</td>\n                    </tr>\n                                  \n                    </tbody>\n                </table>\n              </div>\n\n          </div>\n    </div>\n\n    </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"width:100%; height:402px\">\n          <div class=\"card-header\" style=\"background-color: white;\">\n              <h4 class=\"card-title\" style=\"font-weight:normal;text-align: center\">Running Campaign Status</h4>\n              <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n              <div class=\"heading-elements\">\n                  <ul class=\"list-inline mb-0\">\n                      <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                      <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                  </ul>\n              </div>\n          </div>\n          <div class=\"card-content\">\n              <!-- <div class=\"card-body\">\n                  <p>Total paid invoices 240, unpaid 150. <span class=\"float-right\"><a href=\"project-summary.html\" target=\"_blank\">Invoice Summary <i class=\"ft-arrow-right\"></i></a></span></p>\n              </div> -->\n              <div class=\"table-responsive\">\n                  <table id=\"recent-orders\" class=\"table table-hover mb-0 ps-container ps-theme-default\" style=\"font-size: 1rem; font-weight: 400;  line-height: 2.45;width:100%;padding:1% 1% 1% 1%\">\n                      <thead>\n                          <tr>\n                              <!-- <th>SKU</th> -->\n                              <!-- <th>Invoice#</th> -->\n                              <!-- <th>Customer Name</th> -->\n                              <!-- <th>Status</th>\n                              <th>Call</th> -->\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td class=\"text-truncate\">Running Campaign Name</td>\n                              <!-- <td class=\"text-truncate\"><a href=\"#\">INV-001001</a></td> -->\n                              <!-- <td class=\"text-truncate\">Elizabeth W.</td> -->\n                              <td class=\"text-truncate\"><span class=\"badge badge-success\">Running</span></td>\n                              <td class=\"text-truncate\" ><h5 style=\"color:green\"><b>{{ RunningCampaignDetails.campaignName | titlecase }}</b></h5></td>\n                          </tr>\n                          <tr>\n                              <td class=\"text-truncate\">Campaign Assign to Manager</td>\n                              <!-- <td class=\"text-truncate\"><a href=\"#\">INV-01112</a></td> -->\n                              <!-- <td class=\"text-truncate\">Doris R.</td> -->\n                              <td class=\"text-truncate\"><span class=\"badge badge-warning\"></span></td>\n                              <td class=\"text-truncate\">{{ RunningCampaignDetails.manager }}</td>\n                          </tr>\n                          <tr>\n                              <td class=\"text-truncate\">Total Customers</td>\n                              <!-- <td class=\"text-truncate\"><a href=\"#\">INV-001012</a></td> -->\n                              <!-- <td class=\"text-truncate\">Andrew D.</td> -->\n                              <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                              <td class=\"text-truncate\">{{RunningCampaignDetails.totalCustomer}}</td>\n                          </tr>\n                          <tr>\n                              <td class=\"text-truncate\">Contacts called</td>\n                              <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                              <td class=\"text-truncate\">{{ RunningCampaignDetails.customerCalled}}</td>\n                          </tr>\n                          <tr>\n                            <td class=\"text-truncate\">Contacts remaining </td>\n                            <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                            <td class=\"text-truncate\">{{ RunningCampaignDetails.customerRemaining}}</td>\n                        </tr>\n                  \n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div> \n      </div>\n\n      </div>\n   \n   </div>\n  \n  </div>\n \n </div>\n"

/***/ }),

/***/ "./src/app/layout/admin/adminDashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/manager.service */ "./src/app/shared/services/manager.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { AutoDialService } from '../../autoDialer.service';



//For piechart

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(toastrService, formBuilder, service, managerService) {
        var _this = this;
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.managerService = managerService;
        //dataSource = new UserDataSource(this.service);
        this.dataSource = this.service.getUsers();
        this.displayedColumns = ['name', 'email', 'phone', 'edit'];
        this.dummyData = this.service.getDummyData();
        this.displayData = ['S No', 'Name', 'Age', 'DOB', 'Mobile', 'Domicile', 'City'];
        this.agentOnBreak = 0;
        this.agentOnCall = 0;
        this.agentWaitingForCall = 0;
        this.hangupSourceAgent = 0;
        this.hangupSourceCustomer = 0;
        this.callPlacedSuccessfully = 0;
        this.callFailed = 0;
        this.callback = 0;
        this.callInfoLabel = [];
        this.callInfoData = [];
        //Today's Call Details: 
        this.TodayCallDisconnedtedByCustomer = 0;
        this.TodayCallDisconnedtedByAgent = 0;
        this.TodayCallDisconnedtedByPlivo = 0;
        this.TodayCallFailed = 0;
        this.TodaysuccessfullCall = 0;
        this.TodayfeedbackSubmitted = 0;
        this.customerOnCall = 0;
        //callInfo 
        this.CallDisconnedtedByCustomer = 0;
        this.CallDisconnedtedByAgent = 0;
        this.CallDisconnedtedByPlivo = 0;
        this.CallFailed = 0;
        this.successfullCall = 0;
        //dashboard
        this.AgentStatus = [0, 0, 0, 0, 0, 0];
        this.campaignInQueue = [];
        this.QueueCount = 0;
        this.RunningCampaign = { name: 'None', customers: 0 };
        this.RunningCampaignDetails = {};
        // BarChart successful unsuccessful
        this.BarChartlabel = [];
        this.data1Success = [];
        this.data2Unsuccess = [];
        this.callTimeOut = [];
        this.callBusy = [];
        //  getCallInfo(){
        //    let data ={ week: true}
        //    this.service.getAdminDashboardCallInfo(data).subscribe((data)=>{
        //      console.log('Dashboard:',data);
        //      if(data['success'] == true){
        //      for(let i= 0 ; i< data['ArrayData'].length ; i++){
        //       this.callInfoLabel.push(data['ArrayData'][i]['day']);
        //       this.callInfoData.push(data['ArrayData'][i]['count']);
        //       //debugger;
        //       }
        //      }
        //      console.log('Label:',this.callInfoLabel);
        //      console.log('Data:',this.callInfoData)
        //    })
        //  }
        //chart
        this.Status = ['Active', 'Manual Dial', 'Callback', 'Break', 'Training', 'Meeting with customer'];
        this.data = [8, 5, 1, 3, 2, 0];
        this.Color = ['rgb(0, 227, 150)', 'rgb(0, 143, 251)', 'rgb(254, 176, 25)', 'rgb(255, 69, 96)', 'rgb(119, 93, 208)', '#DEB887'];
        this.DoughnutChart = [];
        this.BarChart = [];
        this.LineChart = [];
        this.CustomLine = [];
        this.DataTable = [];
        this.ResultDataSuccess = [];
        this.ResultDataFailed = [];
        this.selectedFile = '';
        this.callApi();
        this.service.getAgentDashboardDetails().subscribe(function (data) {
            console.log('agent Details:', data);
            // this.agentOnBreak = data['getBreak'];
            // this.agentWaitingForCall = data['getNotOnCall'];
            _this.agentOnCall = data['getOnCalldata'];
            _this.callback = data['callback'];
            _this.hangupSourceAgent = data['hangupSourceAgnet'];
            _this.hangupSourceCustomer = data['hangupSourceCustomer'];
            _this.callFailed = data['notPickedUpFromCamping'];
            _this.callPlacedSuccessfully = data['pickedUpCallFromCamping'];
        });
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
        // this.getCallInfo();
        //charts
        this.DoughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('canvasDoughnut', {
            type: 'doughnut',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.AgentStatus,
                        borderColor: 'white',
                        backgroundColor: this.Color,
                    }
                ]
            },
            options: {
                //responsive: true,
                maintainAspectRatio: false,
                legend: { display: true, position: 'right',
                    labels: { fontColor: 'rgb(0,0,0)' }
                },
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: false }],
                },
            }
        });
        //Bar Graph
        this.BarChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('canvasBar', {
            type: 'bar',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.data,
                        borderColor: 'white',
                        backgroundColor: this.Color,
                    }
                ]
            },
            options: {
                //responsive: true,
                events: ['click'],
                maintainAspectRatio: false,
                legend: { display: true },
                scales: {
                    xAxes: [{ display: true, stacked: true,
                            barPercentage: 0.5,
                            barThickness: 15,
                            maxBarThickness: 15,
                            minBarLength: 2,
                            gridLines: {
                                // offsetGridLines: false //true
                                display: false,
                            } }],
                    yAxes: [{ display: true, stacked: true,
                            //  ticks: { precision:0 }//to replace decimal values from y-axis
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 10
                            },
                            gridLines: {
                                //   drawBorder: false,
                                display: false,
                            }
                        }],
                },
                //--------------------------
                tooltips: {
                    enabled: true
                },
                hover: {
                    animationDuration: 1
                },
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart, ctx = chartInstance.ctx;
                        ctx.textAlign = 'center';
                        ctx.fillStyle = "rgb(211,211,211)";
                        ctx.textBaseline = 'bottom';
                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);
                            });
                        });
                    }
                }
                //--------------------------  
            },
        });
        //For line graph
        this.LineChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('canvasLine', {
            type: 'line',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.data,
                        borderColor: 'white',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: true },
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: true }],
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        weight: 'bold'
                    }
                }
            }
        });
        //-----------------------
        this.CustomLine = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('myChart', {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [
                    {
                        data: [8, 5, 1, 3, 2, 0, 12, 9, 3, 21, 19, 11, 15, 18, 19],
                        borderColor: '#00AEFF',
                        fill: false
                    },
                    {
                        data: [7, 6, 2, 5, 0, 2, 5, 9, 3, 12, 14, 5, 17, 12, 5, 14, 15],
                        borderColor: '#FF0000',
                        fill: false,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                            },
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 5,
                                stepValue: 5,
                                max: 20
                            },
                            gridLines: {
                                drawBorder: false,
                            },
                        }],
                }
            }
        });
        //----------------------------------------------
        this.BarChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('doubleBarChart', {
            type: 'bar',
            data: {
                labels: this.BarChartlabel,
                datasets: [
                    {
                        label: "Successful Call ",
                        backgroundColor: "#00AEFF",
                        data: this.data1Success,
                    },
                    {
                        label: "No answer",
                        backgroundColor: "#ffc107",
                        data: this.callTimeOut
                    },
                    {
                        label: "Busy",
                        backgroundColor: "#20c997",
                        data: this.callBusy
                    },
                    {
                        label: "Unsuccessful Call",
                        backgroundColor: "#FF0000",
                        data: this.data2Unsuccess
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                barValueSpacing: 20,
                title: {
                    display: true,
                    text: 'Call Status'
                },
                scales: {
                    xAxes: [{ display: true,
                            barPercentage: 2,
                            barThickness: 15,
                            maxBarThickness: 15,
                            minBarLength: 2,
                            gridLines: {
                                // offsetGridLines: false //true
                                display: false,
                            } }],
                    yAxes: [{ display: true,
                            //  ticks: { precision:0 }//to replace decimal values from y-axis
                            ticks: {
                                beginAtZero: true,
                            },
                            gridLines: {
                            //   drawBorder: false,
                            //  display: false,
                            }
                        }],
                },
            }
        });
    };
    AdminDashboardComponent.prototype.callApi = function () {
        var _this = this;
        // call hangup Inf0
        this.service.getAllCallHangupInfo().subscribe(function (data) {
            console.log('Call Hangup Info', data);
            if (data['success'] = true) {
                _this.CallDisconnedtedByCustomer = data['message']['CallDisconnedtedByCustomer'];
                _this.CallDisconnedtedByAgent = data['message']['CallDisconnedtedByAgent'];
                _this.CallDisconnedtedByPlivo = data['message']['CallDisconnedtedByPlivo'];
                _this.CallFailed = data['message']['CallFailed'];
                _this.successfullCall = data['message']['successfullCall'];
            }
        });
        // campaign details: 
        this.service.getAllCampaignStatus().subscribe(function (data) {
            console.log('Campaign Details:', data);
            if (data['success'] == true) {
                _this.campaign = data['campaignStatus'];
                for (var i = 0; i < data['campaignStatus'].length; i++) {
                    if (data['campaignStatus'][i]['status'] == 1) {
                        _this.RunningCampaign.name = data['campaignStatus'][i]['campingname'],
                            _this.RunningCampaign.customers = data['campaignStatus'][i]['customers'];
                    }
                    else if (data['campaignStatus'][i]['status'] == 2) {
                        _this.QueueCount++;
                        _this.campaignInQueue.push({ queueStatus: data['campaignStatus'][i]['queueStatus'],
                            campaignName: data['campaignStatus'][i]['campingname'],
                            customers: data['campaignStatus'][i]['customers']
                        });
                    }
                    _this.ngOnInit();
                }
            }
        });
        this.service.getAllAgnetStatus().subscribe(function (data) {
            //debugger;
            console.log('Agent status; ', data);
            if (data['success'] == true) {
                if (data['statusObj']) {
                    _this.AgentStatus[0] = parseInt(data['statusObj'].active);
                    _this.AgentStatus[1] = parseInt(data['statusObj'].manual);
                    _this.AgentStatus[2] = parseInt(data['statusObj'].callback);
                    _this.agentOnBreak = _this.AgentStatus[3] = parseInt(data['statusObj'].Break);
                    _this.AgentStatus[4] = 0; // Training 
                    _this.AgentStatus[5] = 0; // Meeting with customer
                }
                var notOnCall = data['AgentStatus'].forEach(function (data) {
                    if ((data['status'] == "active") && (data['currentstatus'] == "NotOnCall")) {
                        _this.agentWaitingForCall += 1;
                    }
                    if (((data['status'] == "active") && (data['currentstatus'] == "OnCall")) || ((data['status'] == "manual") && (data['currentstatus'] == "OnCall"))) {
                        _this.customerOnCall += 1;
                    }
                });
                console.log(_this.AgentStatus);
                _this.ngOnInit();
            }
        });
        this.service.getRunningCampaignDetails().subscribe(function (data) {
            // debugger;
            console.log('Running Campaing Details: ', data);
            if (data['success'] == true) {
                if (data['campaignStatus']) {
                    _this.RunningCampaignDetails = data['campaignStatus'];
                    _this.RunningCampaignDetails['customerCalled'] = data['campaignStatus']['resumeCounter'];
                    _this.RunningCampaignDetails['customerRemaining'] = (parseInt(data['campaignStatus']['totalCustomer']) - parseInt(data['campaignStatus']['resumeCounter']));
                }
            }
        });
        var data = { week: true };
        this.service.getAdminDashboardCallInfo(data).subscribe(function (data) {
            // debugger;
            console.log('Dashboard:', data);
            if (data['success'] == true) {
                for (var i = 0, j = data['ArrayData'].length - 1; j >= 0; i++, j--) {
                    _this.BarChartlabel.push(data['ArrayData'][j]['day']);
                    _this.data1Success.push(data['ArrayData'][j]['successful']);
                    _this.data2Unsuccess.push(data['ArrayData'][j]['unsuccssful']);
                    _this.callTimeOut.push(data['ArrayData'][j]['noAnswer']);
                    _this.callBusy.push(data['ArrayData'][j]['callBusy']);
                    //debugger;
                    _this.ngOnInit();
                }
            }
            console.log('Label:', _this.BarChartlabel);
            console.log('Data success:', _this.data1Success); // this.data2Success
            console.log('Data unsuccess:', _this.data2Unsuccess);
        });
        this.service.getTodaysCallDetails().subscribe(function (data) {
            debugger;
            console.log('Todays call Detailes: ', data);
            if (data['success'] == true) {
                if (data['message']) {
                    _this.TodayCallDisconnedtedByAgent = data['message']['CallDisconnedtedByAgent'];
                    _this.TodayCallDisconnedtedByCustomer = data['message']['CallDisconnedtedByCustomer'];
                    _this.TodayCallDisconnedtedByPlivo = data['message']['CallDisconnedtedByPlivo'];
                    _this.TodayCallFailed = data['message']['CallFailed'];
                    _this.TodaysuccessfullCall = data['message']['successfullCall'];
                    _this.TodayfeedbackSubmitted = data['feedbackSubmitted'];
                }
            }
            else {
                console.log('false');
            }
        });
    };
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminDashboard',
            template: __webpack_require__(/*! ./adminDashboard.component.html */ "./src/app/layout/admin/adminDashboard.component.html"),
            styles: [__webpack_require__(/*! ./adminDashboard.component.css */ "./src/app/layout/admin/adminDashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _shared_services_manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin/adminDashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adminDashboard_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminDashboard-routing */ "./src/app/layout/admin/adminDashboard-routing.ts");
/* harmony import */ var _adminDashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminDashboard.component */ "./src/app/layout/admin/adminDashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var AdminDashboardModule = /** @class */ (function () {
    function AdminDashboardModule() {
    }
    AdminDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _adminDashboard_routing__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_adminDashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"]]
        })
    ], AdminDashboardModule);
    return AdminDashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-adminDashboard-module.js.map