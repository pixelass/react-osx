"use strict";

var _react = require("react");

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _app = require("./app");

require("./style.css");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const appRoot = document.querySelector("[data-app-root]");
const {
  classList
} = document.documentElement;
classList.remove("no-js");
classList.add("js");
(0, _reactDom.hydrate)((0, _react.createElement)(_reactRouterDom.BrowserRouter, null, (0, _react.createElement)(_app.App)), appRoot);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(appRoot, "appRoot", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/index.ts");
  reactHotLoader.register(classList, "classList", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/index.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=index.js.map