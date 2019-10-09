(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/app.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/app.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row class=\"ui secondary menu\">\n    <img\n      style=\"height: 100%\"\n      class=\"ui image\"\n      src=\"../../../assets/jme-logo-header.png\"\n    />\n    <div class=\"right menu\">\n      <a class=\"ui item\">\n        <button mat-flat-button color=\"primary\">Logout</button>\n      </a>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"ui centered grid dashboard-container\" style=\"text-align: left\">\n  <div class=\"row\">\n    <div class=\"column\">\n      <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%\">\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef>\n            <div class=\"ui medium header\">\n              Name\n              <div class=\"sub header\">\n                Company\n              </div>\n            </div>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div class=\"ui small header\">\n              {{ row.name }}\n              <div class=\"sub header\">\n                {{ row.company }}\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"suburd\">\n          <th mat-header-cell *matHeaderCellDef>\n            <div class=\"ui medium header\">\n              Suburd\n            </div>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            {{ row.suburd }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"state\">\n          <th mat-header-cell *matHeaderCellDef>\n            <div class=\"ui medium header\">\n              State\n            </div>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            {{ row.state }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"phone\">\n          <th mat-header-cell *matHeaderCellDef>\n            <div class=\"ui medium header centered\">\n              Phone\n            </div>\n          </th>\n          <td mat-cell *matCellDef=\"let row\" class=\"content-center\">\n            {{ row.phone }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"hasAccount\">\n          <th mat-header-cell *matHeaderCellDef>\n            <div class=\"ui medium header centered\">\n              Account\n            </div>\n          </th>\n\n          <td mat-cell *matCellDef=\"let row\" class=\"content-center\">\n            <ng-container *ngIf=\"row.hasAccount; else update\">\n              <button color=\"primary\" mat-stroked-button>\n                Update\n              </button>\n            </ng-container>\n            <ng-template #update>\n              <button mat-raised-button color=\"primary\">\n                Create\n              </button>\n            </ng-template>\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: columns\"></tr>\n      </table>\n\n      <mat-paginator\n        [pageSizeOptions]=\"[5, 10, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/delivery-info/delivery-info.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/components/delivery-info/delivery-info.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxLayoutGap=\"1em\">\n  <div fxFlex=\"100%\" fxFlexFill>\n    <div class=\"ui small header \">\n      ITEM Description\n    </div>\n  </div>\n  <form\n    [formGroup]=\"deliveryItemForm\"\n    name=\"itemForm\"\n    fxFlex=\"90%\"\n    fxFlexAlign=\"center\"\n    fxFlexFill\n  >\n    <div\n      fxLayout=\"row\"\n      fxLayout.lt-sm=\"column\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutGap=\"1em\"\n    >\n      <mat-form-field\n        fxFlex=\"50%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Description</mat-label>\n        <input\n          matInput\n          [formControl]=\"deliveryItemForm.controls['description']\"\n          [value]=\"deliveryItemForm.controls['description'].value\"\n          placeholder=\"Description\"\n          class=\"non-semantic\"\n          style=\"text-align: unset !important;\"\n          #descriptionField\n          required\n        />\n        <mat-error\n          *ngIf=\"deliveryItemForm.controls['description'].hasError('required')\"\n        >\n          Description is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field\n        fxFlex=\"50%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Commodity</mat-label>\n        <mat-select [formControl]=\"deliveryItemForm.controls['commodity']\">\n          <mat-option *ngFor=\"let commodity of commodities\" [value]=\"commodity\">\n            {{ commodity }}\n          </mat-option>\n        </mat-select>\n        <mat-error\n          *ngIf=\"deliveryItemForm.controls['commodity'].hasError('required')\"\n        >\n          Commodity is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div\n      fxLayout=\"row\"\n      fxLayout.lt-sm=\"column\"\n      fxLayoutAlign=\"space-between strech\"\n      fxLayoutGap=\"1em\"\n    >\n      <mat-form-field\n        fxFlex=\"15%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Items</mat-label>\n        <input\n          matInput\n          [formControl]=\"deliveryItemForm.controls['items']\"\n          [value]=\"deliveryItemForm.controls['items'].value\"\n          placeholder=\"Items\"\n          class=\"non-semantic\"\n          style=\"text-align: unset !important;\"\n          type=\"number\"\n          required\n        />\n        <mat-error\n          *ngIf=\"deliveryItemForm.controls['items'].hasError('required')\"\n        >\n          Items is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field\n        fxFlex=\"20%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Total Weight</mat-label>\n        <input\n          matInput\n          [formControl]=\"deliveryItemForm.controls['totalWeight']\"\n          [value]=\"deliveryItemForm.controls['totalWeight'].value\"\n          placeholder=\"Total Weight\"\n          class=\"non-semantic\"\n          style=\"text-align: unset !important;\"\n          type=\"number\"\n          required\n        />\n        <mat-error\n          *ngIf=\"deliveryItemForm.controls['totalWeight'].hasError('required')\"\n        >\n          Total Weight is <strong>required</strong>\n        </mat-error>\n        <div class=\"sub header jme-col\" matSuffix style=\"top: 0px\">\n          Kg\n        </div>\n      </mat-form-field>\n      <mat-form-field\n        fxFlex=\"20%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Length</mat-label>\n        <input\n          matInput\n          [formControl]=\"deliveryItemForm.controls['length']\"\n          [value]=\"deliveryItemForm.controls['length'].value\"\n          placeholder=\"Length\"\n          class=\"non-semantic\"\n          style=\"text-align: unset !important;\"\n          type=\"number\"\n          required\n        />\n        <mat-error\n          *ngIf=\"deliveryItemForm.controls['length'].hasError('required')\"\n        >\n          Length is <strong>required</strong>\n        </mat-error>\n        <div class=\"sub header jme-col\" matSuffix style=\"top: 0px\">\n          cm\n        </div>\n      </mat-form-field>\n      <mat-form-field\n        fxFlex=\"20%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Width</mat-label>\n        <input\n          matInput\n          [formControl]=\"deliveryItemForm.controls['width']\"\n          [value]=\"deliveryItemForm.controls['width'].value\"\n          placeholder=\"Width\"\n          class=\"non-semantic\"\n          style=\"text-align: unset !important;\"\n          type=\"number\"\n          required\n        />\n        <mat-error\n          *ngIf=\"deliveryItemForm.controls['width'].hasError('required')\"\n        >\n          Width is <strong>required</strong>\n        </mat-error>\n        <div class=\"sub header jme-col\" matSuffix style=\"top: 0px\">\n          cm\n        </div>\n      </mat-form-field>\n      <mat-form-field\n        fxFlex=\"20%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Height</mat-label>\n        <input\n          matInput\n          [formControl]=\"deliveryItemForm.controls['height']\"\n          [value]=\"deliveryItemForm.controls['height'].value\"\n          placeholder=\"Height\"\n          class=\"non-semantic\"\n          style=\"text-align: unset !important;\"\n          type=\"number\"\n          required\n        />\n        <mat-error\n          *ngIf=\"deliveryItemForm.controls['height'].hasError('required')\"\n        >\n          Height is <strong>required</strong>\n        </mat-error>\n        <div class=\"sub header jme-col\" matSuffix style=\"top: 0px\">\n          cm\n        </div>\n      </mat-form-field>\n    </div>\n    <div\n      fxLayout=\"row\"\n      fxLayoutAlign=\"center center\"\n      fxLayoutGap=\"1em\"\n      [ngStyle]=\"{ 'text-align': 'center' }\"\n    >\n      <button (click)=\"addItem()\" mat-raised-button color=\"primary\">\n        {{ toUpdateIndex !== undefined ? 'Update' : 'Add Item' }}\n      </button>\n      <button\n        *ngIf=\"toUpdateIndex !== undefined\"\n        (click)=\"deleteToEdit()\"\n        mat-stroked-button\n        color=\"primary\"\n      >\n        Delete\n      </button>\n    </div>\n  </form>\n  <div fxFlex=\"100%\" fxFlexFill>\n    <div class=\"ui horizontal divider\">Item List</div>\n    <ng-container *ngIf=\"deliveryItems.length === 0; else hasItems\">\n      <div\n        class=\"ui huge disabled header\"\n        [ngStyle]=\"{ 'text-align': 'center' }\"\n      >\n        <div class=\"content\">\n          Currently No Items on the List\n        </div>\n      </div>\n    </ng-container>\n    <ng-template #hasItems>\n      <div style=\"justify-content: left\">\n        <app-delivery-table\n          (itemSelected)=\"selectUpdateItem($event)\"\n          (itemDeleted)=\"deleteItem($event)\"\n          [deliveryItems]=\"deliveryItems\"\n        ></app-delivery-table>\n      </div>\n    </ng-template>\n  </div>\n  <div fxFlex=\"100%\" fxFlexFill>\n    <form\n      [formGroup]=\"deliveryItemForm\"\n      fxFlex=\"100%\"\n      fxFlexAlign=\"center\"\n      fxFlexFill\n      name=\"itemForm\"\n    >\n      <div fxLayout=\"row\" class=\"ui horizontal divider\">Pick Up Details</div>\n      <div\n        fxLayout=\"row\"\n        fxLayout.lt-sm=\"column\"\n        fxLayoutAlign=\"space-between center\"\n        fxLayoutGap=\"1em\"\n      >\n        <mat-form-field\n          fxFlex=\"20%\"\n          fxFlexFill\n          fxFlexAlign=\"start\"\n          appearance=\"outline\"\n        >\n          <mat-label>Parcel Type</mat-label>\n          <mat-select [formControl]=\"deliveryInfoGroup.controls['parcelType']\">\n            <mat-option *ngFor=\"let type of parcelType\" [value]=\"type\">\n              {{ type }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field\n          fxFlex=\"10%\"\n          fxFlexFill\n          fxFlexAlign=\"start\"\n          appearance=\"outline\"\n        >\n          <mat-label>Option</mat-label>\n          <mat-select\n            [formControl]=\"deliveryInfoGroup.controls['pickUpOption']\"\n          >\n            <mat-option\n              *ngFor=\"let option of pickupOptionType\"\n              [value]=\"option\"\n            >\n              {{ option }}\n            </mat-option>\n          </mat-select>\n          <mat-error\n            *ngIf=\"\n              deliveryInfoGroup.controls['pickUpOption'].hasError('required')\n            \"\n          >\n            Pickup Option is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field\n          fxFlex=\"20%\"\n          fxFlexFill\n          fxFlexAlign=\"start\"\n          appearance=\"outline\"\n        >\n          <mat-label>Pickup Date</mat-label>\n          <input\n            matInput\n            [formControl]=\"deliveryInfoGroup.controls['pickUpDate']\"\n            [matDatepicker]=\"pickupDate\"\n            placeholder=\"Pickup Date\"\n            color=\"primary\"\n            class=\"non-semantic\"\n            style=\"text-align: unset !important;\"\n            required\n          />\n          <mat-datepicker-toggle matSuffix [for]=\"pickupDate\">\n            <mat-icon matDatepickerToggleIcon color=\"primary\">\n              date_range\n            </mat-icon>\n          </mat-datepicker-toggle>\n          <mat-datepicker #pickupDate></mat-datepicker>\n          <mat-error\n            *ngIf=\"\n              deliveryInfoGroup.controls['pickUpDate'].hasError('required')\n            \"\n          >\n            Pickup Date is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field\n          fxFlex=\"20%\"\n          fxFlexFill\n          fxFlexAlign=\"center\"\n          appearance=\"outline\"\n        >\n          <mat-label>Ready At</mat-label>\n          <input\n            matInput\n            placeholder=\"Ready At\"\n            class=\"non-semantic\"\n            style=\"text-align: unset !important;\"\n            [ngxTimepicker]=\"readyAt\"\n            [formControl]=\"deliveryInfoGroup.controls['pickUpReadyAt']\"\n            readonly\n            required\n          />\n          <ngx-material-timepicker-toggle\n            class=\"time-picker-toggle\"\n            matSuffix\n            [for]=\"readyAt\"\n          >\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              style=\"fill: #760f29\"\n            >\n              <path\n                d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"\n              />\n            </svg>\n          </ngx-material-timepicker-toggle>\n\n          <ngx-material-timepicker\n            [ngxMaterialTimepickerTheme]=\"pickerStyle\"\n            #readyAt\n          ></ngx-material-timepicker>\n          <mat-error\n            *ngIf=\"\n              deliveryInfoGroup.controls['pickUpReadyAt'].hasError('required')\n            \"\n          >\n            Ready At is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field\n          fxFlex=\"20%\"\n          fxFlexFill\n          fxFlexAlign=\"center\"\n          appearance=\"outline\"\n        >\n          <mat-label>Closing Time</mat-label>\n          <input\n            matInput\n            placeholder=\"Closing Time\"\n            class=\"non-semantic\"\n            style=\"text-align: unset !important;\"\n            [ngxTimepicker]=\"pickerClosingTime\"\n            [formControl]=\"deliveryInfoGroup.controls['closingTime']\"\n            readonly\n            required\n          />\n          <ngx-material-timepicker-toggle\n            class=\"time-picker-toggle\"\n            matSuffix\n            [for]=\"pickerClosingTime\"\n          >\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              style=\"fill: #760f29\"\n            >\n              <path\n                d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"\n              />\n            </svg>\n          </ngx-material-timepicker-toggle>\n          <ngx-material-timepicker\n            [ngxMaterialTimepickerTheme]=\"pickerStyle\"\n            #pickerClosingTime\n          ></ngx-material-timepicker>\n          <mat-error\n            *ngIf=\"\n              deliveryInfoGroup.controls['closingTime'].hasError('required')\n            \"\n          >\n            Closing Time is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <div\n        fxLayout=\"row\"\n        fxLayout.lt-sm=\"column\"\n        fxLayoutAlign=\"space-between center\"\n        fxLayoutGap=\"1em\"\n        *ngIf=\"\n          deliveryInfoGroup.controls['parcelType'].value === 'Dangerous Goods'\n        \"\n      >\n        <mat-form-field\n          fxFlex=\"100%\"\n          fxFlexFill\n          fxFlexAlign=\"center\"\n          appearance=\"outline\"\n        >\n          <mat-label>Special Instructions</mat-label>\n          <textarea\n            matInput\n            [formControl]=\"deliveryInfoGroup.controls['specialInstruction']\"\n            [value]=\"deliveryInfoGroup.controls['specialInstruction'].value\"\n            placeholder=\"Special Instructions\"\n            class=\"non-semantic\"\n            cdkTextareaAutosize\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"\n          ></textarea>\n          <mat-error\n            *ngIf=\"\n              deliveryInfoGroup.controls['specialInstruction'].hasError(\n                'required'\n              )\n            \"\n          >\n            Special Instructions is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <!-- <div\n        fxLayout=\"row\"\n        fxLayout.lt-sm=\"column\"\n        fxLayoutAlign=\"space-between center\"\n        fxLayoutGap=\"1em\"\n      ></div> -->\n      <!-- <div\n        fxLayout=\"row\"\n        fxLayout.lt-sm=\"column\"\n        fxLayoutAlign=\"space-between center\"\n        fxLayoutGap=\"1em\"\n      ></div> -->\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/delivery-table/delivery-table.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/components/delivery-table/delivery-table.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned divided list\" style=\"text-align: left\">\n  <div class=\"item small-top-bot-margin\">\n    <div class=\"content\">\n      <div class=\"header\">\n        Description\n        <div class=\"sub header\">Commodity</div>\n      </div>\n      <div>Items / Total Weight</div>\n      <div>Lenght / Width / Height / Cubic</div>\n    </div>\n  </div>\n  <div\n    class=\"item small-top-bot-margin\"\n    *ngFor=\"let item of deliveryItems; let i = index\"\n  >\n    <div class=\"right floated content\">\n      <button mat-icon-button (click)=\"itemUpdateClicked(item, i)\">\n        <mat-icon color=\"primary\">\n          edit\n        </mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"itemDeleteClicked(item, i)\">\n        <mat-icon [fontSet]=\"'material-icons-outlined'\" color=\"accent\">\n          delete\n        </mat-icon>\n      </button>\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">\n        {{ item.description }}\n      </div>\n      <div class=\"sub header\">{{ item.commodity }}</div>\n      <div>{{ item.items }} / {{ item.totalWeight }} kg</div>\n      <div>\n        {{ item.length }} cm / {{ item.width }} cm / {{ item.height }} cm /\n        {{ (item.length * item.height * item.width) / pow(100, 3) }} m<sup\n          >3</sup\n        >\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/components/login/login.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  class=\"ui centered grid\"\n  style=\"margin: 0 auto\"\n  (submit)=\"login()\"\n  [formGroup]=\"loginAccountForm\"\n  action=\"#\"\n  #userLogin>\n  <mat-card class=\"rouded-all\" style=\"padding-top: 0px\">\n    <mat-card-header\n      class=\"ui centered grid header-col rounded-top\"\n      style=\"margin-bottom: 10px\">\n      <mat-card-title>\n        <!-- <div class=\"ui huge header white\">JME</div> -->\n        <img\n          class=\"ui centered image disable-selection\"\n          src=\"../../../assets/jme-logo-header.png\"\n          />\n      </mat-card-title>\n      <mat-card-subtitle>\n        <header class=\"ui huge header white\">\n          Account Login\n        </header>\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content class=\"ui fluid centered grid\">\n      <div class=\"row\" style=\"padding: 0px\">\n        <mat-form-field class=\"centered seven wide column center aligned\">\n          <mat-icon color=\"primary\" matPrefix>account_box&nbsp;</mat-icon>\n          <input\n            matInput\n            placeholder=\"Username\"\n            [formControl]=\"loginAccountForm.controls['username']\"\n            [value]=\"loginAccountForm.controls['username'].value\"\n            />\n          <mat-icon color=\"primary\" matSuffix></mat-icon>\n        </mat-form-field>\n      </div>\n      <div class=\"row\" style=\"padding: 0px\">\n        <mat-form-field class=\"centered seven wide column center aligned\">\n          <mat-icon color=\"primary\" matPrefix>lock&nbsp;</mat-icon>\n          <input\n            matInput\n            placeholder=\"Password\"\n            type=\"password\"\n            [formControl]=\"loginAccountForm.controls['password']\"\n            [value]=\"loginAccountForm.controls['password'].value\"\n            />\n          <mat-icon color=\"primary\" matSuffix></mat-icon>\n        </mat-form-field>\n      </div>\n      <div class=\"row\" style=\"padding: 0px\">\n        <a class=\"jme-col\" href=\"\"><b>Forgot Password?</b></a>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <div class=\"ui grid full-width\" style=\"margin:0px\">\n        <div class=\"middle aligned column\">\n          <div style=\"float: right;\n            display: flex; flex-direction: row-reverse;\">\n            <button type=\"submit\"\n              mat-raised-button\n              color=\"primary\">\n              Login\n              <mat-icon>arrow_forward</mat-icon>\n            </button>\n            &nbsp;\n            &nbsp;\n            <button (click)=\"signUp()\" mat-stroked-button\n              color=\"primary\">\n              Sign Up\n            </button>\n          </div>\n        </div>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/order-form/order-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/components/order-form/order-form.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxLayoutGap=\"0px\">\n  <div\n    fxFlex=\"10%\"\n    fxFlexFill\n    fxHide\n    fxShow.lt-sm\n    [ngStyle]=\"{ 'text-align': 'center' }\"\n  >\n    <div\n      class=\"header-col white\"\n      style=\"text-align: center; margin: 0 24px 0 24px;\"\n    >\n      <div>\n        <h1>\n          Step {{ formStepper.selectedIndex + 1 }} out of\n          {{ formStepper._steps.length }}\n        </h1>\n      </div>\n    </div>\n  </div>\n  <div fxFlexFill>\n    <mat-horizontal-stepper\n      #formStepper\n      (selectionChange)=\"stepperChange($event)\"\n      [linear]=\"true\"\n      labelPosition=\"bottom\"\n    >\n      <mat-step\n        [stepControl]=\"senderInfo.personInfoGroup\"\n        label=\"Sender Information\"\n      >\n        <app-person-info [title]=\"'Sender'\" #senderInfo></app-person-info>\n        <div [ngStyle]=\"{ 'text-align': 'center' }\">\n          <button\n            mat-raised-button\n            class=\"button-spacing\"\n            color=\"primary\"\n            matStepperNext\n          >\n            Next\n          </button>\n        </div>\n      </mat-step>\n\n      <mat-step\n        [stepControl]=\"payorInfo.personInfoGroup\"\n        label=\"Payor Information\"\n      >\n        <app-person-info\n          [title]=\"'Payor'\"\n          [hasSameAsButton]=\"true\"\n          (sameAsSenderClicked)=\"fillPayorInfo($event)\"\n          #payorInfo\n        ></app-person-info>\n        <div [ngStyle]=\"{ 'text-align': 'center' }\">\n          <button\n            mat-stroked-button\n            class=\"button-spacing\"\n            color=\"primary\"\n            matStepperPrevious\n          >\n            Previous\n          </button>\n          <button\n            mat-raised-button\n            class=\"button-spacing\"\n            color=\"primary\"\n            matStepperNext\n          >\n            Next\n          </button>\n        </div>\n      </mat-step>\n\n      <mat-step\n        [stepControl]=\"recieverInfo.personInfoGroup\"\n        label=\"Receiver Information\"\n      >\n        <app-person-info [title]=\"'Receiver'\" #recieverInfo></app-person-info>\n        <div [ngStyle]=\"{ 'text-align': 'center' }\">\n          <button\n            mat-stroked-button\n            class=\"button-spacing\"\n            color=\"primary\"\n            matStepperPrevious\n          >\n            Previous\n          </button>\n          <button\n            mat-raised-button\n            class=\"button-spacing\"\n            color=\"primary\"\n            matStepperNext\n          >\n            Next\n          </button>\n        </div>\n      </mat-step>\n\n      <mat-step\n        label=\"Item Description\"\n        [stepControl]=\"deliveryInfo.deliveryInfoGroup\"\n      >\n        <app-delivery-info #deliveryInfo></app-delivery-info>\n        <div [ngStyle]=\"{ 'text-align': 'center' }\">\n          <button\n            mat-stroked-button\n            class=\"button-spacing\"\n            color=\"primary\"\n            matStepperPrevious\n          >\n            Previous\n          </button>\n          <button\n            mat-raised-button\n            class=\"button-spacing\"\n            color=\"primary\"\n            matStepperNext\n          >\n            Next\n          </button>\n        </div>\n      </mat-step>\n\n      <mat-step label=\"Download Forms\" state=\"downloadForms\">\n        <div fxLayoutAlign=\"start start\" fxLayout=\"column\">\n          <div\n            fxLayout=\"row\"\n            fxLayoutAlign=\"start stretch\"\n            style=\"text-align: left !important;\"\n            fxFlexFill\n          >\n            <app-transaction-summary\n              fxFlexFill\n              [transactionSummary]=\"transactionSummary\"\n              [transactionFetching]=\"this.transactionFetching\"\n              [disableResubmit]=\"this.disableResubmit\"\n              (resubmit)=\"reviewAndSubmit()\"\n            ></app-transaction-summary>\n          </div>\n        </div>\n        <div [ngStyle]=\"{ 'text-align': 'center' }\">\n          <button\n            mat-stroked-button\n            class=\"button-spacing\"\n            color=\"primary\"\n            matStepperPrevious\n            [disabled]=\"this.disableReturn\"\n          >\n            Previous\n          </button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/person-info/person-info.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/components/person-info/person-info.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  [formGroup]=\"personInfoGroup\"\n  fxLayout=\"column\"\n  fxLayoutAlign=\"space-around stretch\"\n  fxLayoutGap=\"1em\"\n>\n  <div\n    fxFlex=\"90%\"\n    class=\"header-col\"\n    fxFlexAlign=\"start\"\n    fxFlexFill\n    [ngStyle]=\"{ 'padding-top': '10px', 'padding-bottom': '10px' }\"\n  >\n    <div class=\"ui medium header white\" style=\"text-align: left\">\n      {{ title | uppercase }} Information\n    </div>\n  </div>\n  <div [ngStyle]=\"{ width: '100%', 'text-align': 'center' }\">\n    <mat-checkbox\n      fxFlex=\"100%\"\n      fxFlexAlign=\"center\"\n      fxFlexFill\n      *ngIf=\"hasSameAsButton\"\n      [formControl]=\"sameAsSender\"\n      (ngModelChange)=\"sameAsSenderChanged($event)\"\n      class=\"ui right floated large header\"\n    >\n      Same as Sender\n    </mat-checkbox>\n    <div></div>\n  </div>\n  <div fxFlex=\"90%\" fxFlexAlign=\"center\" fxFlexFill>\n    <div\n      fxLayout=\"row\"\n      fxLayout.lt-sm=\"column\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutGap=\"1em\"\n    >\n      <mat-form-field\n        fxFlex=\"30%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Booking Date</mat-label>\n        <input\n          matInput\n          [formControl]=\"personInfoGroup.controls['bookingDate']\"\n          [matDatepicker]=\"picker\"\n          placeholder=\"Booking Date\"\n          color=\"primary\"\n          formControlName=\"bookingDate\"\n          required\n        />\n        <mat-datepicker-toggle matSuffix [for]=\"picker\">\n          <mat-icon matDatepickerToggleIcon color=\"primary\">\n            date_range\n          </mat-icon>\n        </mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['bookingDate'].hasError('required')\"\n        >\n          Booking Date is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field\n        fxFlex=\"70%\"\n        fxFlex.lt-sm=\"100%\"\n        fxFlexAlign=\"start\"\n        fxFlexFill\n        appearance=\"outline\"\n      >\n        <mat-label>{{ title | titlecase }} Name</mat-label>\n        <input\n          matInput\n          #name\n          [formControl]=\"personInfoGroup.controls['name']\"\n          placeholder=\"{{ title | titlecase }} Name\"\n          [value]=\"personInfoGroup.controls['name'].value | titlecase\"\n          required\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['name'].hasError('required')\"\n        >\n          {{ title | titlecase }} Name is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <div></div>\n    </div>\n  </div>\n  <div fxFlex=\"90%\" fxFlexAlign=\"center\" fxFlexFill>\n    <div\n      fxLayout=\"row\"\n      fxLayout.lt-sm=\"column\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutGap=\"1em\"\n    >\n      <mat-form-field fxFlexFill fxFlexAlign=\"start\" appearance=\"outline\">\n        <mat-label>Company</mat-label>\n        <input\n          matInput\n          [formControl]=\"personInfoGroup.controls['company']\"\n          placeholder=\"Company\"\n          required\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['company'].hasError('required')\"\n        >\n          Company is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxFlex=\"90%\" fxFlexAlign=\"center\" fxFlexFill>\n    <div\n      fxLayout=\"row\"\n      fxLayout.lt-sm=\"column\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutGap=\"1em\"\n    >\n      <mat-form-field fxFlexFill fxFlexAlign=\"start\" appearance=\"outline\">\n        <mat-label>Street Address</mat-label>\n        <input\n          matInput\n          [formControl]=\"personInfoGroup.controls['streetAddress']\"\n          placeholder=\"Street Address\"\n          [value]=\"personInfoGroup.controls['streetAddress'].value | titlecase\"\n          required\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['streetAddress'].hasError('required')\"\n        >\n          Street Address is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxFlex=\"90%\" fxFlexAlign=\"center\" fxFlexFill>\n    <div\n      fxLayout=\"row\"\n      fxLayout.lt-sm=\"column\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutGap=\"1em\"\n    >\n      <mat-form-field\n        fxFlex=\"50%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Suburb</mat-label>\n        <input\n          matInput\n          [formControl]=\"personInfoGroup.controls['suburd']\"\n          [value]=\"personInfoGroup.controls['suburd'].value | titlecase\"\n          placeholder=\"Suburb\"\n          required\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['suburd'].hasError('required')\"\n        >\n          Suburb Address is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field\n        fxFlex=\"50%\"\n        fxFlexFill\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>State</mat-label>\n        <mat-select [formControl]=\"personInfoGroup.controls['state']\">\n          <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n            {{ state }}\n          </mat-option>\n        </mat-select>\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['state'].hasError('required')\"\n        >\n          State is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxFlex=\"90%\" fxFlexAlign=\"center\" fxFlexFill>\n    <div\n      fxLayout=\"row\"\n      fxLayout.lt-sm=\"column\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutGap=\"1em\"\n    >\n      <mat-form-field\n        fxFlexFill\n        fxFlex=\"50%\"\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Post code</mat-label>\n        <input\n          appAvoidPasteForNonNumeric\n          matInput\n          [formControl]=\"personInfoGroup.controls['postalCode']\"\n          type=\"number\"\n          placeholder=\"Post code\"\n        />\n      </mat-form-field>\n      <mat-form-field\n        fxFlexFill\n        fxFlex=\"50%\"\n        fxFlexAlign=\"start\"\n        appearance=\"outline\"\n      >\n        <mat-label>Phone</mat-label>\n        <div class=\"sub header jme-col\" matPrefix style=\"top: 0px\">\n          +61&nbsp;\n        </div>\n        <input\n          appAvoidPasteForNonNumeric\n          matInput\n          type=\"tel\"\n          maxlength=\"10\"\n          placeholder=\"Phone\"\n          [formControl]=\"personInfoGroup.controls['phone']\"\n          (keypress)=\"numOnly($event)\"\n          required\n          #inputPhone\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['phone'].hasError('required')\"\n        >\n          Phone is <strong>required</strong>\n        </mat-error>\n        <mat-hint align=\"end\">{{ inputPhone.value.length }} / 10</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n</form>\n\n<!-- <form\n  [formGroup]=\"personInfoGroup\"\n  class=\"ui centered grid\"\n  style=\"margin: 0 auto\"\n>\n  <div class=\"row\">\n    <div\n      class=\"ui fluid stackable two column grid full-width\"\n      style=\"margin: 0 auto\"\n    >\n      <div class=\"row header-col\" style=\"margin-bottom: 10px\">\n        <div\n          class=\"left floated middle aligned left aligned column content\"\n          style=\"padding-top: 0px !important; padding-bottom: 0px !important\"\n        >\n          <div class=\"ui small header white\">\n            {{ title | uppercase }} Information\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui fluid centered stackable grid\">\n    <div class=\"row column\" *ngIf=\"hasSameAsButton\">\n      <mat-checkbox\n        [formControl]=\"sameAsSender\"\n        (ngModelChange)=\"sameAsSenderChanged($event)\"\n        class=\"ui right floated large header\"\n      >\n        Same as Sender\n      </mat-checkbox>\n    </div>\n    <div class=\"row low-padding\">\n      <mat-form-field appearance=\"outline\" class=\"five wide column low-padding\">\n        <mat-label>Booking Date</mat-label>\n        <input\n          matInput\n          [formControl]=\"personInfoGroup.controls['bookingDate']\"\n          [matDatepicker]=\"picker\"\n          placeholder=\"Booking Date\"\n          color=\"primary\"\n          formControlName=\"bookingDate\"\n          required\n        />\n        <mat-datepicker-toggle matSuffix [for]=\"picker\">\n          <mat-icon matDatepickerToggleIcon color=\"primary\">\n            date_range\n          </mat-icon>\n        </mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['bookingDate'].hasError('required')\"\n        >\n          Booking Date is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field\n        appearance=\"outline\"\n        class=\"eleven wide column low-padding\"\n      >\n        <mat-label>{{ title | titlecase }} Name</mat-label>\n        <input\n          matInput\n          #name\n          [formControl]=\"personInfoGroup.controls['name']\"\n          placeholder=\"{{ title | titlecase }} Name\"\n          [value]=\"personInfoGroup.controls['name'].value | titlecase\"\n          required\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['name'].hasError('required')\"\n        >\n          {{ title | titlecase }} Name is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"equal width row low-padding\">\n      <mat-form-field appearance=\"outline\" class=\"column low-padding\">\n        <mat-label>Company</mat-label>\n        <input\n          matInput\n          [formControl]=\"personInfoGroup.controls['company']\"\n          placeholder=\"Company\"\n          required\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['company'].hasError('required')\"\n        >\n          Company is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"equal width row low-padding\">\n      <mat-form-field appearance=\"outline\" class=\"column low-padding\">\n        <mat-label>Street Address</mat-label>\n        <input\n          matInput\n          [formControl]=\"personInfoGroup.controls['streetAddress']\"\n          placeholder=\"Street Address\"\n          [value]=\"personInfoGroup.controls['streetAddress'].value | titlecase\"\n          required\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['streetAddress'].hasError('required')\"\n        >\n          Street Address is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"equal width row low-padding\">\n      <mat-form-field appearance=\"outline\" class=\"column low-padding\">\n        <mat-label>Suburb</mat-label>\n        <input\n          matInput\n          [formControl]=\"personInfoGroup.controls['suburd']\"\n          [value]=\"personInfoGroup.controls['suburd'].value | titlecase\"\n          placeholder=\"Suburb\"\n          required\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['suburd'].hasError('required')\"\n        >\n          Suburb Address is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"column low-padding\">\n        <mat-label>State</mat-label>\n        <mat-select [formControl]=\"personInfoGroup.controls['state']\">\n          <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n            {{ state }}\n          </mat-option>\n        </mat-select>\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['state'].hasError('required')\"\n        >\n          State is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"equal width row low-padding\">\n      <mat-form-field appearance=\"outline\" class=\"column low-padding\">\n        <mat-label>Post code</mat-label>\n        <input\n          appAvoidPasteForNonNumeric\n          matInput\n          [formControl]=\"personInfoGroup.controls['postalCode']\"\n          type=\"number\"\n          placeholder=\"Post code\"\n        />\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"column low-padding\">\n        <mat-label>Phone</mat-label>\n        <div class=\"sub header jme-col\" matPrefix style=\"top: 0px\">\n          +61&nbsp;\n        </div>\n        <input\n          appAvoidPasteForNonNumeric\n          matInput\n          type=\"tel\"\n          maxlength=\"10\"\n          placeholder=\"Phone\"\n          [formControl]=\"personInfoGroup.controls['phone']\"\n          (keypress)=\"numOnly($event)\"\n          required\n          #inputPhone\n        />\n        <mat-error\n          *ngIf=\"personInfoGroup.controls['phone'].hasError('required')\"\n        >\n          Phone is <strong>required</strong>\n        </mat-error>\n        <mat-hint align=\"end\">{{ inputPhone.value.length }} / 10</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n</form> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/sign-up/sign-up.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/components/sign-up/sign-up.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  class=\"ui centered grid\"\n  style=\"margin: 0 auto\"\n  #newAccount>\n  <mat-card class=\"rouded-all\" style=\"padding-top: 0px\">\n    <mat-card-header\n      class=\"ui centered grid header-col rounded-top\"\n      style=\"margin-bottom: 10px\">\n      <mat-card-title>\n        <!-- <div class=\"ui huge header white\">JME</div> -->\n        <img\n          class=\"ui centered image disable-selection\"\n          src=\"../../../assets/jme-logo-header.png\"\n          />\n      </mat-card-title>\n      <mat-card-subtitle>\n        <header class=\"ui medium header white\">\n          Create New Account on JME Transport Booking\n        </header>\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-horizontal-stepper [linear]=\"true\">\n        <mat-step [formGroup]=\"userBasicInfo\">\n          <div class=\"ui horizontal divider\">\n            <div class=\"jme-col\">\n              Personal Information\n            </div>\n          </div>\n          <div class=\"ui grid stackable\" style=\"margin: 0px; max-width: 400px;\">\n            <div class=\"row equal width grid low-padding\">\n              <mat-form-field appearance=\"outline\" class=\"column\">\n                <mat-label>FirstName</mat-label>\n                <input\n                  matInput\n                  placeholder=\"FirstName\"\n                  [value]=\"userBasicInfo.controls['firstname'].value\"\n                  [formControl]=\"userBasicInfo.controls['firstname']\"\n                  />\n                <mat-error\n                  *ngIf=\"userBasicInfo.controls['firstname'].errors?.required\">\n                  FirstName is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"column\">\n                <mat-label>Lastname</mat-label>\n                <input\n                  matInput\n                  placeholder=\"Lastname\"\n                  [value]=\"userBasicInfo.controls['lastname'].value\"\n                  [formControl]=\"userBasicInfo.controls['lastname']\"\n                  />\n                <mat-error\n                  *ngIf=\"userBasicInfo.controls['lastname'].errors?.required\">\n                  Lastname is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"row low-padding\">\n              <mat-form-field appearance=\"outline\" class=\"column\">\n                <mat-label>Company</mat-label>\n                <input\n                  matInput\n                  placeholder=\"Company\"\n                  [value]=\"userBasicInfo.controls['company'].value\"\n                  [formControl]=\"userBasicInfo.controls['company']\"\n                  />\n                <mat-error\n                  *ngIf=\"userBasicInfo.controls['company'].errors?.required\">\n                  Company is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"row low-padding\">\n              <mat-form-field appearance=\"outline\" class=\"column\">\n                <mat-label>Email</mat-label>\n                <input\n                  matInput\n                  placeholder=\"Email\"\n                  [value]=\"userBasicInfo.controls['email'].value\"\n                  [formControl]=\"userBasicInfo.controls['email']\" />\n                <mat-error\n                  *ngIf=\"userBasicInfo.controls['email'].errors?.email\">\n                  Must be a valid email address\n                </mat-error>\n                <mat-error\n                  *ngIf=\"userBasicInfo.controls['company'].errors?.required\">\n                  Email is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n\n            </div>\n            <div class=\"row low-padding\">\n              <div class=\"middle aligned column\">\n                <div style=\"float: left\">\n                  <button\n                    [routerLink]=\"['/login']\"\n                    mat-stroked-button\n                    color=\"primary\">\n                    Return to Login\n                  </button>\n                </div>\n                <div style=\"float: right\">\n                  <button\n                    [disabled]=\"!enableUserBasicInfoNextButton()\"\n                    matStepperNext mat-raised-button color=\"primary\">\n                    Next\n                    <mat-icon>navigate_next</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-step>\n        <mat-step [formGroup]=\"newAccountInfo\">\n          <div class=\"ui horizontal divider\">\n            <div class=\"jme-col\">\n              Account Information\n            </div>\n          </div>\n          <div class=\"ui grid stackable\" style=\"margin: 0px; max-width: 400px;\">\n            <div class=\"row low-padding\">\n              <mat-form-field appearance=\"outline\" class=\"column\">\n                <mat-label>Username</mat-label>\n                <input\n                  matInput\n                  placeholder=\"Username\"\n                  [value]=\"newAccountInfo.controls['username'].value\"\n                  [formControl]=\"newAccountInfo.controls['username']\"\n                  />\n                <mat-error\n                  *ngIf=\"newAccountInfo.controls['username'].errors?.minlength\n                  || newAccountInfo.controls['username'].errors?.maxlenght\">\n                  Username Must be <strong>6 to 16 characters in lenght</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"row equal width grid low-padding\">\n              <mat-form-field appearance=\"outline\" class=\"column\">\n                <mat-label>Password</mat-label>\n                <input\n                  matInput\n                  type=\"{{ showPass ? '' : 'password' }}\"\n                  placeholder=\"Password\"\n                  [formControl]=\"newAccountInfo.controls['password']\"\n                  minlength=\"5\"\n                  maxlength=\"16\"\n                  />\n                <mat-error\n                  *ngIf=\"newAccountInfo.controls['password'].errors?.minlength\n                  || newAccountInfo.controls['password'].errors?.maxlenght\">\n                  Password Must be <strong>6 to 16 characters in lenght</strong>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"column\">\n                <mat-label>Re-Type Password</mat-label>\n                <input\n                  matInput\n                  type=\"{{ showPass ? '' : 'password' }}\"\n                  placeholder=\"Re-Type Password\"\n                  [formControl]=\"newAccountInfo.controls['passwordReType']\"\n                  />\n                <mat-error\n                  *ngIf=\"newAccountInfo.controls['passwordReType'].hasError(\n                  'notMatch'\n                  )\">\n                  Password did not <strong>Matched</strong>\n                </mat-error>\n\n                <button\n                  matSuffix\n                  mat-icon-button\n                  aria-label=\"Unhide\"\n                  (mousedown)=\"visibiltyOn()\"\n                  (mouseup)=\"visibilityOff()\"\n                  (mouseleave)=\"visibilityOff()\">\n                  <mat-icon color=\"primary\">\n                    {{ showPass ? 'visibility' : 'visibility_off' }}\n                  </mat-icon>\n                </button>\n              </mat-form-field>\n            </div>\n            <div class=\"row low-padding\">\n              <div class=\"middle aligned column\">\n                <div style=\"float: left\">\n                  <button matStepperPrevious mat-stroked-button color=\"primary\">\n                    <mat-icon>navigate_before</mat-icon>\n                    Return\n                  </button>\n                </div>\n                <div style=\"float: right\">\n                  <button matStepperNext mat-raised-button color=\"primary\"\n                    (click)=\"signUp()\">\n                    Create Account\n                    <mat-icon>navigate_next</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </mat-card-content>\n    <mat-card-actions>\n      <!-- <div class=\"ui grid full-width\" style=\"margin:0px\">\n        <div class=\"middle aligned column\">\n          <div style=\"float: right\">\n            <button type=\"submit\" mat-raised-button color=\"primary\">\n              Create Account\n              <mat-icon>assignment_ind</mat-icon>\n            </button>\n          </div>\n        </div>\n      </div> -->\n    </mat-card-actions>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/transaction-summary/transaction-summary.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./resources/ts/src/app/components/transaction-summary/transaction-summary.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  fxLayout=\"column\"\n  [ngStyle]=\"{ 'margin-top': '2em', 'margin-bottom': '2em' }\"\n  fxLayoutGap.lt-sm=\"1em\"\n  fxLayoutGap=\"5em\"\n>\n  <div fxFlex=\"50%\" fxFlexAlign=\"center\" fxFlexFill>\n    <!-- JME Icon -->\n    <div\n      fxLayout=\"row\"\n      fxLayoutAlign=\"space-around center\"\n      fxLayoutGap=\"2em\"\n      class=\"header-col\"\n    >\n      <div\n        fxFlex=\"90%\"\n        fxFlexFill\n        fxFlexAlign=\"center\"\n        [ngStyle]=\"{ 'text-align': 'center' }\"\n      >\n        <img\n          [ngStyle]=\"{\n            'object-fit': 'contain',\n            'object-position': 'center center',\n            height: '100%'\n          }\"\n          src=\"../../../assets/jme-logo-header.png\"\n        />\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"50%\" fxFlexAlign=\"center\">\n    <!-- Thank you message -->\n    <span style=\"text-align: center\">\n      <h1>Thank you for using JME Online Terminal</h1>\n      <ng-container *ngIf=\"this.transactionSummary; else reviewTemplate\">\n        <div style=\"font-size: medium\">\n          Please wait for your file to download. If the file doesn't download\n          within 2 minutes please click the resubmit button below.\n        </div>\n      </ng-container>\n      <ng-template #reviewTemplate>\n        <div style=\"font-size: medium\">\n          The Transaction is not Completed. please review the contents before\n          submitting it.\n        </div>\n      </ng-template>\n    </span>\n  </div>\n  <div fxFlex=\"50%\" fxFlexAlign=\"center\">\n    <div\n      fxLayout=\"column\"\n      fxLayoutAlign=\"space-around center\"\n      fxLayoutGap=\"2em\"\n    >\n      <div fxFlexAlign=\"center\">\n        <mat-progress-spinner\n          *ngIf=\"this.transactionFetching\"\n          [color]=\"'primary'\"\n          [mode]=\"'indeterminate'\"\n        ></mat-progress-spinner>\n      </div>\n\n      <div fxFlexAlign=\"center\">\n        <!-- Resubmit button -->\n        <button\n          mat-raised-button\n          color=\"primary\"\n          [disabled]=\"!this.transactionSummary || this.disableResubmit\"\n          (click)=\"emitResubmit()\"\n        >\n          Resubmit\n          <mat-icon>send</mat-icon>\n        </button>\n        &nbsp; &nbsp;\n        <button (click)=\"reloadApp()\" mat-raised-button color=\"primary\">\n          New Transaction\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./resources/ts/$$_lazy_route_resource lazy recursive":
/*!*******************************************************************!*\
  !*** ./resources/ts/$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************************/
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
webpackEmptyAsyncContext.id = "./resources/ts/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./resources/ts/src/app/app.component.scss":
/*!*************************************************!*\
  !*** ./resources/ts/src/app/app.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\n  height: 100vh;\n  width: 100vw;\n  overflow: auto;\n  background: url('/assets/jmet-background.jpg'), #fff;\n  color: #777;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90cy9zcmMvYXBwL0Q6XFxqbWUtdGVybWluYWwtYXBwLWRldi9yZXNvdXJjZXNcXHRzXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwicmVzb3VyY2VzL3RzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoicmVzb3VyY2VzL3RzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlcntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogYXV0bzsgXG4gICAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9qbWV0LWJhY2tncm91bmQuanBnJyksICNmZmY7ICAgIFxuICAgIGNvbG9yOiAjNzc3O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSIsIi5wYWdlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9qbWV0LWJhY2tncm91bmQuanBnXCIpLCAjZmZmO1xuICBjb2xvcjogIzc3NztcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./resources/ts/src/app/app.component.ts":
/*!***********************************************!*\
  !*** ./resources/ts/src/app/app.component.ts ***!
  \***********************************************/
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
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./resources/ts/src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./resources/ts/src/app/app.module.ts":
/*!********************************************!*\
  !*** ./resources/ts/src/app/app.module.ts ***!
  \********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./resources/ts/src/app/app.component.ts");
/* harmony import */ var _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/angular-material.module */ "./resources/ts/src/app/modules/angular-material.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./resources/ts/src/app/components/login/login.component.ts");
/* harmony import */ var _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/order-form/order-form.component */ "./resources/ts/src/app/components/order-form/order-form.component.ts");
/* harmony import */ var _components_delivery_info_delivery_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/delivery-info/delivery-info.component */ "./resources/ts/src/app/components/delivery-info/delivery-info.component.ts");
/* harmony import */ var _components_person_info_person_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/person-info/person-info.component */ "./resources/ts/src/app/components/person-info/person-info.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _directives_avoidCopyPaste__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/avoidCopyPaste */ "./resources/ts/src/app/directives/avoidCopyPaste.ts");
/* harmony import */ var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin-dashboard/admin-dashboard.component */ "./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _components_delivery_table_delivery_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/delivery-table/delivery-table.component */ "./resources/ts/src/app/components/delivery-table/delivery-table.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./resources/ts/src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_transaction_summary_transaction_summary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/transaction-summary/transaction-summary.component */ "./resources/ts/src/app/components/transaction-summary/transaction-summary.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth.guard */ "./resources/ts/src/app/guards/auth.guard.ts");




















