(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-active-active-module"],{

/***/ "./src/app/agent/status/active/active-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/agent/status/active/active-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ActiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRoutingModule", function() { return ActiveRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _active_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active.component */ "./src/app/agent/status/active/active.component.ts");




var routes = [
    {
        path: '',
        component: _active_component__WEBPACK_IMPORTED_MODULE_3__["ActiveComponent"],
    }
];
var ActiveRoutingModule = /** @class */ (function () {
    function ActiveRoutingModule() {
    }
    ActiveRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ActiveRoutingModule);
    return ActiveRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/status/active/active.component.css":
/*!**********************************************************!*\
  !*** ./src/app/agent/status/active/active.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background-image: url('autodial_img-1-01.jpeg');\n  height: 100%; \n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.9;\n}\n.fc-unthemed {\n  background: #fcf8e3;\n}\n.mat-card {\ntext-align:center;\nwidth:100%;\nbackground-color:none;\ncolor:white;\n}\n/* caller id */\n.card {\n  text-align:center;\n  opacity:0.9;\n}\n/*  dialog box  */\n.modal-window {\n  position: fixed;\n  background-color: rgba(255, 255, 255, 0.25);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s;\n}\n.modal-window:target {\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal-window > div {\n  width: 400px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 2em;\n  background: #fff;\n}\n.modal-window header {\n  font-weight: bold;\n}\n.modal-window h1 {\n  font-size: 150%;\n  margin: 0 0 15px;\n}\n.modal-close {\n  color: #aaa;\n  line-height: 50px;\n  font-size: 80%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 70px;\n  text-decoration: none;\n}\n.modal-close:hover {\n  color: black;\n}\n/* Demo Styles */\nhtml, body {\n  height: 100%;\n}\nbody {\n  font: 600 12px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%);\n  color: black;\n}\na {\n  color: inherit;\n}\n.container {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.modal-window div:not(:last-of-type) {\n  margin-bottom: 15px;\n}\nsmall {\n  color: #aaa;\n}\n.btn {\n  background-color: #fff;\n  padding: 1em 1.5em;\n  border-radius: 3px;\n  text-decoration: none;\n}\n.btn i {\n  padding-right: 0.3em;\n}\n/*   Draggable div for quick notes */\n#accordion{\n  position: absolute;\n  bottom: 10px;\n  width: 25%;\n  border: 3px solid #673ab7;\n  right: 10px;\n  background-color: white;\n}\n.notes{\n  background-color: white;\n}\n/*   */\n#mydiv {\n  position: absolute;\n  z-index: 9;\n  background-color: #f1f1f1;\n  text-align: center;\n  border: 1px solid #d3d3d3;\n \n}\n#mydivheader {\n  padding: 10px;\n  cursor: move;\n  z-index: 10;\n  background-color: #2196F3;\n  color: #fff;\n}\n/* angular material */\n.example-box {\n  width: 400px;\n  height: 400px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.example-handle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n/*--------------------------------Campaign -------css-----------------------------------------*/\n.content-header{\n  position: relative;\n    padding: 15px 15px 0 15px;\n    background-color:transparent;\n    font:normal\n}\n.box{\n  position: relative;\n    border-radius: 3px;\n    background: #ffffff;\n    border-top: 3px solid #d2d6de;\n    margin-bottom: 20px;\n    /* width: 100%; */\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n    margin: 1% 1% 1% 1%;\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\n}\n.box-header{\n  color: #444;\n    display: block;\n    padding: 10px;\n    position: relative;\n}\nh2{\n  margin: 0;\n  font-size: 28px;\n  font:normal;\n  font-weight:normal;\n\n}\nh3{\n  display: inline-block;\n  font-size: 18px;\n  margin: 0;\n  line-height: 1;\n  font:normal;\n  font-weight:normal;\n}\n.pointer {cursor: pointer;}\nh6{\n  color:black;\n}\n/*For table*/\n/* td{\n padding-right:2%;\n}  */\n/*--------View Customer Details---------*/\n.dropbtn {\n  background-color:white;\n  color: white;\n  /* padding: 16px; */\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-content {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown-content a:hover {background-color: #f1f1f1;}\n.dropdown:hover .dropdown-content {display: block;}\n.dropdown:hover .dropbtn {color: #f3c99f;}\n/*-------------------------------------*/\nsmall{\n  font-size: 15px;\n    display: inline-block;\n    padding-left: 4px;\n    font-weight: 300;\n    line-height: 1; \n    color: #777;\n    font-family: sans-serif;\n}\n.my-form{\n    min-width: 150px;\n    max-width: 500px;\n    width: 80%;\n  }\n.full-width {\n    width: 60%;\n  }\n.center{\n    width: 75%;\n    margin: 10px auto;\n  }\n.main-div{\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\ntable {\n    width: 100%;\n    /* margin: 20px 20px 20px 20px;  */\n  }\n.add-files-btn {\n    float: right;\n  }\n:host {\n    height: 100%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n  }\n.actions {\n    justify-content: flex-end;\n  }\n.container {\n    height: 100%;\n  }\n.cursor{\n    cursor: pointer;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL2FjdGl2ZS9hY3RpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFrRTtFQUNsRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQixXQUFXO0FBQ1g7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBR0EsaUJBQWlCO0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLFVBQVU7RUFDVixvQkFBb0I7RUFHcEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtJQUFrSTtFQUNsSSxvRUFBb0U7RUFDcEUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUdBLG9DQUFvQztBQUNwQztFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFHQSxNQUFNO0FBQ047RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCOztBQUUzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7QUFDN0M7QUFFQTtFQUNFOztnREFFOEM7QUFDaEQ7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBLCtGQUErRjtBQUMvRjtFQUNFLGtCQUFrQjtJQUNoQix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCO0FBQ0o7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsZ0dBQWdHO0FBQ3BHO0FBRUE7RUFDRSxXQUFXO0lBQ1QsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjs7QUFFcEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0EsVUFBVSxlQUFlLENBQUM7QUFFMUI7RUFDRSxXQUFXO0FBQ2I7QUFFQSxZQUFZO0FBQ1o7O0lBRUk7QUFDSix5Q0FBeUM7QUFDekM7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUVBLDJCQUEyQix5QkFBeUIsQ0FBQztBQUNyRCxtQ0FBbUMsY0FBYyxDQUFDO0FBQ2xELDBCQUEwQixjQUFjLENBQUM7QUFDekMsd0NBQXdDO0FBRXhDO0VBQ0UsZUFBZTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjtBQUVBO0lBQ0UsVUFBVTtFQUNaO0FBR0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQ0FBa0M7RUFDcEM7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixPQUFPO0lBQ1Asc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L3N0YXR1cy9hY3RpdmUvYWN0aXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvYXV0b2RpYWxfaW1nLTEtMDEuanBlZycpO1xuICBoZWlnaHQ6IDEwMCU7IFxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uZmMtdW50aGVtZWQge1xuICBiYWNrZ3JvdW5kOiAjZmNmOGUzO1xufVxuXG4ubWF0LWNhcmQge1xudGV4dC1hbGlnbjpjZW50ZXI7XG53aWR0aDoxMDAlO1xuYmFja2dyb3VuZC1jb2xvcjpub25lO1xuY29sb3I6d2hpdGU7XG59XG5cbi8qIGNhbGxlciBpZCAqL1xuLmNhcmQge1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgb3BhY2l0eTowLjk7XG59XG5cblxuLyogIGRpYWxvZyBib3ggICovXG4ubW9kYWwtd2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1vZGFsLXdpbmRvdzp0YXJnZXQge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5tb2RhbC13aW5kb3cgPiBkaXYge1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tb2RhbC13aW5kb3cgaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9kYWwtd2luZG93IGgxIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBtYXJnaW46IDAgMCAxNXB4O1xufVxuLm1vZGFsLWNsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubW9kYWwtY2xvc2U6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiBEZW1vIFN0eWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmJvZHkge1xuICBmb250OiA2MDAgMTJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2Y1M2FjIDAsICM2NTdjZWQgMTAwJSk7XG4gIGNvbG9yOiBibGFjaztcbn1cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5tb2RhbC13aW5kb3cgZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5zbWFsbCB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbSAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRuIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcbn1cblxuXG4vKiAgIERyYWdnYWJsZSBkaXYgZm9yIHF1aWNrIG5vdGVzICovXG4jYWNjb3JkaW9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzY3M2FiNztcbiAgcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm5vdGVze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vKiAgICovXG4jbXlkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcbiBcbn1cblxuI215ZGl2aGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBtb3ZlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIGFuZ3VsYXIgbWF0ZXJpYWwgKi9cbi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5leGFtcGxlLWJveDphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5leGFtcGxlLWhhbmRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogbW92ZTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNhbXBhaWduIC0tLS0tLS1jc3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY29udGVudC1oZWFkZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgZm9udDpub3JtYWxcbn1cblxuLmJveHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDJkNmRlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBtYXJnaW46IDElIDElIDElIDElO1xuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDsgKi9cbn1cblxuLmJveC1oZWFkZXJ7XG4gIGNvbG9yOiAjNDQ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oMntcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQ6bm9ybWFsO1xuICBmb250LXdlaWdodDpub3JtYWw7XG5cbn1cblxuaDN7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250Om5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xufVxuLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XG5cbmg2e1xuICBjb2xvcjpibGFjaztcbn1cblxuLypGb3IgdGFibGUqL1xuLyogdGR7XG4gcGFkZGluZy1yaWdodDoyJTtcbn0gICovXG4vKi0tLS0tLS0tVmlldyBDdXN0b21lciBEZXRhaWxzLS0tLS0tLS0tKi9cbi5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBwYWRkaW5nOiAxNnB4OyAqL1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO31cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtjb2xvcjogI2YzYzk5Zjt9XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5zbWFsbHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxOyBcbiAgICBjb2xvcjogIzc3NztcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLm15LWZvcm17XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgIFxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfSBcblxuXG4gIC5jZW50ZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICBcbiAgLm1haW4tZGl2e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDsgICovXG4gIH1cblxuICAuYWRkLWZpbGVzLWJ0biB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICA6aG9zdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAuYWN0aW9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmN1cnNvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/agent/status/active/active.component.html":
/*!***********************************************************!*\
  !*** ./src/app/agent/status/active/active.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:0%\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <!-- <button (click)=\"customCall()\" id=\"btn\">Receive call btn</button> -->\n      <button (click)=\"OnCallReceive()\" id=\"btnOnCallReceive\" hidden>Call Pick Up</button>\n      <button (click)=\"OnCallReject()\" id=\"btn\" hidden>Reject Call</button>\n      <button (click)=\"openDialog()\" id=\"dialogBox\" hidden>Open DialogBox</button>\n      <button (click)=\"feedBack()\" id=\"feedBack\" hidden>FeedBack Dialog</button>\n      <button (click)=\"createEvent()\" hidden>Create Event Dialog</button>\n      <button (click)=\"hitCallDetail()\" id=\"callDetails\" hidden>HitCallDetailAPI</button>\n\n    </div>\n    <div class=\"col-sm-4\" style=\" color:white;margin-top:20%;\">\n      <!-- *ngIf=\"callBoolean\" -->\n      <div class=\"col\" style=\"display: grid;  justify-content: center;align-items: center;\" >\n        <!-- <h4 style=\"color:white\">Incomming:</h4>\n        <h4 style=\"color:white\">{{Number}}</h4><br>\n        <h3 style=\"color:white\"> {{ hours | number : '2.0-0' }} : {{ minutes | number : '2.0-0'}} :\n          {{seconds | number : '2.0-0'}}</h3> -->\n        <div class=\"row\">\n          <div class=\"col\">\n            <!-- <img src=\"../../../../assets/Hangup.png\" style=\"height:50px; width: 50px\">  -->\n            <img src=\"../../../../assets/EndCall1.png\" style=\"height:50px; width: 50px\" class=\"cursor\" (click)=\"HangUp()\"> \n                <!-- Hangup -->\n            </div>\n            <div class=\"col\">\n                <img src=\"../../../../assets/Microphone.png\" style=\"height:50px; width: 30px\" class=\"cursor\">\n                <!-- Microphone -->\n            </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-4\" style=\" color:white;margin-top:4%\">\n      <div class='app'>\n        <div class='app-calendar' *ngIf=\"calendarVisible\">\n          <full-calendar #calendar defaultView=\"dayGridMonth\" [header]=\"{\n                    left: 'prev,next today',\n                    center: 'title',\n                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\n                  }\" [plugins]=\"calendarPlugins\" [weekends]=\"calendarWeekends\" [events]=\"calendarEvents\"\n            (dateClick)=\"handleDateClick($event)\"></full-calendar>\n        </div>\n\n      </div>\n      <!------------------------------------------------------------------------------>\n      <!-- <div >\n  \n        <table mat-table matSort [dataSource]=\"dataSource\" >\n\n          <ng-container matColumnDef=\"Caller Name\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef><h6>Caller Name</h6></th>\n            <td mat-cell *matCellDef=\"let user\"> {{user.customerName | titlecase }} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"Caller No\">\n              <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Caller Number </h6></th>\n              <td mat-cell *matCellDef=\"let user\"> {{user.customerMobNo }} </td>\n            </ng-container>\n         \n          <ng-container matColumnDef=\"Date\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Date </h6> </th>\n            <td mat-cell *matCellDef=\"let user\"> {{user.createdAt | date: 'dd/MMM/yyyy h:mm:ss a'}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"Note\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Note</h6></th>\n            <td mat-cell *matCellDef=\"let user\"> {{user.descrptionOnCall}}</td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      \n      \n        </table>\n      </div> -->\n      <!-- <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Caller Name</th>\n            <th>Caller No</th>\n            <th>Date</th>\n            <th>Note</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor = 'let user of showCreatedCall'>\n            <td>{{user.customerName | titlecase }}</td>\n            <td>{{user.customerMobNo }}</td>\n            <td>{{user.createdAt | date: 'dd/MMM/yyyy h:mm:ss a'}}</td>\n            <td>{{user.descrptionOnCall}}</td>\n          </tr>\n         \n        </tbody>\n      </table> -->\n      <!------------------------------------------------------------------------------>\n    </div>\n  </div>\n\n  <!-- draggable div for notes-->\n  <div id=\"accordion\">\n    <div class=\"card notes\">\n      <div class=\"card-header\">\n        <a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\">\n          Quick notes\n        </a>\n      </div>\n      <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\n        <div class=\"card-body\" style=\"background-color: white;padding: 0.25rem;\">\n          <textarea style=\"height:150px;width:100%;position:relative\" [(ngModel)]=\"notes\" name=\"notes\"> </textarea>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n\n<!-- <input atp-time-picker (click)=\"open()\" value=\"19:00\" /> -->\n<button (click)=\"getTalkTime()\" id=\"startTime\" hidden>Start Time</button>\n<button (click)=\"end()\" id=\"endTime\" hidden>End time</button>\n<button (click)=\"LogOut()\" id=\"logOut\" hidden>Logout Plivo</button>"

/***/ }),

/***/ "./src/app/agent/status/active/active.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/agent/status/active/active.component.ts ***!
  \*********************************************************/
/*! exports provided: ActiveComponent, FeedBackComponent, CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveComponent", function() { return ActiveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackComponent", function() { return FeedBackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/agent/status/active/my-dialog/my-dialog.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! plivo-browser-sdk */ "./node_modules/plivo-browser-sdk/dist/plivo.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");








//Dialog Box


//calendar



 // for dateClick
//Time Picker
// import { AmazingTimePickerService } from 'amazing-time-picker';
//Plivo

//interval

//Routing

//For Mat table




var ActiveComponent = /** @class */ (function () {
    function ActiveComponent(router, http, dialog, service, agentService, toastrService) {
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.service = service;
        this.agentService = agentService;
        this.toastrService = toastrService;
        this.callBoolean = false;
        this.displayedColumns = ['Caller Name', 'Caller No', 'Date', 'Note'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_19__["SelectionModel"](true, []);
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_11___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13___default.a];
        this.calendarWeekends = true;
        this.calendarEvents = [];
        // Timer to show sec hour and min but not using now in active mode 
        this.hours = 0;
        this.seconds = 0;
        this.minutes = 0;
    }
    ActiveComponent.prototype.ngOnInit = function () {
        //------------plivo login----------------------
        var _this = this;
        this.initPhone(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
        if (!localStorage.getItem('endpointID') && !localStorage.getItem('csio_auth_data')) {
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(2000),
                this.login(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
        }
        else {
            this.LogOut();
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(2000),
                this.login(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
        }
        // this.login("shubham125559174721784","12345");
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var Ojb = {
            status: "active",
            currentstatus: "NotOnCall",
            sipendpoint: agentId,
            reason: null
        };
        // set agent status time
        // let statusChange = {status: "active"}
        // this.agentService.setAgentStatusTime(statusChange).subscribe((data)=>{
        //     console.log(data);
        // })
        this.service.sendAgentStatus(Ojb).subscribe(function (data) {
            console.log(data);
        });
        //-------------------------------------
        // let agentId = localStorage.getItem('PlivoUserId');
        // agentId = agentId.concat('@phone.plivo.com');
        debugger;
        var startTime = new Date().setHours(0, 0, 0, 0);
        var endTime = new Date().getTime();
        var data = { agentid: "" + agentId, startTime: startTime, endTime: endTime };
        this.service.getScheduledCallForAgent(data).subscribe(function (data) {
            console.log('scheduled calendar:', data);
            _this.showCreatedCall = data['message'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTableDataSource"](_this.showCreatedCall);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            var CallSchedule = [];
            for (var i = 0; i < data['message']['length']; i++) {
                CallSchedule.push({
                    id: data['message'][i]['_id'],
                    title: data['message'][i]['customerName'],
                    start: new Date(parseInt(data['message'][i]['callBackStartTime'])),
                    end: new Date(parseInt(data['message'][i]['callBackEndTime'])),
                });
            }
            _this.calendarEvents = CallSchedule;
        });
        // this.service.getScheduledCallForAgent(data).subscribe((data) => {
        //   console.log('scheduled calendar:', data);
        //   let CallSchedule = [];
        //   for (let i = 0; i < data['message']['length']; i++) {
        //     CallSchedule.push({
        //       id: data['message'][i]['_id'],
        //       title: data['message'][i]['customerMobNo'],
        //       start: new Date(data['message'][i]['callBackStartTime']),
        //       end: new Date(data['message'][i]['callBackEndTime']),
        //     })
        //   }
        //   this.calendarEvents = CallSchedule;
        // })
    };
    ActiveComponent.prototype.ngOnDestroy = function () {
        this.LogOut();
    };
    ActiveComponent.prototype.autoClick = function () {
        alert('auto Click');
    };
    // on reloading logout agent from plivo // this also works if someone kill web application
    ActiveComponent.prototype.unloadHandler = function (event) {
        this.LogOut();
        console.log("Processing beforeunload...");
        // Do more processing...
        event.returnValue = false;
    };
    ActiveComponent.prototype.getTalkTime = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.seconds = 0;
                this.minutes = 0;
                this.hours = 0;
                this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["interval"])(1000)
                    .subscribe(function (val) {
                    _this.seconds += 1;
                    if (_this.seconds > 60) {
                        _this.seconds = 0;
                        _this.minutes += 1;
                    }
                    if (_this.minutes > 60) {
                        _this.minutes = 0;
                        _this.hours += 1;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ActiveComponent.prototype.end = function () {
        this.sub.unsubscribe();
    };
    //Calendar  
    ActiveComponent.prototype.toggleVisible = function () {
        this.calendarVisible = !this.calendarVisible;
    };
    ActiveComponent.prototype.toggleWeekends = function () {
        this.calendarWeekends = !this.calendarWeekends;
    };
    ActiveComponent.prototype.gotoPast = function () {
        var calendarApi = this.calendarComponent.getApi();
        calendarApi.gotoDate('2019-07-12'); // call a method on the Calendar object
    };
    ActiveComponent.prototype.handleDateClick = function (arg) {
        //this.createEvent(arg.dateStr); // dialog popup will come
        // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        //     title: 'New Event',
        //     start: arg.date,
        //     allDay: arg.allDay
        //   })
        // }
    };
    //Plivo Code
    //initialize Plivo
    ActiveComponent.prototype.initPhone = function (username, password) {
        var options = {
            "debug": "DEBUG",
            "permOnClick": true,
            "audioConstraints": { "optional": [{ "googAutoGainControl": false }, { "googEchoCancellation": false }] },
            "enableTracking": true
        };
        this.plivoWebSdk = new plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_14___default.a(options);
        // this.plivoWebSdk.client.on('onWebrtcNotSupported', this.onWebrtcNotSupported);
        this.plivoWebSdk.client.on('onLogin', this.onLogin); // msg not showing //this function gets called when user successfully login/ login failed
        this.plivoWebSdk.client.on('onLogout', this.onLogout); // plivo method not working
        //  this.plivoWebSdk.client.on('onLoginFailed', this.onLoginFailed);
        this.plivoWebSdk.client.on('onCallRemoteRinging', this.onCallRemoteRinging);
        this.plivoWebSdk.client.on('onIncomingCallCanceled', this.onIncomingCallCanceled);
        //  this.plivoWebSdk.client.on('onCallFailed', this.onCallFailed);
        this.plivoWebSdk.client.on('onCallAnswered', this.onCallAnswered); // req send to server 
        this.plivoWebSdk.client.on('onMediaConnected', this.onMediaConnected);
        this.plivoWebSdk.client.on('onCallTerminated', this.onCallTerminated);
        this.plivoWebSdk.client.on('onCalling', this.onCalling);
        this.plivoWebSdk.client.on('onIncomingCall', this.onIncomingCall); // when incomming call trigger this function is called
        this.plivoWebSdk.client.on('onMediaPermission', this.onMediaPermission);
        this.plivoWebSdk.client.on('mediaMetrics', this.mediaMetrics);
        //  this.plivoWebSdk.client.on('audioDeviceChange',this.audioDeviceChange);
        this.plivoWebSdk.client.setRingTone(true);
        this.plivoWebSdk.client.setRingToneBack(true);
        console.log('initPhone ready!');
    };
    ActiveComponent.prototype.login = function (username, password) {
        // username = 'shubham125559174721784';
        // password = ' 12345';
        if (username && password) {
            var data = this.plivoWebSdk.client.login(username, password);
            console.log('login:', data);
        }
        else {
            console.error('username/password missing!');
        }
    };
    ActiveComponent.prototype.onLogin = function () {
        // alert('successfully login');
        console.log('login successfully');
        localStorage.setItem('PlivoLogin', 'true');
        //this.showLoginSuccess()
        //this.showToaster('plivo Login Successfully');
        //this.toastrService.success('plivo Login Successfully'); //toastrService
    };
    ActiveComponent.prototype.LogOut = function () {
        //alert('LogOut');
        this.plivoWebSdk.client.logout();
        console.log('logOut function called');
    };
    ActiveComponent.prototype.onLogout = function () {
        //alert('successfully log Out');
        console.log('successfully log Out');
        localStorage.removeItem('PlivoLogin');
        localStorage.removeItem('endpointID');
        localStorage.removeItem('csio_auth_data');
    };
    ActiveComponent.prototype.OnCallReceive = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plivoWebSdk.client.answer()];
                    case 1:
                        _a.sent();
                        $('#dialogBox').click();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActiveComponent.prototype.OnCallReject = function () {
        alert(' call Reject');
        this.plivoWebSdk.client.reject();
    };
    ActiveComponent.prototype.onIncomingCall = function (callerName, extraHeaders) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                str = callerName;
                str = str.split("@");
                console.log('splitMethod:', str[0]);
                this.callerNumber = this.Call = str[0];
                this.Number = str[0];
                console.log('Call', this.Call);
                console.log(callerName, extraHeaders);
                this.callerName = extraHeaders['X-Ph-Test'];
                this.customerId = extraHeaders['X-Ph-Userid'];
                localStorage.setItem('Name', this.callerName);
                localStorage.setItem('Number', this.callerNumber);
                localStorage.setItem('CustomerId', this.customerId);
                console.log('callerName: ', this.callerName);
                $('#btnOnCallReceive').click();
                return [2 /*return*/];
            });
        });
    };
    ActiveComponent.prototype.HangUp = function () {
        //debugger
        if (this.plivoWebSdk.client.callSession) {
            console.log('call hangup');
            this.plivoWebSdk.client.hangup();
            // setTimeout(()=>{
            //   $('#callDetails').click();
            //  },4000);
        }
        else {
            // callOff();
            alert('no call to HangUp');
        }
    };
    ActiveComponent.prototype.onIncomingCallCanceled = function () {
        //alert('call cancellec');
        console.log('call cancelled ...');
        $('#endTime').click();
        this.callBoolean = false;
        //this.hours = this.minutes = this.seconds = 0;
    };
    // onCallFailed(){
    //   alert('call Failed function');
    //   console.log('call failed function');
    // }
    ActiveComponent.prototype.onCallTerminated = function (hangupInfo, callInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // alert('call terminated');
                $('#endTime').click();
                console.log('call terminated function hangupInfo:', hangupInfo, 'callInfo:', callInfo);
                //await delay(6000);
                this.callBoolean = false;
                // $('#callDetails').click();
                setTimeout(function () {
                    $('#callDetails').click();
                }, 4000);
                return [2 /*return*/];
            });
        });
    };
    ActiveComponent.prototype.hitCallDetail = function () {
        var _this = this;
        debugger;
        this.uuidObject = { uuid: localStorage.getItem('uuid') };
        console.log('sending obj: ', this.uuidObject);
        this.service.getCallDetails(this.uuidObject).subscribe(function (data) {
            console.log('res:', data);
            if (data['success'] == true) {
                var callDuration = data['message'][0]['callDurationwithCustomer'];
                if (data['message'][0]['isCallPIckedUp'] === "normal_clearing") {
                    _this.feedBack(callDuration);
                }
                else {
                    console.log('EXCEPTIONAL CASE: SHOULD HANDLE PROPERLY This the case when call is not normal_clearing ');
                }
                // ----------end -------------------------
            }
        });
        //  localStorage.removeItem('uuid');
    };
    ActiveComponent.prototype.onCallAnswered = function () {
        // alert('call req to server');
        console.log('call req to server');
    };
    ActiveComponent.prototype.onCalling = function () {
        //alert('on calling');
        console.log('on calling func');
    };
    ActiveComponent.prototype.onCallRemoteRinging = function () {
        //alert('remote ringing');
        $('#startTime').click();
        this.callBoolean = true;
        console.log('remote ringing');
    };
    ActiveComponent.prototype.onMediaConnected = function (UUID) {
        debugger;
        this.CallUUID = UUID['callUUID'];
        localStorage.setItem('uuid', UUID['callUUID']);
        console.log('media connected', UUID);
        //  this.callerName = UUID['extraHeaders']['X-Ph-Test'];
        //  this.callerNumber = UUID['src'];
        console.log('uuid: ', this.CallUUID);
    };
    ActiveComponent.prototype.onMediaPermission = function () {
        debugger;
        console.log('media permission');
    };
    ActiveComponent.prototype.mediaMetrics = function () {
        debugger;
        console.log('media Metrics');
    };
    //Dialog function
    ActiveComponent.prototype.openDialog = function () {
        // debugger;
        console.log(this.Call);
        var dialogRef = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__["MyDialogComponent"], {
            width: '550px',
            data: { number: localStorage.getItem('Number'), name: localStorage.getItem('Name') },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    ActiveComponent.prototype.feedBack = function (callDuration) {
        var _this = this;
        var dialogRef = this.dialog.open(FeedBackComponent, {
            width: '650px',
            data: { customerId: localStorage.getItem('CustomerId'), customerName: localStorage.getItem('Name'), customerMobNo: localStorage.getItem('Number'),
                callDuration: callDuration, descrptionOnCall: this.notes, sip: 'random', DialALegUUID: localStorage.getItem('uuid') },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            debugger;
            console.log('The dialog was closed', result);
            // this.animal = result;
            if (result) {
                _this.calendarEvents = _this.calendarEvents.concat({
                    title: result['customerName'],
                    start: result['startdate'],
                    allDay: true
                });
            }
            if (result['startdate']) {
                if (result['callBackEndTime'] && result['callBackStartTime']) {
                    var startDate = result['callBackStartTime'].split(':');
                    var endDate = result['callBackEndTime'].split(':');
                    result['callBackStartTime'] = new Date(result['startdate'].getFullYear(), result['startdate'].getMonth(), result['startdate'].getDate()).setHours(parseInt(startDate[0]), parseInt(startDate[1]), 0);
                    result['callBackEndTime'] = new Date(result['startdate'].getFullYear(), result['startdate'].getMonth(), result['startdate'].getDate()).setHours(parseInt(endDate[0]), parseInt(endDate[1]), 0);
                    result['callScheduledForWholeDay'] = false;
                }
                else {
                    result['callBackStartTime'] = new Date(result['startdate']).getTime();
                    result['callBackEndTime'] = new Date(result['startdate']).setHours(23, 59, 59);
                    result['callScheduledForWholeDay'] = true;
                }
            }
            // result['DialALegUUID'] = localStorage.getItem('uuid');
            // result['isCustomerInterseted'] = result['customerInterested'];
            // result['descrptionOnCall'] = result['notes'];
            // // result['callBackStartTime'] = new Date(result['startdate']).getTime();
            // // result['callBackEndTime'] = new Date(result['callBackEndTime']).getTime();
            // result['customerMobNo'] = result['number'];
            // result['customerName'] = result['name'];
            // result['sip'] = "random";
            debugger;
            console.log('data going to servcer', result);
            _this.service.sendCustomerFeedback(result).subscribe(function (data) {
                console.log(data);
                if (data['success'] == 'true') {
                    _this.showToaster('Feedback Saved Successfully');
                    _this.notes = '';
                }
                localStorage.removeItem('uuid');
            });
        });
    };
    ActiveComponent.prototype.createEvent = function (date) {
        var _this = this;
        var dialogRef = this.dialog.open(CreateEventComponent, {
            width: '650px',
            data: { name: 'Jone Doe', number: '9090876543' },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            debugger;
            console.log(result);
            if (result != undefined) {
                // this.animal = result;
                _this.calendarEvents = _this.calendarEvents.concat({
                    title: result.title,
                    start: result.date,
                    allDay: result.notes
                });
            }
            else {
                console.log('No thanks button clicked');
            }
        });
    };
    //notification
    ActiveComponent.prototype.showToaster = function (msg) {
        this.toastrService.success(msg);
    };
    ActiveComponent.prototype.showLoginSuccess = function () {
        this.toastrService.success('Plivo login success');
    };
    ActiveComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed: Unable to Save Campaign');
    };
    ActiveComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    ActiveComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('this is warning');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginator"])
    ], ActiveComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSort"])
    ], ActiveComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__["FullCalendarComponent"])
    ], ActiveComponent.prototype, "calendarComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ActiveComponent.prototype, "unloadHandler", null);
    ActiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active',
            template: __webpack_require__(/*! ./active.component.html */ "./src/app/agent/status/active/active.component.html"),
            styles: [__webpack_require__(/*! ./active.component.css */ "./src/app/agent/status/active/active.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _shared_services_agent__WEBPACK_IMPORTED_MODULE_4__["AgentService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ActiveComponent);
    return ActiveComponent;
}());

