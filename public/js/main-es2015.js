(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <div class=\"ui centered align grid\" style=\"margin: 0px\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/delivery-info/delivery-info.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/delivery-info/delivery-info.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui centered grid\" style=\"margin: 0 auto\">\n  <mat-card class=\"rouded-all\" style=\"padding-top: 0px\">\n    <mat-card-header class=\"ui left aligned grid header-col rounded-top\">\n      <div class=\"ui grid full-width\" style=\"margin: 0 auto\">\n        <div class=\"row\">\n          <div\n            class=\"left floated left aligned eight wide column middle aligned content\"\n          >\n            <div class=\"ui small header white\">\n              DELIVERY INFORMATION\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-card-header>\n    <mat-card-content class=\"ui fluid centered grid\">\n      <div class=\"doubling five column row\">\n        <mat-form-field class=\"column\">\n          <input matInput placeholder=\"Quality\" />\n        </mat-form-field>\n        <mat-form-field class=\"column\">\n          <input matInput type=\"number\" placeholder=\"Weight\" />\n          <div class=\"tiny sub header jme-col\" matSuffix>&nbsp;Kgs</div>\n        </mat-form-field>\n        <mat-form-field class=\"column\">\n          <input matInput type=\"number\" placeholder=\"Length\" />\n          <div class=\"tiny sub header jme-col\" matSuffix>&nbsp;cm</div>\n        </mat-form-field>\n        <mat-form-field class=\"column \">\n          <input matInput type=\"number\" placeholder=\"Width\" />\n          <div class=\"jme-col\" matSuffix>&nbsp;cm</div>\n        </mat-form-field>\n        <mat-form-field class=\"column\">\n          <input matInput type=\"number\" placeholder=\"Depth\" />\n          <div class=\"tiny sub header jme-col\" matSuffix>&nbsp;cm</div>\n        </mat-form-field>\n      </div>\n      <div class=\"stackable equal width row\">\n        <mat-form-field class=\"column\">\n          <mat-label>Service Type</mat-label>\n          <mat-select>\n            <mat-option *ngFor=\"let service of serviceTypes\" [value]=\"service\">\n              {{ service }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"column\">\n          <mat-label>Item Type</mat-label>\n          <mat-select>\n            <mat-option *ngFor=\"let item of itemTypes\" [value]=\"item\">\n              {{ item }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"column\">\n          <mat-label>Pallet</mat-label>\n          <mat-select>\n            <mat-option *ngFor=\"let pallet of pallets\" [value]=\"pallet\">\n              {{ pallet }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"equal width row\">\n        <mat-form-field class=\"column\">\n          <textarea\n            matInput\n            cdkTextareaAutosize\n            cdkAutosizeMinRows=\"2\"\n            cdkAutosizeMaxRows=\"10\"\n            placeholder=\"Instructions\"\n          ></textarea>\n        </mat-form-field>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  class=\"ui centered grid\"\n  style=\"margin: 0 auto\"\n  (submit)=\"login()\"\n  #userLogin\n>\n  <mat-card class=\"rouded-all\" style=\"padding-top: 0px\">\n    <mat-card-header class=\"ui centered grid header-col rounded-top\">\n      <mat-card-title>\n        <!-- <div class=\"ui huge header white\">JME</div> -->\n        <img\n          class=\"ui centered image\"\n          src=\"../../../assets/jme-logo-header.png\"\n        />\n      </mat-card-title>\n      <mat-card-subtitle>\n        <header class=\"ui huge header white\">\n          Account Login\n        </header>\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content class=\"ui fluid centered grid\">\n      <div class=\"row\">\n        <mat-form-field class=\"centered seven wide column center aligned\">\n          <mat-icon color=\"primary\" matPrefix>account_box&nbsp;</mat-icon>\n          <input matInput placeholder=\"Username\" />\n          <mat-icon color=\"primary\" matSuffix></mat-icon>\n        </mat-form-field>\n      </div>\n      <div class=\"row\">\n        <mat-form-field class=\"centered seven wide column center aligned\">\n          <mat-icon color=\"primary\" matPrefix>lock&nbsp;</mat-icon>\n          <input matInput placeholder=\"Password\" />\n          <mat-icon color=\"primary\" matSuffix></mat-icon>\n        </mat-form-field>\n      </div>\n    </mat-card-content>\n    <mat-card-actions class=\"ui grid full-width\">\n      <div class=\"right floated three wide column\">\n        <button\n          type=\"submit\"\n          style=\"float: right\"\n          mat-raised-button\n          color=\"primary\"\n        >\n          Login\n          <mat-icon>arrow_forward</mat-icon>\n        </button>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/order-form/order-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/order-form/order-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui ten wide column grid forms-container\">\n  <div class=\"row\">\n    <app-delivery-info></app-delivery-info>\n  </div>\n  <div class=\"row\">\n    <app-person-info\n      [title]=\"'Sender Information'\"\n      #senderInfo\n    ></app-person-info>\n  </div>\n  <div class=\"row\">\n    <app-person-info\n      [title]=\"'Payor Information'\"\n      [hasSameAsButton]=\"true\"\n      (sameAsSenderClicked)=\"fillPayorInfo($event)\"\n      #payorInfo\n    ></app-person-info>\n  </div>\n  <div class=\"row\">\n    <app-person-info\n      [title]=\"'Reciever Information'\"\n      #recieverInfo\n    ></app-person-info>\n  </div>\n  <div class=\"row\">\n    <div class=\"right aligned right floated column\">\n      <button mat-stroked-button class=\"button-spacing\" color=\"primary\">\n        Cancel\n      </button>\n      <button mat-raised-button class=\"button-spacing\" color=\"primary\">\n        Submit\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/person-info/person-info.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/person-info/person-info.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  [formGroup]=\"personInfoGroup\"\n  class=\"ui centered grid\"\n  style=\"margin: 0 auto\"\n>\n  <mat-card class=\"rouded-all\" style=\"padding-top: 0px\">\n    <mat-card-header class=\"ui left aligned grid header-col rounded-top\">\n      <div\n        class=\"ui stackable two column grid full-width\"\n        style=\"margin: 0 auto\"\n      >\n        <div class=\"row\">\n          <div\n            class=\"left floated middle aligned left aligned column content\"\n            style=\"padding-top: 0px !important; padding-bottom: 0px !important\"\n          >\n            <div class=\"ui small header white\">\n              {{ title | uppercase }}\n            </div>\n          </div>\n          <div\n            class=\"column\"\n            *ngIf=\"hasSameAsButton\"\n            style=\"padding: 0px !important\"\n          >\n            <mat-checkbox\n              [formControl]=\"sameAsSender\"\n              (ngModelChange)=\"sameAsSenderChanged($event)\"\n              class=\"ui right floated small header white\"\n            >\n              Same as Sender\n            </mat-checkbox>\n          </div>\n        </div>\n      </div>\n    </mat-card-header>\n    <mat-card-content class=\"ui fluid centered stackable grid\">\n      <div class=\"row\">\n        <mat-form-field class=\"five wide column\">\n          <input\n            matInput\n            [formControl]=\"personInfoGroup.controls['bookingDate']\"\n            [matDatepicker]=\"picker\"\n            placeholder=\"Booking Date\"\n            color=\"primary\"\n            formControlName=\"bookingDate\"\n            required\n          />\n          <mat-datepicker-toggle matSuffix [for]=\"picker\">\n            <mat-icon matDatepickerToggleIcon color=\"primary\">\n              date_range\n            </mat-icon>\n          </mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field class=\"eleven wide column\">\n          <input\n            matInput\n            #name\n            [formControl]=\"personInfoGroup.controls['name']\"\n            placeholder=\"Name\"\n            [value]=\"personInfoGroup.controls['name'].value | titlecase\"\n            required\n          />\n        </mat-form-field>\n      </div>\n      <div class=\"equal width row\">\n        <mat-form-field class=\"column\">\n          <input\n            matInput\n            [formControl]=\"personInfoGroup.controls['company']\"\n            placeholder=\"Company\"\n          />\n        </mat-form-field>\n      </div>\n      <div class=\"equal width row\">\n        <mat-form-field class=\"column\">\n          <input\n            matInput\n            [formControl]=\"personInfoGroup.controls['streetAddress']\"\n            placeholder=\"Street Address\"\n            [value]=\"\n              personInfoGroup.controls['streetAddress'].value | titlecase\n            \"\n            required\n          />\n        </mat-form-field>\n      </div>\n      <div class=\"equal width row\">\n        <mat-form-field class=\"column\">\n          <input\n            matInput\n            [formControl]=\"personInfoGroup.controls['suburd']\"\n            [value]=\"personInfoGroup.controls['suburd'].value | titlecase\"\n            placeholder=\"Suburb\"\n            required\n          />\n        </mat-form-field>\n        <mat-form-field class=\"column\">\n          <mat-label>State</mat-label>\n          <mat-select [formControl]=\"personInfoGroup.controls['state']\">\n            <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n              {{ state }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"doubling two column row\">\n        <mat-form-field class=\"column\">\n          <input\n            matInput\n            [formControl]=\"personInfoGroup.controls['postalCode']\"\n            type=\"number\"\n            placeholder=\"Postal code\"\n          />\n        </mat-form-field>\n        <mat-form-field class=\"column\">\n          <div class=\"sub header jme-col\" matPrefix>+61&nbsp;</div>\n          <input\n            appAvoidPasteForNonNumeric\n            matInput\n            type=\"tel\"\n            maxlength=\"10\"\n            placeholder=\"Phone\"\n            [formControl]=\"personInfoGroup.controls['phone']\"\n            (keypress)=\"numOnly($event)\"\n            required\n            #inputPhone\n          />\n          <mat-hint align=\"end\">{{ inputPhone.value.length }} / 10</mat-hint>\n        </mat-form-field>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\n  height: 100vh;\n  width: 100vw;\n  overflow: auto;\n  background: url('/assets/jmet-background.jpg'), #fff;\n  color: #777;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lbC9EZXNrdG9wL2ptZXQvbmV3LXRlcm1pbmFsL2ptZXQtdGVybWluYWwtYXBwL3Jlc291cmNlcy90cy9qbWV0LWZvcm1zL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvREFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvam1ldC1iYWNrZ3JvdW5kLmpwZycpLCAjZmZmOyAgICBcbiAgICBjb2xvcjogIzc3NztcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iLCIucGFnZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvam1ldC1iYWNrZ3JvdW5kLmpwZ1wiKSwgI2ZmZjtcbiAgY29sb3I6ICM3Nzc7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'jmet-forms';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm2015/elements.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/angular-material.module */ "./src/app/modules/angular-material.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/order-form/order-form.component */ "./src/app/components/order-form/order-form.component.ts");
/* harmony import */ var _components_delivery_info_delivery_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/delivery-info/delivery-info.component */ "./src/app/components/delivery-info/delivery-info.component.ts");
/* harmony import */ var _components_person_info_person_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/person-info/person-info.component */ "./src/app/components/person-info/person-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _directives_avoidCopyPaste__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/avoidCopyPaste */ "./src/app/directives/avoidCopyPaste.ts");















