(window.webpackJsonp=window.webpackJsonp||[]).push([[1459],{l6JJ:function(n,t,e){"use strict";e.r(t),t.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiPure} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'example-tui-pure-getter',\n    template: `\n        <div\n            *ngIf=\"show\"\n            class=\"tui-space_bottom-2\"\n        >\n            fibonacci(42) = {{ fibonacci42 }}\n        </div>\n        <button\n            tuiButton\n            type=\"button\"\n            (click)=\"show = !show\"\n        >\n            Show/hide\n        </button>\n    `,\n    changeDetection,\n})\nexport class ExampleTuiPureGetterComponent {\n    @tuiPure\n    get fibonacci42(): number {\n        return this.fibonacci(42);\n    }\n\n    show = false;\n\n    private fibonacci(num: number): number {\n        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);\n    }\n}\n"}}]);