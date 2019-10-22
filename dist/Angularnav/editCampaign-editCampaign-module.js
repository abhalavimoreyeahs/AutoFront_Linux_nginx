(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editCampaign-editCampaign-module"],{

/***/ "./src/app/layout/editCampaign/editCampaign-routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign-routing.ts ***!
  \*************************************************************/
/*! exports provided: EditCampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCampaignRoutingModule", function() { return EditCampaignRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editCampaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editCampaign.component */ "./src/app/layout/editCampaign/editCampaign.component.ts");




var routes = [
    {
        path: '',
        component: _editCampaign_component__WEBPACK_IMPORTED_MODULE_3__["EditCampaignComponent"]
    }
];
var EditCampaignRoutingModule = /** @class */ (function () {
    function EditCampaignRoutingModule() {
    }
    EditCampaignRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EditCampaignRoutingModule);
    return EditCampaignRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/editCampaign/editCampaign.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form{\n    min-width: 150px;\n    max-width: 500px;\n    width: 80%;\n  }\n   \n  .full-width {\n    width: 60%;\n  }\n   \n  .center{\n    width: 75%;\n    margin: 10px auto;\n  }\n   \n  .main-div{\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n   \n  table {\n    width: 80%;\n    margin: 20px 20px 20px 20px; \n  }\n   \n  .add-files-btn {\n    float: right;\n  }\n   \n  :host {\n    height: 100%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n  }\n   \n  .actions {\n    justify-content: flex-end;\n  }\n   \n  .container {\n    height: 100%;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2VkaXRDYW1wYWlnbi9lZGl0Q2FtcGFpZ24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUdBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZWRpdENhbXBhaWduL2VkaXRDYW1wYWlnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgIFxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfSBcblxuXG4gIC5jZW50ZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICBcbiAgLm1haW4tZGl2e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4OyBcbiAgfVxuXG4gIC5hZGQtZmlsZXMtYnRuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/editCampaign/editCampaign.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10%\">\n\n  <mat-toolbar>\n    <div class=\"container-fluid\">\n      <span> Edit Campaigns Details</span>\n    </div>\n  </mat-toolbar>\n  <mat-card class=\"my-card\" style=\"max-height:60%\">\n\n    <mat-card-content class=\"z-depth center\" flex=\"50\">\n      <form>\n\n        <mat-form-field>\n          <mat-label>Campaigns Name</mat-label>\n          <input matInput placeholder=\"Campaigns Name\" style=\"max-width: 100px\" [(ngModel)]=\"campingname\"\n            name=\"campingname\" [value]=\"\" required>\n\n\n        </mat-form-field>\n\n        <mat-form-field style=\"margin-left:20%\">\n          <mat-label>Start Date</mat-label>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"startdate\" name=\"startdate\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field><br>\n\n\n        <mat-form-field>\n          <mat-select placeholder=\"Assign To Manager\" name=\"assignedto\" [(ngModel)]=\"assignedto\">\n            <mat-option *ngFor=\"let role of ManagerData\" [value]=\"role.id\">{{ role.email }}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!--(selectionChange)=\"educationLevelChangeAction(education_level)\"-->\n\n        <mat-form-field style=\"margin-left:20%\">\n          <mat-label>Select Campaign Members</mat-label>\n          <mat-select multiple name=\"customerId\" [(ngModel)]=\"customerId\">\n            <mat-option *ngFor=\"let customer of CustomerData\" [value]=\"customer._id\">{{customer.Name}}</mat-option>\n          </mat-select>\n        </mat-form-field><br>\n\n\n        <mat-card-content style=\"padding:1%\">\n          <form class=\"my-form\">\n            <!--FORM FIELDS-->\n          </form>\n        </mat-card-content>\n        <mat-card-actions style=\" margin:auto;display:block;padding-left: 14%;\">\n          <button mat-raised-button (click)=\"Edit()\" color=\"primary\" style=\"padding:0px 35px 0px 35px\">Edit</button>\n          <button mat-raised-button (click)=\"Cancel()\" color=\"bg-danger\"\n            style=\"margin-left:12%; padding:0px 35px 0px 35px\">Cancel</button>\n        </mat-card-actions>\n\n      </form>\n    </mat-card-content>\n\n    <mat-card-actions>\n      <!-- REGISTER BUTTON -->\n    </mat-card-actions>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/layout/editCampaign/editCampaign.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign.component.ts ***!
  \***************************************************************/
/*! exports provided: EditCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCampaignComponent", function() { return EditCampaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//import { FarmService } from '../../farm.service';

//import { Router } from '@angular/router';

var EditCampaignComponent = /** @class */ (function () {
    function EditCampaignComponent(toastrService, formBuilder, service, router) {
        var _this = this;
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.Campaigns = {};
        this.customerId = [];
        this.EditId = this.service.getEditId();
        console.log('Edit Id:', this.EditId);
        if (this.EditId) {
            //    this.service.getAllManagers().subscribe((data)=>{
            this.data = {
                campingId: this.EditId
            };
            this.service.getSingleCampaign(this.data).subscribe(function (data) {
                debugger;
                console.log('data:', data);
                _this.startdate = new Date(data['message'][0]['startdate']);
                _this.campingname = data['message'][0]['campingname'];
                _this.assignedto = data['message'][0]['assignedto']['_id'];
                //this.campingmembers = data['message'][0]['campingmembers'];
                if (data['message'][0]['customerId']) {
                    for (var i = 0; i < data['message'][0]['customerId'].length; i++) {
                        _this.customerId.push(data['message'][0]['customerId'][i]['_id']);
                    }
                }
                console.log('customerId', _this.customerId);
                _this.campingid = data['message'][0]['_id'];
                //this.displayAssaignedManager = data['message'][0]['assignedtoByname'];
                // this.startdate = data['message']['startdate'];
            });
        }
    }
    EditCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllManagers().subscribe(function (data) {
            _this.ManagerData = data['message'];
            console.log(data['message']);
        });
        this.service.getAllCustomer().subscribe(function (data) {
            _this.CustomerData = data['message'];
        });
    };
    EditCampaignComponent.prototype.Edit = function () {
        var _this = this;
        debugger;
        this.Campaigns = {
            startdate: new Date(this.startdate).getTime(),
            campingname: this.campingname,
            assignedto: this.assignedto,
            customerId: this.customerId,
            campingid: this.campingid
        };
        this.service.editCampaign(this.Campaigns).subscribe(function (data) {
            console.log(data);
            if (data['success'] == true) {
                _this.showToaster();
                _this.router.navigate(['/admin/campaign']);
            }
            else {
                _this.ErrorSuccess();
                //   alert('sth went wrong');
            }
        });
    };
    EditCampaignComponent.prototype.Cancel = function () {
        this.Campaigns = {};
        this.router.navigate(['/admin/campaign']);
    };
    //notification
    EditCampaignComponent.prototype.showToaster = function () {
        this.toastrService.success('Campaign Edited Successful');
    };
    EditCampaignComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed: Unable to Save');
    };
    EditCampaignComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    EditCampaignComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('this is warning');
    };
    EditCampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editCampaign',
            template: __webpack_require__(/*! ./editCampaign.component.html */ "./src/app/layout/editCampaign/editCampaign.component.html"),
            styles: [__webpack_require__(/*! ./editCampaign.component.css */ "./src/app/layout/editCampaign/editCampaign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditCampaignComponent);
    return EditCampaignComponent;
}());



/***/ }),

/***/ "./src/app/layout/editCampaign/editCampaign.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign.module.ts ***!
  \************************************************************/
/*! exports provided: EditCampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCampaignModule", function() { return EditCampaignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _editCampaign_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editCampaign-routing */ "./src/app/layout/editCampaign/editCampaign-routing.ts");
/* harmony import */ var _editCampaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editCampaign.component */ "./src/app/layout/editCampaign/editCampaign.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var EditCampaignModule = /** @class */ (function () {
    function EditCampaignModule() {
    }
    EditCampaignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _editCampaign_routing__WEBPACK_IMPORTED_MODULE_3__["EditCampaignRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_editCampaign_component__WEBPACK_IMPORTED_MODULE_4__["EditCampaignComponent"]]
        })
    ], EditCampaignModule);
    return EditCampaignModule;
}());



/***/ })

}]);
//# sourceMappingURL=editCampaign-editCampaign-module.js.map