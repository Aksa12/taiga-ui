(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Uwkd:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiArcChartModule",(function(){return B}));var a=n("An66"),r=n("3kIJ"),o=n("1VvW"),i=n("UTYu"),c=n("T8fS"),l=n("SVIu"),u=n("dvRg"),m=n("kZht"),d=n("OZlg"),p=n("e0eB"),s=n("iyc4"),v=n("okGw"),x=n("x8/p"),h=n("Eol2"),y=n("0/K7");let f=(()=>{class e{constructor(){this.value=[40,30,20,10],this.activeItemIndex=NaN}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-arc-chart-example-1"]],decls:13,vars:8,consts:[[1,"b-form",3,"ngModel","ngModelChange"],[1,"wrapper"],["size","m",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","l",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","xl",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],[3,"value"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-count",0),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](1," activeItemIndex\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"div",1),m["\u0275\u0275elementStart"](3,"tui-arc-chart",2),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](4," Total value "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-arc-chart",3),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](6," Total value "),m["\u0275\u0275elementStart"](7,"div"),m["\u0275\u0275text"](8,"Label"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"tui-arc-chart",4),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275element"](10,"tui-money",5),m["\u0275\u0275elementStart"](11,"div"),m["\u0275\u0275text"](12,"Not bad!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("ngModel",t.activeItemIndex),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("value",t.value)("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("value",t.value)("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("value",t.value)("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",123456))},directives:[v.a,x.a,r.NgControlStatus,r.NgModel,h.a,y.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem;--tui-chart-0:var(--tui-support-12);--tui-chart-1:var(--tui-support-01);--tui-chart-2:var(--tui-support-03);--tui-chart-3:var(--tui-support-09)}"],changeDetection:0}),e})();var b=n("l4xa");const I=function(){return[40]},g=function(){return[20]};let C=(()=>{class e{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.sum=Object(b.ad)(...this.value)}getValue(e){return Number.isNaN(e)?this.sum:this.value[e]}getLabel(e){return Number.isNaN(e)?"Total":this.labels[e]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-arc-chart-example-2"]],decls:6,vars:4,consts:[[1,"wrapper"],["size","l",3,"value"],["size","l","minLabel","","maxLabel","",1,"stacked",3,"value"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275element"](1,"tui-arc-chart",1),m["\u0275\u0275elementStart"](2,"tui-arc-chart",2),m["\u0275\u0275text"](3," +20% "),m["\u0275\u0275elementStart"](4,"div"),m["\u0275\u0275text"](5,"For filling in last name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",m["\u0275\u0275pureFunction0"](2,I)),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",m["\u0275\u0275pureFunction0"](3,g)))},directives:[h.a],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;--tui-chart-0:var(--tui-support-03)}.stacked[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;--tui-secondary:transparent;--tui-chart-0:var(--tui-support-04)}"],changeDetection:0}),e})();var P=n("EPR0"),V=n("yHor"),S=n("zGJC"),z=n("u8jZ");const E=["header",$localize`:␟37b713ce5aea22bdc50004ec0f09e17107b9787c␟433977682549774777:ArcChart`],w=["heading",$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`],L=["heading",$localize`:␟acad9ee00b2dbfb003d340797809ce9fe3e1ec3d␟1991766769963454924:Stacked`];function T(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](1,w),m["\u0275\u0275element"](2,"tui-arc-chart-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](4,L),m["\u0275\u0275element"](5,"tui-arc-chart-example-2"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2)}}var M,N,A,$,O,k,_,D;function j(e,t){1&e&&m["\u0275\u0275i18n"](0,M)}function F(e,t){1&e&&m["\u0275\u0275i18n"](0,N)}function H(e,t){1&e&&m["\u0275\u0275i18n"](0,A)}function R(e,t){1&e&&m["\u0275\u0275i18n"](0,$)}function G(e,t){1&e&&m["\u0275\u0275i18n"](0,O)}function J(e,t){1&e&&m["\u0275\u0275i18n"](0,k)}function Z(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-arc-chart",4),m["\u0275\u0275listener"]("activeItemIndexChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().activeItemIndex=t})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,j,1,0,"ng-template",5),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().max=t})),m["\u0275\u0275template"](4,F,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().maxLabel=t})),m["\u0275\u0275template"](5,H,1,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().minLabel=t})),m["\u0275\u0275template"](6,R,1,0,"ng-template",8),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().size=t})),m["\u0275\u0275template"](7,G,1,0,"ng-template",9),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().value=t})),m["\u0275\u0275template"](8,J,1,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().activeItemIndex=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("max",e.max)("maxLabel",e.maxLabel)("minLabel",e.minLabel)("size",e.size)("value",e.value)("activeItemIndex",e.activeItemIndex),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.maxLabel),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.minLabel),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.activeItemIndex)}}function U(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",11),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,_),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",12),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,D),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleHtml)}}M=$localize`:␟5f25cd8a9234b487725d1fa48d60e56ef72a2373␟5999590176850087451: Maximum value `,N=$localize`:␟17d58754566edc76573ee313c71d6ecc8dca894b␟366902072652186200: Label for maximum value `,A=$localize`:␟e606409e619e6757d5e8cc2834019a4604d04a87␟4901338580057825614: Label for minimum value `,$=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,O=$localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `,k=$localize`:␟c479266fb0898c58ca78245acf0a5e0907b25eb2␟4355316937676670930: Index of selected arc `,_=$localize`:␟2779bd2d7dd07772646294f6006a05d0ab57543c␟5154896617161139394: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiArcChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,D=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let q=(()=>{class e{constructor(){this.exampleModule=n.e(285).then(n.bind(null,"u89n")),this.exampleHtml=n.e(286).then(n.bind(null,"68Qq")),this.example1={TypeScript:n.e(281).then(n.bind(null,"/BZ5")),HTML:n.e(279).then(n.bind(null,"YFX5")),LESS:n.e(280).then(n.bind(null,"+uWy"))},this.example2={TypeScript:n.e(284).then(n.bind(null,"DCxn")),HTML:n.e(282).then(n.bind(null,"fV4d")),LESS:n.e(283).then(n.bind(null,"6rDR"))},this.valueVariants=[[42],[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.maxVariants=[100,1e4,5e4],this.max=this.maxVariants[0],this.sizeVariants=["m","l","xl"],this.size=this.sizeVariants[0],this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-arc-chart"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","sizes",3,"content",6,"heading"],["id","stacked",3,"content",6,"heading"],[1,"chart",3,"max","maxLabel","minLabel","size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,E),m["\u0275\u0275template"](2,T,6,2,"ng-template",1),m["\u0275\u0275template"](3,Z,9,15,"ng-template",1),m["\u0275\u0275template"](4,U,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[d.a,p.a,s.a,f,C,P.a,h.a,V.a,S.a,z.a],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),e})(),B=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.f,r.FormsModule,u.U,i.d,c.g,l.j,o.f.forChild(Object(l.q)(q))]]}),e})()}}]);