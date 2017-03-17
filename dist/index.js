'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Platform = exports.StyleSheet = exports.Storage = exports.Gesture = exports.Dimensions = exports.View = exports.Text = exports.ScrollView = exports.ListView = exports.Link = exports.Image = exports.default = undefined;

var _Image = require('./Component/Image');

Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Image).default;
  }
});

var _Link = require('./Component/Link');

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Link).default;
  }
});

var _ListView = require('./Component/ListView');

Object.defineProperty(exports, 'ListView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ListView).default;
  }
});

var _ScrollView = require('./Component/ScrollView');

Object.defineProperty(exports, 'ScrollView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollView).default;
  }
});

var _Text = require('./Component/Text');

Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Text).default;
  }
});

var _View = require('./Component/View');

Object.defineProperty(exports, 'View', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_View).default;
  }
});

var _Dimensions = require('./API/Dimensions');

Object.defineProperty(exports, 'Dimensions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dimensions).default;
  }
});

var _Gesture = require('./API/Gesture');

Object.defineProperty(exports, 'Gesture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Gesture).default;
  }
});

var _Storage = require('./API/Storage');

Object.defineProperty(exports, 'Storage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Storage).default;
  }
});

var _StyleSheet = require('./API/StyleSheet');

Object.defineProperty(exports, 'StyleSheet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StyleSheet).default;
  }
});

var _Core = require('./API/Core');

var _Core2 = _interopRequireDefault(_Core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Core2.default; /**
                                   ** @module reactors
                                   ** 
                                   **/

var Platform = { OS: _Core2.default.getOS() };

exports.Platform = Platform;