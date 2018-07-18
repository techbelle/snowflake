'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var KeyboardListener = function (_React$Component) {
  (0, _inherits3.default)(KeyboardListener, _React$Component);

  function KeyboardListener() {
    (0, _classCallCheck3.default)(this, KeyboardListener);

    return (0, _possibleConstructorReturn3.default)(this, (KeyboardListener.__proto__ || (0, _getPrototypeOf2.default)(KeyboardListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(KeyboardListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('keydown', function (e) {
        return _this2.handleKeyDown(e);
      }); // TK unlisten
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      switch (e.code) {
        case 'ArrowUp':
          this.props.increaseFocusedMilestoneFn();
          e.preventDefault();
          break;
        case 'ArrowRight':
          this.props.selectNextTrackFn();
          e.preventDefault();
          break;
        case 'ArrowDown':
          this.props.decreaseFocusedMilestoneFn();
          e.preventDefault();
          break;
        case 'ArrowLeft':
          this.props.selectPrevTrackFn();
          e.preventDefault();
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return KeyboardListener;
}(_react2.default.Component);

exports.default = KeyboardListener;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvS2V5Ym9hcmRMaXN0ZW5lci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIktleWJvYXJkTGlzdGVuZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhbmRsZUtleURvd24iLCJjb2RlIiwicHJvcHMiLCJpbmNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbiIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0TmV4dFRyYWNrRm4iLCJkZWNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbiIsInNlbGVjdFByZXZUcmFja0ZuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU87Ozs7OztJLEFBU0Q7Ozs7Ozs7Ozs7OzttQkFFRjs7YUFBQSxBQUFPLGlCQUFQLEFBQXdCLFdBQVcsVUFBQSxBQUFDLEdBQUQ7ZUFBTyxPQUFBLEFBQUssY0FBWixBQUFPLEFBQW1CO0FBRDNDLEFBQ2xCLFNBRGtCLENBQytDLEFBQ2xFOzs7O2tDLEFBRWEsR0FBa0IsQUFDOUI7Y0FBTyxFQUFQLEFBQVMsQUFDUDthQUFBLEFBQUssQUFDSDtlQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7WUFBQSxBQUFFLEFBQ0Y7QUFDRjthQUFBLEFBQUssQUFDSDtlQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7WUFBQSxBQUFFLEFBQ0Y7QUFDRjthQUFBLEFBQUssQUFDSDtlQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7WUFBQSxBQUFFLEFBQ0Y7QUFDRjthQUFBLEFBQUssQUFDSDtlQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7WUFBQSxBQUFFLEFBQ0Y7QUFoQkosQUFrQkQ7Ozs7OzZCQUVRLEFBQ1A7YUFBQSxBQUFPLEFBQ1I7Ozs7O0VBNUI0QixnQkFBTSxBLEFBZ0NyQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJLZXlib2FyZExpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yYWNoZWxsZS9Eb2N1bWVudHMvR2l0SHViL3Nub3dmbGFrZSJ9