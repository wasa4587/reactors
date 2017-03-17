'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactorsWebText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * 
**/

function ReactorsWebText(props) {
  var webProps = _reactors2.default.props(props);
  // $FlowFixMe This is by design
  return _react2.default.createElement(
    'div',
    webProps,
    props.children
  );
}
// $FlowFixMe This is by design