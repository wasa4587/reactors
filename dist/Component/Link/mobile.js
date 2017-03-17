'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = ReactorsMobileLink;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowFixMe This is by design
function ReactorsMobileLink(props) {
  var mobileProps = _reactors2.default.props(props);
  return (
    /* $FlowFixMe This is by design */
    _react2.default.createElement(
      _reactNative.TouchableHighlight,
      (0, _extends3.default)({
        onPress: function onPress() {
          return _reactNative.Linking.openURL(props.href);
        },
        underlayColor: 'rgba(255, 255, 255, 0)'
      }, mobileProps),
      _react2.default.createElement(
        _reactNative.View,
        null,
        props.children
      )
    )
  );
}
// $FlowFixMe This is by design
/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * 
**/