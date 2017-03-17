'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactorsWebLink;

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

function ReactorsWebLink(props) {
  var webProps = _reactors2.default.props(props);
  return (
    /* $FlowFixMe This is by design */
    _react2.default.createElement(
      'a',
      webProps,
      props.children
    )
  );
}
// $FlowFixMe This is by design