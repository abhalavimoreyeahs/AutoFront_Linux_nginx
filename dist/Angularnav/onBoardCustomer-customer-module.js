(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onBoardCustomer-customer-module"],{

/***/ "./src/app/layout/onBoardCustomer/customer-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/onBoardCustomer/customer-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.component */ "./src/app/layout/onBoardCustomer/customer.component.ts");




var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"]
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/onBoardCustomer/customer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layout/onBoardCustomer/customer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#upload_button {\n    display: inline-block;\n  }\n#upload_button input[type=file] {\n    display:none;\n}\n.content-header{\n    position: relative;\n      padding: 15px 15px 0 15px;\n      background-color:transparent;\n      font:normal\n  }\n.box{\n    position: relative;\n      border-radius: 3px;\n      background: #ffffff;\n      border-top: 3px solid #d2d6de;\n      margin-bottom: 20px;\n      /* width: 100%; */\n      box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n      margin: 1% 1% 1% 1%;\n      /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\n  }\n.box-header{\n    color: #444;\n      display: block;\n      padding: 10px;\n      position: relative;\n  }\nh2{\n    margin: 0;\n    font-size: 28px;\n    font:normal;\n    font-weight:normal;\n  \n  }\nh3{\n    display: inline-block;\n    font-size: 18px;\n    margin: 0;\n    line-height: 1;\n    font:normal;\n    font-weight:normal;\n  }\nh6{\n    color:black;\n    font-weight: none;\n  }\nsmall{\n    font-size: 15px;\n      display: inline-block;\n      padding-left: 4px;\n      font-weight: 300;\n      line-height: 1; \n      color: #777;\n      font-family: sans-serif;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L29uQm9hcmRDdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0VBQ3ZCO0FBQ0Y7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7TUFDaEIseUJBQXlCO01BQ3pCLDRCQUE0QjtNQUM1QjtFQUNKO0FBRUE7SUFDRSxrQkFBa0I7TUFDaEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixxQ0FBcUM7TUFDckMsbUJBQW1CO01BQ25CLGdHQUFnRztFQUNwRztBQUVBO0lBQ0UsV0FBVztNQUNULGNBQWM7TUFDZCxhQUFhO01BQ2Isa0JBQWtCO0VBQ3RCO0FBRUE7SUFDRSxTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7O0VBRXBCO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7SUFDVCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsZUFBZTtNQUNiLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO01BQ1gsdUJBQXVCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L29uQm9hcmRDdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VwbG9hZF9idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuI3VwbG9hZF9idXR0b24gaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgZGlzcGxheTpub25lO1xufVxuXG4uY29udGVudC1oZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgICBmb250Om5vcm1hbFxuICB9XG4gIFxuICAuYm94e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICBtYXJnaW46IDElIDElIDElIDElO1xuICAgICAgLyogYm94LXNoYWRvdzogMXB4IDJweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50OyAqL1xuICB9XG4gIFxuICAuYm94LWhlYWRlcntcbiAgICBjb2xvcjogIzQ0NDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgaDJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250Om5vcm1hbDtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG4gIFxuICB9XG4gIFxuICBoM3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250Om5vcm1hbDtcbiAgICBmb250LXdlaWdodDpub3JtYWw7XG4gIH1cbiAgXG4gIGg2e1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBub25lO1xuICB9XG4gIFxuICBzbWFsbHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBsaW5lLWhlaWdodDogMTsgXG4gICAgICBjb2xvcjogIzc3NztcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/layout/onBoardCustomer/customer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/onBoardCustomer/customer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;\">\n    <div>\n        <section class=\"content-header\" style=\"max-width:50%\">\n            <h2>\n                Excel Upload\n                <small>Upload Customer Details</small>\n            </h2>\n        </section>\n\n        <div class=\"box\">\n            <div style=\"height: 72px;\">\n                <div class=\"row\" style=\"margin:0% 0% 0% 0%; padding:1% 1% 1% 1%\">\n\n                    <div id=\"upload_button\">\n                        <label>\n                            <input type=\"file\" (change)=\"incomingfile($event)\" multiple>\n                            <span class=\"btn btn-primary\" style=\"background-color: white;color:black\">Select file</span>\n                           \n                        </label>\n                      \n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\"\n                        style=\"margin-left:3%; height: 40px; background-color: white;color:black\" (click)=\"Upload()\">Upload</button>\n                   \n                </div>\n                <span style=\"margin-left:3%\"> {{selectedFile}}</span>\n            </div>\n        </div>\n    </div>\n    <!--------------------->\n    <div *ngIf=\"ResultDataSuccess.length!=0\">\n        <section class=\"content-header\" style=\"max-width:50%\">\n            <h2>\n                Data Saved Successfully\n                <!-- <small>Upload Customer Details</small> -->\n            </h2>\n        </section>\n\n        <div class=\"box\">\n            <mat-table [dataSource]=\"ResultDataSuccess\">\n                <ng-container matColumnDef=\"S No\">\n                    <mat-header-cell *matHeaderCellDef><h6>S No</h6></mat-header-cell>\n                    <mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"Name\" style=\"margin-left:2%\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>Name</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Name }}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"Age\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>Age</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Age }}</mat-cell>\n                </ng-container>\n                <!-- <ng-container matColumnDef=\"DOB\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>DOB</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.DOB}}</mat-cell>\n                </ng-container> -->\n                <ng-container matColumnDef=\"Mobile\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>Mobile</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Mobile}}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"Domicile\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>Domicile</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Domicile}}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"City\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>City</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.City}}</mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayData\">\n                </mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayData\"></mat-row>\n            </mat-table>\n        </div>\n       </div>\n        <div *ngIf=\"ResultDataFailed.length!=0\">\n        <section class=\"content-header\" style=\"max-width:50%\">\n            <h2>\n                Duplicate Data\n                <!-- <small>Upload Customer Details</small> -->\n            </h2>\n        </section>\n\n        <div class=\"box\">\n            <mat-table [dataSource]=\"ResultDataFailed\">\n\n                <ng-container matColumnDef=\"S No\" style=\"margin-left:2%\">\n\n                    <mat-header-cell *matHeaderCellDef><h6>S No</h6></mat-header-cell>\n                    <mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"Name\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>Name</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Name }}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"Age\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>Age</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Age }}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"DOB\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>DOB</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.DOB}}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"Mobile\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>Mobile</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Mobile}}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"Domicile\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>Domicile</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Domicile}}</mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"City\">\n                    <mat-header-cell *matHeaderCellDef>\n                        <h6>City</h6>\n                    </mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.City}}</mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayData\">\n                </mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayData\"></mat-row>\n            </mat-table>\n        </div>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/layout/onBoardCustomer/customer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/onBoardCustomer/customer.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ts_xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-xlsx */ "./node_modules/ts-xlsx/lib/main.browser.js");
/* harmony import */ var ts_xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ts_xlsx__WEBPACK_IMPORTED_MODULE_5__);