const APP_ROUTES = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'sign-up', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"] },
    {
        path: 'orderForm',
        component: _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_9__["OrderFormComponent"],
        canActivate: [
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
        ],
    },
    { path: 'admin', component: _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["AdminDashboardComponent"] },
    // always put this on the end of the route
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
let AppModule = class AppModule {
    constructor(injector, location, router) {
        this.injector = injector;
        this.location = location;
        this.router = router;
        // const appComponentElement = createCustomElement(AppComponent, { injector });
        // customElements.define('app-root', appComponentElement);
        // // on every route change tell router to navigate to defined route
        // this.location.subscribe(data => {
        //   console.log('Data subscribe', data);
        //   this.router.navigateByUrl(data.url);
        // });
        // // using this router outlet is loaded normaly on init
        // this.router.navigateByUrl(this.location.path(true));
        // // event subscribe to detect route change inside angular
        // this.router.events.subscribe(data => {
        //   // console.log(data);
        // });
    }
    ngDoBootstrap() { }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_9__["OrderFormComponent"],
            _components_delivery_info_delivery_info_component__WEBPACK_IMPORTED_MODULE_10__["DeliveryInfoComponent"],
            _components_person_info_person_info_component__WEBPACK_IMPORTED_MODULE_11__["PersonInfoComponent"],
            _directives_avoidCopyPaste__WEBPACK_IMPORTED_MODULE_13__["AvoidPasteForNonNumericDirective"],
            _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["AdminDashboardComponent"],
            _components_delivery_table_delivery_table_component__WEBPACK_IMPORTED_MODULE_15__["DeliveryTableComponent"],
            _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"],
            _components_transaction_summary_transaction_summary_component__WEBPACK_IMPORTED_MODULE_17__["TransactionSummaryComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModules"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(APP_ROUTES, { useHash: true }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        entryComponents: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
    })
], AppModule);



