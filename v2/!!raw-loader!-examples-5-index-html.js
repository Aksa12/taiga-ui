(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-5-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/5/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/5/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-axes\n    class=\"axes\"\n    [verticalLines]=\"4\"\n    [horizontalLines]=\"2\"\n    [tuiLineChartHint]=\"hint\"\n>\n    <tui-line-chart\n        *ngFor=\"let value of values\"\n        class=\"chart\"\n        [x]=\"0\"\n        [y]=\"0\"\n        [width]=\"400\"\n        [height]=\"200\"\n        [value]=\"value\"\n    ></tui-line-chart>\n</tui-axes>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/5/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/5/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button tuiButton>Options</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/combo-box/examples/5/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-combo-box\n    class=\"b-form\"\n    [(ngModel)]=\"value\"\n>\n    Country\n    <ng-container *tuiDataList>\n        <cdk-virtual-scroll-viewport\n            *tuiLet=\"countries | tuiFilterByInput as items\"\n            tuiScrollable\n            class=\"scroll\"\n            [style.height.px]=\"items.length * 44\"\n            [itemSize]=\"44\"\n            (indexChange)=\"list.handleFocusLossIfNecessary()\"\n        >\n            <tui-data-list #list>\n                <button\n                    *cdkVirtualFor=\"let item of items\"\n                    tuiOption\n                    [value]=\"item\"\n                >\n                    {{ item }}\n                </button>\n            </tui-data-list>\n        </cdk-virtual-scroll-viewport>\n    </ng-container>\n</tui-combo-box>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/5/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/data-list/examples/5/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-hosted-dropdown\n    tuiDropdownLimitWidth=\"fixed\"\n    class=\"example\"\n    [content]=\"content\"\n    [(open)]=\"dropdownOpen\"\n>\n    <button\n        tuiButton\n        appearance=\"outline\"\n        icon=\"tuiIconMoreVer\"\n        type=\"button\"\n        size=\"m\"\n        class=\"example\"\n    >\n        List of components\n    </button>\n</tui-hosted-dropdown>\n\n<ng-template\n    #content\n    let-activeZone\n>\n    <tui-data-list\n        tuiDataListDropdownManager\n        [tuiActiveZoneParent]=\"activeZone\"\n    >\n        <button\n            tuiOption\n            tuiDropdownAlign=\"right\"\n            tuiDropdownDirection=\"top\"\n            [tuiDropdown]=\"true\"\n            [tuiDropdownContent]=\"money\"\n            [tuiDropdownSided]=\"true\"\n        >\n            💰 Money:\n        </button>\n        <button\n            automation-id=\"tui-data-list-calendar-option\"\n            tuiOption\n            tuiDropdownAlign=\"right\"\n            [tuiDropdown]=\"false\"\n            [tuiDropdownContent]=\"calendar\"\n            [tuiDropdownSided]=\"true\"\n        >\n            📅 Calendar: {{ dateValue }}\n        </button>\n        <button\n            automation-id=\"tui-data-list-email-option\"\n            tuiOption\n            tuiDropdownAlign=\"right\"\n            [tuiDropdown]=\"false\"\n            [tuiDropdownContent]=\"input\"\n            [tuiDropdownSided]=\"true\"\n        >\n            📧 Email: {{ testValue }}\n        </button>\n        <button\n            automation-id=\"tui-data-list-range-option\"\n            tuiOption\n            tuiDropdownAlign=\"right\"\n            tuiDropdownDirection=\"top\"\n            [tuiDropdown]=\"false\"\n            [tuiDropdownContent]=\"range\"\n            [tuiDropdownSided]=\"true\"\n        >\n            ⌛ Range: {{ rangeValue }}\n        </button>\n    </tui-data-list>\n\n    <ng-template #money>\n        <form\n            class=\"form\"\n            [formGroup]=\"moneyForm\"\n        >\n            <tui-input\n                automation-id=\"tui-data-money-input\"\n                formControlName=\"moneyValue\"\n            >\n                RUB\n            </tui-input>\n        </form>\n\n        <tui-data-list\n            tuiDataListDropdownManager\n            [tuiActiveZoneParent]=\"activeZone\"\n        >\n            <button\n                tuiOption\n                tuiDropdownDirection=\"bottom\"\n                tuiDropdownAlign=\"right\"\n                [tuiDropdown]=\"true\"\n                [tuiDropdownContent]=\"currency\"\n                [tuiDropdownSided]=\"true\"\n            >\n                Exchange Rates:\n            </button>\n        </tui-data-list>\n    </ng-template>\n\n    <ng-template #calendar>\n        <tui-calendar\n            [value]=\"dateValue\"\n            (mousedown.silent.prevent)=\"(0)\"\n            (dayClick)=\"onDayClick($event)\"\n        ></tui-calendar>\n    </ng-template>\n\n    <ng-template #input>\n        <form\n            class=\"form\"\n            [formGroup]=\"testForm\"\n        >\n            <tui-input\n                automation-id=\"tui-data-list-email-field\"\n                formControlName=\"testValue\"\n            >\n                Email\n            </tui-input>\n        </form>\n    </ng-template>\n\n    <ng-template #currency>\n        <div class=\"example\">\n            <div\n                tuiGroup\n                class=\"group\"\n            >\n                <tui-input [(ngModel)]=\"dollar\">1 Rub = (X) Dollars</tui-input>\n                <tui-input [(ngModel)]=\"euro\">1 Rub = (Y) Euros</tui-input>\n            </div>\n\n            <ul class=\"exchange tui-list tui-list_large\">\n                <li class=\"tui-list__item\">\n                    <tui-money\n                        currency=\"USD\"\n                        [value]=\"moneyValue / dollar\"\n                    ></tui-money>\n                </li>\n                <li class=\"tui-list__item\">\n                    <tui-money\n                        currency=\"EUR\"\n                        [value]=\"moneyValue / euro\"\n                    ></tui-money>\n                </li>\n            </ul>\n        </div>\n    </ng-template>\n\n    <ng-template #range>\n        <tui-input-date-range\n            automation-id=\"tui-data-list-range-field\"\n            class=\"form\"\n            [(ngModel)]=\"rangeValue\"\n        >\n            Range\n        </tui-input-date-range>\n    </ng-template>\n</ng-template>\n\n<div class=\"example\">\n    <p>Email: {{ testValue }}</p>\n    <p>Chosen date: {{ dateValue }}</p>\n    <p>Range date: {{ rangeValue }}</p>\n    <p>Dol - {{ dollar }}, Eur - {{ euro }}</p>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/5/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/5/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    size=\"m\"\n    class=\"tui-space_right-2 tui-space_bottom-2\"\n    (click)=\"onClick(content, header, 'm')\"\n>\n    Show\n</button>\n<button\n    tuiButton\n    size=\"m\"\n    (click)=\"onClick(content, header, 'fullscreen')\"\n>\n    Show fullscreen\n</button>\n\n<ng-template\n    #content\n    let-observer\n>\n    Take a look\n    <div class=\"buttons\">\n        <button\n            tuiButton\n            size=\"m\"\n            (click)=\"observer.complete()\"\n        >\n            Very cool!\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #header>\n    <div class=\"header\">\n        <img\n            src=\"https://ng-web-apis.github.io/dist/assets/images/web-api.svg\"\n            alt=\"Cool\"\n        />\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/5/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/5/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-editor\n    new\n    class=\"notion-editor\"\n    [formControl]=\"control\"\n    [tools]=\"builtInTools\"\n></tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]=\"control.value\"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/5/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/5/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        tuiLabel\n        label=\"Enter an email\"\n        class=\"tui-space_bottom-4\"\n    >\n        <tui-input\n            i18n\n            formControlName=\"testValue2\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Required\n        </tui-input>\n\n        <tui-field-error formControlName=\"testValue2\"></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        label=\"Minimum and maximum length\"\n        class=\"tui-space_bottom-4\"\n    >\n        <tui-input\n            formControlName=\"testValue1\"\n            tuiTextfieldSize=\"m\"\n        >\n            4 letters word...\n        </tui-input>\n\n        <tui-field-error formControlName=\"testValue1\"></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        label=\"Minimum number\"\n    >\n        <tui-input-count\n            formControlName=\"testValue3\"\n            tuiTextfieldSize=\"m\"\n        >\n            number\n        </tui-input-count>\n\n        <tui-field-error formControlName=\"testValue3\"></tui-field-error>\n    </label>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Control's output as TuiDay (default)</h3>\n<tui-input-date\n    class=\"b-form\"\n    [formControl]=\"defaultControl\"\n>\n    Choose a date\n</tui-input-date>\n<p>Stringified control value:</p>\n<p>\n    <code>{{ defaultControl.value }}</code>\n</p>\n\n<hr />\n\n<h3>Control's output as native Date</h3>\n<p>\n    (see\n    <code>toNativeDate</code>\n    directive)\n</p>\n<tui-input-date\n    toNativeDate\n    class=\"b-form\"\n    [formControl]=\"nativeDateControl\"\n>\n    Choose a date\n</tui-input-date>\n<p>Stringified control value:</p>\n<p>\n    <code>{{ nativeDateControl.value }}</code>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/5/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-files/examples/5/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-files>\n    <tui-file\n        [file]=\"file\"\n        [leftContent]=\"content\"\n    >\n        <span class=\"tui-text_body-s-2\">file is on checking</span>\n    </tui-file>\n</tui-files>\n\n<ng-template #content>\n    <tui-svg src=\"tuiIconTimeLarge\"></tui-svg>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/5/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-number/examples/5/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-number\n    prefix=\"¥ \"\n    decimal=\"never\"\n    [postfix]=\"value ? ',00' : ' ,00'\"\n    [(ngModel)]=\"value\"\n>\n    Type a sum\n</tui-input-number>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/5/index.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-range/examples/5/index.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <tui-input-range\n        id=\"input-range-with-key-steps\"\n        new\n        [min]=\"min\"\n        [max]=\"max\"\n        [steps]=\"totalSteps\"\n        [keySteps]=\"keySteps\"\n        [segments]=\"segments\"\n        [formControl]=\"control\"\n    >\n        Not linear growing sliders\n    </tui-input-range>\n\n    <div class=\"ticks-labels\">\n        <span *ngFor=\"let label of ticksLabels\">{{ label }}</span>\n    </div>\n</div>\n\n<p class=\"tui-space_top-12 tui-space_bottom-0\">\n    Control value:\n    <output for=\"input-range-with-key-steps\">\n        <code>{{ control.value | json }}</code>\n    </output>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/5/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/5/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"control\">\n    <tui-input-slider\n        new\n        tuiTextfieldSize=\"m\"\n        [min]=\"min\"\n        [max]=\"max\"\n        [segments]=\"2\"\n        [valueContent]=\"customLabel\"\n        [formControl]=\"controlWithMinLabel\"\n    ></tui-input-slider>\n\n    <div class=\"slider-ticks-labels\">\n        <span></span>\n        <span>Other custom label</span>\n        <span></span>\n    </div>\n</section>\n\n<tui-input-slider\n    class=\"control\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [valueContent]=\"customLabel\"\n    [formControl]=\"controlWithMaxLabel\"\n>\n    How much do you love Taiga UI?\n</tui-input-slider>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/5/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/5/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-tag\n    icon=\"tuiIconSearchLarge\"\n    iconAlign=\"left\"\n    tuiHintContent=\"مونتی پایتون\"\n    class=\"input\"\n    [tuiTextfieldCleaner]=\"true\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [(ngModel)]=\"value\"\n></tui-input-tag>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/5/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-time/examples/5/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-input-time\n        formControlName=\"testValue\"\n        class=\"tui-space_bottom-2\"\n        [postfix]=\"postfix\"\n    >\n        12h time\n    </tui-input-time>\n    <tui-toggle\n        formControlName=\"isPm\"\n        size=\"l\"\n    ></tui-toggle>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/5/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/5/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <tui-notification i18n>\n        Custom mode is set with\n        <a\n            tuiLink\n            routerLink=\"/directives/mode\"\n        >\n            <code>tuiMode</code>\n        </a>\n        directive\n    </tui-notification>\n\n    <p>\n        <tui-input\n            formControlName=\"testValue\"\n            [tuiTextfieldCleaner]=\"true\"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                placeholder=\"mail@mail.ru\"\n                type=\"email\"\n            />\n        </tui-input>\n    </p>\n    <div>\n        <p class=\"wrapper wrapper_dark\">\n            <tui-input\n                formControlName=\"testValue\"\n                tuiMode=\"onDark\"\n                [tuiTextfieldCleaner]=\"true\"\n            >\n                Type an email\n                <input\n                    tuiTextfield\n                    placeholder=\"mail@mail.ru\"\n                    type=\"email\"\n                />\n            </tui-input>\n        </p>\n    </div>\n    <div>\n        <p class=\"wrapper wrapper_light\">\n            <tui-input\n                formControlName=\"testValue\"\n                tuiMode=\"onLight\"\n                [tuiTextfieldCleaner]=\"true\"\n            >\n                Type an email\n                <input\n                    tuiTextfield\n                    placeholder=\"mail@mail.ru\"\n                    type=\"email\"\n                />\n            </tui-input>\n        </p>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/5/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/money/examples/5/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tui-space_bottom-2\">\n    $\n    <tui-money\n        currency=\"\"\n        [value]=\"12345.1\"\n    ></tui-money>\n</div>\n\n<div class=\"tui-space_bottom-2\">\n    £\n    <tui-money\n        currency=\"\"\n        [value]=\"100\"\n    ></tui-money>\n    <span>;</span>\n\n    €\n    <tui-money\n        currency=\"\"\n        [value]=\"200\"\n    ></tui-money>\n    <span>;</span>\n\n    ₽\n    <tui-money\n        currency=\"\"\n        [value]=\"300\"\n    ></tui-money>\n    <span>;</span>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/5/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/5/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-multi-select\n    #component\n    class=\"b-form\"\n    [editable]=\"false\"\n    [expandable]=\"false\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [(ngModel)]=\"value\"\n>\n    <tui-data-list *tuiDataList>\n        <tui-opt-group\n            tuiMultiSelectGroup\n            label=\"Jedi\"\n        >\n            <button\n                *ngFor=\"let item of jedi\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group label=\"Sith\">\n            <!-- passing component to tuiHideSelected is not needed in Ivy -->\n            <button\n                *ngFor=\"let item of sith | tuiHideSelected: component\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</tui-multi-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/5/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/progress-bar/examples/5/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label\n    tuiProgressLabel\n    class=\"label-wrapper\"\n>\n    <progress\n        tuiProgressBar\n        max=\"4\"\n        size=\"s\"\n        class=\"progress\"\n        [value]=\"3\"\n    ></progress>\n\n    <progress\n        tuiProgressBar\n        max=\"4\"\n        size=\"s\"\n        class=\"progress\"\n        [value]=\"1\"\n    ></progress>\n</label>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/5/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/5/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-select\n    *tuiLet=\"items$ | async as items\"\n    class=\"b-form\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [valueContent]=\"items ? stringify(items) : loading\"\n    [(ngModel)]=\"value\"\n>\n    <ng-template tuiDataList>\n        <tui-data-list *ngIf=\"items; else loading\">\n            <button\n                *ngFor=\"let item of items\"\n                tuiOption\n                [value]=\"item.id\"\n            >\n                {{ item.name }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n    <ng-template #loading>\n        <tui-loader class=\"tui-space_vertical-3 loader\"></tui-loader>\n    </ng-template>\n</tui-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/5/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/sheet/examples/5/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    (click)=\"toggle()\"\n>\n    Show/Hide\n</button>\n<img\n    src=\"assets/images/earth.jpg\"\n    alt=\"\"\n    class=\"preload\"\n/>\n<ng-template\n    let-scroll$=\"scroll$\"\n    [tuiSheetOptions]=\"options\"\n    [(tuiSheet)]=\"open\"\n>\n    <div class=\"wrapper\">\n        <h2\n            tuiSheetHeading\n            class=\"heading\"\n        >\n            Planet Earth\n        </h2>\n        <div class=\"earth\">\n            <img\n                src=\"assets/images/earth.jpg\"\n                alt=\"\"\n                class=\"image\"\n                [style.transform]=\"getTransform(scroll$ | async)\"\n            />\n        </div>\n        <p>\n            Earth is the third planet from the Sun and the only astronomical object known to harbour and support life.\n            About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered\n            with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other\n            freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice.\n            Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many\n            millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that\n            generates Earth's magnetic field, and a convective mantle that drives plate tectonics.\n        </p>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/5/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/5/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\n    tuiSlider\n    type=\"range\"\n    [keySteps]=\"keySteps\"\n    [max]=\"10 * segments\"\n    [segments]=\"segments\"\n    [formControl]=\"formControl\"\n/>\n\n<div class=\"ticks-labels\">\n    <span *ngFor=\"let label of labels\">{{ label }}</span>\n</div>\n\n<p automation-id=\"key-steps-example-control-value\">\n    Control value:\n    <code>{{ formControl.value | number }}</code>\n</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/5/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/5/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    tuiMode=\"onDark\"\n    class=\"wrapper\"\n>\n    <h1 class=\"tui-text_h3 title\">Monty Python</h1>\n    <tui-tabs-with-more\n        class=\"tabs\"\n        [activeItemIndex]=\"activeItemIndex\"\n        [moreContent]=\"more\"\n    >\n        <ng-container *ngFor=\"let tab of tabs\">\n            <ng-container *ngIf=\"isString(tab); else submenu\">\n                <button\n                    *tuiTab\n                    tuiTab\n                    (click)=\"onClick(tab)\"\n                >\n                    {{ tab }}\n                </button>\n            </ng-container>\n            <ng-template #submenu>\n                <tui-hosted-dropdown\n                    *tuiTab\n                    [content]=\"dropdown\"\n                    [(open)]=\"open\"\n                >\n                    <button\n                        tuiTab\n                        (tui-tab-activate)=\"stop($event)\"\n                    >\n                        Collaborators\n                        <tui-svg\n                            src=\"tuiIconChevronDown\"\n                            class=\"icon\"\n                            [class.icon_rotated]=\"open\"\n                        ></tui-svg>\n                    </button>\n                </tui-hosted-dropdown>\n            </ng-template>\n        </ng-container>\n    </tui-tabs-with-more>\n</div>\n<section class=\"content\">Currently active: {{ activeElement }}</section>\n<ng-template #dropdown>\n    <tui-data-list>\n        <button\n            *ngFor=\"let collaborator of collaborators\"\n            tuiOption\n            (click)=\"onClick(collaborator)\"\n        >\n            {{ collaborator }}\n        </button>\n    </tui-data-list>\n</ng-template>\n<ng-template #more>\n    <tui-svg src=\"tuiIconMoreHorLarge\"></tui-svg>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/5/index.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tag/examples/5/index.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tag [value]=\"tag\"></tui-tag>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/5/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/text-area/examples/5/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-text-area\n    class=\"b-form\"\n    [(ngModel)]=\"value\"\n>\n    Bio\n    <textarea\n        tuiTextfield\n        maxlength=\"97\"\n        placeholder=\"Write a few words about yourself\"\n    ></textarea>\n</tui-text-area>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/5/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/5/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tree\n    *ngFor=\"let item of data.children\"\n    [tuiTreeController]=\"true\"\n    [value]=\"item\"\n    [content]=\"content\"\n    [childrenHandler]=\"handler\"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    {{ item.text }}\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/5/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/5/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"tui-list\">\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Live workshop</div>\n        <div class=\"tui-list__description\">\n            For any number of employees with advanced Angular knowledge that keeps on growing\n        </div>\n    </li>\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Interactive examples</div>\n        <div class=\"tui-list__description\">All our chapters for your employees with lifetime access</div>\n    </li>\n    <li class=\"tui-list__item\">\n        <div class=\"tui-list__item-title\">Case analysis</div>\n        <div class=\"tui-list__description\">\n            We can take a look at your projects to define problems and explain how to fix them\n        </div>\n    </li>\n</ul>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/5/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/5/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n    <div class=\"tui-form__row\">\n        <tui-input\n            formControlName=\"text\"\n            class=\"input\"\n        >\n            Enter some text\n        </tui-input>\n\n        <tui-error\n            formControlName=\"text\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showNotification()\"\n>\n    With custom label function\n</button>\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_left-3\"\n    (click)=\"showNotificationWithCustomLabel()\"\n>\n    With custom label component\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/5/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/tables/table/examples/5/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-scrollbar>\n    <cdk-virtual-scroll-viewport\n        #viewport\n        tuiScrollable\n        class=\"viewport tui-zero-scrollbar\"\n        [itemSize]=\"45\"\n        [maxBufferPx]=\"500\"\n        [minBufferPx]=\"400\"\n    >\n        <table\n            tuiTable\n            [columns]=\"columns\"\n        >\n            <thead>\n                <tr tuiThGroup>\n                    <th\n                        *tuiHead=\"'name'\"\n                        tuiTh\n                        [sticky]=\"true\"\n                        [style.top.px]=\"-viewport['_renderedContentOffset']\"\n                    >\n                        Name\n                    </th>\n                    <th\n                        *tuiHead=\"'dob'\"\n                        tuiTh\n                        [sticky]=\"true\"\n                        [style.top.px]=\"-viewport['_renderedContentOffset']\"\n                    >\n                        Date of Birth\n                    </th>\n                    <th\n                        *tuiHead=\"'age'\"\n                        tuiTh\n                        [sticky]=\"true\"\n                        [sorter]=\"ageSorter\"\n                        [style.top.px]=\"-viewport['_renderedContentOffset']\"\n                    >\n                        Age\n                    </th>\n                </tr>\n            </thead>\n            <tbody tuiTbody>\n                <tr\n                    *cdkVirtualFor=\"let item of data | tuiTableSort\"\n                    tuiTr\n                >\n                    <td\n                        *tuiCell=\"'name'\"\n                        tuiTd\n                    >\n                        {{ item.name }}\n                    </td>\n                    <td\n                        *tuiCell=\"'dob'\"\n                        tuiTd\n                    >\n                        {{ item.dob }}\n                    </td>\n                    <td\n                        *tuiCell=\"'age'\"\n                        tuiTd\n                    >\n                        {{ getAge(item) }}\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </cdk-virtual-scroll-viewport>\n</tui-scrollbar>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/5/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/format/examples/5/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("'{{ formattedPhone }}' = formatPhone(value, countryCode, phoneMask);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n        >\n            value\n        </tui-input>\n        <tui-input\n            formControlName=\"countryCode\"\n            class=\"tui-space_top-2\"\n        >\n            countryCode\n        </tui-input>\n        <tui-input\n            formControlName=\"phoneMask\"\n            class=\"tui-space_top-2\"\n        >\n            phoneMask\n        </tui-input>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/5/index.html":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/math/examples/5/index.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ clamped }} = clamp(value, min, max);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-input-number\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number\n            formControlName=\"min\"\n            class=\"tui-space_top-2\"\n        >\n            min\n        </tui-input-number>\n        <tui-input-number\n            formControlName=\"max\"\n            class=\"tui-space_top-2\"\n        >\n            max\n        </tui-input-number>\n    </div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/5/index.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/utils/miscellaneous/examples/5/index.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ isPresent }} = isPresent(value);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-select\n            formControlName=\"value\"\n            class=\"tui-space_top-2\"\n        >\n            value\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]=\"items\"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-5-index-html.js.map