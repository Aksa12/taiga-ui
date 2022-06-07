function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{"8bCa":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiValidatorModule",(function(){return N}));var o=n("2kYt"),a=n("nIj0"),r=n("sEIs"),i=n("SVIu"),l=n("l4xa"),m=n("Qq0t"),p=n("dvRg"),u=n("EM62"),d=n("OZlg"),c=n("e0eB"),s=n("iyc4"),f=n("GdrL"),y=n("TjIJ"),g=n("fP8s"),h=n("OWJi"),C=n("EmN8"),x=n("bYz0");function v(e,t){if(1&e&&u["\u0275\u0275element"](0,"tui-data-list-wrapper",6),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("items",n.items)}}function M(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-input",7),u["\u0275\u0275text"](1," \u041a\u043e\u043d\u0442\u0430\u043a\u0442 "),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("tuiValidator",n.validator)}}function E(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-input-phone",8),u["\u0275\u0275text"](1," \u041a\u043e\u043d\u0442\u0430\u043a\u0442 "),u["\u0275\u0275elementEnd"]())}var S,T=((S=function e(){_classCallCheck(this,e),this.items=["Email","\u0422\u0435\u043b\u0435\u0444\u043e\u043d"],this.options={standalone:!0},this.type=this.items[0],this.group=new a.FormGroup({name:new a.FormControl("",a.Validators.required),contact:new a.FormControl("",a.Validators.required)}),this.validator=a.Validators.email}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=u["\u0275\u0275defineComponent"]({type:S,selectors:[["tui-validator-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],["formControlName","name"],[3,"ngModelOptions","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["formControlName","contact",3,"tuiValidator",4,"ngIf","ngIfElse"],["phone",""],[3,"items"],["formControlName","contact",3,"tuiValidator"],["formControlName","contact"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"form",0),u["\u0275\u0275elementStart"](1,"p"),u["\u0275\u0275elementStart"](2,"tui-input",1),u["\u0275\u0275text"](3," \u0418\u043c\u044f "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"p"),u["\u0275\u0275elementStart"](5,"tui-select",2),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.type=e})),u["\u0275\u0275text"](6," \u0421\u043f\u043e\u0441\u043e\u0431 \u0441\u0432\u044f\u0437\u0438 "),u["\u0275\u0275template"](7,v,1,1,"tui-data-list-wrapper",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"p"),u["\u0275\u0275template"](9,M,2,1,"tui-input",4),u["\u0275\u0275template"](10,E,2,0,"ng-template",null,5,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275reference"](11);u["\u0275\u0275property"]("formGroup",t.group),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngModelOptions",t.options)("ngModel",t.type),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngIf",t.type===t.items[0])("ngIfElse",n)}},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,f.a,a.NgControlStatus,a.FormControlName,y.a,a.NgModel,g.a,o.t,h.a,C.a,x.a],encapsulation:2,changeDetection:0}),S),b=n("u8jZ");function w(e,t){if(1&e&&(u["\u0275\u0275text"](0," \u0414\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430 "),u["\u0275\u0275elementStart"](1,"code"),u["\u0275\u0275text"](2,"tuiValidator"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](3," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u044b \u043d\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044b \u0444\u043e\u0440\u043c\u044b "),u["\u0275\u0275elementStart"](4,"tui-doc-example",2),u["\u0275\u0275element"](5,"tui-validator-example-1"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("content",n.example1)}}function I(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",3),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),u["\u0275\u0275elementStart"](3,"code"),u["\u0275\u0275text"](4,"TuiValidatorModule"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](5,": "),u["\u0275\u0275element"](6,"tui-doc-code",4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"li"),u["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),u["\u0275\u0275element"](9,"tui-doc-code",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("code",n.exampleImportModule),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var _,V,A=((V=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiValidatorModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiValidatorModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-input\n    formControlName="control"\n    [tuiValidator]="validator"\n></tui-input>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-validator-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiValidatorExample1 {\n    readonly items = ['Email', '\u0422\u0435\u043b\u0435\u0444\u043e\u043d'];\n\n    readonly options = {standalone: true};\n\n    type = this.items[0];\n\n    readonly group = new FormGroup({\n        name: new FormControl('', Validators.required),\n        contact: new FormControl('', Validators.required),\n    });\n\n    readonly validator = Validators.email;\n}\n",HTML:'<form [formGroup]="group">\n    <p>\n        <tui-input formControlName="name"> \u0418\u043c\u044f </tui-input>\n    </p>\n    <p>\n        <tui-select [ngModelOptions]="options" [(ngModel)]="type">\n            \u0421\u043f\u043e\u0441\u043e\u0431 \u0441\u0432\u044f\u0437\u0438\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </p>\n    <p>\n        <tui-input\n            *ngIf="type === items[0]; else phone"\n            formControlName="contact"\n            [tuiValidator]="validator"\n        >\n            \u041a\u043e\u043d\u0442\u0430\u043a\u0442\n        </tui-input>\n        <ng-template #phone>\n            <tui-input-phone formControlName="contact">\n                \u041a\u043e\u043d\u0442\u0430\u043a\u0442\n            </tui-input-phone>\n        </ng-template>\n    </p>\n</form>\n'}}).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=u["\u0275\u0275defineComponent"]({type:V,selectors:[["example-tui-validator"]],decls:3,vars:0,consts:[["header","Validator","package","CDK"],["pageTab",""],["id","base","heading","\u0431\u0430\u0437\u043e\u0432\u044b\u0439",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,w,6,1,"ng-template",1),u["\u0275\u0275template"](2,I,10,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[d.a,c.a,s.a,T,b.a],encapsulation:2,changeDetection:0}),V),N=((_=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[o.c,a.FormsModule,a.ReactiveFormsModule,p.TuiInputModule,p.TuiSelectModule,l.TuiValidatorModule,p.TuiInputPhoneModule,m.TuiDataListModule,p.TuiDataListWrapperModule].concat(_toConsumableArray(i.e),[r.g.forChild(Object(i.n)(A))])]}),_)}}]);