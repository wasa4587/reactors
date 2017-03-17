'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Core = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Declarations = require('../StyleSheet/Declarations');

var _Declarations2 = _interopRequireDefault(_Declarations);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * 
**/

/* globals window */

function guessPlatform() {
  return 'web';
}

var Core = exports.Core = function () {
  function Core() {
    (0, _classCallCheck3.default)(this, Core);
    this.platform = guessPlatform();
  }

  (0, _createClass3.default)(Core, [{
    key: 'getOS',
    value: function getOS() {
      if (this.platform === 'mobile') {
        var RN = require('react-native');
        return RN.Platform;
      }
      return { OS: this.platform };
    }
  }, {
    key: 'isDOM',
    value: function isDOM() {
      return (0, _includes2.default)(['desktop', 'web'], this.platform);
    }
  }, {
    key: 'isMobile',
    value: function isMobile() {
      return this.platform === 'mobile';
    }
  }, {
    key: 'isDesktop',
    value: function isDesktop() {
      return this.platform === 'desktop';
    }
  }, {
    key: 'isWeb',
    value: function isWeb() {
      return this.platform === 'web';
    }
  }, {
    key: 'isAndroid',
    value: function isAndroid() {
      if (!this.isMobile()) {
        return false;
      }
      var RN = require('react-native');
      return RN.Platform.OS === 'android';
    }
  }, {
    key: 'isiOS',
    value: function isiOS() {
      if (!this.isMobile()) {
        return false;
      }
      var RN = require('react-native');
      return RN.Platform.OS === 'ios';
    }
  }, {
    key: 'mergeStyles',
    value: function mergeStyles() {
      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      if (this.isMobile()) {
        var _merged = [];

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = styles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var style = _step.value;

            if (Array.isArray(style)) {
              _merged.push.apply(_merged, (0, _toConsumableArray3.default)(style));
            } else if (style && (typeof style === 'undefined' ? 'undefined' : (0, _typeof3.default)(style)) === 'object') {
              // List style (from StyleSheet.create)
              if (style[0]) {
                _merged.push.apply(_merged, (0, _toConsumableArray3.default)(Array.from(style)));
              } else {
                _merged.push(style);
              }
            }
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

        return _merged;
      }

      var merged = {};

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = styles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _style = _step2.value;

          if (Array.isArray(_style)) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _style[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var item = _step3.value;

                merged = (0, _extends3.default)({}, merged, { item: item });
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          } else if (_style && (typeof _style === 'undefined' ? 'undefined' : (0, _typeof3.default)(_style)) === 'object') {
            // List style (from StyleSheet.create)
            if (_style[0]) {
              var arr = Array.from(_style);

              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = arr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var _item = _step4.value;

                  merged = (0, _extends3.default)({}, merged, { item: _item });
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            } else {
              merged = (0, _extends3.default)({}, merged, _style);
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return merged;
    }
  }, {
    key: 'props',
    value: function props(incomingProps) {
      var reactorsProps = (0, _extends3.default)({}, incomingProps);

      // accessibility
      if (reactorsProps.accessibilityLabel && this.platform !== 'mobile') {
        reactorsProps['aria-labelledby'] = reactorsProps.accessibilityLabel;
        delete reactorsProps.accessibilityLabel;
      }

      if (reactorsProps.accessibilityTraits && this.platform !== 'mobile') {
        reactorsProps.role = reactorsProps.accessibilityTraits;
        delete reactorsProps.accessibilityTraits;
      }

      if (reactorsProps.accessible && this.platform !== 'mobile') {
        delete reactorsProps.accessible;
      }

      // style
      if (reactorsProps.style) {
        reactorsProps.style = new _Declarations2.default(reactorsProps.style).toObject();
      }

      // gesture
      if (reactorsProps.onPress) {
        if (this.platform === 'mobile') {
          reactorsProps.onStartShouldSetResponder = reactorsProps.onPress;
        } else {
          reactorsProps.onClick = reactorsProps.onPress;
          delete reactorsProps.onPress;
        }
      }

      return reactorsProps;
    }
  }]);
  return Core;
}();

exports.default = new Core();