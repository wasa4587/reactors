'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Core = require('../Core');

var _Core2 = _interopRequireDefault(_Core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactorsStorage = function () {
  function ReactorsStorage() {
    (0, _classCallCheck3.default)(this, ReactorsStorage);
  }

  (0, _createClass3.default)(ReactorsStorage, null, [{
    key: 'getPlatform',
    value: function getPlatform() {
      if (_Core2.default.isMobile()) {
        var ReactorsStorageMobile = require('./mobile').default;
        return ReactorsStorageMobile;
      }

      if (_Core2.default.isDOM()) {
        var ReactorsStorageDOM = require('./web').default;
        return ReactorsStorageDOM;
      }

      throw new Error('Unknown platform: ' + _Core2.default.platform);
    }
  }, {
    key: 'getItem',
    value: function getItem(itemTitle) {
      var Platform = this.getPlatform();
      return Platform.getItem(itemTitle);
    }
  }, {
    key: 'setItem',
    value: function setItem(itemTitle, item) {
      var Platform = this.getPlatform();
      return Platform.setItem(itemTitle, item);
    }
  }]);
  return ReactorsStorage;
}(); /**
       * @module reactors
       * 
     **/

exports.default = ReactorsStorage;