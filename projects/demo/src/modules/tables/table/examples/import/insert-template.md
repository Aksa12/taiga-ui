```html
<table
  tuiTable
  [columns]="columns"
>
  <thead tuiThead>
    <tr tuiThGroup>
      <th
        *tuiHead="'name'"
        tuiTh
      >
        Name
      </th>
      <th
        *tuiHead="'email'"
        tuiTh
      >
        E-mail
      </th>
      <th
        *tuiHead="'status'"
        tuiTh
      >
        Status
      </th>
      <th
        *tuiHead="'tags'"
        tuiTh
        [sorter]="null"
      >
        Tags
      </th>
    </tr>
  </thead>
  <tbody tuiTbody>
    <tr
      *ngFor="let item of users | tuiTableSort"
      tuiTr
    >
      <td
        *tuiCell="'name' of item; let value"
        tuiTd
      >
        {{value}}
      </td>
      <td
        *tuiCell="'email' of item; let value"
        tuiTd
      >
        <a
          *ngIf="value"
          tuiLink
          [href]="'mailto:' + value"
        >
          {{value}}
        </a>
      </td>
      <td
        *tuiCell="'status' of item; let value"
        tuiTd
      >
        <div [class]="value">{{value}}</div>
      </td>
      <td
        *tuiCell="'tags' of item; let tags"
        tuiTd
      >
        <tui-tag
          *ngFor="let tag of tags"
          class="tui-space_right-1"
          [value]="tag"
          [autoColor]="true"
        ></tui-tag>
      </td>
    </tr>
  </tbody>
</table>
```