//Dialog Box
//dialog box 2
var FeedBackComponent = /** @class */ (function () {
    function FeedBackComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.Agent = [
            { value: 0, name: "Deal done" },
            { value: 1, name: "Introduction calls" },
            { value: 2, name: "Follow up calls" },
            //{value:3, name: "Deal done"},
            { value: 3, name: "Callback" },
            { value: 4, name: "Voicemail" },
            { value: 5, name: "Blacklist" },
            { value: 6, name: "Number does not match" },
            { value: 7, name: "Underage" },
            { value: 8, name: "Duplicate" },
        ];
        console.log('feedback details', data);
    }
    FeedBackComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        localStorage.removeItem('Number'),
            localStorage.removeItem('Name'),
            localStorage.removeItem('CustomerId');
    };
    FeedBackComponent.prototype.cancel = function () {
        localStorage.removeItem('Number'),
            localStorage.removeItem('Name'),
            localStorage.removeItem('CustomerId');
    };
    FeedBackComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
        localStorage.removeItem('Number'),
            localStorage.removeItem('Name'),
            localStorage.removeItem('CustomerId');
    };
    //select feedback list
    FeedBackComponent.prototype.onChange = function () {
        if (this.data['isCustomerInterseted'] === 3 || this.data['isCustomerInterseted'] === 2) {
            this.select = true;
        }
        else {
            this.select = false;
        }
    };
    FeedBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feedback',
            template: __webpack_require__(/*! ./feedback.html */ "./src/app/agent/status/active/feedback.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], FeedBackComponent);
    return FeedBackComponent;
}());

