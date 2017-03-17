'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * @name Gesture
  * @type Class
  * 
**/

var Gesture = function () {
  function Gesture() {
    (0, _classCallCheck3.default)(this, Gesture);
  }

  (0, _createClass3.default)(Gesture, null, [{
    key: 'handlers',
    value: function handlers(props) {
      var clone_props = (0, _extends3.default)({}, props);
      switch (_reactors2.default.platform) {
        case 'mobile':
          return clone_props;
        default:
          {
            return this.webHandlers(props);
          }
      }
    }
  }, {
    key: 'webHandlers',
    value: function webHandlers(props) {
      var handlers = {};
      var click = [];
      var keyPress = [];
      if (props.onPress) {
        click.push(props.onPress);
      }
      if (props.onEnter) {
        keyPress.push(function (event) {
          if (event.charCode === 13) {
            props.onEnter(event);
          }
        });
      }
      if (click.length) {
        handlers.onClick = function (event) {
          click.forEach(function (fn) {
            return fn(event);
          });
        };
      }
      if (keyPress.length) {
        handlers.onKeyPress = function (event) {
          keyPress.forEach(function (fn) {
            return fn(event);
          });
        };
      }
      return (0, _extends3.default)({}, (0, _omit2.default)(props, this.gestures), handlers);
    }
  }]);
  return Gesture;
}();

Gesture.gestures = ['onEnter', 'onPress'];
exports.default = Gesture;