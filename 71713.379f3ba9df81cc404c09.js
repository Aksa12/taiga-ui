"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[71713],{

/***/ 71713:
/***/ ((module) => {

module.exports = "<video\n    tuiMedia\n    controls\n    width=\"320\"\n    class=\"video\"\n    [(currentTime)]=\"currentTime\"\n    [(paused)]=\"paused\"\n    [(volume)]=\"volume\"\n>\n    <source\n        *tuiHighDpi\n        src=\"/assets/media/bbb_dpi.ogv\"\n        type=\"video/ogg\"\n    />\n    <source\n        src=\"/assets/media/bbb.mp4\"\n        type=\"video/mp4\"\n    />\n</video>\n<p>currentTime: {{ currentTime }}</p>\n<p>volume: {{ volume }}</p>\n<p>paused: {{ paused }}</p>\n";

/***/ })

}]);