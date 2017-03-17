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

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * 
**/

var RectorsListViewMobile = function (_Component) {
  (0, _inherits3.default)(RectorsListViewMobile, _Component);

  function RectorsListViewMobile() {
    (0, _classCallCheck3.default)(this, RectorsListViewMobile);
    return (0, _possibleConstructorReturn3.default)(this, (RectorsListViewMobile.__proto__ || Object.getPrototypeOf(RectorsListViewMobile)).apply(this, arguments));
  }

  (0, _createClass3.default)(RectorsListViewMobile, [{
    key: 'render',
    value: function render() {
      var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
          return r1 !== r2;
        } });

      this.props.dataSource = ds.cloneWithRows(this.props.dataSource);

      if (!('enableEmptySections' in this.props)) {
        this.props.enableEmptySections = true;
      }
      // $FlowFixMe This is by design
      return _react2.default.createElement(_reactNative.ListView, this.props);
    }
  }]);
  return RectorsListViewMobile;
}(_react.Component);

exports.default = RectorsListViewMobile;