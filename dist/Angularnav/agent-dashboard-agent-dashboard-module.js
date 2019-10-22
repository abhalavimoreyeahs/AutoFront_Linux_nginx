(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agent-dashboard-agent-dashboard-module"],{

/***/ "./src/app/agent/agent-dashboard/agent-dashboard-routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard-routing.ts ***!
  \******************************************************************/
/*! exports provided: AgentDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDashboardRoutingModule", function() { return AgentDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent-dashboard.component */ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _agent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AgentDashboardComponent"],
    }
];
var AgentDashboardRoutingModule = /** @class */ (function () {
    function AgentDashboardRoutingModule() {
    }
    AgentDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AgentDashboardRoutingModule);
    return AgentDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  font-family: 'Open Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;\n}\n\na {\n  color: #009C9F;\n  background-color: transparent;\n}\n\n.grid-container {\n    margin: 20px;\n  }\n\n.dashboard-card {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n  }\n\n.more-button {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n  }\n\n.dashboard-card-content {\n    text-align: center;\n  }\n\n.card-header {\n    padding: .75rem 1.25rem;\n    margin-bottom: 0;\n   background-color: rgb(255, 255, 255);\n    border-bottom: 1px solid rgba(0,0,0,.125);\n}\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.card-title{\n  text-align: left;\n}\n\ntr {\n    display: table-row;\n    vertical-align: inherit;\n    border-color: inherit;\n}\n\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #E3EBF3;\n    border-top: 1px solid #E3EBF3;\n}\n\n.table td {\n    padding: .75rem 2rem;\n  }\n\n.table th {\n    padding: .75rem 2rem;\n  }\n\n.progress.progress-sm {\n    height: .5rem;\n}\n\n/* .height-250 {\n  height: 250px!important;\n} */\n\nh3 {\n  font-size: 1.51rem;\n  font-weight: normal;\n}\n\n/* 2nd card*/\n\n.primary {\n  color: #00B5B8!important;\n}\n\n.danger {\n  color: #FF7588!important;\n}\n\n.success {\n  color: #16D39A!important;\n}\n\n.warning {\n  color: #FFA87D!important;\n}\n\n.bg-primary {\n  background-color: #00B5B8!important;\n}\n\n.bg-danger {\n  background-color: #FF7588!important;\n}\n\n.bg-success {\n  background-color: #16D39A!important;\n}\n\n.bg-warning {\n  background-color: #FFA87D!important;\n}\n\n/* distance b/W number and line */\n\n.progress.progress-sm {\n  height: .5rem;\n}\n\nmat-icon{\n  width: 50px;\n  height: 50px;\n  font-weight: 1rem;\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnQtZGFzaGJvYXJkL2FnZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkdBQTZHO0FBQy9HOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7R0FDakIsb0NBQW9DO0lBQ25DLHlDQUF5QztBQUM3Qzs7QUFFQTtFQUtFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFRTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDOztBQUVFO0lBQ0Usb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsYUFBYTtBQUNqQjs7QUFDQTs7R0FFRzs7QUFFSDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBR0EsWUFBWTs7QUFDWjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2FnZW50LWRhc2hib2FyZC9hZ2VudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLFJvYm90bywnSGVsdmV0aWNhIE5ldWUnLEFyaWFsLHNhbnMtc2VyaWY7XG59XG5cbmEge1xuICBjb2xvcjogIzAwOUM5RjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5tb3JlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMSAxIGF1dG87XG4gIC1tb3otYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jYXJkLXRpdGxle1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuICB0ciB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cblxuICAudGFibGUgdGhlYWQgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFM0VCRjM7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFM0VCRjM7XG59XG5cbiAgLnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbTtcbiAgfVxuICBcbiAgLnRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbTtcbiAgfVxuXG4gIC5wcm9ncmVzcy5wcm9ncmVzcy1zbSB7XG4gICAgaGVpZ2h0OiAuNXJlbTtcbn1cbi8qIC5oZWlnaHQtMjUwIHtcbiAgaGVpZ2h0OiAyNTBweCFpbXBvcnRhbnQ7XG59ICovXG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjUxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5cbi8qIDJuZCBjYXJkKi9cbi5wcmltYXJ5IHtcbiAgY29sb3I6ICMwMEI1QjghaW1wb3J0YW50O1xufVxuLmRhbmdlciB7XG4gIGNvbG9yOiAjRkY3NTg4IWltcG9ydGFudDtcbn1cbi5zdWNjZXNzIHtcbiAgY29sb3I6ICMxNkQzOUEhaW1wb3J0YW50O1xufVxuLndhcm5pbmcge1xuICBjb2xvcjogI0ZGQTg3RCFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjVCOCFpbXBvcnRhbnQ7XG59XG4uYmctZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzU4OCFpbXBvcnRhbnQ7XG59XG4uYmctc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNkQzOUEhaW1wb3J0YW50O1xufVxuLmJnLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBODdEIWltcG9ydGFudDtcbn1cblxuLyogZGlzdGFuY2UgYi9XIG51bWJlciBhbmQgbGluZSAqL1xuLnByb2dyZXNzLnByb2dyZXNzLXNtIHtcbiAgaGVpZ2h0OiAuNXJlbTtcbn1cblxubWF0LWljb257XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainDiv\" style=\"background-color:#ecf0f5\"> \n  <div class=\"content-wrapper\" style=\"padding: 1.8rem;\">\n   <div class=\"content-header row\">\n   \n   </div>\n   <div class=\"content-body\">\n    <div class=\"row\">\n      <div class=\"col-sm\"> \n          <div class=\"card\">\n              <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #008385, #00E7EB );\">\n                  <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../../assets/calendar-with-a-clock-time-tools (2)@2x.png\" style=\"width: 50px;  height: 40px; \">\n                    </div>\n                      <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                          <h5>Today's Scheduled Calls</h5>\n                          <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 0</h5>\n                      </div>\n                  </div>\n              </div>\n          </div> </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF425C, #FF7588 );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                    \n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Call Attended</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 0</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n     </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF864A, #FFA87D );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Manual Dial</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 0</h5>\n                    </div>\n                </div>\n            </div>\n        </div> </div>\n     <div class=\"col-sm\"> \n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #11A578, #32EAB2 );\">\n                <div class=\"media align-items-stretch\">\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                    <img src=\"../../../assets/campaign1.png\" style=\"width: 50px;  height: 40px;\">\n                  </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Today's Campaign</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> </h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n       </div>\n    </div>\n    \n    <div class=\"row match-height\" style=\"margin-top:1%\">\n    \n    <div  class=\"col-xl-8 col-lg-12\">\n      <div class=\"card\" style=\"height: 402px;\">\n        <div class=\"card-header border-0\" >\n            <h4 class=\"card-title\" style=\"font-weight:normal\"> Active Call Status</h4>\n            <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n            <div class=\"heading-elements\">\n                <ul class=\"list-inline mb-0\">\n                    <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"card-content\">\n            <div  class=\"table-responsive  position-relative ps ps--active-y\">\n                <table class=\"table mb-0\">\n                    <!-- <thead>\n                        <tr>\n                            <th>Call Type</th>\n                            <th>Call Value</th>\n                            <th>Call status rate</th>\n                        </tr>\n                    </thead> -->\n                    <tbody>\n                        <tr>\n                            <td>Call Attended</td>\n                            <td>{{ ActiveCallStatus.totalCalls }}</td>\n                            <td class=\"text-center font-small-2\">100% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                              <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%;background-color: #16D39A!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Successful Calls</td>\n                            <td>{{ ActiveCallStatus.successfulCalls }}</td>\n                            <td class=\"text-center font-small-2\">{{ActiveCallStatusPercentage.successfulCalls | number : '1.2-2' }}% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                                <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width.%]=\"ActiveCallStatusPercentage.successfulCalls\" style=\"background-color: #16D39A!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>UnsuccessFul Calls</td>\n                            <td>{{ ActiveCallStatus.unsuccessfulCalls }}</td>\n                            <td class=\"text-center font-small-2\">{{ActiveCallStatusPercentage.unsuccessfulCalls | number : '1.2-2' }}% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                              <div class=\"progress-bar bg-warning\" role=\"progressbar\" [style.width.%]=\"ActiveCallStatusPercentage.unsuccessfulCalls\" style=\"background-color: #FFA87D!important; \" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>No Answer</td>\n                            <td> {{ ActiveCallStatus.noAnswer }}</td>\n                            <td class=\"text-center font-small-2\">{{ActiveCallStatusPercentage.noAnswer | number : '1.2-2' }}% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                                <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width.%]=\"ActiveCallStatusPercentage.noAnswer\" style=\"background-color: #ffc107!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Call Busy</td>\n                            <td>{{ ActiveCallStatus.callBusy }}</td>\n                            <td class=\"text-center font-small-2\">{{ActiveCallStatusPercentage.callBusy | number : '1.2-2' }}% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                              <div class=\"progress-bar bg-warning\" role=\"progressbar\" [style.width.%]=\"ActiveCallStatusPercentage.callBusy\" style=\"background-color: #FFA87D!important; \" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"width:100%; height:402px\">\n            <div class=\"card-header\" style=\"background-color: none;\">\n                <h4 class=\"card-title\" style=\"font-weight:normal\">Call Status</h4>\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                <div class=\"heading-elements\">\n                    <ul class=\"list-inline mb-0\">\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"card-content\">\n           \n                <!-- <div class=\"table-responsive\">\n                    <table id=\"recent-orders\" class=\"table table-hover mb-0 ps-container ps-theme-default\" style=\"font-size: 1rem; font-weight: 400;  line-height: 1.45;\">\n                        <thead>\n                            <tr>\n                                <th>SKU</th>\n                                <th>Status</th>\n                                <th>Call</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class=\"text-truncate\">Call Attended</td>\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                                <td class=\"text-truncate\">27</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-truncate\">Call Disconnected</td>\n                                <td class=\"text-truncate\"><span class=\"badge badge-warning\"></span></td>\n                                <td class=\"text-truncate\">06</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-truncate\">Call answered</td>\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                                <td class=\"text-truncate\">15</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-truncate\">Call Unanswered</td>\n\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                                <td class=\"text-truncate\">7</td>\n                            </tr>\n                    \n                        </tbody>\n                    </table>\n                </div> -->\n            </div>\n        </div>\n    </div>\n    </div>\n    <!----------------------------------------------------------------------------------------------------------------------------->\n    <div class=\"row\" style=\"margin-top:1%\">\n        <div class=\"col-xl-3 col-lg-6 col-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                            <div class=\"media-body text-left w-100\">\n                                <h3 class=\"primary\">0 hours</h3>\n                                <span>Active Time</span>\n                            </div>\n                            <div class=\"media-right media-middle\">\n                                <i class=\"icon-user-follow primary font-large-2 float-right\"></i>\n                            </div>\n                        </div>\n                        <div class=\"progress progress-sm mt-1 mb-0\">\n                          <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                            <div class=\"media-body text-left w-100\">\n                                <h3 class=\"danger\">0 Hours</h3>\n                                <span>Login Time</span>\n                            </div>\n                            <div class=\"media-right media-middle\">\n                                <i class=\"icon-social-dropbox danger font-large-2 float-right\"></i>\n                            </div>                        \n                        </div>\n                        <div class=\"progress progress-sm mt-1 mb-0\">\n                          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                            <div class=\"media-body text-left w-100\">\n                                <h3 class=\"success\">0 Hours</h3>\n                                <span>Talk Time</span>\n                            </div>\n                            <div class=\"media-right media-middle\">\n                                <!-- <i class=\"icon-layers success font-large-2 float-right\"></i> -->\n                                <mat-icon style=\"color:#16D39A\">phone_in_talk</mat-icon>\n                            </div>                        \n                        </div>\n                        <div class=\"progress progress-sm mt-1 mb-0\">\n                          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                            <div class=\"media-body text-left w-100\">\n                                <h3 class=\"warning\">0 Hours</h3>\n                                <span>Waiting Time</span>\n                            </div>\n                            <div class=\"media-right media-middle\">\n                                <!-- <i class=\"icon-globe warning font-large-2 float-right\"></i> -->\n                                <mat-icon style=\"color: #FFA87D;\">timelapse</mat-icon>\n                            </div>                        \n                        </div>\n                        <div class=\"progress progress-sm mt-1 mb-0\">\n                          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 35%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!----------------------------------------------------------------------------------------------------------------------------->\n    <!-- <div class=\"row match-height\" style=\"margin-top:1%\">\n        <div  class=\"col-xl-4 col-lg-12\">\n            <div class=\"card\" style=\"width:100%; height:402px\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Number of Scheduled Call Being Placed</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n              \n            </div>  \n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n          <div class=\"card\" style=\"width:100%; height:402px\">\n              <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Campaign Running Today</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n            \n            </div>  \n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"width:100%; height:402px;\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Extra field</h4>\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                <div class=\"heading-elements\">\n                    <ul class=\"list-inline mb-0\">\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n          </div>  \n    </div>\n      </div> -->\n   \n   </div>\n  \n  </div>\n \n </div>\n"

/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDashboardComponent", function() { return AgentDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/agent */ "./src/app/shared/services/agent.ts");





var AgentDashboardComponent = /** @class */ (function () {
    function AgentDashboardComponent(breakpointObserver, service) {
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        /** Based on the screen size, switch from standard to one column per row */
        this.ActiveCallStatus = { totalCalls: 0, successfulCalls: 0, unsuccessfulCalls: 0, noAnswer: 0, callBusy: 0 };
        this.ActiveCallStatusPercentage = { successfulCalls: 0, unsuccessfulCalls: 0, noAnswer: 0, callBusy: 0 };
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
    AgentDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var data = { agentPlivoId: agentId };
        this.service.getAgentCallStatus(data).subscribe(function (data) {
            debugger;
            console.log(data);
            if (data['success'] == true) {
                _this.ActiveCallStatus.totalCalls = data['message']['totalCalls'];
                _this.ActiveCallStatus.successfulCalls = data['message']['successful'];
                _this.ActiveCallStatus.unsuccessfulCalls = data['message']['unsuccssful'];
                _this.ActiveCallStatus.noAnswer = data['message']['noAnswer'];
                _this.ActiveCallStatus.callBusy = data['message']['callBusy'];
                // Call Status in percentage
                _this.ActiveCallStatusPercentage.successfulCalls = ((_this.ActiveCallStatus.successfulCalls * 100) / _this.ActiveCallStatus.totalCalls);
                _this.ActiveCallStatusPercentage.unsuccessfulCalls = ((_this.ActiveCallStatus.unsuccessfulCalls * 100) / _this.ActiveCallStatus.totalCalls);
                _this.ActiveCallStatusPercentage.noAnswer = ((_this.ActiveCallStatus.noAnswer * 100) / _this.ActiveCallStatus.totalCalls);
                _this.ActiveCallStatusPercentage.callBusy = ((_this.ActiveCallStatus.callBusy * 100) / _this.ActiveCallStatus.totalCalls);
            }
        });
    };
    AgentDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent-dashboard',
            template: __webpack_require__(/*! ./agent-dashboard.component.html */ "./src/app/agent/agent-dashboard/agent-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./agent-dashboard.component.css */ "./src/app/agent/agent-dashboard/agent-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"], _shared_services_agent__WEBPACK_IMPORTED_MODULE_4__["AgentService"]])
    ], AgentDashboardComponent);
    return AgentDashboardComponent;
}());



/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: AgentDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDashboardModule", function() { return AgentDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agent_dashboard_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agent-dashboard-routing */ "./src/app/agent/agent-dashboard/agent-dashboard-routing.ts");
/* harmony import */ var _agent_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-dashboard.component */ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var AgentDashboardModule = /** @class */ (function () {
    function AgentDashboardModule() {
    }
    AgentDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _agent_dashboard_routing__WEBPACK_IMPORTED_MODULE_4__["AgentDashboardRoutingModule"]
            ],
            declarations: [_agent_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AgentDashboardComponent"]]
        })
    ], AgentDashboardModule);
    return AgentDashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=agent-dashboard-agent-dashboard-module.js.map