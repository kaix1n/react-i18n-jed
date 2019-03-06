"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var mockSingular = function mockSingular(key) {
  return key;
};

var mockContextSingular = function mockContextSingular(context, key) {
  return key;
};

var mockPlural = function mockPlural(key, pluralKey, count) {
  if (count === 1) {
    return key;
  }

  return pluralKey;
};

var mockI18n = {
  lang: 'en-US',
  gettext: mockSingular,
  ngettext: mockPlural,
  pgettext: mockContextSingular,
  npgettext: function npgettext(context, key, pluralKey, count) {
    return mockPlural(key, pluralKey, count);
  }
};
var _default = mockI18n;
exports.default = _default;