var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(toastrService, formBuilder, service) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.displayData = ['S No', 'Name', 'Age', 'Mobile', 'Domicile', 'City'];
        this.DataTable = [];
        this.ResultDataSuccess = [];
        this.ResultDataFailed = [];
        this.selectedFile = '';
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
    };
    //Excel file
    // arrayBuffer:any;
    // file:File;
    CustomerComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            this.selectedFile = this.uploadForm.get('profile').value.name;
            console.log(this.uploadForm.get('profile').value);
        }
    };
    CustomerComponent.prototype.Upload = function () {
        var _this = this;
        this.selectedFile = '';
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = ts_xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(ts_xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(worksheet, { raw: true }));
            _this.ExcelArray = ts_xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(worksheet, { raw: true });
            _this.sendExcelFile(_this.ExcelArray);
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    CustomerComponent.prototype.sendExcelFile = function (excelFile) {
        var _this = this;
        this.ExcelFileObj = {
            CustomerData: excelFile
        };
        alert('file sending');
        console.log('Excel', this.ExcelFileObj);
        this.service.excelUploading(this.ExcelFileObj).subscribe(function (data) {
            if (data.sucess == true) {
                if (data.data.length != 0) {
                    _this.showToaster();
                }
                else if (data.data.length == 0) {
                    _this.warningSuccess();
                }
                console.log(data);
                _this.ResultDataSuccess = data.data;
                _this.ResultDataFailed = data.duplicateData;
            }
            else {
                console.log(data);
                _this.ErrorSuccess();
            }
        });
    };
    //notification
    CustomerComponent.prototype.showToaster = function () {
        this.toastrService.success('Data Saved Successfully');
    };
    CustomerComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed to save Data');
    };
    CustomerComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    CustomerComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('warning : Duplicate Data');
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/layout/onBoardCustomer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/layout/onBoardCustomer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_2__["AutoDialService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/layout/onBoardCustomer/customer.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/onBoardCustomer/customer.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/layout/onBoardCustomer/customer-routing.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.component */ "./src/app/layout/onBoardCustomer/customer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ })

}]);
//# sourceMappingURL=onBoardCustomer-customer-module.js.map