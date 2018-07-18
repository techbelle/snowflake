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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rachelle/Documents/GitHub/snowflake/components/TitleSelector.js';


var TitleSelector = function (_React$Component) {
  (0, _inherits3.default)(TitleSelector, _React$Component);

  function TitleSelector() {
    (0, _classCallCheck3.default)(this, TitleSelector);

    return (0, _possibleConstructorReturn3.default)(this, (TitleSelector.__proto__ || (0, _getPrototypeOf2.default)(TitleSelector)).apply(this, arguments));
  }

  (0, _createClass3.default)(TitleSelector, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var titles = (0, _constants.eligibleTitles)(this.props.milestoneByTrack);
      return _react2.default.createElement('select', { value: this.props.currentTitle, onChange: function onChange(e) {
          return _this2.props.setTitleFn(e.target.value);
        }, className: 'jsx-2295457571',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2295457571',
        css: 'select.jsx-2295457571{font-size:20px;line-height:20px;margin-bottom:20px;min-width:300px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGl0bGVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBRzBCLGVBQ0UsaUJBQ0UsbUJBQ0gsZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvVGl0bGVTZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmFjaGVsbGUvRG9jdW1lbnRzL0dpdEh1Yi9zbm93Zmxha2UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBlbGlnaWJsZVRpdGxlcyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lTWFwIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIGN1cnJlbnRUaXRsZTogU3RyaW5nLFxuICBzZXRUaXRsZUZuOiAoc3RyaW5nKSA9PiB2b2lkXG59XG5cbmNsYXNzIFRpdGxlU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGl0bGVzID0gZWxpZ2libGVUaXRsZXModGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrKVxuICAgIHJldHVybiA8c2VsZWN0IHZhbHVlPXt0aGlzLnByb3BzLmN1cnJlbnRUaXRsZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5zZXRUaXRsZUZuKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAge3RpdGxlcy5tYXAodGl0bGUgPT4gKFxuICAgICAgICA8b3B0aW9uIGtleT17dGl0bGV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZVNlbGVjdG9yXG4iXX0= */\n/*@ sourceURL=components/TitleSelector.js */'
      }), titles.map(function (title) {
        return _react2.default.createElement('option', { key: title, className: 'jsx-2295457571',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, title);
      }));
    }
  }]);

  return TitleSelector;
}(_react2.default.Component);

exports.default = TitleSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGl0bGVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImVsaWdpYmxlVGl0bGVzIiwiVGl0bGVTZWxlY3RvciIsInRpdGxlcyIsInByb3BzIiwibWlsZXN0b25lQnlUcmFjayIsImN1cnJlbnRUaXRsZSIsInNldFRpdGxlRm4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ0aXRsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBc0I7Ozs7Ozs7SSxBQVN6Qjs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQ1A7O1VBQU0sU0FBUywrQkFBZSxLQUFBLEFBQUssTUFBbkMsQUFBZSxBQUEwQixBQUN6Qzs2QkFBTyxjQUFBLFlBQVEsT0FBTyxLQUFBLEFBQUssTUFBcEIsQUFBMEIsY0FBYyxVQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxNQUFMLEFBQVcsV0FBVyxFQUFBLEFBQUUsT0FBN0IsQUFBSyxBQUErQjtBQUF0RixzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtPQUFBO2lCQUFBO2FBQUEsQUFTSjtBQVRJLGlCQVNKLEFBQU8sSUFBSSxpQkFBQTsrQkFDVixjQUFBLFlBQVEsS0FBUixBQUFhLGtCQUFiOztzQkFBQTt3QkFBQSxBQUNHO0FBREg7U0FBQSxFQURVLEFBQ1Y7QUFWSixBQUFPLEFBU0osQUFNSjs7Ozs7RUFsQnlCLGdCQUFNLEEsQUFxQmxDOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRpdGxlU2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JhY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvc25vd2ZsYWtlIn0=