const APP_ROUTES = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'orderForm', component: _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_10__["OrderFormComponent"] },
    // always put this on the end of the route
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
let AppModule = class AppModule {
    constructor(injector, location, router) {
        this.injector = injector;
        this.location = location;
        this.router = router;
        const appComponentElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], { injector });
        customElements.define('app-root', appComponentElement);
        // on every route change tell router to navigate to defined route
        this.location.subscribe(data => {
            console.log('Data subscribe', data);
            this.router.navigateByUrl(data.url);
        });
        // using this router outlet is loaded normaly on init
        this.router.navigateByUrl(this.location.path(true));
        // event subscribe to detect route change inside angular
        this.router.events.subscribe(data => {
            // console.log(data);
        });
    }
    ngDoBootstrap() { }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_10__["OrderFormComponent"],
            _components_delivery_info_delivery_info_component__WEBPACK_IMPORTED_MODULE_11__["DeliveryInfoComponent"],
            _components_person_info_person_info_component__WEBPACK_IMPORTED_MODULE_12__["PersonInfoComponent"],
            _directives_avoidCopyPaste__WEBPACK_IMPORTED_MODULE_14__["AvoidPasteForNonNumericDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModules"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(APP_ROUTES, { useHash: true })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/delivery-info/delivery-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/delivery-info/delivery-info.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-wrapper {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lbC9EZXNrdG9wL2ptZXQvbmV3LXRlcm1pbmFsL2ptZXQtdGVybWluYWwtYXBwL3Jlc291cmNlcy90cy9qbWV0LWZvcm1zL3NyYy9hcHAvY29tcG9uZW50cy9kZWxpdmVyeS1pbmZvL2RlbGl2ZXJ5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGVsaXZlcnktaW5mby9kZWxpdmVyeS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsaXZlcnktaW5mby9kZWxpdmVyeS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbn1cbiIsIjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/delivery-info/delivery-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/delivery-info/delivery-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeliveryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryInfoComponent", function() { return DeliveryInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliveryInfoComponent = class DeliveryInfoComponent {
    constructor() {
        this.serviceTypes = ['service 1', 'service 2'];
        this.itemTypes = ['item 1', 'item 2'];
        this.pallets = ['pallet 1', 'pallet 2'];
        this.selectedServiceType = '';
        this.selectedItemType = '';
        this.selectedPallet = '';
    }
    ngOnInit() { }
};
DeliveryInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-info',
        template: __webpack_require__(/*! raw-loader!./delivery-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/delivery-info/delivery-info.component.html"),
        styles: [__webpack_require__(/*! ./delivery-info.component.scss */ "./src/app/components/delivery-info/delivery-info.component.scss")]
    })
], DeliveryInfoComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-wrapper {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lbC9EZXNrdG9wL2ptZXQvbmV3LXRlcm1pbmFsL2ptZXQtdGVybWluYWwtYXBwL3Jlc291cmNlcy90cy9qbWV0LWZvcm1zL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbn1cblxuXG5cblxuIiwiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginComponent = class LoginComponent {
    constructor(router, activateRoute) {
        this.router = router;
        this.activateRoute = activateRoute;
    }
    ngOnInit() { }
    login() {
        this.router.navigate(['/orderForm'], { relativeTo: this.activateRoute });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/order-form/order-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forms-container {\n  max-width: 600px;\n  margin: 0px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background: white;\n}\n\n.button-spacing {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb25lbC9EZXNrdG9wL2ptZXQvbmV3LXRlcm1pbmFsL2ptZXQtdGVybWluYWwtYXBwL3Jlc291cmNlcy90cy9qbWV0LWZvcm1zL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItZm9ybS9vcmRlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXMtY29udGFpbmVye1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uYnV0dG9uLXNwYWNpbmd7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiLmZvcm1zLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYnV0dG9uLXNwYWNpbmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/order-form/order-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/order-form/order-form.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderFormComponent = class OrderFormComponent {
    constructor() { }
    ngOnInit() { }
    fillPayorInfo(sameAsSender) {
        for (const key in this.payorInfo.personInfoGroup.controls) {
            if (this.payorInfo.personInfoGroup.controls.hasOwnProperty(key)) {
                const payorData = this.payorInfo.personInfoGroup.controls[key];
                if (sameAsSender) {
                    const senderData = this.senderInfo.personInfoGroup.controls[key];
                    payorData.setValue(senderData.value);
                }
                else {
                    payorData.setValue('');
                }
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('senderInfo', { static: true })
], OrderFormComponent.prototype, "senderInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('payorInfo', { static: true })
], OrderFormComponent.prototype, "payorInfo", void 0);
OrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-form',
        template: __webpack_require__(/*! raw-loader!./order-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/order-form/order-form.component.html"),
        styles: [__webpack_require__(/*! ./order-form.component.scss */ "./src/app/components/order-form/order-form.component.scss")]
    })
], OrderFormComponent);



