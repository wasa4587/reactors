'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _box = require('../helpers/box');

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Absolute = function Absolute(top, right, bottom, left) {
  (0, _classCallCheck3.default)(this, Absolute);
  this.bottom = 0;
  this.left = 0;
  this.position = 'absolute';
  this.right = 0;
  this.top = 0;

  var dimensions = (0, _box2.default)(top, right, bottom, left);

  if ('top' in dimensions) {
    this.top = dimensions.top;
  }

  if ('right' in dimensions) {
    this.right = dimensions.right;
  }

  if ('bottom' in dimensions) {
    this.bottom = dimensions.bottom;
  }

  if ('left' in dimensions) {
    this.left = dimensions.left;
  }
};

exports.default = Absolute;