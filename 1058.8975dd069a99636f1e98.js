(window.webpackJsonp=window.webpackJsonp||[]).push([[1058],{nW3L:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_NOTIFICATION_DEFAULT_OPTIONS,\n    TUI_NOTIFICATION_OPTIONS,\n    TuiNotification,\n} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-notification-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_NOTIFICATION_OPTIONS,\n            useValue: {\n                ...TUI_NOTIFICATION_DEFAULT_OPTIONS,\n                status: TuiNotification.Error,\n                hasIcon: false,\n            },\n        },\n    ],\n})\nexport class TuiNotificationExample2 {}\n"}}]);