(window.webpackJsonp=window.webpackJsonp||[]).push([[1189],{"/8iH":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-range-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRangeExample2 {\n    smallRangeValue = [0, 40];\n\n    readonly bigRangeControl = new FormControl([40, 60]);\n}\n"}}]);