(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{"1htj":function(t,n,i){"use strict";i.r(n),n.default='<p>In this sample, tags with digits are invalid</p>\n\n<tui-input-tag\n    class="b-form"\n    [formControl]="control"\n    [tuiTextfieldLabelOutside]="true"\n    [tagValidator]="tagValidator"\n    [(search)]="search"\n>\n    Try it\n    <ng-container *ngIf="filtered.length">\n        <tui-data-list *tuiDataList>\n            <button *ngFor="let item of filtered" tuiOption [value]="item">\n                {{item}}\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-input-tag>\n<tui-field-error [formControl]="control"></tui-field-error>\n'}}]);