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

var Dimensions = function () {
  function Dimensions() {
    (0, _classCallCheck3.default)(this, Dimensions);
  }

  (0, _createClass3.default)(Dimensions, null, [{
    key: 'resize',
    value: function resize() {
      var _this = this;

      var throttle = function throttle(type, name) {
        var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

        var running = false;
        var listener = function listener() {
          if (!running) {
            running = true;
            requestAnimationFrame(function () {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
            });
          }
        };
        obj.addEventListener(type, listener);
      };

      throttle('resize', 'optimizedResize');

      window.addEventListener('optimizedResize', function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.__onResize[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var onResizeListener = _step.value;

            onResizeListener(window.innerWidth, window.innerHeight);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    }
  }, {
    key: 'get',
    value: function get() {
      if (_Core2.default.platform === 'mobile') {
        var ReactNative = require('react-native');
        var RN = ReactNative.default || ReactNative;
        var RNDimensions = RN.Dimensions;

        return RNDimensions.get('window');
      }
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  }, {
    key: 'onResize',
    value: function onResize(cb) {
      this.__onResize.push(cb);
    }
  }]);
  return Dimensions;
}(); /**
       * @module reactors
       * 
     **/

/* globals CustomEvent requestAnimationFrame window */


Dimensions.__onResize = [];
exports.default = Dimensions;


if (_Core2.default.platform !== 'mobile') {
  Dimensions.resize();
}