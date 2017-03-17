'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _alignContent$alignIt;

var _keys3 = require('lodash/keys');

var _keys4 = _interopRequireDefault(_keys3);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Color = function Color() {
  (0, _classCallCheck3.default)(this, Color);
};

var transforms = new Set();

function transformWeb(transformers) {
  if ((0, _isArray2.default)(transformers)) {
    return {
      transform: transformers.map(function (transformer) {
        var _keys = (0, _keys4.default)(transformer),
            _keys2 = (0, _slicedToArray3.default)(_keys, 1),
            key = _keys2[0];

        return key + '(' + transformer[key] + ')';
      }).join(' ')
    };
  }
  return { transform: transformers };
}

function borderWidth_DOM(borderWidth, declarations) {
  var style = { borderWidth: borderWidth };
  if (!(0, _find2.default)(declarations, { property: 'borderStyle' })) {
    style.borderStyle = 'solid';
  }
  if (!(0, _find2.default)(declarations, { property: 'borderColor' })) {
    style.borderColor = 'black';
  }
  return style;
}

function flexDirectionMissingDisplayOnDOM(flexDirection, declarations) {
  var style = { flexDirection: flexDirection };
  if (!(0, _find2.default)(declarations, { property: 'display' })) {
    style.display = 'flex';
  }
  return style;
}

function resizeModeForDOM(resizeMode) {
  switch (resizeMode) {

    default:
      {
        return {};
      }

    case 'cover':
      {
        return {
          width: '100%',
          height: '100%'
        };
      }

  }
}

exports.default = (_alignContent$alignIt = {}, (0, _defineProperty3.default)(_alignContent$alignIt, 'alignContent', {
  value: ['stretch', 'flex-start', 'flex-end', 'center', 'space-around', 'space-between'],
  mobile: function mobile() {
    return {};
  }
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'alignItems', {
  value: ['flex-start', 'flex-end', 'center', 'stretch']
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'borderColor', {
  value: Color
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'borderRadius', {
  value: Number
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'borderWidth', {
  value: Number,
  desktop: borderWidth_DOM,
  web: borderWidth_DOM
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'borderBottomStyle', {
  mobile: function mobile() {
    return {};
  }
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'cursor', {
  mobile: function mobile() {
    return {};
  }
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'display', {
  value: ['flex', 'inline', 'block'],
  mobile: function mobile(display) {
    if (display === 'flex') {
      return {};
    }
    return { display: display };
  }
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'flexDirection', {
  value: ['row', 'column'],
  desktop: flexDirectionMissingDisplayOnDOM,
  web: flexDirectionMissingDisplayOnDOM
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'paddingHorizontal', {
  value: Number,
  desktop: function desktop(paddingHorizontal) {
    return {
      paddingLeft: paddingHorizontal,
      paddingRight: paddingHorizontal
    };
  },
  web: function web(paddingHorizontal) {
    return {
      paddingLeft: paddingHorizontal,
      paddingRight: paddingHorizontal
    };
  }
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'paddingVertical', {
  value: Number,
  desktop: function desktop(paddingVertical) {
    return {
      paddingTop: paddingVertical,
      paddingBottom: paddingVertical
    };
  },
  web: function web(paddingVertical) {
    return {
      paddingTop: paddingVertical,
      paddingBottom: paddingVertical
    };
  }
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'marginBottom', {
  value: Number
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'marginTop', {
  value: Number
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'marginVertical', {
  desktop: function desktop(marginVertical) {
    return {
      marginTop: marginVertical,
      marginBottom: marginVertical
    };
  },
  value: Number,
  web: function web(marginVertical) {
    return {
      marginTop: marginVertical,
      marginBottom: marginVertical
    };
  }
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'overflow', {
  value: ['hidden']
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'resizeMode', {
  desktop: resizeModeForDOM,
  value: ['cover', 'contain', 'stretch', 'repeat', 'center'],
  web: resizeModeForDOM
}), (0, _defineProperty3.default)(_alignContent$alignIt, 'transform', {
  desktop: transformWeb,
  web: transformWeb,
  value: transforms
}), _alignContent$alignIt);