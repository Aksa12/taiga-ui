"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[67899],{

/***/ 67899:
/***/ ((module) => {

module.exports = "<p>\n    <label class=\"toggle\">\n        <tui-toggle\n            size=\"l\"\n            [(ngModel)]=\"open\"\n        ></tui-toggle>\n        Show help\n    </label>\n</p>\nYou can ask any questions about\n<code\n    tuiDropdownDirection=\"bottom\"\n    tuiDropdown=\"A directive to show content in a dropdown\"\n    [textContent]=\"'tuiDropdown'\"\n    [tuiDropdownManual]=\"open\"\n></code>\nand\n<button\n    tuiLink\n    tuiDropdownDirection=\"top\"\n    [tuiDropdown]=\"dropdownContent\"\n    [tuiDropdownManual]=\"open\"\n>\n    Alex\n</button>\nwill gladly answer!\n\n<ng-template #dropdownContent>\n    <div class=\"dropdown\">\n        <tui-avatar\n            size=\"l\"\n            [rounded]=\"true\"\n            [avatarUrl]=\"avatarUrl\"\n        ></tui-avatar>\n        <div class=\"text\">\n            <div class=\"label\">Taiga UI developer</div>\n            <div class=\"name\">Alex Inkin</div>\n            <div class=\"account\">a.inkin</div>\n        </div>\n    </div>\n</ng-template>\n";

/***/ })

}]);