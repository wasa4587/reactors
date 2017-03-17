'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactorsMobileText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowFixMe This is by design
function ReactorsMobileText(props) {
  var mobileProps = _reactors2.default.props(props);
  // $FlowFixMe This is by design
  return _react2.default.createElement(
    _reactNative.Text,
    mobileProps,
    props.children
  );
}
// $FlowFixMe This is by design
/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * 
**/