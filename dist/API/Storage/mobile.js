'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactorsStorageMobile = function () {
  function ReactorsStorageMobile() {
    (0, _classCallCheck3.default)(this, ReactorsStorageMobile);
  }

  (0, _createClass3.default)(ReactorsStorageMobile, null, [{
    key: 'getItem',
    value: function getItem(itemTitle) {
      return _reactNative.AsyncStorage.getItem(itemTitle);
    }
  }, {
    key: 'setItem',
    value: function setItem(itemTitle, item) {
      return _reactNative.AsyncStorage.setItem(itemTitle, item);
    }
  }]);
  return ReactorsStorageMobile;
}();

exports.default = ReactorsStorageMobile;