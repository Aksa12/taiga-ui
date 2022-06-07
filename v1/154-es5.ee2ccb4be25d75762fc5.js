function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{S1s2:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleMathModule",(function(){return k}));var r,o,a,m,i,l=t("2kYt"),u=t("nIj0"),p=t("sEIs"),c=t("SVIu"),s=t("dvRg"),d=t("EM62"),f=t("OZlg"),v=t("e0eB"),x=t("iyc4"),C=t("l4xa"),g=t("YjIA"),h=((i=function(){function e(){_classCallCheck(this,e),this.parametersForm=new u.FormGroup({value:new u.FormControl(1.005),precision:new u.FormControl(2)})}return _createClass(e,[{key:"rounded",get:function(){var e=this.parametersForm.value,n=e.value,t=e.precision;return Object(C.round)(n,t)}},{key:"floored",get:function(){var e=this.parametersForm.value,n=e.value,t=e.precision;return Object(C.floor)(n,t)}},{key:"ceiled",get:function(){var e=this.parametersForm.value,n=e.value,t=e.precision;return Object(C.ceil)(n,t)}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=d["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-math-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"precision"],["formControlName","precision",1,"tui-space_top-2"]],template:function(e,n){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"p"),d["\u0275\u0275text"](5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"form",0),d["\u0275\u0275elementStart"](7,"div",1),d["\u0275\u0275elementStart"](8,"tui-input-number",2),d["\u0275\u0275text"](9," value "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"tui-input-number",3),d["\u0275\u0275text"](11," precision "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("",n.rounded," = round(value, precision);"),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",n.floored," = floor(value, precision);"),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("",n.ceiled," = ceil(value, precision);"),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",n.parametersForm),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("precision",3))},directives:[u["\u0275angular_packages_forms_forms_y"],u.NgControlStatusGroup,u.FormGroupDirective,g.a,u.NgControlStatus,u.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),i),F=((m=function(){function e(){_classCallCheck(this,e),this.parametersForm=new u.FormGroup({value:new u.FormControl(13),fromInclude:new u.FormControl(5),toExclude:new u.FormControl(42)})}return _createClass(e,[{key:"ranged",get:function(){var e=this.parametersForm.value,n=e.value,t=e.fromInclude,r=e.toExclude;return Object(C.inRange)(n,t,r)}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=d["\u0275\u0275defineComponent"]({type:m,selectors:[["tui-math-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","fromInclude",1,"tui-space_top-2"],["formControlName","toExclude",1,"tui-space_top-2"]],template:function(e,n){1&e&&(d["\u0275\u0275text"](0),d["\u0275\u0275elementStart"](1,"form",0),d["\u0275\u0275elementStart"](2,"div",1),d["\u0275\u0275elementStart"](3,"tui-input-number",2),d["\u0275\u0275text"](4," value "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-input-number",3),d["\u0275\u0275text"](6," fromInclude "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-input-number",4),d["\u0275\u0275text"](8," toExclude "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275textInterpolate1"]("",n.ranged," = inRange(value, fromInclude, toExclude); "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[u["\u0275angular_packages_forms_forms_y"],u.NgControlStatusGroup,u.FormGroupDirective,g.a,u.NgControlStatus,u.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),m),b=((a=function(){function e(){_classCallCheck(this,e),this.parametersForm=new u.FormGroup({value:new u.FormControl(0),min:new u.FormControl(5),max:new u.FormControl(42)})}return _createClass(e,[{key:"normalized",get:function(){var e=this.parametersForm.value,n=e.value,t=e.min,r=e.max;return Object(C.normalizeToIntNumber)(n,t,r)}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=d["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-math-example-3"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,n){1&e&&(d["\u0275\u0275text"](0),d["\u0275\u0275elementStart"](1,"form",0),d["\u0275\u0275elementStart"](2,"div",1),d["\u0275\u0275elementStart"](3,"tui-input-number",2),d["\u0275\u0275text"](4," value "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-input-number",3),d["\u0275\u0275text"](6," min "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-input-number",4),d["\u0275\u0275text"](8," max "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275textInterpolate1"]("",n.normalized," = normalizeToIntNumber(value, min, max); "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[u["\u0275angular_packages_forms_forms_y"],u.NgControlStatusGroup,u.FormGroupDirective,g.a,u.NgControlStatus,u.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),a),y=((o=function(){function e(){_classCallCheck(this,e),this.parametersForm=new u.FormGroup({value:new u.FormControl(3),quantum:new u.FormControl(2)})}return _createClass(e,[{key:"quantized",get:function(){var e=this.parametersForm.value,n=e.value,t=e.quantum;return Object(C.quantize)(n,t)}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=d["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-math-example-4"]],decls:7,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","quantum",1,"tui-space_top-2"]],template:function(e,n){1&e&&(d["\u0275\u0275text"](0),d["\u0275\u0275elementStart"](1,"form",0),d["\u0275\u0275elementStart"](2,"div",1),d["\u0275\u0275elementStart"](3,"tui-input-number",2),d["\u0275\u0275text"](4," value "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-input-number",3),d["\u0275\u0275text"](6," quantum "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275textInterpolate1"]("",n.quantized," = quantize(value, quantum); "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[u["\u0275angular_packages_forms_forms_y"],u.NgControlStatusGroup,u.FormGroupDirective,g.a,u.NgControlStatus,u.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),o),_=((r=function(){function e(){_classCallCheck(this,e),this.parametersForm=new u.FormGroup({value:new u.FormControl(0),min:new u.FormControl(5),max:new u.FormControl(42)})}return _createClass(e,[{key:"clamped",get:function(){var e=this.parametersForm.value,n=e.value,t=e.min,r=e.max;return Object(C.clamp)(n,t,r)}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=d["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-math-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,n){1&e&&(d["\u0275\u0275text"](0),d["\u0275\u0275elementStart"](1,"form",0),d["\u0275\u0275elementStart"](2,"div",1),d["\u0275\u0275elementStart"](3,"tui-input-number",2),d["\u0275\u0275text"](4," value "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-input-number",3),d["\u0275\u0275text"](6," min "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-input-number",4),d["\u0275\u0275text"](8," max "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275textInterpolate1"]("",n.clamped," = clamp(value, min, max); "),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[u["\u0275angular_packages_forms_forms_y"],u.NgControlStatusGroup,u.FormGroupDirective,g.a,u.NgControlStatus,u.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),r),w=t("u8jZ");function S(e,n){if(1&e&&(d["\u0275\u0275text"](0," \u041d\u0430\u0431\u043e\u0440 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432\u044b\u0445 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 "),d["\u0275\u0275elementStart"](1,"tui-doc-example",3),d["\u0275\u0275element"](2,"tui-math-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",4),d["\u0275\u0275element"](4,"tui-math-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",5),d["\u0275\u0275element"](6,"tui-math-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-doc-example",6),d["\u0275\u0275element"](8,"tui-math-example-4"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"tui-doc-example",7),d["\u0275\u0275element"](10,"tui-math-example-5"),d["\u0275\u0275elementEnd"]()),2&e){var t=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("content",t.example1),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",t.example2),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",t.example3),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",t.example4),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",t.example5)}}function E(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",8),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 "),d["\u0275\u0275element"](3,"tui-doc-code",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var t=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("code",t.importComponentExample)}}var N,G,I=((G=function e(){_classCallCheck(this,e),this.importComponentExample="import {clamp} from '@taiga-ui/cdk';\n\n...\n    clamped = clamp(value, min, max)\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {ceil, floor, round} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(1.005),\n        precision: new FormControl(2),\n    });\n\n    get rounded(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return round(value, precision);\n    }\n\n    get floored(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return floor(value, precision);\n    }\n\n    get ceiled(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return ceil(value, precision);\n    }\n}\n",HTML:'<p>{{ rounded }} = round(value, precision);</p>\n<p>{{ floored }} = floor(value, precision);</p>\n<p>{{ ceiled }} = ceil(value, precision);</p>\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number\n            formControlName="value"\n            class="tui-space_top-2"\n            [precision]="3"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="precision" class="tui-space_top-2">\n            precision\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {inRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample2 {\n    parametersForm = new FormGroup({\n        value: new FormControl(13),\n        fromInclude: new FormControl(5),\n        toExclude: new FormControl(42),\n    });\n\n    get ranged(): boolean {\n        const {value, fromInclude, toExclude} = this.parametersForm.value;\n\n        return inRange(value, fromInclude, toExclude);\n    }\n}\n",HTML:'{{ ranged }} = inRange(value, fromInclude, toExclude);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="fromInclude" class="tui-space_top-2">\n            fromInclude\n        </tui-input-number>\n        <tui-input-number formControlName="toExclude" class="tui-space_top-2">\n            toExclude\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {normalizeToIntNumber} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample3 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get normalized(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return normalizeToIntNumber(value, min, max);\n    }\n}\n",HTML:'{{ normalized }} = normalizeToIntNumber(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="min" class="tui-space_top-2">\n            min\n        </tui-input-number>\n        <tui-input-number formControlName="max" class="tui-space_top-2">\n            max\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {quantize} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl(3),\n        quantum: new FormControl(2),\n    });\n\n    get quantized(): number {\n        const {value, quantum} = this.parametersForm.value;\n\n        return quantize(value, quantum);\n    }\n}\n",HTML:'{{ quantized }} = quantize(value, quantum);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="quantum" class="tui-space_top-2">\n            quantum\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {clamp} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get clamped(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return clamp(value, min, max);\n    }\n}\n",HTML:'{{ clamped }} = clamp(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="min" class="tui-space_top-2">\n            min\n        </tui-input-number>\n        <tui-input-number formControlName="max" class="tui-space_top-2">\n            max\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"}}).\u0275fac=function(e){return new(e||G)},G.\u0275cmp=d["\u0275\u0275defineComponent"]({type:G,selectors:[["example-math"]],decls:3,vars:0,consts:[["header","\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b","package","CDK"],["pageTab",""],["pageTab","\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"],["id","round","heading","round","description","\u041c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u0435\u043b \u0434\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430.\n                                                  \u041e\u0431\u0445\u043e\u0434\u044f\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 Math.",3,"content"],["id","inRange","heading","inRange","description","\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430.\n                                                  \u0412\u044b\u0432\u0435\u0434\u0435\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0435\u0441\u043b\u0438 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u044b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\n                                                  \u0438\u043b\u0438 \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0431\u0443\u0434\u0435\u0442 NaN.",3,"content"],["id","normalizeToIntNumber","heading","normalizeToIntNumber","description","\u041f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a \u0446\u0435\u043b\u043e\u043c\u0443 \u0447\u0438\u0441\u043b\u0443 \u043e\u0442 min \u0434\u043e max \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e.\n                                                  \u0412\u044b\u0432\u0435\u0434\u0435\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043f\u0440\u0438 max < min, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0435\u0441\u043b\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435\n                                                  \u0438\u043b\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0434\u0430\u043d\u044b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e",3,"content"],["id","quantize","heading","quantize","description","\u0414\u0438\u0441\u043a\u0440\u0435\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0433\u043e \u0438\u0437 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e\n                                                  \u0440\u044f\u0434\u0430. \u0412\u044b\u0432\u0435\u0434\u0435\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0435\u0441\u043b\u0438 \u0448\u0430\u0433 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u0438\n                                                  \u043d\u0435\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0438\u043b\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f\n                                                  \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c",3,"content"],["id","clamp","heading","clamp","description","\u041e\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0435\u0433\u043e \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430 \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0430.\n                                                  \u0412\u044b\u0432\u0435\u0434\u0435\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0435\u0441\u043b\u0438 \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\n                                                  \u0431\u0443\u0434\u0435\u0442 NaN \u0438\u043b\u0438 \u043f\u0440\u0438 max < min",3,"content"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,n){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,S,11,5,"ng-template",1),d["\u0275\u0275template"](2,E,4,1,"ng-template",2),d["\u0275\u0275elementEnd"]())},directives:[f.a,v.a,x.a,h,F,b,y,_,w.a],encapsulation:2,changeDetection:0}),G),k=((N=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[l.c,s.TuiInputNumberModule,u.FormsModule,u.ReactiveFormsModule].concat(_toConsumableArray(c.e),[p.g.forChild(Object(c.n)(I))])]}),N)}}]);