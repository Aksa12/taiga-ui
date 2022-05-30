(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{RrOu:function(n,t,o){"use strict";o.r(t),t.default="import {Component, Inject} from '@angular/core';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {TuiPdfViewerOptions} from '@taiga-ui/kit';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\nimport {Buttons} from './index';\n\n@Component({\n    template: `\n        <button\n            *ngFor=\"let button of context.data\"\n            tuiButton\n            size=\"s\"\n            shape=\"rounded\"\n            class=\"tui-space_left-3\"\n            (click)=\"button.onClick(context)\"\n        >\n            {{ button.text }}\n        </button>\n    `,\n})\nexport class ActionsContent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        readonly context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>,\n    ) {}\n}\n"}}]);