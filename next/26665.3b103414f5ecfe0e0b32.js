"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26665],{

/***/ 26665:
/***/ ((module) => {

module.exports = "import {Component, Input} from '@angular/core';\nimport {TuiCurrencyVariants} from '@taiga-ui/addon-commerce';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\nexport interface MyAccount {\n    name: string;\n    amount: number;\n    currency: TuiCurrencyVariants;\n    paymentSystem: PolymorpheusContent;\n}\n\n@Component({\n    selector: `my-account`,\n    templateUrl: `./my-account.component.html`,\n    styleUrls: [`./my-account.component.less`],\n})\nexport class ExampleMyAccountComponent {\n    @Input()\n    account!: MyAccount;\n}\n";

/***/ })

}]);