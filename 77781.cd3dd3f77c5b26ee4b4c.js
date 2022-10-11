"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[77781],{

/***/ 77781:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ALWAYS_DASHED, TUI_ALWAYS_NONE} from '@taiga-ui/addon-charts';\nimport {tuiCeil, tuiPure} from '@taiga-ui/cdk';\n\nconst BENJI = 100;\n\n@Component({\n    selector: `tui-axes-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAxesExample2 {\n    private readonly setNames = [`cdk`, `core`, `kit`, `charts`];\n\n    readonly value: ReadonlyArray<[number, number, number, number]> = [\n        [10, 20, 3, 7],\n        [15, 18, 24, 1],\n        [34, 23, 12, 9],\n        [30, 14, 18, 14],\n    ];\n\n    readonly axisYSecondaryLabels = [\n        ``,\n        `${this.getMax(this.value) / 2} k`,\n        `${this.getMax(this.value)} k`,\n    ];\n\n    readonly axisXLabels = [`Q1`, `Q2`, `Q3`, `Q4`];\n\n    readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;\n\n    readonly verticalLinesHandler = TUI_ALWAYS_NONE;\n\n    getPercent(set: [number, number, number, number]): number {\n        return (BENJI * Math.max(...set)) / this.getMax(this.value);\n    }\n\n    getSetName(index: number): string {\n        return this.setNames[index];\n    }\n\n    getBackground(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n\n    @tuiPure\n    private getMax(value: ReadonlyArray<[number, number, number, number]>): number {\n        return tuiCeil(\n            value.reduce((max, value) => Math.max(...value, max), 0),\n            -1,\n        );\n    }\n}\n";

/***/ })

}]);