"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _I18nContext.default;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _I18nContext = _interopRequireDefault(require("./I18nContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var I18nProvider = function I18nProvider(_ref) {
  var i18n = _ref.i18n,
      children = _ref.children;
  return React.createElement(_I18nContext.default.Provider, {
    value: i18n
  }, children);
};

var _default = I18nProvider;
exports.default = _default;