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

var _reactNative = require('react-native');

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactorsViewMobile = function (_Component) {
  (0, _inherits3.default)(ReactorsViewMobile, _Component);

  function ReactorsViewMobile() {
    (0, _classCallCheck3.default)(this, ReactorsViewMobile);
    return (0, _possibleConstructorReturn3.default)(this, (ReactorsViewMobile.__proto__ || Object.getPrototypeOf(ReactorsViewMobile)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactorsViewMobile, [{
    key: 'measure',
    value: function measure(cb) {
      return this.refs.__internalView.measure(cb);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = (0, _omit2.default)(this.props.style);

      if (props.scrollable) {
        return _react2.default.createElement(
          _reactNative.ScrollView,
          (0, _extends3.default)({
            ref: '__internalView'
          }, props, {
            contentContainerStyle: this.props.style
          }),
          this.props.children
        );
      }

      return (
        /* $FlowFixMe - we don't have react */
        _react2.default.createElement(
          _reactNative.View,
          (0, _extends3.default)({
            ref: '__internalView'
          }, props, {
            style: this.props.style
          }),
          this.props.children
        )
      );
    }
  }]);
  return ReactorsViewMobile;
}(_react.Component); /**
                       * @module reactors
                       * 
                     **/

exports.default = ReactorsViewMobile;