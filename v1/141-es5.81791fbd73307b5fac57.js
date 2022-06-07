function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{Raxz:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMapperModule",(function(){return P}));var r=n("2kYt"),a=n("sEIs"),o=n("SVIu"),i=n("l4xa"),p=n("EM62"),u=n("OZlg"),l=n("e0eB"),m=n("yHor"),c=n("zGJC"),s=n("u8jZ"),d=n("M03u");function y(e,t){1&e&&p["\u0275\u0275text"](0," \u041f\u0430\u0439\u043f \u0434\u043b\u044f \u043c\u0430\u043f\u043f\u0438\u043d\u0433\u0430. ")}function f(e,t){1&e&&p["\u0275\u0275text"](0," \u041c\u0430\u043f-\u0444\u0443\u043d\u043a\u0446\u0438\u044f ")}function g(e,t){1&e&&p["\u0275\u0275text"](0," \u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u043c\u0430\u043f\u043f\u0435\u0440-\u0444\u0443\u043d\u043a\u0446\u0438\u0438 ")}function x(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"p",2),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"tuiMapper"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-documentation"),p["\u0275\u0275template"](4,f,1,0,"ng-template",3),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().mapper=e})),p["\u0275\u0275template"](5,g,1,0,"ng-template",4),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().args=e})),p["\u0275\u0275elementEnd"]()}if(2&e){var r=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" \u0411\u0440\u044e\u043a\u0438 \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u0432 ",p["\u0275\u0275pipeBind3"](2,5,r.trousers,r.mapper,r.args)," "),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValues",r.mapperVariants)("documentationPropertyValue",r.mapper),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",r.argsVariants)("documentationPropertyValue",r.args)}}function h(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",5),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"TuiMapperPipeModule"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),p["\u0275\u0275element"](6,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 "),p["\u0275\u0275elementStart"](9,"code"),p["\u0275\u0275text"](10,"binding"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](11," (\u0432 "),p["\u0275\u0275elementStart"](12,"code"),p["\u0275\u0275text"](13,"tuiMapper"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](14," \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c \u043c\u0430\u043f-\u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b): "),p["\u0275\u0275element"](15,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var C,M,b=((M=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiMapperPipeModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMapperPipeModule\n    ],\n...\n",this.exampleInsertTemplate="{{item | tuiMapper: mapper: someArg}}\n",this.trousers="\u0431\u0440\u044e\u043a\u0438",this.mapperVariants=[function(e){return e},function(e){return"\u044d\u043b\u0435\u0433\u0430\u043d\u0442\u043d\u044b\u0435 \u0448\u043e\u0440\u0442\u044b"},function(e,t){return e.toUpperCase()+t}],this.mapper=this.mapperVariants[0],this.argsVariants=["",". \u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0436\u0435, \u043d\u043e \u0441 \u043f\u0435\u0440\u043b\u0430\u043c\u0443\u0442\u0440\u043e\u0432\u044b\u043c\u0438 \u043f\u0443\u0433\u043e\u0432\u0438\u0446\u0430\u043c\u0438?"],this.args=this.argsVariants[0]}).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=p["\u0275\u0275defineComponent"]({type:M,selectors:[["example-tui-mapper"]],decls:4,vars:0,consts:[["header","Mapper","package","CDK"],["pageTab",""],[1,"text"],["documentationPropertyName","mapper","documentationPropertyMode","input","documentationPropertyType","TuiMapper",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","args","documentationPropertyMode","input","documentationPropertyType","any",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,y,1,0,"ng-template",1),p["\u0275\u0275template"](2,x,6,9,"ng-template",1),p["\u0275\u0275template"](3,h,16,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[u.a,l.a,m.a,c.a,s.a],pipes:[d.a],styles:[".text[_ngcontent-%COMP%]{font-size:19px}"],changeDetection:0}),M),P=((C=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[i.TuiMapperPipeModule,r.c].concat(_toConsumableArray(o.e),[a.g.forChild(Object(o.n)(b))])]}),C)}}]);