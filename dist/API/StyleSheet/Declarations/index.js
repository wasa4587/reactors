'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _Declaration = require('../Declaration');

var _Declaration2 = _interopRequireDefault(_Declaration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Declarations = function () {
  function Declarations(declarations) {
    (0, _classCallCheck3.default)(this, Declarations);
    this.declarations = [];

    if (declarations instanceof Declarations) {
      Object.assign(this, declarations);
    } else {
      var set = declarations;

      if (!(0, _isArray2.default)(declarations)) {
        set = [declarations];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var declaration = _step.value;

          for (var _property in declaration) {
            this.declarations.push(declaration instanceof _Declaration2.default ? declaration : new _Declaration2.default(_property, declaration[_property]));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }

  (0, _createClass3.default)(Declarations, [{
    key: 'toObject',
    value: function toObject() {
      var object = {};

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.declarations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var declaration = _step2.value;

          object = (0, _extends3.default)({}, object, declaration.toObject(this.declarations));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return object;
    }
  }]);
  return Declarations;
}();

exports.default = Declarations;