/***/ }),

/***/ "./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.scss":
/*!****************************************************************************************!*\
  !*** ./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\n  width: 95vw;\n  margin: 0px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background: white;\n}\n\ntable {\n  min-width: 500px;\n}\n\n.content-center {\n  text-align: center !important;\n}\n\n.side-margin {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tZGFzaGJvYXJkL0Q6XFxqbWUtdGVybWluYWwtYXBwLWRldi9yZXNvdXJjZXNcXHRzXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcYWRtaW4tZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVye1xuICAgIHdpZHRoOiA5NXZ3O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG50YWJsZSB7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLmNvbnRlbnQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1tYXJnaW57ICAgIFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn0iLCIuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5NXZ3O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxudGFibGUge1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4uY29udGVudC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnNpZGUtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************************************!*\
  !*** ./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");




const TEST_DATA = [
    {
        name: 'Juan Dela Cruz',
        company: 'Xtendly',
        state: 'Tasmania',
        suburd: 'East Coast',
        phone: '+619278893907',
        hasAccount: true
    },
    {
        name: 'Juan Dela Cruz',
        company: 'Xtendly',
        state: 'Tasmania',
        suburd: 'East Coast',
        phone: '+619278893907',
        hasAccount: false
    },
    {
        name: 'Juan Dela Cruz',
        company: 'Xtendly',
        state: 'Tasmania',
        suburd: 'East Coast',
        phone: '+619278893907',
        hasAccount: false
    },
    {
        name: 'Juan Dela Cruz',
        company: 'Xtendly',
        state: 'Tasmania',
        suburd: 'East Coast',
        phone: '+619278893907',
        hasAccount: false
    },
    {
        name: 'Juan Dela Cruz',
        company: 'Xtendly',
        state: 'Tasmania',
        suburd: 'East Coast',
        phone: '+619278893907',
        hasAccount: false
    },
    {
        name: 'Juan Dela Cruz',
        company: 'Xtendly',
        state: 'Tasmania',
        suburd: 'East Coast',
        phone: '+619278893907',
        hasAccount: false
    },
    {
        name: 'Juan Dela Cruz',
        company: 'Xtendly',
        state: 'Tasmania',
        suburd: 'East Coast',
        phone: '+619278893907',
        hasAccount: false
    },
    {
        name: 'Juan Dela Cruz',
        company: 'Xtendly',
        state: 'Tasmania',
        suburd: 'East Coast',
        phone: '+619278893907',
        hasAccount: false
    }
];
let AdminDashboardComponent = class AdminDashboardComponent {
    constructor() {
        this.columns = ['name', 'suburd', 'state', 'phone', 'hasAccount'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](TEST_DATA);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], AdminDashboardComponent.prototype, "paginator", void 0);
AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./admin-dashboard.component.scss */ "./resources/ts/src/app/components/admin-dashboard/admin-dashboard.component.scss")]
    })
], AdminDashboardComponent);



