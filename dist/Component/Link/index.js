'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Link;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * 
**/

function Link(props) {
  switch (_reactors2.default.platform) {
    default:
      throw new Error('Unknown platform: ' + _reactors2.default.platform);
    case 'mobile':
      {
        var LinkMobile = require('./mobile').default;
        return _react2.default.createElement(LinkMobile, props);
      }
    case 'web':
    case 'desktop':
      {
        var LinkWeb = require('./web').default;
        return (
          /* $FlowFixMe This is by design */
          _react2.default.createElement(LinkWeb, props)
        );
      }
  }
}
// $FlowFixMe This is by design


Link.propTypes = {
  href: _react.PropTypes.string
};