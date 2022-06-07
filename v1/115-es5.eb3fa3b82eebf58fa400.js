function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"4qw5":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMediaModule",(function(){return j}));var r=n("2kYt"),i=n("nIj0"),a=n("sEIs"),o=n("SVIu"),u=n("l4xa"),l=n("Qq0t"),c=n("dvRg"),d=n("EM62"),s=n("OZlg"),m=n("e0eB"),p=n("iyc4"),g=n("EqIU"),y=n("iYz/");function v(e,t){1&e&&d["\u0275\u0275element"](0,"source",3)}var h,f,x,b=((h=function e(){_classCallCheck(this,e),this.currentTime=0,this.volume=1,this.paused=!0}).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=d["\u0275\u0275defineComponent"]({type:h,selectors:[["tui-media-example-1"]],decls:9,vars:6,consts:[["tuiMedia","","controls","","width","320",1,"video",3,"currentTime","paused","volume","currentTimeChange","pausedChange","volumeChange"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg",4,"tuiHighDpi"],["src","/assets/media/bbb.mp4","type","video/mp4"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"video",0),d["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("volumeChange",(function(e){return t.volume=e})),d["\u0275\u0275template"](1,v,1,0,"source",1),d["\u0275\u0275element"](2,"source",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"p"),d["\u0275\u0275text"](4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"p"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused)("volume",t.volume),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"]("currentTime: ",t.currentTime,""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("volume: ",t.volume,""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("paused: ",t.paused,""))},directives:[g.a,y.a],styles:["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{float:left;margin-right:24px}"],changeDetection:0}),h),T=n("TxeG"),C=n("zV1d"),S=n("VONa"),M=((f=function(){function e(){_classCallCheck(this,e),this.currentTime=0,this.paused=!0}return _createClass(e,[{key:"getTime",value:function(e){var t=Math.round(e||0),n=t%u.SECONDS_IN_MINUTE,r=(t-n)/u.SECONDS_IN_MINUTE,i=String(n),a=String(r);return"".concat(1===a.length?"0"+a:a,":").concat(1===i.length?"0"+i:i)}},{key:"toggleState",value:function(){this.paused=!this.paused}},{key:"icon",get:function(){return this.paused?"tuiIconPlay2Large":"tuiIconPause2Large"}}]),e}()).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=d["\u0275\u0275defineComponent"]({type:f,selectors:[["tui-media-example-2"]],decls:13,vars:9,consts:[[1,"player"],["tuiMedia","","width","320",1,"video",3,"currentTime","paused","currentTimeChange","pausedChange","click"],["video",""],["src","/assets/media/bbb.mp4","type","video/mp4"],["tuiMode","light",1,"controls"],["tuiIconButton","","type","button","title","\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435/\u041f\u0430\u0443\u0437\u0430","size","s","shape","rounded","appearance","flat",3,"icon","click"],[1,"slider",3,"max","ngModel","ngModelChange"],[1,"time"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"video",1,2),d["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("click",(function(){return t.toggleState()})),d["\u0275\u0275element"](3,"source",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"div",4),d["\u0275\u0275elementStart"](5,"button",5),d["\u0275\u0275listener"]("click",(function(){return t.toggleState()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-slider",6),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.currentTime=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"div",7),d["\u0275\u0275elementStart"](8,"time"),d["\u0275\u0275text"](9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](10," / "),d["\u0275\u0275elementStart"](11,"time"),d["\u0275\u0275text"](12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275reference"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("icon",t.icon),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("max",n.duration)("ngModel",t.currentTime),d["\u0275\u0275advance"](2),d["\u0275\u0275attribute"]("datetime",t.getTime(t.currentTime)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.getTime(t.currentTime)," "),d["\u0275\u0275advance"](2),d["\u0275\u0275attribute"]("datetime",t.getTime(n.duration)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",t.getTime(n.duration)," ")}},directives:[g.a,T.a,C.a,S.a,i.NgControlStatus,i.NgModel],styles:[".video[_ngcontent-%COMP%], [_nghost-%COMP%]{display:block}.player[_ngcontent-%COMP%]{position:relative;width:320px}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 12px 8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--tui-base-01);background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.56)));background:linear-gradient(180deg,transparent,rgba(0,0,0,.56))}.slider[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1}.slider[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]{margin-left:12px}.time[_ngcontent-%COMP%]{-ms-flex-negative:0;flex-shrink:0;font-size:13px}"],changeDetection:0}),f),k=n("yZWP"),E=((x=function(){function e(){_classCallCheck(this,e),this.currentTime=0,this.paused=!0}return _createClass(e,[{key:"toggleState",value:function(){this.paused=!this.paused}},{key:"icon",get:function(){return this.paused?"tuiIconPlay2Large":"tuiIconPause2Large"}}]),e}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=d["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-media-example-3"]],decls:9,vars:5,consts:[[1,"tui-player"],["tuiMedia","","src","assets/media/strays.mp3",3,"currentTime","paused","currentTimeChange","pausedChange"],["audio",""],["tuiIconButton","","type","button","shape","rounded","appearance","secondary","title","Play/Pause",3,"icon","click"],["tuiLink","","href","https://waterplea.bandcamp.com/"],[1,"slider",3,"max","ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"audio",1,2),d["\u0275\u0275listener"]("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",3),d["\u0275\u0275listener"]("click",(function(){return t.toggleState()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"div"),d["\u0275\u0275elementStart"](5,"a",4),d["\u0275\u0275text"](6,"Waterplea"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](7," \u2014 Strays "),d["\u0275\u0275elementStart"](8,"tui-slider",5),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.currentTime=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275reference"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("currentTime",t.currentTime)("paused",t.paused),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("icon",t.icon),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("max",n.duration)("ngModel",t.currentTime)}},directives:[g.a,C.a,k.a,S.a,i.NgControlStatus,i.NgModel],styles:[".tui-player{display:-webkit-box;display:-ms-flexbox;display:flex;width:320px;border-radius:100px;background:var(--tui-secondary);--tui-primary:var(--tui-link);--tui-primary-hover:var(--tui-link-hover);--tui-primary-active:var(--tui-link-hover)}.tui-player>div{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:6px 28px 0 6px}"],encapsulation:2,changeDetection:0}),x),P=n("yHor"),_=n("zGJC"),w=n("u8jZ");function I(e,t){if(1&e&&(d["\u0275\u0275text"](0," \u0414\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430 \u0434\u043b\u044f \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 HTML5 video \u0438 audio "),d["\u0275\u0275elementStart"](1,"tui-doc-example",2),d["\u0275\u0275element"](2,"tui-media-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275element"](4,"tui-media-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",4),d["\u0275\u0275element"](6,"tui-media-example-3"),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("content",n.example1),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",n.example2),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",n.example3)}}function V(e,t){1&e&&d["\u0275\u0275text"](0," \u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f ")}function N(e,t){1&e&&d["\u0275\u0275text"](0," \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f ")}function O(e,t){1&e&&d["\u0275\u0275text"](0," \u0413\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c ")}function L(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"audio",5),d["\u0275\u0275listener"]("currentTimeChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().currentTime=e}))("volumeChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().volume=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](1,"tui-doc-documentation"),d["\u0275\u0275template"](2,V,1,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().currentTime=e})),d["\u0275\u0275template"](3,N,1,0,"ng-template",7),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().paused=e})),d["\u0275\u0275template"](4,O,1,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().volume=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("currentTime",r.currentTime)("paused",r.paused)("volume",r.volume),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",r.currentTime),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",r.paused),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",r.volumeVariants)("documentationPropertyValue",r.volume)}}function D(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",9),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),d["\u0275\u0275elementStart"](3,"code"),d["\u0275\u0275text"](4,"TuiMediaModule"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](5," \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430: "),d["\u0275\u0275element"](6,"tui-doc-code",10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"li"),d["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),d["\u0275\u0275element"](9,"tui-doc-code",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("code",n.exampleImportModule),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var A,U,H=((U=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-media-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMediaExample1 {\n    currentTime = 0;\n    volume = 1;\n    paused = true;\n}\n",HTML:'<video\n    tuiMedia\n    controls\n    class="video"\n    width="320"\n    [(currentTime)]="currentTime"\n    [(paused)]="paused"\n    [(volume)]="volume"\n>\n    <source *tuiHighDpi src="/assets/media/bbb_dpi.ogv" type="video/ogg" />\n    <source src="/assets/media/bbb.mp4" type="video/mp4" />\n</video>\n<p>currentTime: {{currentTime}}</p>\n<p>volume: {{volume}}</p>\n<p>paused: {{paused}}</p>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {SECONDS_IN_MINUTE} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-media-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMediaExample2 {\n    currentTime = 0;\n    paused = true;\n\n    get icon(): string {\n        return this.paused ? 'tuiIconPlay2Large' : 'tuiIconPause2Large';\n    }\n\n    getTime(time: number): string {\n        const integer = Math.round(time || 0);\n        const seconds = integer % SECONDS_IN_MINUTE;\n        const minutes = (integer - seconds) / SECONDS_IN_MINUTE;\n        const secondsString = String(seconds);\n        const minutesString = String(minutes);\n        const paddedSeconds =\n            secondsString.length === 1 ? `0${secondsString}` : secondsString;\n        const paddedMinutes =\n            minutesString.length === 1 ? `0${minutesString}` : minutesString;\n\n        return `${paddedMinutes}:${paddedSeconds}`;\n    }\n\n    toggleState() {\n        this.paused = !this.paused;\n    }\n}\n",HTML:'<div class="player">\n    <video\n        #video\n        tuiMedia\n        width="320"\n        class="video"\n        [(currentTime)]="currentTime"\n        [(paused)]="paused"\n        (click)="toggleState()"\n    >\n        <source src="/assets/media/bbb.mp4" type="video/mp4" />\n    </video>\n    <div tuiMode="light" class="controls">\n        <button\n            tuiIconButton\n            type="button"\n            title="\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435/\u041f\u0430\u0443\u0437\u0430"\n            size="s"\n            shape="rounded"\n            appearance="flat"\n            [icon]="icon"\n            (click)="toggleState()"\n        ></button>\n        <tui-slider\n            class="slider"\n            [max]="video.duration"\n            [(ngModel)]="currentTime"\n        ></tui-slider>\n        <div class="time">\n            <time [attr.datetime]="getTime(currentTime)">\n                {{getTime(currentTime)}}\n            </time>\n            /\n            <time [attr.datetime]="getTime(video.duration)">\n                {{getTime(video.duration)}}\n            </time>\n        </div>\n    </div>\n</div>\n',LESS:":host {\n    display: block;\n}\n\n.video {\n    display: block;\n}\n\n.player {\n    position: relative;\n    width: 320px;\n}\n\n.controls {\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    padding: 12px 12px 8px;\n    box-sizing: border-box;\n    color: var(--tui-base-01);\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.56));\n}\n\n.slider {\n    flex: 1;\n    margin-left: 12px;\n}\n\n.time {\n    flex-shrink: 0;\n    margin-left: 12px;\n    font-size: 13px;\n}\n"},this.example3={TypeScript:"import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\n\n@Component({\n    selector: 'tui-media-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiMediaExample3 {\n    currentTime = 0;\n    paused = true;\n\n    get icon(): string {\n        return this.paused ? 'tuiIconPlay2Large' : 'tuiIconPause2Large';\n    }\n\n    toggleState() {\n        this.paused = !this.paused;\n    }\n}\n",HTML:'<div class="tui-player">\n    <audio\n        #audio\n        tuiMedia\n        src="assets/media/strays.mp3"\n        [(currentTime)]="currentTime"\n        [(paused)]="paused"\n    ></audio>\n    <button\n        tuiIconButton\n        type="button"\n        shape="rounded"\n        appearance="secondary"\n        title="Play/Pause"\n        [icon]="icon"\n        (click)="toggleState()"\n    ></button>\n    <div>\n        <a tuiLink href="https://waterplea.bandcamp.com/">Waterplea</a> \u2014 Strays\n        <tui-slider\n            class="slider"\n            [max]="audio.duration"\n            [(ngModel)]="currentTime"\n        ></tui-slider>\n    </div>\n</div>\n',LESS:".tui-player {\n    display: flex;\n    width: 320px;\n    border-radius: 100px;\n    background: var(--tui-secondary);\n\n    --tui-primary: var(--tui-link);\n    --tui-primary-hover: var(--tui-link-hover);\n    --tui-primary-active: var(--tui-link-hover);\n\n    & > div {\n        flex: 1;\n        margin: 6px 28px 0 6px;\n    }\n}\n"},this.exampleImportModule="import {TuiMediaModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMediaModule,\n    ],\n...\n",this.exampleInsertTemplate='<video tuiMedia controls>\n  <source *tuiHdpi src="4k.mp4" type="video/mp4">\n  <source src="1080p.mp4" type="video/mp4">\n</video>\n',this.volumeVariants=[1,.5,.25,0],this.currentTime=0,this.volume=this.volumeVariants[0],this.paused=!0}).\u0275fac=function(e){return new(e||U)},U.\u0275cmp=d["\u0275\u0275defineComponent"]({type:U,selectors:[["example-tui-media"]],decls:4,vars:0,consts:[["header","Media","package","CDK"],["pageTab",""],["id","native","heading","\u041d\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044b",3,"content"],["id","video","heading","\u0412\u0438\u0434\u0435\u043e\u043f\u043b\u0435\u0435\u0440",3,"content"],["id","audio","heading","\u0410\u0443\u0434\u0438\u043e\u043f\u043b\u0435\u0435\u0440",3,"content"],["tuiMedia","","controls","","src","assets/media/strays.mp3",3,"currentTime","paused","volume","currentTimeChange","volumeChange"],["documentationPropertyName","currentTime","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","paused","documentationPropertyType","boolean","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","volume","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,I,7,3,"ng-template",1),d["\u0275\u0275template"](2,L,5,7,"ng-template",1),d["\u0275\u0275template"](3,D,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[s.a,m.a,p.a,b,M,E,g.a,P.a,_.a,w.a],encapsulation:2,changeDetection:0}),U),j=((A=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:A}),A.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||A)},imports:[[r.c,i.FormsModule,u.TuiMediaModule,u.TuiHighDpiModule,l.TuiLinkModule,l.TuiButtonModule,c.TuiSliderModule,l.TuiModeModule].concat(_toConsumableArray(o.e),[a.g.forChild(Object(o.n)(H))])]}),A)}}]);