/***/ }),

/***/ "./resources/ts/src/app/components/delivery-info/delivery-info.component.scss":
/*!************************************************************************************!*\
  !*** ./resources/ts/src/app/components/delivery-info/delivery-info.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-wrapper {\n  width: 100% !important;\n}\n\n:host .non-semantic {\n  padding: 0px !important;\n  border: 0px !important;\n  box-shadow: 0px !important;\n  color: inherit !important;\n}\n\n:host ::ng-deep .ui .form input {\n  padding: 0px !important;\n  text-align: center !important;\n  border: unset;\n  background: unset;\n  color: unset;\n}\n\n.timepicker-dial__control .timepicker-dial__item .timepicker-dial__item_active {\n  padding: 0px !important;\n}\n\n:host ::ng-deep .time-picker-toggle button svg {\n  fill: #760f29 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvZGVsaXZlcnktaW5mby9EOlxcam1lLXRlcm1pbmFsLWFwcC1kZXYvcmVzb3VyY2VzXFx0c1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRlbGl2ZXJ5LWluZm9cXGRlbGl2ZXJ5LWluZm8uY29tcG9uZW50LnNjc3MiLCJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL2RlbGl2ZXJ5LWluZm8vZGVsaXZlcnktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLHVCQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtBQ0FKIiwiZmlsZSI6InJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvZGVsaXZlcnktaW5mby9kZWxpdmVyeS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgLm5vbi1zZW1hbnRpY3tcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudWkgLmZvcm0gaW5wdXR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICBjb2xvcjogdW5zZXQ7XG59XG5cblxuLnRpbWVwaWNrZXItZGlhbF9fY29udHJvbCAudGltZXBpY2tlci1kaWFsX19pdGVtIC50aW1lcGlja2VyLWRpYWxfX2l0ZW1fYWN0aXZlIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50aW1lLXBpY2tlci10b2dnbGUgYnV0dG9uIHN2Z3tcbiAgICBmaWxsOiAjNzYwZjI5ICFpbXBvcnRhbnQ7XG59IiwiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgLm5vbi1zZW1hbnRpYyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC51aSAuZm9ybSBpbnB1dCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiB1bnNldDtcbiAgYmFja2dyb3VuZDogdW5zZXQ7XG4gIGNvbG9yOiB1bnNldDtcbn1cblxuLnRpbWVwaWNrZXItZGlhbF9fY29udHJvbCAudGltZXBpY2tlci1kaWFsX19pdGVtIC50aW1lcGlja2VyLWRpYWxfX2l0ZW1fYWN0aXZlIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGltZS1waWNrZXItdG9nZ2xlIGJ1dHRvbiBzdmcge1xuICBmaWxsOiAjNzYwZjI5ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./resources/ts/src/app/components/delivery-info/delivery-info.component.ts":
/*!**********************************************************************************!*\
  !*** ./resources/ts/src/app/components/delivery-info/delivery-info.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DeliveryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryInfoComponent", function() { return DeliveryInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var DeliveryInfoComponent_1;


let DeliveryInfoComponent = DeliveryInfoComponent_1 = class DeliveryInfoComponent {
    constructor(fb) {
        this.fb = fb;
        this.selectedServiceType = '';
        this.selectedItemType = '';
        this.selectedPallet = '';
        this.parcelType = ['Dangerous Goods', 'Hand Unload', 'Tail Lift'];
        this.pickupOptionType = ['By', 'On'];
        this.commodities = ['Pallet', 'Carton'];
        this.deliveryItems = [];
        this.deliveryItemForm = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            commodity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            items: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            totalWeight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            width: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.deliveryInfoGroup = this.fb.group({
            parcelType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            specialInstruction: [''],
            pickUpOption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pickUpDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pickUpReadyAt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            closingTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deliveryItems: [
                [],
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    (control) => control.value.length > 0 ? null : { itemLenght: true }
                ]
            ]
        });
        this.pickerStyle = {
            dial: {
                dialBackgroundColor: '#760f29'
            },
            clockFace: {
                clockHandColor: '#760f29'
            },
            container: {
                buttonColor: '#760f29'
            }
        };
    }
    get isDangerousSelected() {
        return (this.deliveryInfoGroup &&
            this.deliveryInfoGroup.get('parcelType').value === 'Dangerous Goods');
    }
    static itemIsDangerous(val) {
        return val === 'Dangerous Goods';
    }
    ngOnInit() {
        this.deliveryInfoGroup.get('parcelType').valueChanges.subscribe(val => {
            this.deliveryInfoGroup.get('specialInstruction').clearValidators();
            this.deliveryInfoGroup
                .get('specialInstruction')
                .setValidators(DeliveryInfoComponent_1.itemIsDangerous(val)
                ? [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                : []);
            this.deliveryInfoGroup.get('specialInstruction').setValue('');
            this.deliveryInfoGroup.get('specialInstruction').updateValueAndValidity();
        });
    }
    addItem() {
        const itemForm = this.deliveryItemForm;
        console.log('this.toUpdateIndex', this.toUpdateIndex);
        if (itemForm.valid) {
            if (this.toUpdateIndex !== undefined) {
                this.deliveryItems.splice(this.toUpdateIndex, 1, {
                    description: itemForm.get('description').value,
                    commodity: itemForm.get('commodity').value,
                    items: itemForm.get('items').value,
                    totalWeight: itemForm.get('totalWeight').value,
                    length: itemForm.get('length').value,
                    width: itemForm.get('width').value,
                    height: itemForm.get('height').value
                });
                // this.deliveryItems[this.toUpdateIndex] = ;
                this.toUpdateIndex = undefined;
            }
            else {
                this.deliveryItems.unshift({
                    description: itemForm.get('description').value,
                    commodity: itemForm.get('commodity').value,
                    items: itemForm.get('items').value,
                    totalWeight: itemForm.get('totalWeight').value,
                    length: itemForm.get('length').value,
                    width: itemForm.get('width').value,
                    height: itemForm.get('height').value
                });
            }
            this.deliveryItemForm.reset();
            this.deliveryInfoGroup.get('deliveryItems').setValue(this.deliveryItems);
        }
    }
    selectUpdateItem(item) {
        const descInput = this.descriptionField.nativeElement;
        descInput.focus();
        this.deliveryItemForm.reset();
        const itemForm = this.deliveryItemForm;
        const items = item.item;
        for (const key in items) {
            if (items.hasOwnProperty(key)) {
                const element = items[key];
                const formItem = itemForm.get(key);
                if (formItem) {
                    formItem.setValue(element);
                }
            }
        }
        this.toUpdateIndex = item.index;
    }
    deleteItem(item) {
        this.deliveryItems.splice(item.index, 1);
        if (this.toUpdateIndex !== undefined) {
            if (this.toUpdateIndex === item.index) {
                this.resetForm();
            }
            else if (this.toUpdateIndex > item.index) {
                this.toUpdateIndex -= 1;
            }
        }
        this.deliveryInfoGroup.get('deliveryItems').setValue(this.deliveryItems);
    }
    deleteToEdit() {
        this.deleteItem({ item: undefined, index: this.toUpdateIndex });
        this.resetForm();
    }
    resetForm() {
        this.deliveryItemForm.reset();
        this.toUpdateIndex = undefined;
    }
};
DeliveryInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('descriptionField', { static: true })
], DeliveryInfoComponent.prototype, "descriptionField", void 0);
DeliveryInfoComponent = DeliveryInfoComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-info',
        template: __webpack_require__(/*! raw-loader!./delivery-info.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/delivery-info/delivery-info.component.html"),
        styles: [__webpack_require__(/*! ./delivery-info.component.scss */ "./resources/ts/src/app/components/delivery-info/delivery-info.component.scss")]
    })
], DeliveryInfoComponent);



