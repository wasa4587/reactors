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

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * 
**/

var ReactorsView = function (_Component) {
  (0, _inherits3.default)(ReactorsView, _Component);

  function ReactorsView() {
    (0, _classCallCheck3.default)(this, ReactorsView);
    return (0, _possibleConstructorReturn3.default)(this, (ReactorsView.__proto__ || Object.getPrototypeOf(ReactorsView)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactorsView, [{
    key: 'measure',
    value: function measure(cb) {
      switch (_reactors2.default.platform) {

        default:
          throw new Error('Unknown platform: ' + _reactors2.default.platform);

        case 'mobile':
          {
            return this.refs.__internalView.measure(cb);
          }

        case 'web':
        case 'desktop':
          {
            var ViewWeb = require('./web').default;
            return _react2.default.createElement(ViewWeb, (0, _extends3.default)({ ref: '__internalView' }, this.props));
          }

      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _reactors2.default.props(this.props);

      switch (_reactors2.default.platform) {

        default:
          throw new Error('Unknown platform: ' + _reactors2.default.platform);

        case 'mobile':
          {
            var ViewMobile = require('./mobile').default;
            return _react2.default.createElement(ViewMobile, (0, _extends3.default)({ ref: '__internalView' }, props));
          }

        case 'web':
        case 'desktop':
          {
            var ViewWeb = require('./web').default;
            return (
              /* $FlowFixMe This is by design */
              _react2.default.createElement(ViewWeb, (0, _extends3.default)({ ref: '__internalView' }, props))
            );
          }

      }
    }
  }]);
  return ReactorsView;
}(_react.Component);

exports.default = ReactorsView;