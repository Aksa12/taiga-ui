"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72398],{

/***/ 72398:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\n\n@Component({\n    selector: `tui-dropdown-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample2 {\n    open = false;\n\n    avatarUrl = assets`/images/avatar.jpg`;\n\n    onMouseEnter(): void {\n        this.open = true;\n    }\n\n    onMouseLeave(): void {\n        this.open = false;\n    }\n}\n";

/***/ })

}]);