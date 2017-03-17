'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactorsImage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * @name Image
  * @type Component
  * 
**/

function ReactorsImage(props) {
  switch (_reactors2.default.platform) {

    default:
      throw new Error('Unknown platform: ' + _reactors2.default.platform);

    case 'mobile':
      {
        var ImageMobile = require('./mobile').default;
        return _react2.default.createElement(ImageMobile, props);
      }

    case 'web':
      {
        var ImageWeb = require('./web').default;
        return _react2.default.createElement(ImageWeb, props);
      }

    case 'desktop':
      {
        var ImageDesktop = require('./desktop').default;
        return (
          /* $FlowFixMe This is by design */
          _react2.default.createElement(ImageDesktop, props)
        );
      }

  }
}