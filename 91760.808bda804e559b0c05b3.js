"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91760],{

/***/ 91760:
/***/ ((module) => {

module.exports = "﻿<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3\"\n    (click)=\"showDialog(template, 's')\"\n>\n    Show 's' size\n</button>\n\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3\"\n    (click)=\"showDialog(template, 'm')\"\n>\n    Show 'm' size\n</button>\n\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showDialog(template, 'l')\"\n>\n    Show 'l' size\n</button>\n\n<ng-template\n    #template\n    let-data=\"data\"\n>\n    <div class=\"tui-container_fullwidth\">\n        <div class=\"tui-row tui-form__row_multi-fields tui-row_adaptive\">\n            <label\n                tuiLabel=\"Star Wars persons\"\n                class=\"tui-col_md-12\"\n            >\n                <tui-multi-select\n                    class=\"b-form\"\n                    [tuiTextfieldCleaner]=\"true\"\n                    [expandable]=\"false\"\n                    [tuiTextfieldSize]=\"data.textFieldSize\"\n                    [formControl]=\"testValue\"\n                    [tuiTextfieldLabelOutside]=\"true\"\n                >\n                    <tui-data-list-wrapper\n                        *tuiDataList\n                        tuiMultiSelectGroup\n                        [items]=\"items\"\n                    ></tui-data-list-wrapper>\n                </tui-multi-select>\n            </label>\n        </div>\n    </div>\n</ng-template>\n";

/***/ })

}]);