//Draggable Dialog code
var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CreateEventComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'createEvent-dialog',
            template: __webpack_require__(/*! ./createEvent.html */ "./src/app/agent/status/active/createEvent.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/agent/status/active/active.module.ts":
/*!******************************************************!*\
  !*** ./src/app/agent/status/active/active.module.ts ***!
  \******************************************************/
/*! exports provided: ActiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveModule", function() { return ActiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _active_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./active-routing.module */ "./src/app/agent/status/active/active-routing.module.ts");
/* harmony import */ var _active_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./active.component */ "./src/app/agent/status/active/active.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _my_dialog_my_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-dialog/my-dialog.module */ "./src/app/agent/status/active/my-dialog/my-dialog.module.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/agent/status/active/my-dialog/my-dialog.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//dialog box


//for calendar
 //For Calendar
var ActiveModule = /** @class */ (function () {
    function ActiveModule() {
    }
    ActiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // BrowserAnimationsModule,
                _my_dialog_my_dialog_module__WEBPACK_IMPORTED_MODULE_8__["MyDialogModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _active_routing_module__WEBPACK_IMPORTED_MODULE_4__["ActiveRoutingModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__["FullCalendarModule"]
            ],
            entryComponents: [
                _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__["MyDialogComponent"],
                _active_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"],
                _active_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"]
            ],
            declarations: [_active_component__WEBPACK_IMPORTED_MODULE_5__["ActiveComponent"], _active_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"], _active_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"]]
        })
    ], ActiveModule);
    return ActiveModule;
}());



