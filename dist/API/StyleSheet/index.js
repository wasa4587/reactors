'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Declarations = require('./Declarations');

var _Declarations2 = _interopRequireDefault(_Declarations);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _Style = require('./Style');

var _Style2 = _interopRequireDefault(_Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleSheet = function () {
  (0, _createClass3.default)(StyleSheet, null, [{
    key: 'create',
    value: function create(styles) {
      return new this(styles);
    }
  }]);

  function StyleSheet(rules) {
    (0, _classCallCheck3.default)(this, StyleSheet);

    for (var selector in rules) {
      var _declarations = rules[selector];
      var declarations = (0, _isArray2.default)(_declarations) ? _declarations : [_declarations];

      Object.assign(this, (0, _defineProperty3.default)({}, selector, new _Declarations2.default(declarations).toObject()));
    }
  }

  return StyleSheet;
}();

StyleSheet.Style = _Style2.default;
exports.default = StyleSheet;