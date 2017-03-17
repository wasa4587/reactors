"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dimensions = function Dimensions(width, height) {
  (0, _classCallCheck3.default)(this, Dimensions);
  this.width = 0;
  this.height = 0;

  this.width = width;
  this.height = height;
};

exports.default = Dimensions;