'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notifications = function () {
  function Notifications() {
    (0, _classCallCheck3.default)(this, Notifications);
  }

  (0, _createClass3.default)(Notifications, null, [{
    key: 'push',
    value: function push(title) {
      var electronNotifications = 'electron-notifications';
      var notifier = require(electronNotifications);
      notifier.notify(title);
    }
  }]);
  return Notifications;
}();

exports.default = Notifications;