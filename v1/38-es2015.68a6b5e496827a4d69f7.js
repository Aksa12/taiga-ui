(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{GNRe:function(e,t,o){"use strict";o.r(t),o.d(t,"ExampleTuiColorPickerModule",(function(){return j}));var n=o("2kYt"),r=o("nIj0"),l=o("sEIs"),c=o("SVIu"),i=o("vgRF"),a=o("l4xa"),u=o("Qq0t"),p=o("EM62"),d=o("OZlg"),s=o("e0eB"),m=o("iyc4"),g=o("kT+k"),f=o("2wTY");let y=(()=>{class e{constructor(){this.color="#ffdd2d",this.palette=new Map([["color-black-300","#333333"],["color-black-200","#666666"],["color-black-100","#909090"],["color-yellow-100","#FFDD2C"],["color-yellow-200","#FCC521"],["color-yellow-300","#FAB618"],["color-gray-100","#f5f5f6"],["color-gray-200","#e7e8ea"],["color-gray-300","#cbcfd3"],["color-gray-400","#959ba4"],["color-gray-500","#79818c"],["color-gray-600","#616871"],["color-light-blue-100","#ecf1f7"],["color-light-blue-200","#e4ebf3"],["color-light-blue-300","#dde4ed"],["color-blue-100","#1771e6"],["color-blue-200","#1464cc"],["color-blue-300","#0953b3"],["color-green-100","#39b54a"],["color-green-200","#2ca53a"],["color-green-300","#168a21"],["color-red-100","#e01f19"],["color-red-200","#d3120e"],["color-red-300","#c40b08"]])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-color-picker-example-1"]],decls:6,vars:6,consts:[[1,"input",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"input","tui-space_vertical-2",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","s",1,"input",3,"colors","ngModel","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-color",0),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),p["\u0275\u0275text"](1," \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-input-color",1),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),p["\u0275\u0275text"](3," \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-input-color",2),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),p["\u0275\u0275text"](5," \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color))},directives:[g.a,r.NgControlStatus,r.NgModel,f.b],styles:["[_nghost-%COMP%]{display:block}.input[_ngcontent-%COMP%]{width:320px}"],changeDetection:0}),e})();var b=o("e4iD"),x=o("q7Lq"),h=o("SUM+"),C=o("zV1d"),k=o("RZBz"),M=o("4hRd");function S(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-color-selector",3),p["\u0275\u0275listener"]("colorChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().color=t})),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,o=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("tuiActiveZoneParent",e)("color",o.color)}}let w=(()=>{class e{constructor(e){this.sanitizer=e,this.color="#ffdd2d"}get background(){return this.sanitizer.bypassSecurityTrustStyle(this.color)}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](b.DomSanitizer))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-color-picker-example-2"]],decls:5,vars:6,consts:[["tuiDropdownAlign","left",3,"content","tuiDropdownMaxHeight"],["tuiButton","","type","button","appearance",""],["picker",""],[3,"tuiActiveZoneParent","color","colorChange"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),p["\u0275\u0275elementStart"](1,"button",1),p["\u0275\u0275text"](2," Color me Kubrick "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](3,S,1,2,"ng-template",null,2,p["\u0275\u0275templateRefExtractor"])),2&e){const e=p["\u0275\u0275reference"](4);p["\u0275\u0275property"]("content",e)("tuiDropdownMaxHeight",999),p["\u0275\u0275advance"](1),p["\u0275\u0275styleProp"]("background",t.background,p["\u0275\u0275defaultStyleSanitizer"])("color",t.background)}},directives:[x.a,h.a,C.a,k.a,M.a],styles:["[_nghost-%COMP%]     tui-wrapper{-webkit-filter:invert(1);filter:invert(1)}"],changeDetection:0}),e})();var v=o("EPR0"),T=o("x/Ht"),D=o("yHor"),E=o("zGJC"),P=o("u8jZ");function z(e,t){if(1&e&&(p["\u0275\u0275text"](0," ColorPicker \u2014 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0446\u0432\u0435\u0442\u0430 \u0441 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c\u044e. \u041d\u0430 \u0435\u0433\u043e \u0431\u0430\u0437\u0435 \u0441\u0434\u0435\u043b\u0430\u043d\u044b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b InputColor \u0438 ColorSelector "),p["\u0275\u0275elementStart"](1,"tui-doc-example",2),p["\u0275\u0275element"](2,"tui-color-picker-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",3),p["\u0275\u0275element"](4,"tui-color-picker-example-2"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",e.example2)}}function I(e,t){1&e&&p["\u0275\u0275text"](0," \u041c\u0430\u0441\u0441\u0438\u0432 \u0446\u0432\u0435\u0442\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 rgba ")}function F(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-demo"),p["\u0275\u0275element"](1,"tui-color-picker"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,I,1,0,"ng-template",4),p["\u0275\u0275elementEnd"]())}function A(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",5),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"TuiColorPickerModule"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),p["\u0275\u0275element"](6,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),p["\u0275\u0275element"](9,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleImportModule),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}let Z=(()=>{class e{constructor(){this.exampleImportModule="import {TuiColorPickerModule} from '@taiga-ui/addon-editor';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiColorPickerModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-color-picker [(color)]="color"></tui-color-picker>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-color-picker-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample1 {\n    color = '#ffdd2d';\n\n    readonly palette = new Map([\n        ['color-black-300', '#333333'],\n        ['color-black-200', '#666666'],\n        ['color-black-100', '#909090'],\n        ['color-yellow-100', '#FFDD2C'],\n        ['color-yellow-200', '#FCC521'],\n        ['color-yellow-300', '#FAB618'],\n        ['color-gray-100', '#f5f5f6'],\n        ['color-gray-200', '#e7e8ea'],\n        ['color-gray-300', '#cbcfd3'],\n        ['color-gray-400', '#959ba4'],\n        ['color-gray-500', '#79818c'],\n        ['color-gray-600', '#616871'],\n        ['color-light-blue-100', '#ecf1f7'],\n        ['color-light-blue-200', '#e4ebf3'],\n        ['color-light-blue-300', '#dde4ed'],\n        ['color-blue-100', '#1771e6'],\n        ['color-blue-200', '#1464cc'],\n        ['color-blue-300', '#0953b3'],\n        ['color-green-100', '#39b54a'],\n        ['color-green-200', '#2ca53a'],\n        ['color-green-300', '#168a21'],\n        ['color-red-100', '#e01f19'],\n        ['color-red-200', '#d3120e'],\n        ['color-red-300', '#c40b08'],\n    ]);\n}\n",HTML:'<tui-input-color class="input" [colors]="palette" [(ngModel)]="color">\n    \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n</tui-input-color>\n<tui-input-color\n    class="input tui-space_vertical-2"\n    tuiTextfieldSize="m"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n</tui-input-color>\n<tui-input-color\n    class="input"\n    tuiTextfieldSize="s"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n</tui-input-color>\n',LESS:":host {\n    display: block;\n}\n\n.input {\n    width: 320px;\n}\n"},this.example2={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {DomSanitizer, SafeStyle} from '@angular/platform-browser';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-color-picker-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample2 {\n    color = '#ffdd2d';\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    get background(): SafeStyle {\n        return this.sanitizer.bypassSecurityTrustStyle(this.color);\n    }\n}\n",HTML:'<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="picker"\n    [tuiDropdownMaxHeight]="999"\n>\n    <button\n        tuiButton\n        type="button"\n        appearance=""\n        [style.background]="background"\n        [style.color]="background"\n    >\n        Color me Kubrick\n    </button>\n</tui-hosted-dropdown>\n<ng-template #picker let-activeZone>\n    <tui-color-selector\n        [tuiActiveZoneParent]="activeZone"\n        [(color)]="color"\n    ></tui-color-selector>\n</ng-template>\n',LESS:":host {\n    /* stylelint-disable */\n    ::ng-deep tui-wrapper {\n        filter: invert(1);\n    }\n    /* stylelint-enable */\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-color-picker"]],decls:4,vars:0,consts:[["header","ColorPicker","package","ADDON-editor"],["pageTab",""],["id","input","heading","\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430",3,"content"],["id","dropdown","heading","ColorSelector \u0432 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0435",3,"content"],["documentationPropertyName","color","documentationPropertyMode","input-output","documentationPropertyType","[number, number, number, number]"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,z,5,2,"ng-template",1),p["\u0275\u0275template"](2,F,4,0,"ng-template",1),p["\u0275\u0275template"](3,A,10,2,"ng-template"),p["\u0275\u0275elementEnd"]())},directives:[d.a,s.a,m.a,y,w,v.a,T.a,D.a,E.a,P.a],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,u.TuiButtonModule,u.TuiHostedDropdownModule,i.TuiColorPickerModule,i.TuiColorSelectorModule,a.TuiActiveZoneModule,u.TuiDropdownControllerModule,i.TuiInputColorModule,u.TuiTextfieldControllerModule,...c.e,l.g.forChild(Object(c.n)(Z)),r.FormsModule]]}),e})()}}]);