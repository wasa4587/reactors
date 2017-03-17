'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = ReactorsWebImage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * 
**/

function ReactorsWebImage(props) {
  var webProps = _reactors2.default.props(props);

  webProps.src = webProps.source;

  if ((0, _typeof3.default)(webProps.src) === 'object' && webProps.src.uri) {
    webProps.src = webProps.src.uri;
  }

  delete webProps.source;

  // $FlowFixMe This is by design (react not installed)
  return _react2.default.createElement('img', webProps);
}