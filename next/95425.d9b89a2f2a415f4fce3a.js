"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[95425],{

/***/ 95425:
/***/ ((module) => {

module.exports = "import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptComponent} from './prompt.component';\nimport {PROMPT_PROVIDER} from './prompt.service';\n\n@NgModule({\n    imports: [TuiButtonModule, PolymorpheusModule, CommonModule],\n    // Add this provider to app module (it is here for stackblitz demonstration purpose only)\n    providers: [PROMPT_PROVIDER],\n    declarations: [PromptComponent],\n    exports: [PromptComponent],\n    entryComponents: [PromptComponent],\n})\nexport class PromptModule {}\n";

/***/ })

}]);