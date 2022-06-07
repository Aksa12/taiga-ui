function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{"3G/7":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiReorderModule",(function(){return x}));var r,a=n("2kYt"),o=n("sEIs"),i=n("SVIu"),l=n("m/Iy"),c=n("EM62"),s=n("OZlg"),m=n("e0eB"),d=n("iyc4"),p=n("u/Vf"),u=((r=function e(){_classCallCheck(this,e),this.items=["John Cleese","Eric Idle","Michael Palin","Terry Gilliam","Terry Jones","Graham Chapman"],this.enabled=this.items}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=c["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-reorder-example-1"]],decls:1,vars:2,consts:[[1,"list",3,"items","enabled","itemsChange","enabledChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-reorder",0),c["\u0275\u0275listener"]("itemsChange",(function(e){return t.items=e}))("enabledChange",(function(e){return t.enabled=e})),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("items",t.items)("enabled",t.enabled)},directives:[p.a],styles:[".list[_ngcontent-%COMP%]{width:200px}"],changeDetection:0}),r),f=n("u8jZ");function y(e,t){if(1&e&&(c["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 "),c["\u0275\u0275elementStart"](1,"tui-doc-example",3),c["\u0275\u0275element"](2,"tui-reorder-example-1"),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("content",n.example1)}}function h(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",4),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),c["\u0275\u0275elementStart"](3,"code"),c["\u0275\u0275text"](4,"TuiReorderModule"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u0433\u0434\u0435 \u0432\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442\u0435 \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439: "),c["\u0275\u0275element"](6,"tui-doc-code",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"li"),c["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),c["\u0275\u0275element"](9,"tui-doc-code",6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",n.exampleImportModule),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var b,g,C=((g=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-reorder-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiReorderExample1 {\n    items = [\n        'John Cleese',\n        'Eric Idle',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n        'Graham Chapman',\n    ];\n\n    enabled = this.items;\n}\n",HTML:'<tui-reorder class="list" [(items)]="items" [(enabled)]="enabled"></tui-reorder>\n'},this.exampleImportModule="import {TuiReorderModule} from '@taiga-ui/addon-table/components/reorder';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiReorderModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-reorder [(items)]="items" [(enabled)]="enabled"></tui-reorder>\n'}).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=c["\u0275\u0275defineComponent"]({type:g,selectors:[["example-tui-reorder"]],decls:3,vars:0,consts:[["header","Reorder","package","ADDON-TABLE"],["pageTab",""],["pageTab","\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"],["id","usage","heading","\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,y,3,1,"ng-template",1),c["\u0275\u0275template"](2,h,10,2,"ng-template",2),c["\u0275\u0275elementEnd"]())},directives:[s.a,m.a,d.a,u,f.a],encapsulation:2,changeDetection:0}),g),x=((b=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[a.c,l.a].concat(_toConsumableArray(i.e),[o.g.forChild(Object(i.n)(C))])]}),b)}}]);