(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{qjT4:function(e,t,n){"use strict";n.r(t),n.d(t,"SkeletonModule",(function(){return R}));var l=n("An66"),i=n("3kIJ"),o=n("1VvW"),a=n("SVIu"),s=n("Qq0t"),r=n("dvRg"),d=n("kZht"),m=n("OZlg"),u=n("e0eB"),c=n("iyc4"),_=n("zV1d"),h=n("TxeG"),k=n("HvLL"),p=n("/ASf"),g=n("yZWP");let S=(()=>{class e{constructor(){this.testForm=new i.FormGroup({testValue:new i.FormControl(!0)}),this.skeletonVisible=!1,this.lightMode=!1,this.placeholder="Some paragraph with information"}showSkeleton(){this.skeletonVisible=!this.skeletonVisible}toggleLight(){this.lightMode=!this.lightMode}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-skeleton-example-1"]],decls:43,vars:80,consts:[["tuiButton","","type","button","size","xs",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","xs",3,"click"],[1,"container",3,"tuiMode"],[1,"tui-row"],[1,"tui-col_md-4","tui-col_stretch"],["size","l",1,"island",3,"transparent"],[1,"tui-island__content"],[1,"tui-island__figure"],[3,"formGroup"],["size","l","formControlName","testValue"],[1,"island-content"],[1,"tui-island__category"],[1,"tui-island__title"],[1,"tui-island__paragraph"],[1,"tui-island__paragraph","tui-island__paragraph_link"],["href","https://github.com/tinkoff/taiga-ui","target","_blank","tuiLink",""],["size","l","href","https://ng-web-apis.github.io/dist/assets/images/web-api.svg","tuiIsland","","target","_blank",1,"island",3,"hoverable","transparent"],[1,"some-figure"],["size","l","textAlign","center",1,"island",3,"transparent"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275elementStart"](1,"button",0),d["\u0275\u0275listener"]("click",(function(){return t.showSkeleton()})),d["\u0275\u0275text"](2," Show/hide skeleton "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",1),d["\u0275\u0275listener"]("click",(function(){return t.toggleLight()})),d["\u0275\u0275text"](4," Light mode "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"div",2),d["\u0275\u0275elementStart"](6,"div",3),d["\u0275\u0275elementStart"](7,"div",4),d["\u0275\u0275elementStart"](8,"tui-island",5),d["\u0275\u0275elementStart"](9,"div",6),d["\u0275\u0275elementStart"](10,"div",7),d["\u0275\u0275elementStart"](11,"form",8),d["\u0275\u0275element"](12,"tui-toggle",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"div",10),d["\u0275\u0275elementStart"](14,"p",11),d["\u0275\u0275text"](15," A category "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"h3",12),d["\u0275\u0275text"](17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"p",13),d["\u0275\u0275text"](19),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"p",14),d["\u0275\u0275elementStart"](21,"a",15),d["\u0275\u0275text"](22," Link "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](23,"div",4),d["\u0275\u0275elementStart"](24,"a",16),d["\u0275\u0275elementStart"](25,"div",6),d["\u0275\u0275elementStart"](26,"figure",7),d["\u0275\u0275element"](27,"div",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"div",10),d["\u0275\u0275elementStart"](29,"h3",12),d["\u0275\u0275text"](30),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](31,"p",13),d["\u0275\u0275text"](32),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"div",4),d["\u0275\u0275elementStart"](34,"tui-island",18),d["\u0275\u0275elementStart"](35,"div",6),d["\u0275\u0275elementStart"](36,"figure",7),d["\u0275\u0275element"](37,"div",17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](38,"div",10),d["\u0275\u0275elementStart"](39,"h3",12),d["\u0275\u0275text"](40),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](41,"p",13),d["\u0275\u0275text"](42),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](5),d["\u0275\u0275classProp"]("container_dark",t.lightMode),d["\u0275\u0275property"]("tuiMode",t.lightMode?"onDark":null),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("transparent",!0),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](1),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](2),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](2),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton_short",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.skeletonVisible?"":"Title"," "),d["\u0275\u0275advance"](1),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.skeletonVisible?"":t.placeholder," "),d["\u0275\u0275advance"](1),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("hoverable",!0)("transparent",!0),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_rounded",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](2),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton_short",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.skeletonVisible?"":"Another title"," "),d["\u0275\u0275advance"](1),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.skeletonVisible?"":"And some new text again"," "),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("transparent",!0),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_rounded",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](2),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton_center",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.skeletonVisible?"":"One more title"," "),d["\u0275\u0275advance"](1),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.skeletonVisible?"":"All right, I get it"," "))},directives:[_.a,h.a,k.a,i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,p.a,i.NgControlStatus,i.FormControlName,g.a],styles:[".container[_ngcontent-%COMP%]{max-width:62.5rem;padding:1.5rem}.container_dark[_ngcontent-%COMP%]{background-image:linear-gradient(225deg,#3023ae,#c86dd7)}.container_dark[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.island[_ngcontent-%COMP%]{width:100%}.some-figure[_ngcontent-%COMP%]{border-radius:100%;width:3rem;height:3rem;background-color:var(--tui-secondary-active)}.island-content[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),e})();var b=n("l4xa"),E=n("GdrL"),f=n("71sB"),v=n("mXT+"),x=n("eQ7I"),T=n("YjIA"),V=n("xCPM"),C=n("i8NA"),M=n("D+uv");let A=(()=>{class e{constructor(){this.testForm=new i.FormGroup({nameValue:new i.FormControl("",i.Validators.required),passwordValue:new i.FormControl("",i.Validators.required),moneyValue:new i.FormControl("100",i.Validators.required),timeValue:new i.FormControl(new b.Zb(12,30),i.Validators.required),osnoValue:new i.FormControl(!1),usnValue:new i.FormControl(!1),eshnValue:new i.FormControl(!1),envdValue:new i.FormControl(!1)}),this.skeletonVisible=!1,this.lightMode=!1}showSkelet(){this.skeletonVisible=!this.skeletonVisible}toggleLight(){this.lightMode=!this.lightMode}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-skeleton-example-2"]],decls:39,vars:54,consts:[["tuiButton","","type","button","size","xs",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","xs",3,"click"],[1,"tui-container"],[3,"formGroup"],[1,"tui-row","tui-row_sme"],[1,"tui-col_8"],[1,"container",3,"tuiMode"],[1,"tui-form__header","tui-form__header_margin-top_none"],[1,"tui-form__row"],["tuiTextfieldExampleText","Name Surname","formControlName","nameValue","tuiHintContent","With a hint"],[1,"tui-form__row","tui-form__row_multi-fields"],[1,"tui-form__multi-field"],["formControlName","passwordValue"],["formControlName","moneyValue"],[1,"tui-form__row","tui-form__row_half-width"],["formControlName","timeValue"],[1,"tui-form__row","tui-form__row_checkboxes"],["formControlName","osnoValue","size","l",1,"tui-form__checkbox"],["formControlName","usnValue","size","l",1,"tui-form__checkbox"],["formControlName","eshnValue","size","l",1,"tui-form__checkbox"],["formControlName","envdValue","size","l",1,"tui-form__checkbox"],[1,"tui-form__buttons"],["tuiButton","","size","l","type","submit",1,"tui-form__button"],["tuiButton","","type","button","appearance","flat","size","l",1,"tui-form__button"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275elementStart"](1,"button",0),d["\u0275\u0275listener"]("click",(function(){return t.showSkelet()})),d["\u0275\u0275text"](2," Show/hide skeleton "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",1),d["\u0275\u0275listener"]("click",(function(){return t.toggleLight()})),d["\u0275\u0275text"](4," Light mode "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"div",2),d["\u0275\u0275elementStart"](6,"form",3),d["\u0275\u0275elementStart"](7,"div",4),d["\u0275\u0275elementStart"](8,"div",5),d["\u0275\u0275elementStart"](9,"div",6),d["\u0275\u0275elementStart"](10,"h3",7),d["\u0275\u0275text"](11," A header "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"div",8),d["\u0275\u0275elementStart"](13,"tui-input",9),d["\u0275\u0275text"](14," Some input "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"div",10),d["\u0275\u0275elementStart"](16,"div",11),d["\u0275\u0275elementStart"](17,"tui-input-password",12),d["\u0275\u0275text"](18," Some password input "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"div",11),d["\u0275\u0275elementStart"](20,"tui-input-number",13),d["\u0275\u0275text"](21," Some number input "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"div",14),d["\u0275\u0275elementStart"](23,"tui-input-time",15),d["\u0275\u0275text"](24," Some textfield "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](25,"div",16),d["\u0275\u0275elementStart"](26,"tui-checkbox-labeled",17),d["\u0275\u0275text"](27," First option "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"tui-checkbox-labeled",18),d["\u0275\u0275text"](29," Cool option "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](30,"tui-checkbox-labeled",19),d["\u0275\u0275text"](31," Boring option "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](32,"tui-checkbox-labeled",20),d["\u0275\u0275text"](33," Interesting option "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](34,"div",21),d["\u0275\u0275elementStart"](35,"button",22),d["\u0275\u0275text"](36," Submit "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](37,"button",23),d["\u0275\u0275text"](38," Cancel "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("container_dark",t.lightMode),d["\u0275\u0275property"]("tuiMode",t.lightMode?"onDark":null),d["\u0275\u0275advance"](1),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_short",t.skeletonVisible)("tui-skeleton_text",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](4),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](2),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](2),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](2),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_short",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](3),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode),d["\u0275\u0275advance"](2),d["\u0275\u0275classProp"]("tui-skeleton",t.skeletonVisible)("tui-skeleton_light",t.lightMode))},directives:[_.a,i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,h.a,E.a,f.a,i.NgControlStatus,i.FormControlName,v.a,x.a,T.a,V.a,C.a,M.a],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{padding:1.5rem}.container_dark[_ngcontent-%COMP%]{background-image:linear-gradient(225deg,#3023ae,#c86dd7);color:var(--tui-text-01-night)}"],changeDetection:0}),e})();const w=["header",$localize`:␟3d714c5dfb4cdcdf38f7b054714c763b71ed066f␟4656232853685757300:Skeleton`];var P,O,L;P=$localize`:␟8fc38383a8162dc72e287093df05aaee22dc92a1␟3092178411056451298:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH: Use ${"\ufffd#3\ufffd"}:START_TAG_STRONG:.tui-skeleton${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG: class on an element to add skeleton of the same size above it. ${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH:You can also use the following modifiers:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:`,P=d["\u0275\u0275i18nPostprocess"](P),O=$localize`:␟8703418486123b35f151e21eb69555aae5f8620b␟4554716163680077475:${"[\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd]"}:START_LIST_ITEM:${"[\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:.tui-skeleton_light${"[\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: : style for dark background ${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd]"}:START_LIST_ITEM:${"[\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:.tui-skeleton_rounded${"[\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: : rounded as an element ${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd]"}:START_LIST_ITEM:${"[\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:.tui-skeleton_short${"[\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: : short mode ${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd]"}:START_LIST_ITEM:${"[\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:.tui-skeleton_center${"[\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: : short centered mode ${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd]"}:START_LIST_ITEM:${"[\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#21\ufffd]"}:START_TAG_CODE:.tui-skeleton_text${"[\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_CODE: : for containers with texts ${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd]"}:CLOSE_LIST_ITEM:`,O=d["\u0275\u0275i18nPostprocess"](O),L=$localize`:␟11d3ad393079b6c9497d44e1ae084546e5a30ce4␟8622969203323972045:${"\ufffd#24\ufffd"}:START_TAG_STRONG:Classes${"\ufffd/#24\ufffd"}:CLOSE_TAG_STRONG: are included into global import ${"\ufffd#25\ufffd"}:START_TAG_CODE:@taiga-ui/core/styles/taiga-ui-global${"\ufffd/#25\ufffd"}:CLOSE_TAG_CODE: . You do not need to import anything, just use them `;const y=["heading",$localize`:␟1172ffb28e42ff5ae0d36af63448744a3af23d41␟1956073378030411818:Classes`],G=["heading",$localize`:␟7503a8046c7cb804d840f16206896e9075dcc0e0␟5391778508352850475:Mixins`];function $(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",2),d["\u0275\u0275i18nStart"](1,P),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275element"](3,"strong"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"p"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"ul",3),d["\u0275\u0275elementStart"](6,"li",4),d["\u0275\u0275elementStart"](7,"code"),d["\u0275\u0275text"](8,".tui-skeleton"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](9," : "),d["\u0275\u0275elementStart"](10,"ul",5),d["\u0275\u0275i18nStart"](11,O),d["\u0275\u0275elementStart"](12,"li",4),d["\u0275\u0275element"](13,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"li",4),d["\u0275\u0275element"](15,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"li",4),d["\u0275\u0275element"](17,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"li",4),d["\u0275\u0275element"](19,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"li",4),d["\u0275\u0275element"](21,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"div",6),d["\u0275\u0275i18nStart"](23,L),d["\u0275\u0275element"](24,"strong"),d["\u0275\u0275element"](25,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"tui-doc-example",7),d["\u0275\u0275i18nAttributes"](27,y),d["\u0275\u0275element"](28,"tui-skeleton-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](29,"tui-doc-example",8),d["\u0275\u0275i18nAttributes"](30,G),d["\u0275\u0275element"](31,"tui-skeleton-example-2"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](26),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2)}}let I=(()=>{class e{constructor(){this.example1={TypeScript:n.e(1638).then(n.bind(null,"Q7+h")),HTML:n.e(1636).then(n.bind(null,"GVLv")),LESS:n.e(1637).then(n.bind(null,"hYJw"))},this.example2={TypeScript:n.e(1641).then(n.bind(null,"/+xv")),HTML:n.e(1639).then(n.bind(null,"SSSJ")),LESS:n.e(1640).then(n.bind(null,"xGW4"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["skeleton"]],decls:3,vars:0,consts:[[6,"header"],["pageTab",""],[1,"tui-space_bottom-3"],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],[1,"tui-list","tui-list_linear","tui-list_nested","tui-list_extra-small"],[1,"tui-space_top-3","tui-space_bottom-3"],["id","classes",3,"content",6,"heading"],["id","mixins",3,"content",6,"heading"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,w),d["\u0275\u0275template"](2,$,32,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[m.a,u.a,c.a,S,A],encapsulation:2,changeDetection:0}),e})(),R=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.c,i.FormsModule,i.ReactiveFormsModule,s.Db,r.mb,r.H,s.ab,r.gb,r.cb,r.fb,r.nb,s.yb,r.Mb,a.j,o.f.forChild(Object(a.q)(I))]]}),e})()}}]);