/***/ }),

/***/ "./src/app/agent/status/active/createEvent.html":
/*!******************************************************!*\
  !*** ./src/app/agent/status/active/createEvent.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"text-align: center\">Schedule Call</h2>\n\n<mat-dialog-content>\n        <div class=\"row\">\n                <div class=\"col\" style=\"margin-left:5%\">\n                        <mat-form-field>\n                                <mat-label>Caller Name</mat-label>\n                                <input  matInput  placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\" [value]=\"\" required>                      \n                       </mat-form-field><br>\n                       <mat-form-field >\n                            <mat-label>CallBack Date</mat-label>\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"  name=\"startdate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>   \n                    </mat-form-field>                  \n                </div>\n                <div class=\"col\">\n                       \n                        <mat-form-field>\n                            <mat-label>Caller Number</mat-label>\n                            <input  matInput  placeholder=\"Caller Number\" style=\"max-width: 100px\" [(ngModel)]=\"data.number\" name=\"number\" [value]=\"\" required>\n                                <!-- <mat-label>Customer Interested</mat-label>\n                                 <mat-select [(ngModel)]=\"select\">\n                                        <mat-option  [value]=\"0\"> No </mat-option>\n                                        <mat-option  [value]=\"1\"> Yes </mat-option>\n                                 </mat-select> -->\n                       </mat-form-field>\n                        <mat-form-field *ngIf=\"select\">\n                                <mat-label>Add Note</mat-label>                          \n                                <textarea matInput  cdkTextareaAutosize  #autosize=\"cdkTextareaAutosize\" \n                                placeholder=\"Customer Interest\" style=\"max-width: 300px\" [(ngModel)]=\"data.desc\" name=\"desc\" [value]=\"\" required></textarea>\n                                <!-- cdkAutosizeMinRows=\"1\"  cdkAutosizeMaxRows=\"5\" -->\n                            </mat-form-field>\n                </div>\n              </div>\n</mat-dialog-content>\n\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\n\n    <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:100px\">No Thanks</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Ok</button>\n</mat-dialog-actions>\n\n<!-- <h1 mat-dialog-title appJpDraggableDialog>Add Event</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.title\" placeholder=\"Title\"><br>\n  </mat-form-field><br>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.notes\" placeholder=\"Comments\">\n  </mat-form-field>\n  \n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n</div> -->"

/***/ }),

