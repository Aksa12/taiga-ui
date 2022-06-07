function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{Hgx5:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiRadioBlockModule",(function(){return U}));var o,r,i,a=n("2kYt"),l=n("nIj0"),u=n("sEIs"),m=n("SVIu"),d=n("Qq0t"),c=n("dvRg"),s=n("Piem"),p=n("EM62"),f=n("K/iL"),g=n("WupT"),y=n("OZlg"),x=n("e0eB"),b=n("iyc4"),v=n("9UtH"),h=((o=function e(){_classCallCheck(this,e),this.testForm=new l.FormGroup({testValue:new l.FormControl("orange")})}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=p["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-radio-block-example-1"]],decls:10,vars:1,consts:[[3,"formGroup"],[1,"tui-form__row"],["contentAlign","right","formControlName","testValue","item","qiwi","size","s"],["contentAlign","right","formControlName","testValue","item","orange","size","m"],["contentAlign","right","formControlName","testValue","item","apple","size","l"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"div",1),p["\u0275\u0275elementStart"](2,"tui-radio-block",2),p["\u0275\u0275text"](3," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"div",1),p["\u0275\u0275elementStart"](5,"tui-radio-block",3),p["\u0275\u0275text"](6," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"div",1),p["\u0275\u0275elementStart"](8,"tui-radio-block",4),p["\u0275\u0275text"](9," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.testForm)},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,v.a,l.NgControlStatus,l.FormControlName],encapsulation:2,changeDetection:0}),o),C=n("Kw97"),_=((r=function e(){_classCallCheck(this,e),this.testForm=new l.FormGroup({testValue:new l.FormControl("orange")})}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=p["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-radio-block-example-2"]],decls:20,vars:4,consts:[[1,"title"],[1,"group",3,"formGroup"],["tuiGroup","",1,"group",3,"collapsed"],["contentAlign","right","formControlName","testValue","item","orange","size","l"],["contentAlign","right","formControlName","testValue","item","apple","size","l"],["contentAlign","right","formControlName","testValue","item","pineapple","size","l"],[3,"formGroup"],["tuiGroup","","orientation","vertical",1,"group",3,"collapsed"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"h3",0),p["\u0275\u0275text"](1,"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"form",1),p["\u0275\u0275elementStart"](3,"div",2),p["\u0275\u0275elementStart"](4,"tui-radio-block",3),p["\u0275\u0275text"](5," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-radio-block",4),p["\u0275\u0275text"](7," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"tui-radio-block",5),p["\u0275\u0275text"](9," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"h3",0),p["\u0275\u0275text"](11,"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"form",6),p["\u0275\u0275elementStart"](13,"div",7),p["\u0275\u0275elementStart"](14,"tui-radio-block",3),p["\u0275\u0275text"](15," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"tui-radio-block",4),p["\u0275\u0275text"](17," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](18,"tui-radio-block",5),p["\u0275\u0275text"](19," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("collapsed",!0),p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("collapsed",!0))},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,C.a,v.a,l.NgControlStatus,l.FormControlName],styles:[".group[_ngcontent-%COMP%]{max-width:528px;margin-bottom:24px}.title[_ngcontent-%COMP%]{font-weight:700;line-height:28px;font-size:24px;font-family:var(--tui-heading-font);margin:0 0 16px}"],changeDetection:0}),r),k=n("cweO"),S=n("9gA3"),P=((i=function e(){_classCallCheck(this,e),this.testForm=new l.FormGroup({testValue:new l.FormControl("example1")})}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=p["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-radio-block-example-3"]],decls:25,vars:3,consts:[[1,"control",3,"formGroup"],[1,"tui-form__row"],["formControlName","testValue","item","example1","size","l"],[1,"content"],["text","\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","size","s",1,"tui-space_right-3",3,"rounded"],["formControlName","testValue","item","example2","size","l"],[1,"label"],["formControlName","testValue","item","example3","size","l"],[1,"inner"],[1,"text"],["formControlName","testValue","contentAlign","left","item","example4","nativeId","example4","size","l"],[1,"inner","inner_flex"],["describeId","example4","content","\u0424\u043e\u0440\u043c\u0430 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0441\u0435\u043c\u0435\u0439, \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439."]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"div",1),p["\u0275\u0275elementStart"](2,"tui-radio-block",2),p["\u0275\u0275elementStart"](3,"div",3),p["\u0275\u0275element"](4,"tui-avatar",4),p["\u0275\u0275text"](5," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"div",1),p["\u0275\u0275elementStart"](7,"tui-radio-block",5),p["\u0275\u0275elementStart"](8,"div",3),p["\u0275\u0275element"](9,"tui-avatar",4),p["\u0275\u0275elementStart"](10,"div"),p["\u0275\u0275elementStart"](11,"div",6),p["\u0275\u0275text"](12,"\u041b\u0435\u0439\u0431\u043b"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](13," \u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"div",1),p["\u0275\u0275elementStart"](15,"tui-radio-block",7),p["\u0275\u0275elementStart"](16,"div",8),p["\u0275\u0275text"](17," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),p["\u0275\u0275elementStart"](18,"div",9),p["\u0275\u0275text"](19," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque incidunt itaque iusto natus quaerat quia similique veniam? "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](20,"div",1),p["\u0275\u0275elementStart"](21,"tui-radio-block",10),p["\u0275\u0275elementStart"](22,"div",11),p["\u0275\u0275text"](23," \u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b "),p["\u0275\u0275element"](24,"tui-tooltip",12),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("rounded",!0),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("rounded",!0))},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,v.a,l.NgControlStatus,l.FormControlName,k.a,S.a],styles:['.control[_ngcontent-%COMP%]{max-width:272px}.content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.label[_ngcontent-%COMP%]{color:var(--tui-text-03)}.label[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{font-weight:"normal";font-size:13px;font-family:var(--tui-text-font);line-height:20px}.text[_ngcontent-%COMP%]{margin-top:4px;color:var(--tui-text-02)}.inner[_ngcontent-%COMP%]{margin:16px 0;white-space:normal}.inner_flex[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;width:500px}'],changeDetection:0}),i),w=n("EPR0"),V=n("yHor"),F=n("zGJC"),E=n("FSyC"),A=n("u8jZ");function z(e,t){if(1&e&&(p["\u0275\u0275text"](0," \u0412\u044b\u0431\u043e\u0440 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0432\u0430\u0440\u0438\u043d\u0442\u043e\u0432 \u0441 \u043f\u043e\u0434\u043f\u0438\u0441\u044f\u043c\u0438. \u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0445. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 "),p["\u0275\u0275elementStart"](1,"tui-doc-example",2),p["\u0275\u0275element"](2,"tui-radio-block-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",3),p["\u0275\u0275element"](4,"tui-radio-block-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",4),p["\u0275\u0275element"](6,"tui-radio-block-example-3"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("content",n.example1),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",n.example2),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",n.example3)}}function T(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",12),p["\u0275\u0275elementStart"](1,"tui-radio-block",13),p["\u0275\u0275text"](2," \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-radio-block",14),p["\u0275\u0275text"](4," \u042f\u0431\u043b\u043e\u043a\u0438 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-radio-block",15),p["\u0275\u0275text"](6," \u0410\u043d\u0430\u043d\u0430\u0441\u044b "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("collapsed",!0),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formControl",n.control)("contentAlign",n.contentAlign)("hideRadio",n.hideRadio)("pseudoInvalid",n.pseudoInvalid)("pseudoFocused",n.pseudoFocused)("pseudoHovered",n.pseudoHovered)("pseudoPressed",n.pseudoPressed)("pseudoDisabled",n.pseudoDisabled)("size",n.size)("focusable",n.focusable)("readOnly",n.readOnly),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("formControl",n.control)("contentAlign",n.contentAlign)("hideRadio",n.hideRadio)("pseudoInvalid",n.pseudoInvalid)("pseudoFocused",n.pseudoFocused)("pseudoHovered",n.pseudoHovered)("pseudoPressed",n.pseudoPressed)("pseudoDisabled",n.pseudoDisabled)("size",n.size)("focusable",n.focusable)("readOnly",n.readOnly),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("formControl",n.control)("contentAlign",n.contentAlign)("hideRadio",n.hideRadio)("pseudoInvalid",n.pseudoInvalid)("pseudoFocused",n.pseudoFocused)("pseudoHovered",n.pseudoHovered)("pseudoPressed",n.pseudoPressed)("pseudoDisabled",n.pseudoDisabled)("size",n.size)("focusable",n.focusable)("readOnly",n.readOnly)}}function N(e,t){1&e&&p["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u043e\u0440\u043c\u044b disabled (\u0447\u0435\u0440\u0435\u0437 formControl.disable()) ")}function M(e,t){1&e&&p["\u0275\u0275text"](0," \u041f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0434\u0438\u043e ")}function O(e,t){1&e&&p["\u0275\u0275text"](0," \u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0430\u0434\u0438\u043e-\u043a\u043d\u043e\u043f\u043a\u0443 ")}function R(e,t){1&e&&(p["\u0275\u0275text"](0," \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 (\u043d\u0443\u0436\u043d\u0430 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u043e \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0438 \u043d\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 "),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"items"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3,", \u043e\u0434\u043d\u0430\u043a\u043e \u0442\u0430\u043c \u0435\u0441\u0442\u044c \u0442\u043e\u0447\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u043e\u0436\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e \u043a\u0430\u043a\u043e\u043c\u0443-\u043d\u0438\u0431\u0443\u0434\u044c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044e. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 "),p["\u0275\u0275elementStart"](4,"code"),p["\u0275\u0275text"](5,"==="),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](6,". "),p["\u0275\u0275elementStart"](7,"strong"),p["\u0275\u0275text"](8,"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439"),p["\u0275\u0275elementEnd"]())}function G(e,t){1&e&&p["\u0275\u0275text"](0," Disabled\xa0\u2014 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u044b ")}function D(e,t){1&e&&p["\u0275\u0275text"](0," \u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0430 ")}function I(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo",5),p["\u0275\u0275template"](1,T,7,34,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,N,1,0,"ng-template",6),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().disabled=e})),p["\u0275\u0275template"](4,M,1,0,"ng-template",7),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().contentAlign=e})),p["\u0275\u0275template"](5,O,1,0,"ng-template",8),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().hideRadio=e})),p["\u0275\u0275template"](6,R,9,0,"ng-template",9),p["\u0275\u0275template"](7,G,1,0,"ng-template",10),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().pseudoDisabled=e})),p["\u0275\u0275template"](8,D,1,0,"ng-template",11),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().size=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"inherited-documentation")}if(2&e){var o=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",o.control),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValue",o.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",o.contentAlignVariants)("documentationPropertyValue",o.contentAlign),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",o.hideRadio),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("documentationPropertyValue",o.pseudoDisabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",o.sizeVariants)("documentationPropertyValue",o.size)}}function j(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",16),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0444\u043e\u0440\u043c\u0430\u043c\u0438 \u0438\u0437 Angular \u0438 \u043c\u043e\u0434\u0443\u043b\u044c "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"TuiRadioBlockModule"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),p["\u0275\u0275element"](6,"tui-doc-code",17),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275text"](8," \u041e\u0431\u044a\u044f\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443 ("),p["\u0275\u0275elementStart"](9,"code"),p["\u0275\u0275text"](10,"FormGroup"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](11,") \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b ("),p["\u0275\u0275elementStart"](12,"code"),p["\u0275\u0275text"](13,"FormControl"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](14,") \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435: "),p["\u0275\u0275element"](15,"tui-doc-code",18),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"li"),p["\u0275\u0275text"](17," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),p["\u0275\u0275element"](18,"tui-doc-code",19),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("code",n.exampleDeclareForm),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var H,q,L=((H=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.apply(this,arguments)).exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiRadioBlockModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiRadioBlockModule\n    ],\n...\n",e.exampleInsertTemplate='<div [formGroup]="testForm">\n    <tui-radio-block formControlName="testValue"\n                     item="orange">\n        \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n    </tui-radio-block>\n    <tui-radio-block formControlName="testValue"\n                     item="apple">\n        \u042f\u0431\u043b\u043e\u043a\u0438\n    </tui-radio-block>\n    <tui-radio-block formControlName="testValue"\n                     item="pineapple">\n        \u0410\u043d\u0430\u043d\u0430\u0441\u044b\n    </tui-radio-block>\n</div>\n',e.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    // 'orange' - \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043c\u043e\u0436\u043d\u043e \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c\n    testForm = new FormGroup({\n        testValue: new FormControl('orange')\n    });\n}\n",e.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-radio-block-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioBlockExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('orange'),\n    });\n}\n",HTML:'<form [formGroup]="testForm">\n    <div class="tui-form__row">\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="qiwi"\n            size="s"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="orange"\n            size="m"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="apple"\n            size="l"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n    </div>\n</form>\n'},e.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-radio-block-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioBlockExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('orange'),\n    });\n}\n",HTML:'<h3 class="title">\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430</h3>\n<form class="group" [formGroup]="testForm">\n    <div tuiGroup class="group" [collapsed]="true">\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="orange"\n            size="l"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="apple"\n            size="l"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="pineapple"\n            size="l"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n    </div>\n</form>\n<h3 class="title">\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430</h3>\n<form [formGroup]="testForm">\n    <div tuiGroup class="group" orientation="vertical" [collapsed]="true">\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="orange"\n            size="l"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="apple"\n            size="l"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n        <tui-radio-block\n            contentAlign="right"\n            formControlName="testValue"\n            item="pineapple"\n            size="l"\n        >\n            \u0410\u043f\u0435\u043b\u044c\u0441\u0438\u043d\u044b\n        </tui-radio-block>\n    </div>\n</form>\n'},e.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-radio-block-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioBlockExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('example1'),\n    });\n}\n",HTML:'<form class="control" [formGroup]="testForm">\n    <div class="tui-form__row">\n        <tui-radio-block formControlName="testValue" item="example1" size="l">\n            <div class="content">\n                <tui-avatar\n                    class="tui-space_right-3"\n                    text="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"\n                    size="s"\n                    [rounded]="true"\n                ></tui-avatar>\n                \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n            </div>\n        </tui-radio-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-radio-block formControlName="testValue" item="example2" size="l">\n            <div class="content">\n                <tui-avatar\n                    class="tui-space_right-3"\n                    text="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"\n                    size="s"\n                    [rounded]="true"\n                ></tui-avatar>\n                <div>\n                    <div class="label">\u041b\u0435\u0439\u0431\u043b</div>\n                    \u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\n                </div>\n            </div>\n        </tui-radio-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-radio-block formControlName="testValue" item="example3" size="l">\n            <div class="inner">\n                \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n                <div class="text">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                    Animi atque incidunt itaque iusto natus quaerat quia\n                    similique veniam?\n                </div>\n            </div>\n        </tui-radio-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-radio-block\n            formControlName="testValue"\n            contentAlign="left"\n            item="example4"\n            nativeId="example4"\n            size="l"\n        >\n            <div class="inner inner_flex">\n                \u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\n                <tui-tooltip\n                    describeId="example4"\n                    content="\u0424\u043e\u0440\u043c\u0430 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0441\u0435\u043c\u0435\u0439, \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439."\n                ></tui-tooltip>\n            </div>\n        </tui-radio-block>\n    </div>\n</form>\n',LESS:"@import 'taiga-ui-local';\n\n.control {\n    max-width: 272px;\n}\n\n.content {\n    display: flex;\n    align-items: center;\n}\n\n.label {\n    .text-body-s();\n    color: var(--tui-text-03);\n}\n\n.text {\n    .text-body-s();\n    margin-top: @space;\n    color: var(--tui-text-02);\n}\n\n.inner {\n    margin: 16px 0;\n    white-space: normal;\n\n    &_flex {\n        display: flex;\n        justify-content: space-between;\n        margin: 0;\n        width: 500px;\n    }\n}\n"},e.contentAlignVariants=["left","right"],e.contentAlign=e.contentAlignVariants[1],e.hideRadio=!1,e.sizeVariants=["s","m","l"],e.size=e.sizeVariants[2],e.pseudoDisabled=!1,e.control=new l.FormControl("orange"),e}return _createClass(n,[{key:"disabled",get:function(){return this.control.disabled},set:function(e){e?this.control.disable():this.control.enable()}}]),n}(g.a)).\u0275fac=function(e){return B(e||H)},H.\u0275cmp=p["\u0275\u0275defineComponent"]({type:H,selectors:[["example-tui-radio-block"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:f.a,useExisting:Object(p.forwardRef)((function(){return H}))}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","RadioBlock","package","KIT"],["pageTab",""],["id","sizes","heading","\u0440\u0430\u0437\u043c\u0435\u0440\u044b",3,"content"],["id","groups","heading","\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430",3,"content"],["id","custom","heading","\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0442\u043a\u0430",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","contentAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hideRadio","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher"],["documentationPropertyName","pseudoDisabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiGroup","",1,"group",3,"collapsed"],["item","orange",3,"formControl","contentAlign","hideRadio","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","pseudoDisabled","size","focusable","readOnly"],["item","apple",3,"formControl","contentAlign","hideRadio","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","pseudoDisabled","size","focusable","readOnly"],["item","pineapple",3,"formControl","contentAlign","hideRadio","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","pseudoDisabled","size","focusable","readOnly"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,z,7,3,"ng-template",1),p["\u0275\u0275template"](2,I,10,8,"ng-template",1),p["\u0275\u0275template"](3,j,19,3,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[y.a,x.a,b.a,h,_,P,w.a,V.a,F.a,E.a,C.a,v.a,l.NgControlStatus,l.FormControlDirective,A.a],encapsulation:2,changeDetection:0}),H),B=p["\u0275\u0275getInheritedFactory"](L),U=((q=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:q}),q.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||q)},imports:[[a.c,l.FormsModule,c.TuiRadioBlockModule,l.ReactiveFormsModule,c.TuiAvatarModule,c.TuiRadioListModule,d.TuiButtonModule,d.TuiGroupModule,d.TuiTooltipModule,s.a].concat(_toConsumableArray(m.e),[u.g.forChild(Object(m.n)(L))])]}),q)}}]);