/***/ }),

/***/ "./resources/ts/src/app/components/delivery-table/delivery-table.component.scss":
/*!**************************************************************************************!*\
  !*** ./resources/ts/src/app/components/delivery-table/delivery-table.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .small-top-bot-margin {\n  margin-top: 1em !important;\n  margin-bottom: 1em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvZGVsaXZlcnktdGFibGUvRDpcXGptZS10ZXJtaW5hbC1hcHAtZGV2L3Jlc291cmNlc1xcdHNcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkZWxpdmVyeS10YWJsZVxcZGVsaXZlcnktdGFibGUuY29tcG9uZW50LnNjc3MiLCJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL2RlbGl2ZXJ5LXRhYmxlL2RlbGl2ZXJ5LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0NKIiwiZmlsZSI6InJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvZGVsaXZlcnktdGFibGUvZGVsaXZlcnktdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAuc21hbGwtdG9wLWJvdC1tYXJnaW57XG4gICAgbWFyZ2luLXRvcDogMWVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XG59IiwiOmhvc3QgLnNtYWxsLXRvcC1ib3QtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./resources/ts/src/app/components/delivery-table/delivery-table.component.ts":
/*!************************************************************************************!*\
  !*** ./resources/ts/src/app/components/delivery-table/delivery-table.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeliveryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryTableComponent", function() { return DeliveryTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliveryTableComponent = class DeliveryTableComponent {
    constructor() {
        this.deliveryItems = [];
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pow = Math.pow;
    }
    ngOnInit() { }
    itemUpdateClicked(item, index) {
        console.log('this.itemSelected.emit(item);', item);
        this.itemSelected.emit({ item, index });
    }
    itemDeleteClicked(item, index) {
        this.itemDeleted.emit({ item, index });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DeliveryTableComponent.prototype, "deliveryItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DeliveryTableComponent.prototype, "itemSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DeliveryTableComponent.prototype, "itemDeleted", void 0);
DeliveryTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-table',
        template: __webpack_require__(/*! raw-loader!./delivery-table.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/delivery-table/delivery-table.component.html"),
        styles: [__webpack_require__(/*! ./delivery-table.component.scss */ "./resources/ts/src/app/components/delivery-table/delivery-table.component.scss")]
    })
], DeliveryTableComponent);



