(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{"4+DR":function(n,t,e){"use strict";e.r(t),t.default='<tui-input-slider\n    tuiHintContent="Select the answer to see how the right custom content changes"\n    class="control"\n    [min]="0"\n    [max]="10"\n    [tuiTextfieldCustomContent]="userAnswer === 4 ? right : wrong"\n    [(ngModel)]="userAnswer"\n>\n    2+2=?\n</tui-input-slider>\n\n<ng-template #right>\n    <tui-svg\n        src="tuiIconCheckCircleLarge"\n        class="success"\n    ></tui-svg>\n</ng-template>\n\n<ng-template #wrong>\n    <tui-svg\n        src="tuiIconCloseCircleLarge"\n        class="error"\n    ></tui-svg>\n</ng-template>\n'}}]);