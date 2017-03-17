'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = box;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function box(top, right, bottom, left) {
  var topIsANumber = typeof top === 'number';
  var topIsAnObject = (typeof top === 'undefined' ? 'undefined' : (0, _typeof3.default)(top)) === 'object';
  var rightIsANumber = typeof right === 'number';
  var bottomIsANumber = typeof bottom === 'number';
  var leftIsANumber = typeof left === 'number';

  if (topIsANumber && !rightIsANumber && !bottomIsANumber && !leftIsANumber) {
    return {
      top: top
    };
  }

  if (top && topIsAnObject) {
    return top;
  }

  return {};
}