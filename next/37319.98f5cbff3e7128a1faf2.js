"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37319],{

/***/ 37319:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-line-clamp-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineClampExample2 {\n    linesLimit = 2;\n\n    toggle(): void {\n        this.linesLimit = this.collpased ? 10 : 2;\n    }\n\n    private get collpased(): boolean {\n        return this.linesLimit === 2;\n    }\n}\n";

/***/ })

}]);