(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{uU2g:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputDateModule",(function(){return _e}));var a,o=n("An66"),r=n("3kIJ"),i=n("1VvW"),l=n("SVIu"),d=n("hLNI"),m=n("Qq0t"),u=n("dvRg"),c=n("Piem"),s=n("kZht"),p=n("l4xa"),f=n("LusI"),T=n("K/iL"),b=n("OZlg"),C=n("e0eB"),S=n("yZWP"),h=n("iyc4"),y=n("eB8V"),x=n("XFXp"),E=n("GbXl"),_=n("KG37"),g=n("kNZY");a=$localize`:␟8d97632c6e9254396e076f0dcbfbda595c40cc40␟6291046411933318432: If a field is optional, but unfinished field should be marked as invalid, use ${"\ufffd#3\ufffd"}:START_TAG_CODE:tuiUnfinishedValidator${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: directive `;let D=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(new p.cb(2017,0,15))})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-1"]],decls:7,vars:2,consts:[[1,"b-form",3,"formGroup","tuiTextfieldCleaner"],["tuiUnfinishedValidator","Finish filling the field","formControlName","testValue"],["formControlName","testValue"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"p"),s["\u0275\u0275i18nStart"](2,a),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-input-date",1),s["\u0275\u0275text"](5," Choose a date "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](6,"tui-field-error",2),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("formGroup",t.testForm)("tuiTextfieldCleaner",!0)},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,y.b,x.a,E.a,_.a,r.NgControlStatus,r.FormControlName,g.a],encapsulation:2,changeDetection:0}),e})();var A=n("2wTY"),v=n("gEyt");let V=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(new p.cb(2017,2,15))})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-2"]],decls:7,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_vertical-4",3,"tuiTextfieldLabelOutside"],["formControlName","testValue","tuiTextfieldSize","l"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"tui-input-date",1),s["\u0275\u0275text"](2," Choose a date "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-input-date",2),s["\u0275\u0275text"](4," Choose a date "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-input-date",3),s["\u0275\u0275text"](6," Choose a date "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,x.a,E.a,r.NgControlStatus,r.FormControlName,A.b,v.b],encapsulation:2,changeDetection:0}),e})(),$=(()=>{class e{constructor(){this.from=null,this.to=null,this.min=new p.cb(2017,9,4),this.max=p.cb.currentLocal(),this.items=[new u.qb(p.N.append({year:-1}),"Until today",p.cb.currentLocal())]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-3"]],decls:8,vars:6,consts:[[1,"tui-text_h4"],[1,"b-form"],[3,"min","max","ngModel","ngModelChange"],[3,"min","items","ngModel","ngModelChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h2",0),s["\u0275\u0275text"](1,"Taiga UI usage experience"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p",1),s["\u0275\u0275elementStart"](3,"tui-input-date",2),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.from=e})),s["\u0275\u0275text"](4," Start "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"p",1),s["\u0275\u0275elementStart"](6,"tui-input-date",3),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.to=e})),s["\u0275\u0275text"](7," Finish "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("min",t.min)("max",t.max)("ngModel",t.from),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("min",t.from||t.min)("items",t.items)("ngModel",t.to))},directives:[x.a,E.a,r.NgControlStatus,r.NgModel],encapsulation:2,changeDetection:0}),e})();var O=n("aPft"),P=n("vwaW");let L=(()=>{class e{constructor(){this.control=new r.FormControl(new p.cb(2017,0,15))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-4"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:p.A,useValue:"YMD"},{provide:p.B,useValue:"/"}])],decls:11,vars:1,consts:[[1,"tui-space_bottom-4","b-form"],[1,"b-form",3,"formControl"],["tuiTextfield","","autocomplete","bday"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-notification",0),s["\u0275\u0275text"](1," If you need to set some attributes or listen to events on native "),s["\u0275\u0275elementStart"](2,"code"),s["\u0275\u0275text"](3,"input"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](4," , you can put it inside with "),s["\u0275\u0275elementStart"](5,"code"),s["\u0275\u0275text"](6,"Textfield"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](7," directive as shown below\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-input-date",1),s["\u0275\u0275text"](9," Choose a date "),s["\u0275\u0275element"](10,"input",2),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("formControl",t.control))},directives:[O.a,x.a,E.a,r.NgControlStatus,r.FormControlDirective,P.a],encapsulation:2,changeDetection:0}),e})();class w{fromControlValue(e){return e&&p.cb.fromLocalNativeDate(e)}toControlValue(e){return e&&e.toLocalNativeDate()}}let G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=s["\u0275\u0275defineDirective"]({type:e,selectors:[["tui-input-date","toNativeDate",""]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:u.i,useClass:w}])]}),e})(),I=(()=>{class e{constructor(){this.nativeDateControl=new r.FormControl(new Date(2022,0,26)),this.defaultControl=new r.FormControl(new p.cb(2022,0,26))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-5"]],decls:24,vars:4,consts:[[1,"b-form",3,"formControl"],["toNativeDate","",1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h3"),s["\u0275\u0275text"](1,"Control's output as TuiDay (default)"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-input-date",0),s["\u0275\u0275text"](3," Choose a date\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"p"),s["\u0275\u0275text"](5,"Stringified control value:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"p"),s["\u0275\u0275elementStart"](7,"code"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"hr"),s["\u0275\u0275elementStart"](10,"h3"),s["\u0275\u0275text"](11,"Control's output as native Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"p"),s["\u0275\u0275text"](13," (see "),s["\u0275\u0275elementStart"](14,"code"),s["\u0275\u0275text"](15,"toNativeDate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](16," directive)\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"tui-input-date",1),s["\u0275\u0275text"](18," Choose a date\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"p"),s["\u0275\u0275text"](20,"Stringified control value:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"p"),s["\u0275\u0275elementStart"](22,"code"),s["\u0275\u0275text"](23),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("formControl",t.defaultControl),s["\u0275\u0275advance"](6),s["\u0275\u0275textInterpolate"](t.defaultControl.value),s["\u0275\u0275advance"](9),s["\u0275\u0275property"]("formControl",t.nativeDateControl),s["\u0275\u0275advance"](6),s["\u0275\u0275textInterpolate"](t.nativeDateControl.value))},directives:[x.a,E.a,r.NgControlStatus,r.FormControlDirective,G],encapsulation:2,changeDetection:0}),e})();var N,M,R,H,k,F=n("EPR0"),z=n("yHor"),K=n("zGJC"),U=n("FSyC"),j=n("CDxv"),W=n("pQcr"),Y=n("RlDx"),q=n("u8jZ");N=$localize`:␟fc2811ea354291326a11dd08fc35a97719f75c2d␟2917939038176412665:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputDate${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: – input with a calendar. `,M=$localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`,R=$localize`:␟ce9790eaf90c30d2b6ab0af894665e9a649da178␟5888187430077433259:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#9\ufffd"}:START_TAG_DD: active date format ( ${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: ). ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#13\ufffd"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.).${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:`,R=s["\u0275\u0275i18nPostprocess"](R),H=$localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`,k=$localize`:␟c3dbb47cc33bb0541b868b672596570b063d5377␟8174380454533362440:${"\ufffd#22\ufffd"}:START_TAG_DT:${"\ufffd#23\ufffd"}:START_TAG_CODE:TUI_DATE_VALUE_TRANSFORMER${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#22\ufffd"}:CLOSE_TAG_DT:${"\ufffd#24\ufffd"}:START_TAG_DD: custom format of control output ( ${"\ufffd#25\ufffd"}:START_LINK: TuiDay ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: is default). ${"\ufffd#26\ufffd"}:START_PARAGRAPH:${"\ufffd#27\ufffd"}:START_LINK_1: See example ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: with built-in ${"\ufffd#28\ufffd"}:START_LINK_2: Date ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: object as control's output. ${"\ufffd/#26\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd/#24\ufffd"}:CLOSE_TAG_DD:`,k=s["\u0275\u0275i18nPostprocess"](k);const B=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],Z=["heading",$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`],J=["heading",$localize`:␟eb73759f9121c31958ef3331f1a481a509877cb5␟6714747026286972804:With named dates`],X=["heading",$localize`:␟d72cd49783dcc040c08cd98ae2904eab57a0bb2e␟6669974721565177418:Date localization`],Q=["heading",$localize`:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`];function ee(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",2),s["\u0275\u0275i18nStart"](1,N),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"h3"),s["\u0275\u0275i18n"](4,M),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"dl"),s["\u0275\u0275i18nStart"](6,R),s["\u0275\u0275elementStart"](7,"dt"),s["\u0275\u0275element"](8,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"dd",3),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"dt"),s["\u0275\u0275element"](12,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](13,"dd"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"p",2),s["\u0275\u0275elementStart"](15,"a",4),s["\u0275\u0275text"](16," See example "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](17," with the usage of these tokens. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"h3"),s["\u0275\u0275i18n"](19,H),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"dl"),s["\u0275\u0275i18nStart"](21,k),s["\u0275\u0275elementStart"](22,"dt"),s["\u0275\u0275element"](23,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"dd"),s["\u0275\u0275element"](25,"a",5),s["\u0275\u0275elementStart"](26,"p"),s["\u0275\u0275element"](27,"a",6),s["\u0275\u0275element"](28,"a",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"tui-doc-example",8),s["\u0275\u0275i18nAttributes"](30,B),s["\u0275\u0275element"](31,"tui-input-date-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"tui-doc-example",9),s["\u0275\u0275i18nAttributes"](33,Z),s["\u0275\u0275element"](34,"tui-input-date-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](35,"tui-doc-example",10),s["\u0275\u0275i18nAttributes"](36,J),s["\u0275\u0275element"](37,"tui-input-date-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](38,"tui-doc-example",11),s["\u0275\u0275i18nAttributes"](39,X),s["\u0275\u0275element"](40,"tui-input-date-example-4"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](41,"tui-doc-example",12),s["\u0275\u0275i18nAttributes"](42,Q),s["\u0275\u0275element"](43,"tui-input-date-example-5"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](29),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example4),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example5)}}function te(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-date",21),s["\u0275\u0275text"](1," Choose a date "),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("min",e.min)("max",e.max)("markerHandler",e.markerHandler)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("disabledItemHandler",e.disabledItemHandler)("items",e.items)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}var ne,ae,oe,re,ie,le,de,me,ue;function ce(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,ne),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function se(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,ae),s["\u0275\u0275element"](1,"div"),s["\u0275\u0275element"](2,"strong"),s["\u0275\u0275i18nEnd"]())}function pe(e,t){1&e&&s["\u0275\u0275i18n"](0,oe)}function fe(e,t){1&e&&s["\u0275\u0275i18n"](0,re)}function Te(e,t){1&e&&s["\u0275\u0275i18n"](0,ie)}function be(e,t){1&e&&s["\u0275\u0275i18n"](0,le)}function Ce(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",13),s["\u0275\u0275template"](1,te,2,19,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,ce,2,0,"ng-template",14),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](4,se,3,0,"ng-template",15),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabledItemHandler=t})),s["\u0275\u0275template"](5,pe,1,0,"ng-template",16),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().items=t})),s["\u0275\u0275template"](6,fe,1,0,"ng-template",17),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().markerHandler=t})),s["\u0275\u0275template"](7,Te,1,0,"ng-template",18),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().min=t})),s["\u0275\u0275template"](8,be,1,0,"ng-template",19),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().max=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"inherited-documentation",20)}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("dropdown",!0)}}function Se(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,de),s["\u0275\u0275element"](2,"a",22),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275element"](5,"a",23),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ol",24),s["\u0275\u0275elementStart"](7,"li"),s["\u0275\u0275elementStart"](8,"p"),s["\u0275\u0275i18nStart"](9,me),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"tui-doc-code",25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"li"),s["\u0275\u0275elementStart"](13,"p"),s["\u0275\u0275i18nStart"](14,ue),s["\u0275\u0275element"](15,"code"),s["\u0275\u0275element"](16,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](17,"tui-doc-code",26),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"li"),s["\u0275\u0275text"](19," Use "),s["\u0275\u0275elementStart"](20,"code"),s["\u0275\u0275text"](21,"TuiInputDate"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](22," in template: "),s["\u0275\u0275element"](23,"tui-doc-code",27),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](11),s["\u0275\u0275property"]("code",e.exampleModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleForm),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleHtml)}}ne=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,ae=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,oe=$localize`:␟537796d614601f54059199b6f42a55fd283fa400␟6619372356871511006: A list of preset dates for dropdown `,re=$localize`:␟f8f45d3aaac30e82d76043430e84bc125f1317f4␟7803518593552218835: A handler that gets date and returns null or a tuple with circled marker colors `,ie=$localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `,le=$localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `,de=$localize`:␟af2c5ede5a63807f432bb19852bbd7cc99d416cc␟2065201384762296618: Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open ${"\ufffd#2\ufffd"}:START_LINK: mobile calendar ${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LINK: , add imports of ${"[\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: into your root module. Also, check that you did not forget about ${"\ufffd#5\ufffd"}:START_LINK_1: tui-root ${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LINK:`,de=s["\u0275\u0275i18nPostprocess"](de),me=$localize`:␟592c56416c0d2ae15744eba65a71a0c074426731␟6680887665039790545: Import an Angular module for forms and ${"\ufffd#10\ufffd"}:START_TAG_CODE:TuiInputDateModule${"\ufffd/#10\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,ue=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#15\ufffd|\ufffd#16\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#15\ufffd|\ufffd#16\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,ue=s["\u0275\u0275i18nPostprocess"](ue);const he=["primary","secondary"],ye=["success"];let xe=(()=>{class e extends f.a{constructor(){super(...arguments),this.exampleForm=n.e(497).then(n.bind(null,"6eUX")),this.exampleModule=n.e(498).then(n.bind(null,"zMg+")),this.exampleHtml=n.e(499).then(n.bind(null,"NM3P")),this.example1={TypeScript:n.e(487).then(n.bind(null,"S04A")),HTML:n.e(486).then(n.bind(null,"P8om"))},this.example2={TypeScript:n.e(489).then(n.bind(null,"OdOp")),HTML:n.e(488).then(n.bind(null,"RB5w"))},this.example3={TypeScript:n.e(491).then(n.bind(null,"940Z")),HTML:n.e(490).then(n.bind(null,"iy7a"))},this.example4={TypeScript:n.e(493).then(n.bind(null,"mcx+")),HTML:n.e(492).then(n.bind(null,"H08N"))},this.example5={TypeScript:n.e(495).then(n.bind(null,"j+bK")),HTML:n.e(494).then(n.bind(null,"wru/")),"native-date-transformer.directive.ts":n.e(496).then(n.bind(null,"+Wwt"))},this.minVariants=[p.H,new p.cb(2017,2,5),new p.cb(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[p.N,new p.cb(2017,11,11),new p.cb(2020,2,5),new p.cb(2300,0,1)],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[p.a,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new u.qb(p.N.append({year:-1}),"Until today")]],this.markerHandlerVariants=[m.q,e=>e.day%2==0?he:ye],this.markerHandler=this.markerHandlerVariants[0],this.items=this.itemsVariants[0],this.autocompleteVariants=["off","bday"],this.autocomplete="",this.cleaner=!1,this.control=new r.FormControl(null,r.Validators.required)}}return e.\u0275fac=function(t){return Ee(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-date"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:T.a,useExisting:Object(s.forwardRef)(()=>e)}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputDate","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],[1,"tui-space_bottom-5"],["tuiLink","","routerLink",".","fragment","date-localization"],["tuiLink","","target","_blank","href","https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day.ts"],["tuiLink","","routerLink",".","fragment","native-date-output"],["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"],["id","base",3,"content",6,"heading"],["id","sizes",3,"content",6,"heading"],["id","named",3,"content",6,"heading"],["id","date-localization",3,"content",6,"heading"],["id","native-date-output",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","TuiNamedDay[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","focusable","min","max","markerHandler","pseudoFocused","pseudoHovered","pseudoInvalid","readOnly","disabledItemHandler","items","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiHintContent","tuiHintDirection","tuiHintMode"],["tuiLink","","routerLink","/components/mobile-calendar"],["tuiLink","","routerLink","/getting-started"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,ee,44,5,"ng-template",1),s["\u0275\u0275template"](2,Ce,10,13,"ng-template",1),s["\u0275\u0275template"](3,Se,24,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[b.a,C.a,S.a,i.e,h.a,D,V,$,L,I,F.a,z.a,K.a,U.a,x.a,E.a,r.NgControlStatus,r.FormControlDirective,j.b,y.b,W.b,v.b,A.b,Y.a,q.a],encapsulation:2,changeDetection:0}),e})();const Ee=s["\u0275\u0275getInheritedFactory"](xe);let _e=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.j,c.a,r.ReactiveFormsModule,r.FormsModule,o.c,m.yb,u.zb,m.ab,u.V,d.f,u.Pb,m.Yb,m.tb,u.O,m.Gb,i.f.forChild(Object(l.q)(xe))]]}),e})()}}]);