/***/ "./src/app/agent/status/active/feedback.html":
/*!***************************************************!*\
  !*** ./src/app/agent/status/active/feedback.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"basic-form-layouts\">\n        <div class=\"row text-left\">\n          <div class=\"col-sm-12\">\n            <div class=\"content-header\" style=\"text-align:center\">\n            <!-- <h2> Feedback </h2> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"row text-left\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n    \n              <div class=\"card-content\">\n                <div class=\"px-3\">\n                  <form class=\"form\" style=\"text-align:center\">\n                    <div class=\"form-body\">\n                      <h4 class=\"form-section\" style=\"text-align:center;padding:3%\" ><i class=\"ft-user\"></i> Feedback</h4>\n                      <div class=\"row\">\n                            <div class=\"col\">\n                  \n                              <mat-form-field>\n                                <mat-label>Caller Name</mat-label>\n                           \n                                <input matInput placeholder=\"Caller Name\" [(ngModel)]=\"data.customerName\" name=\"customerName\" required>                \n                              </mat-form-field>\n                            </div>\n                            <div class=\"col\">\n                    \n                              <mat-form-field>\n                                <mat-label>Caller Number</mat-label>\n                              \n                                <input matInput placeholder=\"Caller Number\"  [(ngModel)]=\"data.customerMobNo\" name=\"customerMobNo\" [value]=\"\" required>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                                <div class=\"col-md-6\">\n                      \n                                  <mat-form-field>\n                                    <mat-label>Duration</mat-label>\n                                    <input matInput placeholder=\"Call Duration\" [(ngModel)]=\"data.callDuration\" name=\"callDuration\" [value]=\"\" required disabled>                       \n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                              \n                                <mat-form-field>\n                                        <mat-label>Customer Interested</mat-label>\n                                        \n                                         <mat-select [(ngModel)]=\"data.isCustomerInterseted\" name=\"isCustomerInterseted\" (ngModelChange)=\"onChange($event)\" required>\n                                            <mat-option *ngFor=\"let item of Agent\" [value]=\"item.value\">\n                                              {{item.name}}\n                                            </mat-option>\n                                          </mat-select>\n                               </mat-form-field>\n                                </div>\n                              </div>\n\n      \n                      <div class=\"row\">\n                          <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n                      <mat-form-field style=\"width:100%\">\n                        <mat-label>Add Description</mat-label>\n                        <textarea matInput placeholder=\"Add desc\"   [(ngModel)]=\"data.descrptionOnCall\" name=\"descrptionOnCall\" [value]=\"\" required></textarea>                           \n                      </mat-form-field>\n                      </div>\n                      </div>\n\n                      <div class=\"row\">\n                            <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n                                    <mat-form-field *ngIf=\"select\" style=\"width:100%\">\n                                            <mat-label>CallBack Date</mat-label>\n                                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"  name=\"startdate\">\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\n                                            <mat-datepicker #picker></mat-datepicker>   \n                                    </mat-form-field> \n                        </div>\n                        </div>\n    \n                      <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                    <mat-form-field *ngIf=\"select\">\n                                            <mat-label>Start Time</mat-label>\n                                          \n                                            <input matInput   type=\"time\" placeholder=\"Choose start Time\" \n                                                name=\"callBackStartTime\" [(ngModel)]=\"data.callBackStartTime\" [value]=\"\">\n                            \n                                    </mat-form-field>\n                            </div>\n                            <div class=\"col-md-6\">\n                          \n                                    <mat-form-field *ngIf=\"select\">\n                                            <mat-label>End Time</mat-label>\n                                            <input matInput type=\"time\" placeholder=\"Choose end Time\" name=\"callBackEndTime\"\n                                                [(ngModel)]=\"data.callBackEndTime\" [value]=\"\">\n                            \n                                        </mat-form-field>\n                            </div>\n                     </div>\n                    </div>\n      \n                    <div class=\"form-actions\" style=\"padding:3%\">\n                            <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Submit</button>\n                      <!-- <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\">\n                        <i class=\"ft-x\"></i> Cancel\n                      </button>\n                      <button type=\"button\" class=\"btn btn-raised btn-raised btn-primary\">\n                        <i class=\"fa fa-check-square-o\"></i> Save\n                      </button> -->\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n    \n        </div>\n    </section>   "

/***/ }),