/***/ }),

/***/ "./src/app/components/person-info/person-info.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/person-info/person-info.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uLWluZm8vcGVyc29uLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/person-info/person-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/person-info/person-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: PersonInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonInfoComponent", function() { return PersonInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/util/input */ "./src/app/util/input.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let PersonInfoComponent = class PersonInfoComponent {
    constructor(fb) {
        this.fb = fb;
        this.title = '';
        this.hasSameAsButton = false;
        this.sameAsSenderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.states = ['California', 'New York', 'South Carolina'];
        this.numOnly = src_app_util_input__WEBPACK_IMPORTED_MODULE_2__["numOnly"];
        this.personInfoGroup = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bookingDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            streetAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            suburd: [''],
            state: [''],
            postalCode: [''],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.sameAsSender = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
    }
    ngOnInit() { }
    sameAsSenderChanged(event) {
        console.log('sameAsSenderChanged', event);
        this.sameAsSenderClicked.emit(event);
    }
};
PersonInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonInfoComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonInfoComponent.prototype, "hasSameAsButton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PersonInfoComponent.prototype, "sameAsSenderClicked", void 0);
PersonInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person-info',
        template: __webpack_require__(/*! raw-loader!./person-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/person-info/person-info.component.html"),
        styles: [__webpack_require__(/*! ./person-info.component.scss */ "./src/app/components/person-info/person-info.component.scss")]
    })
], PersonInfoComponent);



