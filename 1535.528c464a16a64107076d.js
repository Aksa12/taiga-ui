(window.webpackJsonp=window.webpackJsonp||[]).push([[1535],{bUus:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-lazy-loading-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLazyLoadingExample1 {\n    readonly array = Array.from(\n        {length: 100},\n        (_, i) => `https://picsum.photos/${250 + i}/200`,\n    );\n}\n"}}]);