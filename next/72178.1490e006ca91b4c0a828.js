"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72178],{

/***/ 72178:
/***/ ((module) => {

module.exports = "<form\n    class=\"b-form\"\n    [formGroup]=\"testForm\"\n>\n    <label\n        i18n-tuiLabel\n        tuiLabel=\"Type the ultimate answer\"\n        class=\"tui-space_bottom-4\"\n    >\n        <tui-input\n            formControlName=\"testValue2\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-error\n            formControlName=\"testValue2\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n\n    <label\n        i18n-tuiLabel\n        tuiLabel=\"Set a password\"\n    >\n        <tui-input\n            formControlName=\"testValue1\"\n            tuiTextfieldSize=\"m\"\n            [tuiTextfieldLabelOutside]=\"true\"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-error\n            formControlName=\"testValue1\"\n            [error]=\"[] | tuiFieldError | async\"\n        ></tui-error>\n    </label>\n\n    <p i18n>\n        If you need to show validation message as early as a user started to type something, subscribe on form value\n        changes and call markAsTouched on control on first value change\n    </p>\n</form>\n";

/***/ })

}]);