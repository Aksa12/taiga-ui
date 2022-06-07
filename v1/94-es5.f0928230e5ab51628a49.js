function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"6siK":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiThemeSwitcherModule",(function(){return w}));var r,o=n("2kYt"),i=n("nIj0"),a=n("sEIs"),l=n("SVIu"),c=n("dvRg"),u=n("EM62"),s=n("OZlg"),p=n("e0eB"),d=n("iyc4"),m=n("/ASf"),f=n("l4xa"),y=((r=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){return _classCallCheck(this,n),t.call(this,e)}return n}(f.AbstractTuiThemeSwitcher)).\u0275fac=function(e){return new(e||r)(u["\u0275\u0275directiveInject"](o.e))},r.\u0275cmp=u["\u0275\u0275defineComponent"]({type:r,selectors:[["elderly"]],features:[u["\u0275\u0275InheritDefinitionFeature"]],decls:0,vars:0,template:function(e,t){},styles:[":root{--tui-primary-text:#fff;--tui-primary:#299d37;--tui-primary-hover:#2c7a35;--tui-primary-active:#2c7a35;--tui-link:#f59726;--tui-link-hover:#fab00b;--tui-selection:#f3fadc}"],encapsulation:2,changeDetection:0}),r);function h(e,t){1&e&&u["\u0275\u0275element"](0,"elderly")}var b,g=((b=function e(){_classCallCheck(this,e),this.enabled=!1}).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=u["\u0275\u0275defineComponent"]({type:b,selectors:[["tui-theme-switcher-1"]],decls:15,vars:2,consts:[[4,"ngIf"],["size","l",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275text"](1," \u041f\u0440\u0438\u043c\u0435\u0440\u044b "),u["\u0275\u0275elementStart"](2,"code"),u["\u0275\u0275text"](3,"LESS"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](4," \u0438 "),u["\u0275\u0275elementStart"](5,"code"),u["\u0275\u0275text"](6,"TypeScript"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](7," \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 "),u["\u0275\u0275elementStart"](8,"code"),u["\u0275\u0275text"](9,"elderly"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](10,".\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](11,h,1,0,"elderly",0),u["\u0275\u0275elementStart"](12,"label"),u["\u0275\u0275elementStart"](13,"tui-toggle",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.enabled=e})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](14," \u0440\u0435\u0436\u0438\u043c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430\n"),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](11),u["\u0275\u0275property"]("ngIf",t.enabled),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngModel",t.enabled))},directives:[o.t,m.a,i.NgControlStatus,i.NgModel,y],encapsulation:2,changeDetection:0}),b),x=n("u8jZ");function _(e,t){if(1&e&&(u["\u0275\u0275text"](0," \u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 "),u["\u0275\u0275elementStart"](1,"code"),u["\u0275\u0275text"](2,"AbstractTuiThemeSwitcher"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](3," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u043c. \u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0448\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u0442\u0430\u043a\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u2014 \u043e\u043d \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 "),u["\u0275\u0275elementStart"](4,"code"),u["\u0275\u0275text"](5,"AbstractTuiThemeSwitcher"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](6," \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439. \u0414\u043b\u044f \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c "),u["\u0275\u0275elementStart"](7,"code"),u["\u0275\u0275text"](8,"*ngIf"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](9,". "),u["\u0275\u0275elementStart"](10,"b"),u["\u0275\u0275text"](11,"\u0412\u0430\u0436\u043d\u043e:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](12," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u044f\u0446\u0438\u044e \u0441\u0442\u0438\u043b\u0435\u0439. "),u["\u0275\u0275elementStart"](13,"tui-doc-example",3),u["\u0275\u0275element"](14,"tui-theme-switcher-1"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](13),u["\u0275\u0275property"]("content",n.example1)}}function S(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",4),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275text"](2," \u0414\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0441\u0438\u043d\u0435\u0439 \u0442\u0435\u043c\u044b \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c \u0441 \u0432\u0430\u0448\u0435\u0439 \u0442\u0435\u043c\u043e\u0439 \u0432 \u0432\u0430\u0448 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c: "),u["\u0275\u0275element"](3,"tui-doc-code",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"li"),u["\u0275\u0275text"](5," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d \u0432\u043d\u0443\u0442\u0440\u044c \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 "),u["\u0275\u0275elementStart"](6,"code"),u["\u0275\u0275text"](7,"tui-root"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](8,": "),u["\u0275\u0275element"](9,"tui-doc-code",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("code",n.exampleImportModule),u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var v,T,C=((T=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {DOCUMENT} from '@angular/common';\nimport {Component, Inject, ViewEncapsulation} from '@angular/core';\nimport {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\n\n@Component({\n    selector: 'elderly',\n    styleUrls: ['./elderly.style.less'],\n    template: '',\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class ElderlyComponent extends AbstractTuiThemeSwitcher {\n    constructor(@Inject(DOCUMENT) documentRef: any) {\n        super(documentRef as Document);\n    }\n}\n",HTML:'<p>\n    \u041f\u0440\u0438\u043c\u0435\u0440\u044b <code>LESS</code> \u0438 <code>TypeScript</code> \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\n    <code>elderly</code>.\n</p>\n<elderly *ngIf="enabled"></elderly>\n<label>\n    <tui-toggle size="l" [(ngModel)]="enabled"></tui-toggle> \u0440\u0435\u0436\u0438\u043c \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u0430\n</label>\n',LESS:":root {\n    // Primary\n    --tui-primary-text: #fff;\n    --tui-primary: #299d37;\n    --tui-primary-hover: #2c7a35;\n    --tui-primary-active: #2c7a35;\n\n    // Link\n    --tui-link: #f59726;\n    --tui-link-hover: #fab00b;\n\n    // Selection\n    --tui-selection: #f3fadc;\n}\n"},this.exampleImportModule="import {ThemeModule} from 'theme/theme.module';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        ThemeModule\n    ],\n...\n",this.exampleInsertTemplate="<tui-root>\n    <tui-theme-blue></tui-theme-blue>\n    ...\n</tui-root>\n"}).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=u["\u0275\u0275defineComponent"]({type:T,selectors:[["example-tui-theme-switcher"]],decls:3,vars:0,consts:[["header","ThemeSwitcher","package","CDK"],["pageTab",""],["pageTab","\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"],["id","green","heading","\u0437\u0435\u043b\u0451\u043d\u0430\u044f \u0442\u0435\u043c\u0430",3,"content"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","app.component.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,_,15,1,"ng-template",1),u["\u0275\u0275template"](2,S,10,2,"ng-template",2),u["\u0275\u0275elementEnd"]())},directives:[s.a,p.a,d.a,g,x.a],styles:['.tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]:hover   .bubble[_ngcontent-%COMP%]{opacity:1}.bubble[_ngcontent-%COMP%]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:absolute;left:50px;bottom:30px;width:250px;background:var(--tui-text-01);color:var(--tui-base-01);border-radius:4px;padding:10px;opacity:0}.bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:-15px;border-top:15px solid var(--tui-text-01);border-left:10px solid transparent;border-right:10px solid transparent;-webkit-transform:translate(-10px);transform:translate(-10px)}'],changeDetection:0}),T),w=((v=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[o.c,i.FormsModule,c.TuiToggleModule].concat(_toConsumableArray(l.e),[a.g.forChild(Object(l.n)(C))])]}),v)}}]);