'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactorsScrollView;

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

function ReactorsScrollView(props) {
  switch (_reactors2.default.platform) {
    default:
      throw new Error('Unknown platform: ' + _reactors2.default.platform);
    case 'mobile':
      {
        var ScrollViewMobile = require('./mobile').default;
        return _react2.default.createElement(ScrollViewMobile, props);
      }
    case 'web':
    case 'desktop':
      {
        var ScrollViewWeb = require('./web').default;
        return (
          /* $FlowFixMe This is by design */
          _react2.default.createElement(ScrollViewWeb, props)
        );
      }
  }
}
// $FlowFixMe This is by design