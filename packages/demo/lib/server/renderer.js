"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverRenderer = exports.renderSSR = void 0;

var _head = require("@ngineer/head");

var _server = require("@ngineer/server");

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _styledComponents = require("styled-components");

var _template = require("./template");

var _app = require("../app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const renderSSR = async (request, response) => {
  const isServer = typeof response === "object" && typeof response.send === "function";
  const sheet = new _styledComponents.ServerStyleSheet();
  const app = (0, _server.toHTML)(_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, _react.default.createElement(_reactRouter.StaticRouter, {
    location: request.url,
    context: {}
  }, _react.default.createElement(_app.App, null))));
  const styles = sheet.getStyleTags();

  const head = _head.Head.renderStatic();

  const html = (0, _server.toHTML5)(_react.default.createElement(_template.Document, {
    head: head,
    styles: styles,
    app: app,
    isServer: isServer
  }));

  if (isServer) {
    return response.send(html);
  }

  return html;
};

exports.renderSSR = renderSSR;

const serverRenderer = () => renderSSR;

exports.serverRenderer = serverRenderer;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderSSR, "renderSSR", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/server/renderer.tsx");
  reactHotLoader.register(serverRenderer, "serverRenderer", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/server/renderer.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=renderer.js.map