'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * 
**/

var ReactorsViewWeb = function (_Component) {
  (0, _inherits3.default)(ReactorsViewWeb, _Component);

  function ReactorsViewWeb() {
    (0, _classCallCheck3.default)(this, ReactorsViewWeb);
    return (0, _possibleConstructorReturn3.default)(this, (ReactorsViewWeb.__proto__ || Object.getPrototypeOf(ReactorsViewWeb)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactorsViewWeb, [{
    key: 'render',
    value: function render() {
      var webProps = (0, _omit2.default)(this.props, ['hitSlop', 'keyboardShouldPersistTaps', 'onAccessibilityTap', 'onLayout', 'onMagicTap', 'onMoveShouldSetResponder', 'onMoveShouldSetResponderCapture', 'onResponderGrant', 'onResponderMove', 'onResponderReject', 'onResponderRelease', 'onResponderTerminate', 'onResponderTerminationRequest', 'onStartShouldSetResponder', 'onStartShouldSetResponderCapture', 'pointerEvents', 'removeClippedSubviews', 'scrollable', 'testID']);
      return (
        /* $FlowFixMe This is by design */
        _react2.default.createElement(
          'section',
          webProps,
          this.props.children
        )
      );
    }
  }]);
  return ReactorsViewWeb;
}(_react.Component);

exports.default = ReactorsViewWeb;