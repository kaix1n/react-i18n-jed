"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Jed", {
  enumerable: true,
  get: function get() {
    return _jed.default;
  }
});
Object.defineProperty(exports, "sprintf", {
  enumerable: true,
  get: function get() {
    return _jed.sprintf;
  }
});
Object.defineProperty(exports, "I18nProvider", {
  enumerable: true,
  get: function get() {
    return _I18nProvider.default;
  }
});
Object.defineProperty(exports, "translate", {
  enumerable: true,
  get: function get() {
    return _translate.default;
  }
});

var _jed = _interopRequireWildcard(require("jed"));

var _I18nProvider = _interopRequireDefault(require("./I18nProvider"));

var _translate = _interopRequireDefault(require("./translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }