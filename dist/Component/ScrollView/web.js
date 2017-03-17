'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = ReactorsWebScrollView;

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

function ReactorsWebScrollView(props) {
  var webProps = _reactors2.default.props(props);
  var parentStyle = (0, _extends3.default)({
    overflow: 'auto'
  }, webProps.style);
  delete webProps.style;
  return (
    /* $FlowFixMe This is by design */
    _react2.default.createElement(
      'section',
      { style: parentStyle },
      _react2.default.createElement(
        'section',
        webProps,
        props.children
      )
    )
  );
}
// $FlowFixMe This is by design