/***/ }),

/***/ "./src/app/directives/avoidCopyPaste.ts":
/*!**********************************************!*\
  !*** ./src/app/directives/avoidCopyPaste.ts ***!
  \**********************************************/
/*! exports provided: AvoidPasteForNonNumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvoidPasteForNonNumericDirective", function() { return AvoidPasteForNonNumericDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AvoidPasteForNonNumericDirective = class AvoidPasteForNonNumericDirective {
    constructor() { }
    blockNonNumericPaste(e) {
        const val = Number(e.clipboardData.getData('Text'));
        console.log('val', val);
        if (parseInt(val.toString(), 15) < 0 || isNaN(val)) {
            e.preventDefault();
        }
        // if (!Number.isSafeInteger(val) && val < 0) {
        // }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('paste', ['$event'])
], AvoidPasteForNonNumericDirective.prototype, "blockNonNumericPaste", null);
AvoidPasteForNonNumericDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appAvoidPasteForNonNumeric]' })
], AvoidPasteForNonNumericDirective);



/***/ }),

/***/ "./src/app/modules/angular-material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/angular-material.module.ts ***!
  \****************************************************/
/*! exports provided: AngularMaterialModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModules", function() { return AngularMaterialModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");










const ANGULAR_MATERIAL_MODULES = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"]
];
let AngularMaterialModules = class AngularMaterialModules {
};
AngularMaterialModules = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: ANGULAR_MATERIAL_MODULES,
        exports: ANGULAR_MATERIAL_MODULES,
        providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"]]
    })
], AngularMaterialModules);



/***/ }),

/***/ "./src/app/util/input.ts":
/*!*******************************!*\
  !*** ./src/app/util/input.ts ***!
  \*******************************/
/*! exports provided: numOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numOnly", function() { return numOnly; });
function numOnly(event) {
    if (!(Number.isInteger(Number(event.key)) || event.key === 'Backspace')) {
        event.preventDefault();
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
// import 'hammerjs';




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonel/Desktop/jmet/new-terminal/jmet-terminal-app/resources/ts/jmet-forms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map