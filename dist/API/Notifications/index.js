'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notifyByPlatform() {
  switch (_reactors2.default.platform) {

    default:
      {
        throw new Error('Unknown platform ' + _reactors2.default.platform);
      }

    case 'web':
    case 'mobile':
      {
        return {
          push: function push() {
            console.info('Web and mobile support coming soon');
          }
        };
      }

    case 'desktop':
      {
        var desktopPath = 'desktop';
        return require('./' + desktopPath).default;
      }

  }
}

exports.default = notifyByPlatform();