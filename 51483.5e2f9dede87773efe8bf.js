"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[51483],{

/***/ 51483:
/***/ ((module) => {

module.exports = "<span class=\"icon\">\n    <tui-marker-icon\n        *polymorpheusOutlet=\"account.paymentSystem as src\"\n        size=\"xs\"\n        class=\"icon-content\"\n        [src]=\"src\"\n    ></tui-marker-icon>\n</span>\n<span class=\"info\">\n    <span class=\"name\">{{ account.name }}</span>\n    <tui-money\n        decimal=\"always\"\n        class=\"value\"\n        [currency]=\"account.currency\"\n        [value]=\"account.amount\"\n    ></tui-money>\n</span>\n";

/***/ })

}]);