/***/ }),

/***/ "./resources/ts/src/app/components/login/login.component.scss":
/*!********************************************************************!*\
  !*** ./resources/ts/src/app/components/login/login.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-wrapper {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vRDpcXGptZS10ZXJtaW5hbC1hcHAtZGV2L3Jlc291cmNlc1xcdHNcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbn1cblxuXG5cblxuIiwiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./resources/ts/src/app/components/login/login.component.ts":
/*!******************************************************************!*\
  !*** ./resources/ts/src/app/components/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/login.service */ "./resources/ts/src/app/service/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(router, activateRoute, loginService, fb) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.loginService = loginService;
        this.fb = fb;
        this.loginAccountForm = this.fb.group({
            username: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ],
        });
    }
    ngOnInit() { }
    login() {
        console.log('loginAccountForm', this.loginAccountForm);
        if (this.loginAccountForm.valid) {
            const username = this.loginAccountForm.get('username').value;
            const password = this.loginAccountForm.get('password').value;
            this.loginService.loginUser(username, password).subscribe((data) => {
                this.router.navigate([
                    '/orderForm',
                ], { relativeTo: this.activateRoute });
            }, (err) => {
                console.log('err', err.error);
                alert(err.error.message);
                this.loginAccountForm.reset();
            });
        }
    }
    signUp() {
        this.router.navigate([
            '/sign-up',
        ], { relativeTo: this.activateRoute });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./resources/ts/src/app/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./resources/ts/src/app/components/order-form/order-form.component.scss":
/*!******************************************************************************!*\
  !*** ./resources/ts/src/app/components/order-form/order-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-horizontal-stepper-header {\n  pointer-events: none !important;\n}\n\n.button-spacing {\n  margin-left: 10px;\n}\n\n@media screen and (max-width: 599px) {\n  :host ::ng-deep .mat-horizontal-stepper-header-container {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItZm9ybS9EOlxcam1lLXRlcm1pbmFsLWFwcC1kZXYvcmVzb3VyY2VzXFx0c1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9yZGVyLWZvcm1cXG9yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWZvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLCtCQUFBO0FDTkY7O0FEU0E7RUFDSSxpQkFBQTtBQ05KOztBRFNDO0VBQ0c7SUFDSSx3QkFBQTtFQ05OO0FBQ0YiLCJmaWxlIjoicmVzb3VyY2VzL3RzL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZm9ybXMtY29udGFpbmVye1xuLy8gICAgIG1pbi13aWR0aDogNDAwcHg7XG4vLyAgICAgbWFyZ2luOiAwcHg7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4vLyAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyB9XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVye1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLXNwYWNpbmd7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCl7ICAgXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIjpob3N0IDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLXNwYWNpbmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./resources/ts/src/app/components/order-form/order-form.component.ts":
/*!****************************************************************************!*\
  !*** ./resources/ts/src/app/components/order-form/order-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_trasaction_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/trasaction-api.service */ "./resources/ts/src/app/service/trasaction-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_service_pdf_downloader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pdf-downloader.service */ "./resources/ts/src/app/service/pdf-downloader.service.ts");





let OrderFormComponent = class OrderFormComponent {
    constructor(trasactionApiService, pdfDownloaderService) {
        this.trasactionApiService = trasactionApiService;
        this.pdfDownloaderService = pdfDownloaderService;
        this.disableReturn = false;
        this.disableResubmit = false;
        this.transactionFetching = true;
    }
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
    stepperChange(event) {
        console.log('stepperChange', event);
        if (event.selectedIndex && event.selectedIndex === 4) {
            this.reviewAndSubmit();
        }
    }
    reviewAndSubmit() {
        const sender = this.senderInfo.personInfoGroup;
        const payor = this.payorInfo.personInfoGroup;
        const reciever = this.recieverInfo.personInfoGroup;
        const delivery = this.deliveryInfo.deliveryInfoGroup;
        console.log('this.senderInfo', this.senderInfo.personInfoGroup);
        console.log('this.payorInfo', this.payorInfo.personInfoGroup);
        console.log('this.recieverInfo', this.recieverInfo.personInfoGroup);
        console.log('this.deliveryInfo', this.deliveryInfo.deliveryInfoGroup);
        this.transactionSummary = {
            sender: {
                name: sender.get('name').value,
                bookingDate: new Date(sender.get('bookingDate').value),
                company: sender.get('company').value,
                streetAddress: sender.get('streetAddress').value,
                suburd: sender.get('suburd').value,
                state: sender.get('state').value,
                postCode: Number(sender.get('postalCode').value),
                phone: Number(sender.get('phone').value),
            },
            payor: {
                name: payor.get('name').value,
                bookingDate: new Date(payor.get('bookingDate').value),
                company: payor.get('company').value,
                streetAddress: payor.get('streetAddress').value,
                suburd: payor.get('suburd').value,
                state: payor.get('state').value,
                postCode: Number(payor.get('postalCode').value),
                phone: Number(payor.get('phone').value),
            },
            receiver: {
                name: reciever.get('name').value,
                bookingDate: new Date(reciever.get('bookingDate').value),
                company: reciever.get('company').value,
                streetAddress: reciever.get('streetAddress').value,
                suburd: reciever.get('suburd').value,
                state: reciever.get('state').value,
                postCode: Number(reciever.get('postalCode').value),
                phone: Number(reciever.get('phone').value),
            },
            delivery: {
                parcelType: delivery.get('parcelType').value,
                specialInstruction: delivery.get('specialInstruction').value,
                pickUpOption: delivery.get('pickUpOption').value,
                pickUpDate: new Date(delivery.get('pickUpDate').value),
                pickUpReadyAt: delivery.get('pickUpReadyAt').value,
                closingTime: delivery.get('closingTime').value,
                deliveryItems: delivery.get('deliveryItems').value,
            },
        };
        console.log('this.transactionSummary', this.transactionSummary);
        this.disableReturn = true;
        this.transactionFetching = true;
        this.disableResubmit = true;
        const pdfNameList = [
            'proof-of-delivery',
            'pdf-2',
            'pickup-manifest',
        ];
        this.trasactionApiService
            .postTransaction(this.transactionSummary)
            .subscribe((response) => {
            console.log('transaction post response', response);
            this.disableResubmit = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(pdfNameList.map((pdfName) => this.pdfDownloaderService.downloadPdf(pdfName, response.requestId.toString()))).subscribe((data) => {
                console.log('data', data);
            }, (error) => {
                this.disableReturn = false;
                this.disableResubmit = false;
            }, () => {
                this.transactionFetching = false;
            });
        });
        // this.fetchPdf(this.transactionSummary).subscribe(
        //   (response: { requestId: number }) => {
        //     console.log('transaction post response', response);
        //     this.disableResubmit = true;
        //     this.pdfDownloaderService
        //       .downloadPdf('proof-of-delivery', response.requestId.toString())
        //       .subscribe(
        //         data => {
        //           console.log('data', data);
        //         },
        //         error => {
        //           this.disableReturn = false;
        //           this.disableResubmit = false;
        //         },
        //         () => {
        //           this.transactionFetching = false;
        //         }
        //       );
        //   }
        // );
    }
};
OrderFormComponent.ctorParameters = () => [
    { type: src_app_service_trasaction_api_service__WEBPACK_IMPORTED_MODULE_2__["TrasactionApiService"] },
    { type: src_app_service_pdf_downloader_service__WEBPACK_IMPORTED_MODULE_4__["PdfDownloaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('senderInfo', { static: true })
], OrderFormComponent.prototype, "senderInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('payorInfo', { static: true })
], OrderFormComponent.prototype, "payorInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recieverInfo', { static: true })
], OrderFormComponent.prototype, "recieverInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deliveryInfo', { static: true })
], OrderFormComponent.prototype, "deliveryInfo", void 0);
OrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-form',
        template: __webpack_require__(/*! raw-loader!./order-form.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/order-form/order-form.component.html"),
        styles: [__webpack_require__(/*! ./order-form.component.scss */ "./resources/ts/src/app/components/order-form/order-form.component.scss")]
    })
], OrderFormComponent);



