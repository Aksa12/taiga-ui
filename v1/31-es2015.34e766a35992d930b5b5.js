(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{zSyp:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCalendarMonthModule",(function(){return D}));var o=n("2kYt"),a=n("sEIs"),r=n("SVIu"),i=n("Qq0t"),l=n("dvRg"),u=n("l4xa"),m=n("s2A/"),c=n("EM62"),d=n("OZlg"),p=n("e0eB"),h=n("yZWP"),s=n("iyc4"),y=n("dv/p");let v=(()=>{class e{constructor(){this.value=null,this.hoveredMonth=null}onMonthClick(e){this.value=e}onMonthHovered(e){this.hoveredMonth=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-month-example-1"]],decls:5,vars:3,consts:[[3,"value","monthClick","hoveredItemChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-calendar-month",0),c["\u0275\u0275listener"]("monthClick",(function(e){return t.onMonthClick(e)}))("hoveredItemChange",(function(e){return t.onMonthHovered(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](1,"p"),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"p"),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("value",t.value),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"]("\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0441\u044f\u0446: ",t.value,""),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"]("\u041c\u0435\u0441\u044f\u0446 \u043f\u043e\u0434 \u0445\u043e\u0432\u0435\u0440\u043e\u043c: ",t.hoveredMonth,""))},directives:[y.a],encapsulation:2,changeDetection:0}),e})(),x=(()=>{class e{constructor(){this.value=null,this.max=new u.TuiMonth(2021,7),this.min=new u.TuiMonth(2019,7)}onMonthClick(e){this.value=null!==this.value&&this.value.isSingleMonth?u.TuiMonthRange.sort(this.value.from,e):new u.TuiMonthRange(e,e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-month-example-2"]],decls:3,vars:4,consts:[[3,"value","min","max","monthClick"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-calendar-month",0),c["\u0275\u0275listener"]("monthClick",(function(e){return t.onMonthClick(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](1,"p"),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("value",t.value)("min",t.min)("max",t.max),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"]("\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d: ",t.value,""))},directives:[y.a],encapsulation:2,changeDetection:0}),e})();var M=n("EPR0"),g=n("yHor"),T=n("zGJC"),C=n("u8jZ");function f(e,t){if(1&e&&(c["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u0435\u0441\u044f\u0446\u0430 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 "),c["\u0275\u0275elementStart"](1,"a",2),c["\u0275\u0275text"](2,"InputMonthRange"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-example",3),c["\u0275\u0275element"](4,"tui-calendar-month-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-doc-example",4),c["\u0275\u0275element"](6,"tui-calendar-month-example-2"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example2)}}function V(e,t){1&e&&(c["\u0275\u0275text"](0," \u0424\u0443\u043d\u043a\u0446\u0438\u044f, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0430\u044f, \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u043b\u0438 \u043c\u0435\u0441\u044f\u0446."),c["\u0275\u0275element"](1,"br"),c["\u0275\u0275elementStart"](2,"strong"),c["\u0275\u0275text"](3,"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439."),c["\u0275\u0275elementEnd"]())}function P(e,t){1&e&&c["\u0275\u0275text"](0," \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 ")}function w(e,t){1&e&&c["\u0275\u0275text"](0," \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 ")}function k(e,t){1&e&&c["\u0275\u0275text"](0," \u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u0438\u043b\u0438 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043c\u0435\u0441\u044f\u0446\u0435\u0432 ")}function I(e,t){1&e&&c["\u0275\u0275text"](0," \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0433\u043e\u0434 ")}function S(e,t){1&e&&c["\u0275\u0275text"](0," \u041a\u043b\u0438\u043a \u043f\u043e \u043c\u0435\u0441\u044f\u0446\u0443 ")}function E(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"tui-calendar-month",5),c["\u0275\u0275listener"]("monthClick",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().onMonthClick(t)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,V,4,0,"ng-template",6),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabledItemHandler=t})),c["\u0275\u0275template"](4,P,1,0,"ng-template",7),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().max=t})),c["\u0275\u0275template"](5,w,1,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().min=t})),c["\u0275\u0275template"](6,k,1,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().value=t})),c["\u0275\u0275template"](7,I,1,0,"ng-template",10),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().year=t})),c["\u0275\u0275template"](8,S,1,0,"ng-template",11),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("disabledItemHandler",e.disabledItemHandler)("min",e.min)("max",e.max)("year",e.year)("value",e.value),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.yearVariants)("documentationPropertyValue",e.year)}}function H(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",12),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),c["\u0275\u0275elementStart"](3,"code"),c["\u0275\u0275text"](4,"TuiCalendarMonthModule"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),c["\u0275\u0275element"](6,"tui-doc-code",13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"li"),c["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),c["\u0275\u0275element"](9,"tui-doc-code",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}let b=(()=>{class e{constructor(e){this.log=e,this.exampleImportModule="import {TuiCalendarMonthModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiCalendarMonthModule\n    ],\n...\n",this.exampleInsertTemplate="<tui-calendar-month></tui-calendar-month>\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {TuiMonth} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-calendar-month-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample1 {\n    value: TuiMonth | null = null;\n    hoveredMonth: TuiMonth | null = null;\n\n    onMonthClick(month: TuiMonth) {\n        this.value = month;\n    }\n\n    onMonthHovered(month: TuiMonth | null) {\n        this.hoveredMonth = month;\n    }\n}\n",HTML:'<tui-calendar-month\n    [value]="value"\n    (monthClick)="onMonthClick($event)"\n    (hoveredItemChange)="onMonthHovered($event)"\n></tui-calendar-month>\n<p>\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0441\u044f\u0446: {{value}}</p>\n<p>\u041c\u0435\u0441\u044f\u0446 \u043f\u043e\u0434 \u0445\u043e\u0432\u0435\u0440\u043e\u043c: {{hoveredMonth}}</p>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-calendar-month-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample2 {\n    value: TuiMonthRange | null = null;\n\n    max = new TuiMonth(2021, 7);\n    min = new TuiMonth(2019, 7);\n\n    onMonthClick(month: TuiMonth) {\n        if (this.value === null || !this.value.isSingleMonth) {\n            this.value = new TuiMonthRange(month, month);\n\n            return;\n        }\n\n        this.value = TuiMonthRange.sort(this.value.from, month);\n    }\n}\n",HTML:'<tui-calendar-month\n    [value]="value"\n    [min]="min"\n    [max]="max"\n    (monthClick)="onMonthClick($event)"\n></tui-calendar-month>\n<p>\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d: {{value}}</p>\n'},this.minVariants=[u.TUI_FIRST_DAY,new u.TuiMonth(2019,2),new u.TuiMonth(2007,0)],this.maxVariants=[u.TUI_LAST_DAY,new u.TuiMonth(2020,2),new u.TuiMonth(2023,0),new u.TuiMonth(2019,4)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[u.ALWAYS_FALSE_HANDLER,({month:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.valueVariants=[u.TuiDay.currentLocal(),new u.TuiMonthRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({month:3})),new u.TuiMonth(2007,2)],this.value=null,this.yearVariants=[u.TuiDay.currentLocal(),new u.TuiYear(2007)],this.year=this.yearVariants[0]}onMonthClick(e){this.log.log(e)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-calendar-month"]],features:[c["\u0275\u0275ProvidersFeature"]([m.a])],decls:4,vars:0,consts:[["header","CalendarMonth","package","KIT"],["pageTab",""],["tuiLink","","routerLink","/tui-input-month-range"],["id","base","heading","\u0431\u0430\u0437\u043e\u0432\u044b\u0439",3,"content"],["id","range","heading","\u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d",3,"content"],[3,"disabledItemHandler","min","max","year","value","monthClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiMonth | TuiMonthRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","year","documentationPropertyMode","input-output","documentationPropertyType","TuiYear",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","monthClick","documentationPropertyMode","output","documentationPropertyType","TuiMonth"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,f,7,2,"ng-template",1),c["\u0275\u0275template"](2,E,9,15,"ng-template",1),c["\u0275\u0275template"](3,H,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[d.a,p.a,h.a,a.f,s.a,v,x,M.a,y.a,g.a,T.a,C.a],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.g,i.TuiLinkModule,l.TuiCalendarMonthModule,...r.e,a.g.forChild(Object(r.n)(b))]]}),e})()}}]);