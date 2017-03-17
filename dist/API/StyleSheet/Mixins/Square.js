"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Square = function Square(size) {
  (0, _classCallCheck3.default)(this, Square);
  this.width = 0;
  this.height = 0;

  this.width = size;
  this.height = size;
};

exports.default = Square;