/***/ "./src/app/agent/status/active/my-dialog/my-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/agent/status/active/my-dialog/my-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.card {\n    text-align:center;\n    opacity:0.9;\n  }\n  \n/*phone ringing*/\n  \n.Phone {\n    position: relative;\n    display: block;\n    margin: 0;\n    width: 1em;\n    height: 1em;\n    font-size: 25vmin;\n    background-color: #673ab7;\n    border-radius: 0.5em;\n    box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n            transform: translate3d(0, 0, 0) scale(1);\n  }\n  \n.Phone::before, .Phone::after {\n    position: absolute;\n    content: \"\";\n  }\n  \n.Phone::before {\n    top: 0;\n    left: 0;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 100%;\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0) scale(0);\n            transform: translate3d(0, 0, 0) scale(0);\n  }\n  \n.Phone::after {\n    top: 0.25em;\n    left: 0.25em;\n    width: 0.5em;\n    height: 0.5em;\n    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYuNiAxMC44YzEuNCAyLjggMy44IDUuMSA2LjYgNi42bDIuMi0yLjJjLjMtLjMuNy0uNCAxLS4yIDEuMS40IDIuMy42IDMuNi42LjUgMCAxIC40IDEgMVYyMGMwIC41LS41IDEtMSAxLTkuNCAwLTE3LTcuNi0xNy0xNyAwLS42LjQtMSAxLTFoMy41Yy41IDAgMSAuNCAxIDEgMCAxLjIuMiAyLjUuNiAzLjYuMS40IDAgLjctLjIgMWwtMi4zIDIuMnoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=);\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  \n.Phone.is-animating {\n    -webkit-animation: phone-outer 3000ms infinite;\n            animation: phone-outer 3000ms infinite;\n  }\n  \n.Phone.is-animating::before {\n    -webkit-animation: phone-inner 3000ms infinite;\n            animation: phone-inner 3000ms infinite;\n  }\n  \n.Phone.is-animating::after {\n    -webkit-animation: phone-icon 3000ms infinite;\n            animation: phone-icon 3000ms infinite;\n  }\n  \n@-webkit-keyframes phone-outer {\n    0% {\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\n              transform: translate3d(0, 0, 0) scale(1);\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\n    }\n    33.3333% {\n      -webkit-transform: translate3d(0, 0, 0) scale(1.1);\n              transform: translate3d(0, 0, 0) scale(1.1);\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0.1), 0em 0.05em 0.1em rgba(0, 0, 0, 0.5);\n    }\n    66.6666% {\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\n              transform: translate3d(0, 0, 0) scale(1);\n      box-shadow: 0 0 0 0.5em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\n    }\n    100% {\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\n              transform: translate3d(0, 0, 0) scale(1);\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\n    }\n  }\n  \n@keyframes phone-outer {\n    0% {\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\n              transform: translate3d(0, 0, 0) scale(1);\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\n    }\n    33.3333% {\n      -webkit-transform: translate3d(0, 0, 0) scale(1.1);\n              transform: translate3d(0, 0, 0) scale(1.1);\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0.1), 0em 0.05em 0.1em rgba(0, 0, 0, 0.5);\n    }\n    66.6666% {\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\n              transform: translate3d(0, 0, 0) scale(1);\n      box-shadow: 0 0 0 0.5em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\n    }\n    100% {\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\n              transform: translate3d(0, 0, 0) scale(1);\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\n    }\n  }\n  \n@-webkit-keyframes phone-inner {\n    0% {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\n              transform: translate3d(0, 0, 0) scale(0);\n    }\n    33.3333% {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 0, 0) scale(0.9);\n              transform: translate3d(0, 0, 0) scale(0.9);\n    }\n    66.6666% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\n              transform: translate3d(0, 0, 0) scale(0);\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\n              transform: translate3d(0, 0, 0) scale(0);\n    }\n  }\n  \n@keyframes phone-inner {\n    0% {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\n              transform: translate3d(0, 0, 0) scale(0);\n    }\n    33.3333% {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 0, 0) scale(0.9);\n              transform: translate3d(0, 0, 0) scale(0.9);\n    }\n    66.6666% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\n              transform: translate3d(0, 0, 0) scale(0);\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\n              transform: translate3d(0, 0, 0) scale(0);\n    }\n  }\n  \n@-webkit-keyframes phone-icon {\n    0% {\n      -webkit-transform: translate3d(0em, 0, 0);\n              transform: translate3d(0em, 0, 0);\n    }\n    2% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    4% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    6% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    8% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    10% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    12% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    14% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    16% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    18% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    20% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    22% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    24% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    26% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    28% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    30% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    32% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    34% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    36% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    38% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    40% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    42% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    44% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    46% {\n      -webkit-transform: translate3d(0em, 0, 0);\n              transform: translate3d(0em, 0, 0);\n    }\n  }\n  \n@keyframes phone-icon {\n    0% {\n      -webkit-transform: translate3d(0em, 0, 0);\n              transform: translate3d(0em, 0, 0);\n    }\n    2% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    4% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    6% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    8% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    10% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    12% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    14% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    16% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    18% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    20% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    22% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    24% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    26% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    28% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    30% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    32% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    34% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    36% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    38% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    40% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    42% {\n      -webkit-transform: translate3d(0.01em, 0, 0);\n              transform: translate3d(0.01em, 0, 0);\n    }\n    44% {\n      -webkit-transform: translate3d(-0.01em, 0, 0);\n              transform: translate3d(-0.01em, 0, 0);\n    }\n    46% {\n      -webkit-transform: translate3d(0em, 0, 0);\n              transform: translate3d(0em, 0, 0);\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL2FjdGl2ZS9teS1kaWFsb2cvbXktZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0FBRUYsZ0JBQWdCOztBQUNoQjtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZ0ZBQWdGO0lBQ2hGLGdEQUF3QztZQUF4Qyx3Q0FBd0M7RUFDMUM7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztBQUNBO0lBQ0UsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdEQUF3QztZQUF4Qyx3Q0FBd0M7RUFDMUM7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsK2FBQSthO0lBQy9hLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHVDQUErQjtZQUEvQiwrQkFBK0I7RUFDakM7O0FBQ0E7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDOztBQUNBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFLDZDQUFxQztZQUFyQyxxQ0FBcUM7RUFDdkM7O0FBQ0E7SUFDRTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7TUFDeEMsZ0ZBQWdGO0lBQ2xGO0lBQ0E7TUFDRSxrREFBMEM7Y0FBMUMsMENBQTBDO01BQzFDLGtGQUFrRjtJQUNwRjtJQUNBO01BQ0UsZ0RBQXdDO2NBQXhDLHdDQUF3QztNQUN4QyxrRkFBa0Y7SUFDcEY7SUFDQTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7TUFDeEMsZ0ZBQWdGO0lBQ2xGO0VBQ0Y7O0FBakJBO0lBQ0U7TUFDRSxnREFBd0M7Y0FBeEMsd0NBQXdDO01BQ3hDLGdGQUFnRjtJQUNsRjtJQUNBO01BQ0Usa0RBQTBDO2NBQTFDLDBDQUEwQztNQUMxQyxrRkFBa0Y7SUFDcEY7SUFDQTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7TUFDeEMsa0ZBQWtGO0lBQ3BGO0lBQ0E7TUFDRSxnREFBd0M7Y0FBeEMsd0NBQXdDO01BQ3hDLGdGQUFnRjtJQUNsRjtFQUNGOztBQUNBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsZ0RBQXdDO2NBQXhDLHdDQUF3QztJQUMxQztJQUNBO01BQ0UsVUFBVTtNQUNWLGtEQUEwQztjQUExQywwQ0FBMEM7SUFDNUM7SUFDQTtNQUNFLFVBQVU7TUFDVixnREFBd0M7Y0FBeEMsd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0RBQXdDO2NBQXhDLHdDQUF3QztJQUMxQztFQUNGOztBQWpCQTtJQUNFO01BQ0UsVUFBVTtNQUNWLGdEQUF3QztjQUF4Qyx3Q0FBd0M7SUFDMUM7SUFDQTtNQUNFLFVBQVU7TUFDVixrREFBMEM7Y0FBMUMsMENBQTBDO0lBQzVDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0RBQXdDO2NBQXhDLHdDQUF3QztJQUMxQztJQUNBO01BQ0UsVUFBVTtNQUNWLGdEQUF3QztjQUF4Qyx3Q0FBd0M7SUFDMUM7RUFDRjs7QUFDQTtJQUNFO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztFQUNGOztBQXpFQTtJQUNFO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztFQUNGIiwiZmlsZSI6InNyYy9hcHAvYWdlbnQvc3RhdHVzL2FjdGl2ZS9teS1kaWFsb2cvbXktZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNhcmQge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG9wYWNpdHk6MC45O1xuICB9XG4gIFxuLypwaG9uZSByaW5naW5nKi9cbi5QaG9uZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIGZvbnQtc2l6ZTogMjV2bWluO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMGVtIHJnYmEoNTIsIDE1MiwgMjE5LCAwKSwgMGVtIDAuMDVlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgfVxuICAuUGhvbmU6OmJlZm9yZSwgLlBob25lOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbiAgLlBob25lOjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDApO1xuICB9XG4gIC5QaG9uZTo6YWZ0ZXIge1xuICAgIHRvcDogMC4yNWVtO1xuICAgIGxlZnQ6IDAuMjVlbTtcbiAgICB3aWR0aDogMC41ZW07XG4gICAgaGVpZ2h0OiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnWkQwaVRUWXVOaUF4TUM0NFl6RXVOQ0F5TGpnZ015NDRJRFV1TVNBMkxqWWdOaTQyYkRJdU1pMHlMakpqTGpNdExqTXVOeTB1TkNBeExTNHlJREV1TVM0MElESXVNeTQySURNdU5pNDJMalVnTUNBeElDNDBJREVnTVZZeU1HTXdJQzQxTFM0MUlERXRNU0F4TFRrdU5DQXdMVEUzTFRjdU5pMHhOeTB4TnlBd0xTNDJMalF0TVNBeExURm9NeTQxWXk0MUlEQWdNU0F1TkNBeElERWdNQ0F4TGpJdU1pQXlMalV1TmlBekxqWXVNUzQwSURBZ0xqY3RMaklnTVd3dE1pNHpJREl1TW5vaUlHWnBiR3c5SWlObVptWm1abVlpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIC5QaG9uZS5pcy1hbmltYXRpbmcge1xuICAgIGFuaW1hdGlvbjogcGhvbmUtb3V0ZXIgMzAwMG1zIGluZmluaXRlO1xuICB9XG4gIC5QaG9uZS5pcy1hbmltYXRpbmc6OmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uOiBwaG9uZS1pbm5lciAzMDAwbXMgaW5maW5pdGU7XG4gIH1cbiAgLlBob25lLmlzLWFuaW1hdGluZzo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbjogcGhvbmUtaWNvbiAzMDAwbXMgaW5maW5pdGU7XG4gIH1cbiAgQGtleWZyYW1lcyBwaG9uZS1vdXRlciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDBlbSByZ2JhKDUyLCAxNTIsIDIxOSwgMCksIDBlbSAwLjA1ZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICAzMy4zMzMzJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuMSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwZW0gcmdiYSg1MiwgMTUyLCAyMTksIDAuMSksIDBlbSAwLjA1ZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIH1cbiAgICA2Ni42NjY2JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC41ZW0gcmdiYSg1MiwgMTUyLCAyMTksIDApLCAwZW0gMC4wNWVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMGVtIHJnYmEoNTIsIDE1MiwgMjE5LCAwKSwgMGVtIDAuMDVlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgcGhvbmUtaW5uZXIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDApO1xuICAgIH1cbiAgICAzMy4zMzMzJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwLjkpO1xuICAgIH1cbiAgICA2Ni42NjY2JSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBwaG9uZS1pY29uIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBlbSwgMCwgMCk7XG4gICAgfVxuICAgIDIlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC4wMWVtLCAwLCAwKTtcbiAgICB9XG4gICAgNCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC4wMWVtLCAwLCAwKTtcbiAgICB9XG4gICAgNiUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjAxZW0sIDAsIDApO1xuICAgIH1cbiAgICA4JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjAxZW0sIDAsIDApO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjAxZW0sIDAsIDApO1xuICAgIH1cbiAgICAxMiUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC4wMWVtLCAwLCAwKTtcbiAgICB9XG4gICAgMTQlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC4wMWVtLCAwLCAwKTtcbiAgICB9XG4gICAgMTYlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuMDFlbSwgMCwgMCk7XG4gICAgfVxuICAgIDE4JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuMDFlbSwgMCwgMCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjAxZW0sIDAsIDApO1xuICAgIH1cbiAgICAyMiUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjAxZW0sIDAsIDApO1xuICAgIH1cbiAgICAyNCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC4wMWVtLCAwLCAwKTtcbiAgICB9XG4gICAgMjYlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC4wMWVtLCAwLCAwKTtcbiAgICB9XG4gICAgMjglIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuMDFlbSwgMCwgMCk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuMDFlbSwgMCwgMCk7XG4gICAgfVxuICAgIDMyJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjAxZW0sIDAsIDApO1xuICAgIH1cbiAgICAzNCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjAxZW0sIDAsIDApO1xuICAgIH1cbiAgICAzNiUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC4wMWVtLCAwLCAwKTtcbiAgICB9XG4gICAgMzglIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC4wMWVtLCAwLCAwKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuMDFlbSwgMCwgMCk7XG4gICAgfVxuICAgIDQyJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuMDFlbSwgMCwgMCk7XG4gICAgfVxuICAgIDQ0JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjAxZW0sIDAsIDApO1xuICAgIH1cbiAgICA0NiUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwZW0sIDAsIDApO1xuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/agent/status/active/my-dialog/my-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/agent/status/active/my-dialog/my-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  >\n          \n    <div class=\"card\" style=\"background-color:none; margin-left:5%\">\n      <div class=\"card-body\">\n        <h4>Be Ready connecting with ...</h4>\n        <br>\n        <h2 class=\"card-title\">{{CallerName }}</h2>\n        <br>\n        <h4 class=\"card-subtitle mb-2 text-muted\">{{CallerNumber}}</h4>\n      \n        <div style=\"margin-top:10%;margin-bottom:10% \">\n          <i class=\"Phone is-animating\" style=\"margin-left:25%\"></i>\n        </div> \n        <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->\n        <!-- <a href=\"#\" class=\"card-link\">Card link</a>\n        <a href=\"#\" class=\"card-link\">Another link</a> -->\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/agent/status/active/my-dialog/my-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/agent/status/active/my-dialog/my-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponent", function() { return MyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        debugger;
        console.log('Number:', this.data.number, 'Name:', this.data.name);
        this.CallerName = data.name;
        this.CallerNumber = data.number;
    }
    MyDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ok();
        }, 30000);
    };
    MyDialogComponent.prototype.cancel = function () {
    };
    MyDialogComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    MyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/app/agent/status/active/my-dialog/my-dialog.component.html"),
            styles: [__webpack_require__(/*! ./my-dialog.component.css */ "./src/app/agent/status/active/my-dialog/my-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/agent/status/active/my-dialog/my-dialog.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/agent/status/active/my-dialog/my-dialog.module.ts ***!
  \*******************************************************************/
/*! exports provided: MyDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogModule", function() { return MyDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-dialog.component */ "./src/app/agent/status/active/my-dialog/my-dialog.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);






//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var MyDialogModule = /** @class */ (function () {
    function MyDialogModule() {
    }
    MyDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ],
            declarations: [_my_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MyDialogComponent"]]
        })
    ], MyDialogModule);
    return MyDialogModule;
}());



/***/ })

}]);
//# sourceMappingURL=status-active-active-module.js.map