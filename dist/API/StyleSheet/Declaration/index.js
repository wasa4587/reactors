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

var _clone = require('lodash/clone');

var _clone2 = _interopRequireDefault(_clone);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _properties = require('../properties');

var _properties2 = _interopRequireDefault(_properties);

var _Core = require('../../Core');

var _Core2 = _interopRequireDefault(_Core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Declaration = function () {
  function Declaration(property, value) {
    var platform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Core2.default.platform;
    (0, _classCallCheck3.default)(this, Declaration);

    this.platform = platform;
    this.property = property;
    this.value = value;
    this.style = _properties2.default[this.property];
  }

  (0, _createClass3.default)(Declaration, [{
    key: 'toObject',
    value: function toObject() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.style) {
        // if (this.platform === 'mobile') {
        //   return {};
        // }
        return (0, _defineProperty3.default)({}, this.property, this.value);
      }
      return this.format(styles);
    }
  }, {
    key: 'format',
    value: function format() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var value = (0, _clone2.default)(this.value);

      if (this.style) {
        if (this.style.value === Number) {
          value = parseInt(value, 10);
        }

        if ((0, _isFunction2.default)(this.style[this.platform])) {
          return this.style[this.platform](value, styles);
        }

        if ((0, _isArray2.default)(this.style[this.platform])) {
          if (!(0, _includes2.default)(this.style[this.platform], this.value)) {
            return {};
          }
        }
      }

      return (0, _defineProperty3.default)({}, this.property, this.value);
    }
  }]);
  return Declaration;
}();

exports.default = Declaration;