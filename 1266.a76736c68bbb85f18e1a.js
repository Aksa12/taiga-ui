(window.webpackJsonp=window.webpackJsonp||[]).push([[1266],{jwZQ:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetOptions} from '@taiga-ui/addon-mobile';\n\n@Component({\n    selector: 'tui-sheet-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSheetExample3 {\n    open = false;\n\n    readonly options: Partial<TuiSheetOptions> = {\n        stops: ['calc(5rem + 74vw)', 'calc(9rem + 74vw)'],\n        image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg',\n    };\n\n    toggle(): void {\n        this.open = !this.open;\n    }\n}\n"}}]);