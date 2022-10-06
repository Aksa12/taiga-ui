"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47518],{

/***/ 47518:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\nimport {map, startWith, takeWhile} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-progress-bar-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample4 {\n    readonly max = 100;\n    readonly value$ = this.isCypress\n        ? of(30)\n        : timer(300, 300).pipe(\n              map(i => i + 30),\n              startWith(30),\n              takeWhile(value => value <= this.max),\n          );\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n";

/***/ })

}]);