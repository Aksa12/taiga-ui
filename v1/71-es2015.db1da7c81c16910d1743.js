(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"D7/f":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMobileCalendarModule",(function(){return N}));var o=n("2kYt"),a=n("nIj0"),r=n("sEIs"),i=n("SVIu"),l=n("hLNI"),d=n("Qq0t"),u=n("l4xa"),m=n("dvRg"),c=n("EM62"),p=n("OZlg"),s=n("e0eB"),y=n("yZWP"),g=n("iyc4"),x=n("kiPw"),h=n("zV1d");let T=(()=>{class e{constructor(e,t,n){this.months=n,this.control=new a.FormControl;const o=Object(u.tuiReplayedValueChangesFrom)(this.control),r=c.Injector.create({providers:[{provide:m.TUI_CALENDAR_DATA_STREAM,useValue:o}],parent:t}),i=new x.b(l.TuiMobileCalendarDialogComponent,r);this.dialog$=e.open(i,{size:"fullscreen",closeable:!1,data:{min:u.TuiDay.currentLocal()}})}get empty(){return!this.control.value}get date(){return this.parsed||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"}get parsed(){if(!this.control.value)return"";const{month:e,day:t,year:n}=this.control.value;return`${this.months[e]} ${t}, ${n}`}onClick(){this.dialog$.subscribe(e=>{this.control.setValue(e)})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](d.TuiDialogService),c["\u0275\u0275directiveInject"](c.Injector),c["\u0275\u0275directiveInject"](u.TUI_MONTHS))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mobile-calendar-example-1"]],decls:4,vars:3,consts:[[1,"wrapper"],["tuiIconButton","","type","button","title","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443","appearance","secondary","shape","rounded","icon","tuiIconCalendarLarge",3,"click"],[1,"date"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"button",1),c["\u0275\u0275listener"]("click",(function(){return t.onClick()})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"span",2),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275classProp"]("date_empty",t.empty),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",t.date," "))},directives:[h.a],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.date[_ngcontent-%COMP%]{margin-left:16px}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),e})();var f=n("EPR0"),b=n("+nax"),C=n("yHor"),I=n("zGJC"),M=n("u8jZ");const v=function(){return["/tui-input-date"]},D=function(){return["/tui-input-date-range"]};function P(e,t){if(1&e&&(c["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044f \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432 "),c["\u0275\u0275elementStart"](1,"a",2),c["\u0275\u0275text"](2,"InputDate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](3," \u0438 "),c["\u0275\u0275elementStart"](4,"a",2),c["\u0275\u0275text"](5,"InputDateRange"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](6," \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044f "),c["\u0275\u0275elementStart"](7,"code"),c["\u0275\u0275text"](8,"TuiMobileCalendarDialogModule"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](9,". "),c["\u0275\u0275elementStart"](10,"p"),c["\u0275\u0275text"](11," \u0414\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0442\u043e\u043a\u0435\u043d "),c["\u0275\u0275elementStart"](12,"code"),c["\u0275\u0275text"](13,"TUI_CALENDAR_DATA_STREAM"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](14,", \u0441\u043c. \u043f\u0440\u0438\u043c\u0435\u0440. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"strong"),c["\u0275\u0275text"](16," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"tui-doc-example",3),c["\u0275\u0275element"](18,"tui-mobile-calendar-example-1"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](3,v)),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](4,D)),c["\u0275\u0275advance"](13),c["\u0275\u0275property"]("content",e.example1)}}function S(e,t){1&e&&(c["\u0275\u0275text"](0," \u0424\u0443\u043d\u043a\u0446\u0438\u044f, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0430\u044f, \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u043b\u0438 \u0434\u0430\u0442\u0430 \u0432 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0435."),c["\u0275\u0275element"](1,"br"),c["\u0275\u0275elementStart"](2,"strong"),c["\u0275\u0275text"](3,"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439."),c["\u0275\u0275elementEnd"]())}function V(e,t){1&e&&c["\u0275\u0275text"](0," \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0430\u0442\u0430 ")}function E(e,t){1&e&&c["\u0275\u0275text"](0," \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0430\u0442\u0430 ")}function A(e,t){1&e&&c["\u0275\u0275text"](0," \u041e\u0434\u0438\u043d\u043e\u0447\u043d\u0430\u044f \u0434\u0430\u0442\u0430 \u0438\u043b\u0438 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d ")}function w(e,t){1&e&&c["\u0275\u0275text"](0," \u041d\u0430\u0436\u0430\u0442\u0438\u0435 \u043d\u0430 \u043a\u0440\u0435\u0441\u0442\u0438\u043a ")}function _(e,t){1&e&&c["\u0275\u0275text"](0,' \u041d\u0430\u0436\u0430\u0442\u0438\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 "\u0413\u043e\u0442\u043e\u0432\u043e" ')}function j(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275element"](1,"tui-mobile-calendar",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,S,4,0,"ng-template",5),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabledItemHandler=t})),c["\u0275\u0275template"](4,V,1,0,"ng-template",6),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().max=t})),c["\u0275\u0275template"](5,E,1,0,"ng-template",7),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().min=t})),c["\u0275\u0275template"](6,A,1,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().single=t})),c["\u0275\u0275template"](7,w,1,0,"ng-template",9),c["\u0275\u0275template"](8,_,1,0,"ng-template",10),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("disabledItemHandler",e.disabledItemHandler)("max",e.max)("min",e.min)("single",e.single),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.single)}}function k(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",11),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),c["\u0275\u0275elementStart"](3,"code"),c["\u0275\u0275text"](4,"TuiMobileCalendarModule"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),c["\u0275\u0275element"](6,"tui-doc-code",12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"li"),c["\u0275\u0275text"](8," \u0414\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 "),c["\u0275\u0275elementStart"](9,"code"),c["\u0275\u0275text"](10,"TuiInputDate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](11," \u0438\u043b\u0438 "),c["\u0275\u0275elementStart"](12,"code"),c["\u0275\u0275text"](13,"TuiInputDateRange"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](14," \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),c["\u0275\u0275elementStart"](15,"code"),c["\u0275\u0275text"](16,"TuiMobileCalendarDialogModule"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](17," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0438\u043d\u043f\u0443\u0442\u044b: "),c["\u0275\u0275element"](18,"tui-doc-code",12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](19,"li"),c["\u0275\u0275text"](20," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),c["\u0275\u0275element"](21,"tui-doc-code",13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](12),c["\u0275\u0275property"]("code",e.exampleImportDialogModule),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}function R(e){return e.stream}let L=(()=>{class e{constructor(){this.exampleImportModule="import {TuiMobileCalendarModule} from '@taiga-ui/addon-mobile';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMobileCalendarModule,\n    ],\n...\n",this.exampleImportDialogModule="import {TuiMobileCalendarDialogModule} from '@taiga-ui/addon-mobile';\nimport {TuiInputDateModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMobileCalendarDialogModule,\n        TuiInputDateModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-mobile-calendar\n    [min]="min"\n    [max]="max"\n    [single]="false"\n    [disabledItemHandler]="disabledItemHandler"\n></tui-mobile-calendar>\n',this.example1={TypeScript:"import {Component, Inject, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';\nimport {TUI_MONTHS, TuiDay, tuiReplayedValueChangesFrom} from '@taiga-ui/cdk';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n// @dynamic\n@Component({\n    selector: 'tui-mobile-calendar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMobileCalendarExample1 {\n    private readonly control = new FormControl();\n\n    private readonly dialog$: Observable<TuiDay>;\n\n    constructor(\n        @Inject(TuiDialogService) dialogService: TuiDialogService,\n        @Inject(Injector) injector: Injector,\n        @Inject(TUI_MONTHS) private readonly months: ReadonlyArray<string>,\n    ) {\n        const dataStream = tuiReplayedValueChangesFrom(this.control);\n        const computedInjector = Injector.create({\n            providers: [\n                {\n                    provide: TUI_CALENDAR_DATA_STREAM,\n                    useValue: dataStream,\n                },\n            ],\n            parent: injector,\n        });\n        const content = new PolymorpheusComponent(\n            TuiMobileCalendarDialogComponent,\n            computedInjector,\n        );\n\n        this.dialog$ = dialogService.open(content, {\n            size: 'fullscreen',\n            closeable: false,\n            data: {\n                min: TuiDay.currentLocal(),\n            },\n        });\n    }\n\n    get empty(): boolean {\n        return !this.control.value;\n    }\n\n    get date(): string {\n        return this.parsed || '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443';\n    }\n\n    get parsed(): string {\n        if (!this.control.value) {\n            return '';\n        }\n\n        const {month, day, year} = this.control.value as TuiDay;\n\n        return `${this.months[month]} ${day}, ${year}`;\n    }\n\n    onClick() {\n        this.dialog$.subscribe(value => {\n            this.control.setValue(value);\n        });\n    }\n}\n",HTML:'<div class="wrapper">\n    <button\n        tuiIconButton\n        type="button"\n        title="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"\n        appearance="secondary"\n        shape="rounded"\n        icon="tuiIconCalendarLarge"\n        (click)="onClick()"\n    ></button>\n    <span class="date" [class.date_empty]="empty"> {{date}} </span>\n</div>\n',LESS:".wrapper {\n    display: flex;\n    align-items: center;\n}\n\n.date {\n    margin-left: 16px;\n\n    &_empty {\n        color: var(--tui-text-03);\n    }\n}\n"},this.minVariants=[u.TUI_FIRST_DAY,new u.TuiDay(2017,2,5),new u.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[u.TUI_LAST_DAY,new u.TuiDay(2020,2,5),new u.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.single=!0,this.disabledItemHandlerVariants=[u.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new a.FormControl,this.stream=Object(u.tuiReplayedValueChangesFrom)(this.control)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-mobile-calendar"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:m.TUI_CALENDAR_DATA_STREAM,deps:[e],useFactory:R}])],decls:4,vars:0,consts:[["header","MobileCalendar","package","ADDON-MOBILE"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","dropdown","heading","\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0430",3,"content"],[1,"calendar",3,"disabledItemHandler","max","min","single"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","single","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cancel","documentationPropertyMode","output","documentationPropertyType","void"],["documentationPropertyName","confirm","documentationPropertyMode","output","documentationPropertyType","TuiDayRange | TuiDay"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,P,19,5,"ng-template",1),c["\u0275\u0275template"](2,j,9,11,"ng-template",1),c["\u0275\u0275template"](3,k,22,3,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[p.a,s.a,y.a,r.f,g.a,T,f.a,b.a,C.a,I.a,M.a],styles:[".calendar[_ngcontent-%COMP%]{height:460px}"],changeDetection:0}),e})(),N=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.ReactiveFormsModule,d.TuiLinkModule,d.TuiButtonModule,l.TuiMobileCalendarModule,l.TuiMobileCalendarDialogModule,...i.e,r.g.forChild(Object(i.n)(L))]]}),e})()}}]);