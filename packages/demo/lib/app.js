"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireDefault(require("react"));

var _root = require("react-hot-loader/root");

var _reactRouter = require("react-router");

var _routes = require("./routes");

var _pages = require("./pages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const AppContent = () => _react.default.createElement(_reactRouter.Switch, null, _routes.routes.map(({
  component,
  location
}) => _react.default.createElement(_reactRouter.Route, {
  key: location,
  exact: true,
  path: location,
  component: component
})), _react.default.createElement(_reactRouter.Route, {
  component: _pages.NotFound
}));

const App = (0, _root.hot)(AppContent);
exports.App = App;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppContent, "AppContent", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/app.tsx");
  reactHotLoader.register(App, "App", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/app.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=app.js.map