'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactorsText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * @name Text
  * @type Component
  * 
**/

function ReactorsText(props) {
  switch (_reactors2.default.platform) {
    default:
      throw new Error('Unknown platform: ' + _reactors2.default.platform);
    case 'mobile':
      {
        var TextMobile = require('./mobile').default;
        return _react2.default.createElement(TextMobile, props);
      }
    case 'web':
    case 'desktop':
      {
        var TextWeb = require('./web').default;
        return (
          /* $FlowFixMe This is by design */
          _react2.default.createElement(TextWeb, props)
        );
      }
  }
}
// $FlowFixMe This is by design