"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[99213],{

/***/ 99213:
/***/ ((module) => {

module.exports = "```ts\nimport {clamp} from '@taiga-ui/cdk';\n\nexport class MyComponent {\n  scale = 1;\n\n  // ...\n\n  onElastic(scale: number) {\n    this.scale = clamp(scale, 0.5, 1); // We do not want to scale below 50%\n  }\n}\n```\n";

/***/ })

}]);