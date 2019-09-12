"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Document = void 0;

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Document = props => _react.default.createElement("html", {
  lang: props.lang,
  className: "no-js"
}, _react.default.createElement("head", null, props.head.title.toComponents(), _react.default.createElement("meta", {
  charSet: "utf-8"
}), _react.default.createElement("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), _react.default.createElement("link", {
  rel: "shortcut icon",
  href: "/assets/logo.ico"
}), props.head.meta.toComponents(), props.head.link.toComponents(), (0, _htmlReactParser.default)(props.styles)), _react.default.createElement("body", null, _react.default.createElement("div", {
  "data-app-root": ""
}, (0, _htmlReactParser.default)(props.app)), props.isServer && _react.default.createElement("script", {
  src: "/main.js"
})));

exports.Document = Document;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Document, "Document", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/server/template.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=template.js.map