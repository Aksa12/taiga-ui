(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{S1s2:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleMathModule",(function(){return S}));var r=t("2kYt"),o=t("nIj0"),a=t("sEIs"),m=t("SVIu"),i=t("dvRg"),u=t("EM62"),l=t("OZlg"),p=t("e0eB"),s=t("iyc4"),c=t("l4xa"),d=t("YjIA");let f=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(1.005),precision:new o.FormControl(2)})}get rounded(){const{value:e,precision:n}=this.parametersForm.value;return Object(c.round)(e,n)}get floored(){const{value:e,precision:n}=this.parametersForm.value;return Object(c.floor)(e,n)}get ceiled(){const{value:e,precision:n}=this.parametersForm.value;return Object(c.ceil)(e,n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"precision"],["formControlName","precision",1,"tui-space_top-2"]],template:function(e,n){1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275text"](3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"p"),u["\u0275\u0275text"](5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"form",0),u["\u0275\u0275elementStart"](7,"div",1),u["\u0275\u0275elementStart"](8,"tui-input-number",2),u["\u0275\u0275text"](9," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"tui-input-number",3),u["\u0275\u0275text"](11," precision "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"]("",n.rounded," = round(value, precision);"),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"]("",n.floored," = floor(value, precision);"),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"]("",n.ceiled," = ceil(value, precision);"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",n.parametersForm),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("precision",3))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),x=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(13),fromInclude:new o.FormControl(5),toExclude:new o.FormControl(42)})}get ranged(){const{value:e,fromInclude:n,toExclude:t}=this.parametersForm.value;return Object(c.inRange)(e,n,t)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","fromInclude",1,"tui-space_top-2"],["formControlName","toExclude",1,"tui-space_top-2"]],template:function(e,n){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input-number",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input-number",3),u["\u0275\u0275text"](6," fromInclude "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-input-number",4),u["\u0275\u0275text"](8," toExclude "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("",n.ranged," = inRange(value, fromInclude, toExclude); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),v=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(0),min:new o.FormControl(5),max:new o.FormControl(42)})}get normalized(){const{value:e,min:n,max:t}=this.parametersForm.value;return Object(c.normalizeToIntNumber)(e,n,t)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-3"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,n){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input-number",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input-number",3),u["\u0275\u0275text"](6," min "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-input-number",4),u["\u0275\u0275text"](8," max "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("",n.normalized," = normalizeToIntNumber(value, min, max); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),g=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(3),quantum:new o.FormControl(2)})}get quantized(){const{value:e,quantum:n}=this.parametersForm.value;return Object(c.quantize)(e,n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-4"]],decls:7,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","quantum",1,"tui-space_top-2"]],template:function(e,n){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input-number",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input-number",3),u["\u0275\u0275text"](6," quantum "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("",n.quantized," = quantize(value, quantum); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})(),C=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(0),min:new o.FormControl(5),max:new o.FormControl(42)})}get clamped(){const{value:e,min:n,max:t}=this.parametersForm.value;return Object(c.clamp)(e,n,t)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,n){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input-number",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input-number",3),u["\u0275\u0275text"](6," min "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-input-number",4),u["\u0275\u0275text"](8," max "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("",n.clamped," = clamp(value, min, max); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",n.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();var h=t("u8jZ");function F(e,n){if(1&e&&(u["\u0275\u0275text"](0," \u041d\u0430\u0431\u043e\u0440 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432\u044b\u0445 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 "),u["\u0275\u0275elementStart"](1,"tui-doc-example",3),u["\u0275\u0275element"](2,"tui-math-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-doc-example",4),u["\u0275\u0275element"](4,"tui-math-example-2"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",5),u["\u0275\u0275element"](6,"tui-math-example-3"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-doc-example",6),u["\u0275\u0275element"](8,"tui-math-example-4"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"tui-doc-example",7),u["\u0275\u0275element"](10,"tui-math-example-5"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("content",e.example1),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example2),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example3),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example4),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example5)}}function b(e,n){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",8),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 "),u["\u0275\u0275element"](3,"tui-doc-code",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("code",e.importComponentExample)}}let w=(()=>{class e{constructor(){this.importComponentExample="import {clamp} from '@taiga-ui/cdk';\n\n...\n    clamped = clamp(value, min, max)\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {ceil, floor, round} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(1.005),\n        precision: new FormControl(2),\n    });\n\n    get rounded(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return round(value, precision);\n    }\n\n    get floored(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return floor(value, precision);\n    }\n\n    get ceiled(): number {\n        const {value, precision} = this.parametersForm.value;\n\n        return ceil(value, precision);\n    }\n}\n",HTML:'<p>{{ rounded }} = round(value, precision);</p>\n<p>{{ floored }} = floor(value, precision);</p>\n<p>{{ ceiled }} = ceil(value, precision);</p>\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number\n            formControlName="value"\n            class="tui-space_top-2"\n            [precision]="3"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="precision" class="tui-space_top-2">\n            precision\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {inRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample2 {\n    parametersForm = new FormGroup({\n        value: new FormControl(13),\n        fromInclude: new FormControl(5),\n        toExclude: new FormControl(42),\n    });\n\n    get ranged(): boolean {\n        const {value, fromInclude, toExclude} = this.parametersForm.value;\n\n        return inRange(value, fromInclude, toExclude);\n    }\n}\n",HTML:'{{ ranged }} = inRange(value, fromInclude, toExclude);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="fromInclude" class="tui-space_top-2">\n            fromInclude\n        </tui-input-number>\n        <tui-input-number formControlName="toExclude" class="tui-space_top-2">\n            toExclude\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {normalizeToIntNumber} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample3 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get normalized(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return normalizeToIntNumber(value, min, max);\n    }\n}\n",HTML:'{{ normalized }} = normalizeToIntNumber(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="min" class="tui-space_top-2">\n            min\n        </tui-input-number>\n        <tui-input-number formControlName="max" class="tui-space_top-2">\n            max\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {quantize} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl(3),\n        quantum: new FormControl(2),\n    });\n\n    get quantized(): number {\n        const {value, quantum} = this.parametersForm.value;\n\n        return quantize(value, quantum);\n    }\n}\n",HTML:'{{ quantized }} = quantize(value, quantum);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="quantum" class="tui-space_top-2">\n            quantum\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {clamp} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-math-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get clamped(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return clamp(value, min, max);\n    }\n}\n",HTML:'{{ clamped }} = clamp(value, min, max);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n        <tui-input-number formControlName="min" class="tui-space_top-2">\n            min\n        </tui-input-number>\n        <tui-input-number formControlName="max" class="tui-space_top-2">\n            max\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-math"]],decls:3,vars:0,consts:[["header","\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b","package","CDK"],["pageTab",""],["pageTab","\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"],["id","round","heading","round","description","\u041c\u0435\u0442\u043e\u0434\u044b \u0434\u043b\u044f \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u0435\u043b \u0434\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430.\n                                                  \u041e\u0431\u0445\u043e\u0434\u044f\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 Math.",3,"content"],["id","inRange","heading","inRange","description","\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430.\n                                                  \u0412\u044b\u0432\u0435\u0434\u0435\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0435\u0441\u043b\u0438 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u044b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\n                                                  \u0438\u043b\u0438 \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0431\u0443\u0434\u0435\u0442 NaN.",3,"content"],["id","normalizeToIntNumber","heading","normalizeToIntNumber","description","\u041f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a \u0446\u0435\u043b\u043e\u043c\u0443 \u0447\u0438\u0441\u043b\u0443 \u043e\u0442 min \u0434\u043e max \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e.\n                                                  \u0412\u044b\u0432\u0435\u0434\u0435\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043f\u0440\u0438 max < min, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0435\u0441\u043b\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435\n                                                  \u0438\u043b\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0434\u0430\u043d\u044b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e",3,"content"],["id","quantize","heading","quantize","description","\u0414\u0438\u0441\u043a\u0440\u0435\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0433\u043e \u0438\u0437 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e\n                                                  \u0440\u044f\u0434\u0430. \u0412\u044b\u0432\u0435\u0434\u0435\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0435\u0441\u043b\u0438 \u0448\u0430\u0433 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u0438\n                                                  \u043d\u0435\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0438\u043b\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f\n                                                  \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c",3,"content"],["id","clamp","heading","clamp","description","\u041e\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0435\u0433\u043e \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0430 \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0430.\n                                                  \u0412\u044b\u0432\u0435\u0434\u0435\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0435\u0441\u043b\u0438 \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\n                                                  \u0431\u0443\u0434\u0435\u0442 NaN \u0438\u043b\u0438 \u043f\u0440\u0438 max < min",3,"content"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,n){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,F,11,5,"ng-template",1),u["\u0275\u0275template"](2,b,4,1,"ng-template",2),u["\u0275\u0275elementEnd"]())},directives:[l.a,p.a,s.a,f,x,v,g,C,h.a],encapsulation:2,changeDetection:0}),e})(),S=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[r.c,i.TuiInputNumberModule,o.FormsModule,o.ReactiveFormsModule,...m.e,a.g.forChild(Object(m.n)(w))]]}),e})()}}]);