/***/ }),

/***/ "./resources/ts/src/app/components/person-info/person-info.component.scss":
/*!********************************************************************************!*\
  !*** ./resources/ts/src/app/components/person-info/person-info.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-prefix {\n  top: 0px !important;\n}\n\n:host ::ng-deep .mat-form-field-label {\n  top: 2em !important;\n}\n\n:host .mat-checkbox .mat-checkbox-frame {\n  border-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uLWluZm8vRDpcXGptZS10ZXJtaW5hbC1hcHAtZGV2L3Jlc291cmNlc1xcdHNcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxwZXJzb24taW5mb1xccGVyc29uLWluZm8uY29tcG9uZW50LnNjc3MiLCJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbi1pbmZvL3BlcnNvbi1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FETUE7RUFDSSw4QkFBQTtBQ0hKIiwiZmlsZSI6InJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uLWluZm8vcGVyc29uLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtcHJlZml4e1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWx7XG4gICAgdG9wOiAyZW0gIWltcG9ydGFudDtcbn1cbiAgXG4vLyA6aG9zdCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XG4vLyAgICAgaGVpZ2h0OiA3MHB4IWltcG9ydGFudDtcbi8vICAgICB3aWR0aDogNzBweCFpbXBvcnRhbnQ7XG4vLyB9XG46aG9zdCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuIiwiOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCB7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./resources/ts/src/app/components/person-info/person-info.component.ts":
/*!******************************************************************************!*\
  !*** ./resources/ts/src/app/components/person-info/person-info.component.ts ***!
  \******************************************************************************/
/*! exports provided: PersonInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonInfoComponent", function() { return PersonInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _util_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/input */ "./resources/ts/src/app/util/input.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let PersonInfoComponent = class PersonInfoComponent {
    constructor(fb) {
        this.fb = fb;
        this.title = '';
        this.hasSameAsButton = false;
        this.sameAsSenderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.states = [
            'New South Wales',
            'Queensland',
            'South Australia',
            'Tasmania',
            'Victoria',
            'Western Australia'
        ];
        this.numOnly = _util_input__WEBPACK_IMPORTED_MODULE_2__["numOnly"];
        this.sameAsSender = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
        this.personInfoGroup = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bookingDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            streetAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            suburd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    get sameAsSenderValue() {
        return this.sameAsSender.value;
    }
    ngOnInit() { }
    sameAsSenderChanged(event) {
        console.log('sameAsSenderChanged', event);
        this.sameAsSenderClicked.emit(event);
        if (event) {
            this.personInfoGroup.disable();
        }
        else {
            this.personInfoGroup.enable();
        }
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
        template: __webpack_require__(/*! raw-loader!./person-info.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/person-info/person-info.component.html"),
        styles: [__webpack_require__(/*! ./person-info.component.scss */ "./resources/ts/src/app/components/person-info/person-info.component.scss")]
    })
], PersonInfoComponent);



