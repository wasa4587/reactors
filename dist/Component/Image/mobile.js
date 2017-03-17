'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactorsMobileImage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactorsMobileImage(props) {
  var mobileProps = _reactors2.default.props(props);

  if (typeof mobileProps.source === 'string') {
    mobileProps.source = { uri: mobileProps.source };
  }
  // $FlowFixMe This is by design
  return _react2.default.createElement(_reactNative.Image, mobileProps);
} /**
    * @module reactors
    * @name ScrollView
    * @type Component
    * 
  **/