"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals localStorage */

var ReactorsStorageDOM = function () {
  function ReactorsStorageDOM() {
    (0, _classCallCheck3.default)(this, ReactorsStorageDOM);
  }

  (0, _createClass3.default)(ReactorsStorageDOM, null, [{
    key: "getItem",
    value: function getItem(itemTitle) {
      return localStorage.getItem(itemTitle);
    }
  }, {
    key: "setItem",
    value: function setItem(itemTitle, item) {
      return localStorage.setItem(itemTitle, item);
    }
  }]);
  return ReactorsStorageDOM;
}();

exports.default = ReactorsStorageDOM;