"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[94506],{

/***/ 94506:
/***/ ((module) => {

module.exports = "{{ currency }} = getCurrencySymbol(currency);\n\n<form [formGroup]=\"parametersForm\">\n    <div class=\"parameters\">\n        <tui-select\n            formControlName=\"currency\"\n            class=\"tui-space_top-2\"\n        >\n            currency\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]=\"items\"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n";

/***/ })

}]);