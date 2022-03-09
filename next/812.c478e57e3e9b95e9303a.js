(window.webpackJsonp=window.webpackJsonp||[]).push([[812],{vxs0:function(t,n,e){"use strict";e.r(n),n.default='<p tuiTextfieldSize="m" class="filters">\n    <tui-input class="input" [tuiTextfieldCleaner]="true" [(ngModel)]="search">\n        Find on page\n    </tui-input>\n    <tui-input-count class="tui-space_horizontal-3" [formControl]="minAge">\n        Minimum age\n    </tui-input-count>\n    <tui-hosted-dropdown [content]="dropdown">\n        <button tuiButton size="m" [iconRight]="arrow">Columns</button>\n        <ng-template #dropdown>\n            <tui-reorder\n                class="columns"\n                [enabled]="enabled"\n                [(items)]="initial"\n                (enabledChange)="onEnabled($event)"\n            ></tui-reorder>\n        </ng-template>\n    </tui-hosted-dropdown>\n</p>\n<tui-loader [overlay]="true" [showLoader]="loading$ | async">\n    <table\n        *tuiLet="data$ | async as data"\n        tuiTable\n        class="table"\n        [columns]="columns"\n        [sorter]="sorter$ | async"\n        [direction]="direction$ | async"\n        (sorterChange)="sorter$.next($event)"\n        (directionChange)="direction$.next($event)"\n    >\n        <thead>\n            <tr tuiThGroup>\n                <th *tuiHead="\'name\'" tuiTh [sorter]="sorters.name">Name</th>\n                <th *tuiHead="\'dob\'" tuiTh [sorter]="sorters.dob">\n                    Date of Birth\n                </th>\n                <th *tuiHead="\'age\'" tuiTh [sorter]="sorters.age">Age</th>\n            </tr>\n        </thead>\n        <tbody tuiTbody [data]="data">\n            <tr *tuiRow="let item of data" tuiTr>\n                <td *tuiCell="\'name\'" tuiTd [class.match]="isMatch(item.name)">\n                    {{item.name}}\n                </td>\n                <td *tuiCell="\'dob\'" tuiTd [class.match]="isMatch(item.dob)">\n                    {{item.dob}}\n                </td>\n                <td\n                    *tuiCell="\'age\'"\n                    tuiTd\n                    [class.match]="isMatch(getAge(item))"\n                >\n                    {{getAge(item)}}\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td [colSpan]="columns.length">\n                    <tui-table-pagination\n                        class="tui-space_top-2"\n                        [total]="total$ | async"\n                        (pageChange)="onPage($event)"\n                        (sizeChange)="onSize($event)"\n                    ></tui-table-pagination>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n</tui-loader>\n'}}]);