/***/ }),

/***/ "./resources/ts/src/app/components/sign-up/sign-up.component.scss":
/*!************************************************************************!*\
  !*** ./resources/ts/src/app/components/sign-up/sign-up.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-horizontal-stepper-header-container {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy90cy9zcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9EOlxcam1lLXRlcm1pbmFsLWFwcC1kZXYvcmVzb3VyY2VzXFx0c1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZ24tdXBcXHNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FDQ0oiLCJmaWxlIjoicmVzb3VyY2VzL3RzL3NyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSIsIjpob3N0IDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./resources/ts/src/app/components/sign-up/sign-up.component.ts":
/*!**********************************************************************!*\
  !*** ./resources/ts/src/app/components/sign-up/sign-up.component.ts ***!
  \**********************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_signup_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/signup-user.service */ "./resources/ts/src/app/service/signup-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignUpComponent = class SignUpComponent {
    constructor(fb, signupUserService, router) {
        this.fb = fb;
        this.signupUserService = signupUserService;
        this.router = router;
        this.showPass = false;
        this.userBasicInfo = this.fb.group({
            firstname: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ],
            lastname: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ],
            company: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                ],
            ],
        });
        this.newAccountInfo = this.fb.group({
            username: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16),
                ],
            ],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16),
                ],
            ],
            passwordReType: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ],
        });
    }
    ngOnInit() { }
    visibiltyOn() {
        this.showPass = true;
    }
    visibilityOff() {
        this.showPass = false;
    }
    passwordNotMatch() {
        const notMatch = this.newAccountInfo.controls.password.value !== this.newAccountInfo.controls.passwordReType.value;
        if (notMatch) {
            this.newAccountInfo.get('passwordReType').setErrors({
                notMatch: true,
            });
        }
        else {
            this.newAccountInfo.get('passwordReType').setErrors(null);
        }
        return notMatch;
    }
    signUp() {
        console.log(`passwordNotMatch`, this.passwordNotMatch());
        if (!this.passwordNotMatch() && this.userBasicInfo.valid && this.newAccountInfo.valid) {
            console.log('this.newAccountInfo', this.newAccountInfo);
            console.log('this.userBasicInfo', this.userBasicInfo);
            const firstname = this.userBasicInfo.get('firstname').value;
            const lastname = this.userBasicInfo.get('lastname').value;
            const email = this.userBasicInfo.get('email').value;
            const company = this.userBasicInfo.get('company').value;
            const username = this.newAccountInfo.get('username').value;
            const password = this.newAccountInfo.get('password').value;
            this.signupUserService.userSignUp({ company, firstname, lastname, email, username, password }).subscribe((data) => {
                console.log('data', data);
                alert('account created');
                this.router.navigate([
                    '/login',
                ]);
            }, (err) => {
                console.log('error');
            });
        }
    }
    enableUserBasicInfoNextButton() {
        return this.userBasicInfo.valid;
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_signup_user_service__WEBPACK_IMPORTED_MODULE_3__["SignupUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./resources/ts/src/app/components/sign-up/sign-up.component.scss")]
    })
], SignUpComponent);



/***/ }),

/***/ "./resources/ts/src/app/components/transaction-summary/transaction-summary.component.scss":
/*!************************************************************************************************!*\
  !*** ./resources/ts/src/app/components/transaction-summary/transaction-summary.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZXMvdHMvc3JjL2FwcC9jb21wb25lbnRzL3RyYW5zYWN0aW9uLXN1bW1hcnkvdHJhbnNhY3Rpb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./resources/ts/src/app/components/transaction-summary/transaction-summary.component.ts":
/*!**********************************************************************************************!*\
  !*** ./resources/ts/src/app/components/transaction-summary/transaction-summary.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TransactionSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionSummaryComponent", function() { return TransactionSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionSummaryComponent = class TransactionSummaryComponent {
    constructor() {
        this.transactionFetching = true;
        this.disableResubmit = false;
        this.resubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    reloadApp() {
        window.location.reload();
    }
    emitResubmit() {
        this.resubmit.emit(this);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransactionSummaryComponent.prototype, "transactionSummary", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransactionSummaryComponent.prototype, "transactionFetching", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransactionSummaryComponent.prototype, "disableResubmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TransactionSummaryComponent.prototype, "resubmit", void 0);
TransactionSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-summary',
        template: __webpack_require__(/*! raw-loader!./transaction-summary.component.html */ "./node_modules/raw-loader/index.js!./resources/ts/src/app/components/transaction-summary/transaction-summary.component.html"),
        styles: [__webpack_require__(/*! ./transaction-summary.component.scss */ "./resources/ts/src/app/components/transaction-summary/transaction-summary.component.scss")]
    })
], TransactionSummaryComponent);



/***/ }),

/***/ "./resources/ts/src/app/directives/avoidCopyPaste.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/src/app/directives/avoidCopyPaste.ts ***!
  \***********************************************************/
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

/***/ "./resources/ts/src/app/guards/auth.guard.ts":
/*!***************************************************!*\
  !*** ./resources/ts/src/app/guards/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/login.service */ "./resources/ts/src/app/service/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.loginService.isLogin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((authenticated) => {
            console.log('authenticated', authenticated);
            if (!authenticated) {
                this.router.navigate([
                    '/login',
                ]);
            }
            return authenticated;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ "./resources/ts/src/app/modules/angular-material.module.ts":
/*!*****************************************************************!*\
  !*** ./resources/ts/src/app/modules/angular-material.module.ts ***!
  \*****************************************************************/
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");



















const ANGULAR_MATERIAL_MODULES = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__["NgxMaterialTimepickerModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"]
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

/***/ "./resources/ts/src/app/service/login.service.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/src/app/service/login.service.ts ***!
  \*******************************************************/
/*! exports provided: TOKEN_STORAGE_KEY, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_STORAGE_KEY", function() { return TOKEN_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./resources/ts/src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






const TOKEN_STORAGE_KEY = btoa('TOKEN_STORAGE');
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    isLogin() {
        return this.authKey().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((data) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    }
    loginUser(u, p) {
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/commonUserSession', { username: u, password: p }, {
            headers: { 'Content-Type': 'application/json' },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            this.saveToken(data.session_token);
            return data.session_token;
        }));
    }
    authKey() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/commonUserSession', {
            headers: {
                Authorization: this.getToken(),
            },
        });
    }
    getToken() {
        return localStorage.getItem(TOKEN_STORAGE_KEY) || '';
    }
    saveToken(token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LoginService);



/***/ }),

/***/ "./resources/ts/src/app/service/pdf-downloader.service.ts":
/*!****************************************************************!*\
  !*** ./resources/ts/src/app/service/pdf-downloader.service.ts ***!
  \****************************************************************/
/*! exports provided: PdfDownloaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDownloaderService", function() { return PdfDownloaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./resources/ts/src/environments/environment.ts");





let PdfDownloaderService = class PdfDownloaderService {
    constructor(http) {
        this.http = http;
    }
    downloadPdf(pdfName, transactionId) {
        console.log('${environment.apiBaseUrl}/generate-pdf/${pdfName}', `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl}/generate-pdf/${pdfName}`);
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl}/generate-pdf/${pdfName}`, {
            params: {
                transaction_id: transactionId
            },
            responseType: 'arraybuffer'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            console.log(data);
            this.dlFile(data, `${pdfName}-${transactionId}`);
            return data;
        }));
    }
    // from https://stackoverflow.com/questions/52154874/angular-6-downloading-file-from-rest-api
    dlFile(data, filename) {
        console.log('downloading pdf', filename);
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const achnorElement = document.createElement('a');
        achnorElement.href = url;
        achnorElement.download = filename;
        console.log('window.URL.createObjectURL(blob)', url);
        achnorElement.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        setTimeout(() => {
            window.URL.revokeObjectURL(data);
            achnorElement.remove();
        }, 100);
    }
};
PdfDownloaderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PdfDownloaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PdfDownloaderService);



/***/ }),

/***/ "./resources/ts/src/app/service/signup-user.service.ts":
/*!*************************************************************!*\
  !*** ./resources/ts/src/app/service/signup-user.service.ts ***!
  \*************************************************************/
/*! exports provided: SignupUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupUserService", function() { return SignupUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./resources/ts/src/environments/environment.ts");




let SignupUserService = class SignupUserService {
    constructor(http) {
        this.http = http;
    }
    userSignUp(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/commonUser', {
            username: data.username,
            password: data.password,
            firstname: data.firstname,
            lastname: data.lastname,
            company: data.company,
            email: data.email,
        });
    }
};
SignupUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SignupUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SignupUserService);



/***/ }),

/***/ "./resources/ts/src/app/service/trasaction-api.service.ts":
/*!****************************************************************!*\
  !*** ./resources/ts/src/app/service/trasaction-api.service.ts ***!
  \****************************************************************/
/*! exports provided: TrasactionApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrasactionApiService", function() { return TrasactionApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./resources/ts/src/environments/environment.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./resources/ts/src/app/service/login.service.ts");





let TrasactionApiService = class TrasactionApiService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
    }
    postTransaction(trasaction) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl}/transaction`, trasaction, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.loginService.getToken(),
            },
        });
    }
};
TrasactionApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
TrasactionApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], TrasactionApiService);



/***/ }),

/***/ "./resources/ts/src/app/util/input.ts":
/*!********************************************!*\
  !*** ./resources/ts/src/app/util/input.ts ***!
  \********************************************/
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

/***/ "./resources/ts/src/environments/environment.ts":
/*!******************************************************!*\
  !*** ./resources/ts/src/environments/environment.ts ***!
  \******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'http://127.0.0.1:8000/api'
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

/***/ "./resources/ts/src/main.ts":
/*!**********************************!*\
  !*** ./resources/ts/src/main.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./resources/ts/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./resources/ts/src/environments/environment.ts");
// import 'hammerjs';




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./resources/ts/src/main.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\jme-terminal-app-dev\resources\ts\src\main.ts */"./resources/ts/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map