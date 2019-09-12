"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;

var _button = require("@react-osx/button");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const theme = {
  button: _button.theme.dark
};

class Home extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  componentDidMount() {
    fetch("/api/user").then(res => res.json()).then(data => this.setState(data));
  }

  render() {
    return _react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react.default.createElement("div", {
      style: {
        background: "hsl(120, 1%, 19%)",
        color: "white",
        padding: 100
      }
    }, _react.default.createElement("h2", null, "Buttons"), _react.default.createElement("h3", null, "Small"), _react.default.createElement(_button.ButtonGroup, null, _react.default.createElement(_button.Button, {
      isSelected: true
    }, "Selected"), _react.default.createElement(_button.Button, {
      isActive: true
    }, "Active"), _react.default.createElement(_button.Button, null, "Default")), _react.default.createElement("h3", null, "Medium"), _react.default.createElement(_button.ButtonGroup, null, _react.default.createElement(_button.Button, {
      variation: "medium",
      isSelected: true
    }, "Selected"), _react.default.createElement(_button.Button, {
      variation: "medium",
      isActive: true
    }, "Active"), _react.default.createElement(_button.Button, {
      variation: "medium"
    }, "Default")), _react.default.createElement("h3", null, "Large"), _react.default.createElement(_button.ButtonGroup, null, _react.default.createElement(_button.Button, {
      variation: "large",
      isSelected: true
    }, "Selected"), _react.default.createElement(_button.Button, {
      variation: "large",
      isActive: true
    }, "Active"), _react.default.createElement(_button.Button, {
      variation: "large"
    }, "Default")), _react.default.createElement("h3", null, "Huge"), _react.default.createElement("div", {
      style: {
        width: 300
      }
    }, _react.default.createElement(_button.Button, {
      variation: "huge",
      isSelected: true,
      fullWidth: true
    }, "Selected"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_button.Button, {
      variation: "huge",
      isActive: true,
      fullWidth: true
    }, "Active"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_button.Button, {
      variation: "huge",
      fullWidth: true
    }, "Default")), _react.default.createElement("h3", null, "Grouped"), _react.default.createElement(_button.GroupButton, null, _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome",
      isActive: true
    }, "A"), _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome",
      isActive: true
    }, "B"), _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome",
      isActive: true
    }, "C"), _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome"
    }, "D"), _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome"
    }, "E")), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_button.GroupButton, null, _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome",
      isSelected: true
    }, "Overview"), _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome"
    }, "Display"), _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome"
    }, "Storage"), _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome"
    }, "Support"), _react.default.createElement(_button.Button, {
      variation: "medium",
      kind: "monochrome"
    }, "Service"))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

exports.Home = Home;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(theme, "theme", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/pages/home.tsx");
  reactHotLoader.register(Home, "Home", "/Users/greada/Workspace/dekk/react-osx/packages/demo/src/pages/home.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=home.js.map