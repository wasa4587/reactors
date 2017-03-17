'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * 
**/

var ReactorsListView = function (_Component) {
  (0, _inherits3.default)(ReactorsListView, _Component);

  function ReactorsListView() {
    (0, _classCallCheck3.default)(this, ReactorsListView);
    return (0, _possibleConstructorReturn3.default)(this, (ReactorsListView.__proto__ || Object.getPrototypeOf(ReactorsListView)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactorsListView, [{
    key: 'render',
    value: function render() {
      var props = _reactors2.default.props(this.props);

      if (_reactors2.default.isMobile()) {
        var ListViewMobile = require('./mobile').default;
        return _react2.default.createElement(ListViewMobile, props);
      }

      if (_reactors2.default.isDOM()) {
        var ListViewWeb = require('./web').default;
        return (
          /* $FlowFixMe This is by design */
          _react2.default.createElement(ListViewWeb, props)
        );
      }

      throw new Error('Unknown platform: ' + _reactors2.default.platform);
    }
  }]);
  return ReactorsListView;
}(_react.Component);

exports.default = ReactorsListView;