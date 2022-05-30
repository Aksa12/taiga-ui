(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{BMaj:function(n,e,t){"use strict";t.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiPdfViewerOptions, TuiPdfViewerService} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {switchMap} from 'rxjs/operators';\n\nimport {ActionsContent} from './actions-content.component';\nimport {PdfContent} from './pdf-content.component';\n\nexport type Buttons = ReadonlyArray<\n    Readonly<{\n        text: string;\n        onClick(context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>): void;\n    }>\n>;\n\n@Component({\n    selector: 'tui-pdf-viewer-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPdfViewerExample2 {\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n        @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,\n    ) {}\n\n    show(): void {\n        const options: TuiPdfViewerOptions<Buttons> = {\n            label: 'Taiga UI',\n            actions: new PolymorpheusComponent(ActionsContent),\n            data: [\n                {\n                    text: 'Sign',\n                    onClick: context => context.completeWith('Document signed'),\n                },\n                {\n                    text: 'Deny',\n                    onClick: context => context.completeWith('Document denied'),\n                },\n            ],\n        };\n\n        this.pdfService\n            .open<string>(new PolymorpheusComponent(PdfContent), options)\n            .pipe(switchMap(response => this.alertService.open(response)))\n            .subscribe();\n    }\n}\n"}}]);