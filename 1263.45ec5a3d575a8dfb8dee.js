(window.webpackJsonp=window.webpackJsonp||[]).push([[1263],{"+r/n":function(n,e,t){"use strict";t.r(e),e.default='<button\n    tuiButton\n    (click)="toggle()"\n>\n    Show/Hide\n</button>\n<img\n    src="assets/images/earth.jpg"\n    alt=""\n    class="preload"\n/>\n<ng-template\n    let-scroll$="scroll$"\n    [tuiSheetOptions]="options"\n    [(tuiSheet)]="open"\n>\n    <div class="wrapper">\n        <h2\n            tuiSheetHeading\n            class="heading"\n        >\n            Planet Earth\n        </h2>\n        <div class="earth">\n            <img\n                src="assets/images/earth.jpg"\n                alt=""\n                class="image"\n                [style.transform]="getTransform(scroll$ | async)"\n            />\n        </div>\n        <p>\n            Earth is the third planet from the Sun and the only astronomical\n            object known to harbour and support life. About 29.2% of Earth\'s\n            surface is land consisting of continents and islands. The remaining\n            70.8% is covered with water, mostly by oceans, seas, gulfs, and\n            other salt-water bodies, but also by lakes, rivers, and other\n            freshwater, which together constitute the hydrosphere. Much of\n            Earth\'s polar regions are covered in ice. Earth\'s outer layer is\n            divided into several rigid tectonic plates that migrate across the\n            surface over many millions of years, while its interior remains\n            active with a solid iron inner core, a liquid outer core that\n            generates Earth\'s magnetic field, and a convective mantle that\n            drives plate tectonics.\n        </p>\n    </div>\n</ng-template>\n'}}]);