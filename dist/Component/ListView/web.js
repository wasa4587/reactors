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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactorsListViewDOM = function (_Component) {
  (0, _inherits3.default)(ReactorsListViewDOM, _Component);

  function ReactorsListViewDOM() {
    (0, _classCallCheck3.default)(this, ReactorsListViewDOM);
    return (0, _possibleConstructorReturn3.default)(this, (ReactorsListViewDOM.__proto__ || Object.getPrototypeOf(ReactorsListViewDOM)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactorsListViewDOM, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.dataSource.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          _this2.props.renderRow(item)
        );
      });
      // $FlowFixMe This is by design
      return _react2.default.createElement(
        'ul',
        { style: this.props.style },
        items
      );
    }
  }]);
  return ReactorsListViewDOM;
}(_react.Component); /**
                       * @module reactors
                       * 
                     **/

exports.default = ReactorsListViewDOM;