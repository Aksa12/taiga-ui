(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{Xhj3:function(n,t,e){"use strict";e.r(t),t.default='<form [formGroup]="form">\n    <tui-filter\n        formControlName="filters"\n        [content]="content"\n        [items]="items"\n    ></tui-filter>\n</form>\n<ng-template\n    #content\n    let-item\n>\n    {{item}}\n    <tui-svg\n        class="tui-space_left-2"\n        [src]="getItemIcon(item)"\n    ></tui-svg>\n</ng-template>\n<div>\n    <pre>Form value: {{form.value | json}}</pre>\n</div>\n'}}]);