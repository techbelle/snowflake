'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _constants = require('../constants');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rachelle/Documents/GitHub/snowflake/components/LevelThermometer.js';


var margins = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 10
};
var height = 150;
var width = 550;

var LevelThermometer = function (_React$Component) {
  (0, _inherits3.default)(LevelThermometer, _React$Component);

  function LevelThermometer(props) {
    (0, _classCallCheck3.default)(this, LevelThermometer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LevelThermometer.__proto__ || (0, _getPrototypeOf2.default)(LevelThermometer)).call(this, props));

    _this.pointScale = d3.scaleLinear().domain([0, 135]).rangeRound([0, width - margins.left - margins.right]);

    _this.topAxisFn = d3.axisTop().scale(_this.pointScale).tickValues((0, _keys2.default)(_constants.pointsToLevels)).tickFormat(function (points) {
      return _constants.pointsToLevels[points];
    });

    _this.bottomAxisFn = d3.axisBottom().scale(_this.pointScale).tickValues((0, _keys2.default)(_constants.pointsToLevels));
    return _this;
  }

  (0, _createClass3.default)(LevelThermometer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      d3.select(this.topAxis).call(this.topAxisFn).selectAll('text').attr("y", 0).attr("x", -25).attr("transform", "rotate(90)").attr("dy", ".35em").style('font-size', '12px').style('text-anchor', 'start');
      d3.select(this.bottomAxis).call(this.bottomAxisFn).selectAll('text').attr("y", 0).attr("x", 10).attr("transform", "rotate(90)").attr("dy", ".35em").style('font-size', '12px').style('text-anchor', 'start');
    }
  }, {
    key: 'rightRoundedRect',
    value: function rightRoundedRect(x, y, width, height, radius) {
      return "M" + x + "," + y + "h" + (width - radius) + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius + "v" + (height - 2 * radius) + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius + "h" + (radius - width) + "z";
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var categoryPoints = (0, _constants.categoryPointsFromMilestoneMap)(this.props.milestoneByTrack);
      var lastCategoryIndex = 0;
      categoryPoints.forEach(function (categoryPoint, i) {
        if (categoryPoint.points) lastCategoryIndex = i;
      });
      var cumulativePoints = 0;
      return _react2.default.createElement('figure', {
        className: 'jsx-2708482886',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2708482886',
        css: 'figure.jsx-2708482886{margin:0 0 0 -10px}svg.jsx-2708482886{width:' + width + 'px;height:' + (height + 10) + 'px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRm9CLEFBR2dDLEFBR2tCLG1CQUZ2QyxrQkFHd0Msc0NBQ3hDIiwiZmlsZSI6ImNvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmFjaGVsbGUvRG9jdW1lbnRzL0dpdEh1Yi9zbm93Zmxha2UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IHBvaW50c1RvTGV2ZWxzLCBjYXRlZ29yeVBvaW50c0Zyb21NaWxlc3RvbmVNYXAsIGNhdGVnb3J5Q29sb3JTY2FsZSwgY2F0ZWdvcnlJZHMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgbWFyZ2lucyA9IHtcbiAgdG9wOiAzMCxcbiAgcmlnaHQ6IDIwLFxuICBib3R0b206IDMwLFxuICBsZWZ0OiAxMFxufVxuY29uc3QgaGVpZ2h0ID0gMTUwXG5jb25zdCB3aWR0aCA9IDU1MFxuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG59XG5cbmNsYXNzIExldmVsVGhlcm1vbWV0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcG9pbnRTY2FsZTogYW55XG4gIHRvcEF4aXNGbjogYW55XG4gIGJvdHRvbUF4aXNGbjogYW55XG4gIHRvcEF4aXM6ICpcbiAgYm90dG9tQXhpczogKlxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiAqKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnBvaW50U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAxMzVdKVxuICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoIC0gbWFyZ2lucy5sZWZ0IC0gbWFyZ2lucy5yaWdodF0pO1xuXG4gICAgdGhpcy50b3BBeGlzRm4gPSBkMy5heGlzVG9wKClcbiAgICAgIC5zY2FsZSh0aGlzLnBvaW50U2NhbGUpXG4gICAgICAudGlja1ZhbHVlcyhPYmplY3Qua2V5cyhwb2ludHNUb0xldmVscykpXG4gICAgICAudGlja0Zvcm1hdChwb2ludHMgPT4gcG9pbnRzVG9MZXZlbHNbcG9pbnRzXSlcblxuICAgIHRoaXMuYm90dG9tQXhpc0ZuID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAuc2NhbGUodGhpcy5wb2ludFNjYWxlKVxuICAgICAgLnRpY2tWYWx1ZXMoT2JqZWN0LmtleXMocG9pbnRzVG9MZXZlbHMpKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZDMuc2VsZWN0KHRoaXMudG9wQXhpcykuY2FsbCh0aGlzLnRvcEF4aXNGbilcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXR0cihcInhcIiwgLTI1KVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEycHgnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgZDMuc2VsZWN0KHRoaXMuYm90dG9tQXhpcykuY2FsbCh0aGlzLmJvdHRvbUF4aXNGbilcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXR0cihcInhcIiwgMTApXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSg5MClcIilcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgfVxuXG4gIHJpZ2h0Um91bmRlZFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XG4gICAgcmV0dXJuIFwiTVwiICsgeCArIFwiLFwiICsgeVxuICAgICAgICAgKyBcImhcIiArICh3aWR0aCAtIHJhZGl1cylcbiAgICAgICAgICsgXCJhXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiIDAgMCAxIFwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXNcbiAgICAgICAgICsgXCJ2XCIgKyAoaGVpZ2h0IC0gMiAqIHJhZGl1cylcbiAgICAgICAgICsgXCJhXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiIDAgMCAxIFwiICsgLXJhZGl1cyArIFwiLFwiICsgcmFkaXVzXG4gICAgICAgICArIFwiaFwiICsgKHJhZGl1cyAtIHdpZHRoKVxuICAgICAgICAgKyBcInpcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNhdGVnb3J5UG9pbnRzID0gY2F0ZWdvcnlQb2ludHNGcm9tTWlsZXN0b25lTWFwKHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFjaylcbiAgICBsZXQgbGFzdENhdGVnb3J5SW5kZXggPSAwXG4gICAgY2F0ZWdvcnlQb2ludHMuZm9yRWFjaCgoY2F0ZWdvcnlQb2ludCwgaSkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5UG9pbnQucG9pbnRzKSBsYXN0Q2F0ZWdvcnlJbmRleCA9IGlcbiAgICB9KVxuICAgIGxldCBjdW11bGF0aXZlUG9pbnRzID0gMFxuICAgIHJldHVybiAoXG4gICAgICA8ZmlndXJlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICAgIGhlaWdodDogJHtoZWlnaHQgKyAxMH1weDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW5zLmxlZnR9LCR7bWFyZ2lucy50b3B9KWB9PlxuICAgICAgICAgICAge2NhdGVnb3J5UG9pbnRzLm1hcCgoY2F0ZWdvcnlQb2ludCwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5wb2ludFNjYWxlKGN1bXVsYXRpdmVQb2ludHMpXG4gICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5wb2ludFNjYWxlKGN1bXVsYXRpdmVQb2ludHMgKyBjYXRlZ29yeVBvaW50LnBvaW50cykgLSB4XG4gICAgICAgICAgICAgIGN1bXVsYXRpdmVQb2ludHMgKz0gY2F0ZWdvcnlQb2ludC5wb2ludHNcbiAgICAgICAgICAgICAgcmV0dXJuIChpICE9IGxhc3RDYXRlZ29yeUluZGV4ID9cbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZH1cbiAgICAgICAgICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgICAgICAgICAgeT17MH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIG1hcmdpbnMudG9wIC0gbWFyZ2lucy5ib3R0b219XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogY2F0ZWdvcnlDb2xvclNjYWxlKGNhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZCksIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCAjMDAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeVBvaW50LmNhdGVnb3J5SWR9XG4gICAgICAgICAgICAgICAgICAgIGQ9e3RoaXMucmlnaHRSb3VuZGVkUmVjdCh4LCAwLCB3aWR0aCwgaGVpZ2h0IC0gbWFyZ2lucy50b3AgLSBtYXJnaW5zLmJvdHRvbSwgMyl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogY2F0ZWdvcnlDb2xvclNjYWxlKGNhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZCl9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxnIHJlZj17cmVmID0+IHRoaXMudG9wQXhpcyA9IHJlZn0gY2xhc3NOYW1lPVwidG9wLWF4aXNcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCAtMilgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZyByZWY9e3JlZiA9PiB0aGlzLmJvdHRvbUF4aXMgPSByZWZ9IGNsYXNzTmFtZT1cImJvdHRvbS1heGlzXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwke2hlaWdodCAtIG1hcmdpbnMudG9wIC0gbWFyZ2lucy5ib3R0b20gKyAxfSlgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZmlndXJlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZXZlbFRoZXJtb21ldGVyXG4iXX0= */\n/*@ sourceURL=components/LevelThermometer.js */'
      }), _react2.default.createElement('svg', {
        className: 'jsx-2708482886',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('g', { transform: 'translate(' + margins.left + ',' + margins.top + ')', className: 'jsx-2708482886',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, categoryPoints.map(function (categoryPoint, i) {
        var x = _this2.pointScale(cumulativePoints);
        var width = _this2.pointScale(cumulativePoints + categoryPoint.points) - x;
        cumulativePoints += categoryPoint.points;
        return i != lastCategoryIndex ? _react2.default.createElement('rect', {
          key: categoryPoint.categoryId,
          x: x,
          y: 0,
          width: width,
          height: height - margins.top - margins.bottom,
          style: { fill: (0, _constants.categoryColorScale)(categoryPoint.categoryId), borderRight: "1px solid #000" },
          className: 'jsx-2708482886',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }) : _react2.default.createElement('path', {
          key: categoryPoint.categoryId,
          d: _this2.rightRoundedRect(x, 0, width, height - margins.top - margins.bottom, 3),
          style: { fill: (0, _constants.categoryColorScale)(categoryPoint.categoryId) },
          className: 'jsx-2708482886',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        });
      }), _react2.default.createElement('g', { ref: function ref(_ref) {
          return _this2.topAxis = _ref;
        },
        transform: 'translate(0, -2)',
        className: 'jsx-2708482886' + ' ' + 'top-axis',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement('g', { ref: function ref(_ref2) {
          return _this2.bottomAxis = _ref2;
        },
        transform: 'translate(0,' + (height - margins.top - margins.bottom + 1) + ')',
        className: 'jsx-2708482886' + ' ' + 'bottom-axis',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }))));
    }
  }]);

  return LevelThermometer;
}(_react2.default.Component);

exports.default = LevelThermometer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyJdLCJuYW1lcyI6WyJkMyIsInBvaW50c1RvTGV2ZWxzIiwiY2F0ZWdvcnlQb2ludHNGcm9tTWlsZXN0b25lTWFwIiwiY2F0ZWdvcnlDb2xvclNjYWxlIiwiY2F0ZWdvcnlJZHMiLCJSZWFjdCIsIm1hcmdpbnMiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsIkxldmVsVGhlcm1vbWV0ZXIiLCJwcm9wcyIsInBvaW50U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlUm91bmQiLCJ0b3BBeGlzRm4iLCJheGlzVG9wIiwic2NhbGUiLCJ0aWNrVmFsdWVzIiwidGlja0Zvcm1hdCIsInBvaW50cyIsImJvdHRvbUF4aXNGbiIsImF4aXNCb3R0b20iLCJzZWxlY3QiLCJ0b3BBeGlzIiwiY2FsbCIsInNlbGVjdEFsbCIsImF0dHIiLCJzdHlsZSIsImJvdHRvbUF4aXMiLCJ4IiwieSIsInJhZGl1cyIsImNhdGVnb3J5UG9pbnRzIiwibWlsZXN0b25lQnlUcmFjayIsImxhc3RDYXRlZ29yeUluZGV4IiwiZm9yRWFjaCIsImNhdGVnb3J5UG9pbnQiLCJpIiwiY3VtdWxhdGl2ZVBvaW50cyIsIm1hcCIsImNhdGVnb3J5SWQiLCJmaWxsIiwiYm9yZGVyUmlnaHQiLCJyaWdodFJvdW5kZWRSZWN0IiwicmVmIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQVMsQUFBZ0IsQUFBZ0MsQUFBb0IsQUFBbUI7O0FBQ2hHLEFBQU87Ozs7Ozs7Ozs7O0FBR1AsSUFBTTtPQUFVLEFBQ1QsQUFDTDtTQUZjLEFBRVAsQUFDUDtVQUhjLEFBR04sQUFDUjtRQUpGLEFBQWdCLEFBSVI7QUFKUSxBQUNkO0FBS0YsSUFBTSxTQUFOLEFBQWU7QUFDZixJQUFNLFFBQU4sQUFBYzs7SUFNUixBOzRDQU9KOzs0QkFBQSxBQUFZLE9BQVU7d0NBQUE7OzBKQUFBLEFBQ2QsQUFFTjs7VUFBQSxBQUFLLGFBQWEsR0FBQSxBQUFHLGNBQUgsQUFDZixPQUFPLENBQUEsQUFBQyxHQURPLEFBQ1IsQUFBSSxNQURJLEFBRWYsV0FBVyxDQUFBLEFBQUMsR0FBRyxRQUFRLFFBQVIsQUFBZ0IsT0FBTyxRQUZ6QyxBQUFrQixBQUVKLEFBQW1DLEFBRWpEOztVQUFBLEFBQUssZUFBWSxBQUFHLFVBQUgsQUFDZCxNQUFNLE1BRFEsQUFDSCxZQURHLEFBRWQsV0FGYyxBQUVILEFBQVksZ0RBRlQsQUFHZCxXQUFXLGtCQUFBO2FBQVUsMEJBQVYsQUFBVSxBQUFlO0FBSHZDLEFBQWlCLEFBS2pCLEtBTGlCOztVQUtqQixBQUFLLGVBQWUsR0FBQSxBQUFHLGFBQUgsQUFDakIsTUFBTSxNQURXLEFBQ04sWUFETSxBQUVqQixXQWRpQixBQVlwQixBQUFvQixBQUVOLEFBQVk7V0FDM0I7Ozs7O3dDQUVtQixBQUNsQjtTQUFBLEFBQUcsT0FBTyxLQUFWLEFBQWUsU0FBZixBQUF3QixLQUFLLEtBQTdCLEFBQWtDLFdBQWxDLEFBQ0csVUFESCxBQUNhLFFBRGIsQUFFRyxLQUZILEFBRVEsS0FGUixBQUVhLEdBRmIsQUFHRyxLQUhILEFBR1EsS0FBSyxDQUhiLEFBR2MsSUFIZCxBQUlHLEtBSkgsQUFJUSxhQUpSLEFBSXFCLGNBSnJCLEFBS0csS0FMSCxBQUtRLE1BTFIsQUFLYyxTQUxkLEFBTUcsTUFOSCxBQU1TLGFBTlQsQUFNc0IsUUFOdEIsQUFPRyxNQVBILEFBT1MsZUFQVCxBQU93QixBQUN4QjtTQUFBLEFBQUcsT0FBTyxLQUFWLEFBQWUsWUFBZixBQUEyQixLQUFLLEtBQWhDLEFBQXFDLGNBQXJDLEFBQ0csVUFESCxBQUNhLFFBRGIsQUFFRyxLQUZILEFBRVEsS0FGUixBQUVhLEdBRmIsQUFHRyxLQUhILEFBR1EsS0FIUixBQUdhLElBSGIsQUFJRyxLQUpILEFBSVEsYUFKUixBQUlxQixjQUpyQixBQUtHLEtBTEgsQUFLUSxNQUxSLEFBS2MsU0FMZCxBQU1HLE1BTkgsQUFNUyxhQU5ULEFBTXNCLFFBTnRCLEFBT0csTUFQSCxBQU9TLGVBUFQsQUFPd0IsQUFDekI7Ozs7cUNBRWdCLEEsR0FBRyxBLEcsQUFBRyxPLEFBQU8sUSxBQUFRLFFBQVEsQUFDNUM7YUFBTyxNQUFBLEFBQU0sSUFBTixBQUFVLE1BQVYsQUFBZ0IsSUFBaEIsQUFDQSxPQUFPLFFBRFAsQUFDZSxVQURmLEFBRUEsTUFGQSxBQUVNLFNBRk4sQUFFZSxNQUZmLEFBRXFCLFNBRnJCLEFBRThCLFlBRjlCLEFBRTBDLFNBRjFDLEFBRW1ELE1BRm5ELEFBRXlELFNBRnpELEFBR0EsT0FBTyxTQUFTLElBSGhCLEFBR29CLFVBSHBCLEFBSUEsTUFKQSxBQUlNLFNBSk4sQUFJZSxNQUpmLEFBSXFCLFNBSnJCLEFBSThCLFlBQVksQ0FKMUMsQUFJMkMsU0FKM0MsQUFJb0QsTUFKcEQsQUFJMEQsU0FKMUQsQUFLQSxPQUFPLFNBTFAsQUFLZ0IsU0FMdkIsQUFNTyxBQUNSOzs7OzZCQUNRO21CQUNQOztVQUFJLGlCQUFpQiwrQ0FBK0IsS0FBQSxBQUFLLE1BQXpELEFBQXFCLEFBQTBDLEFBQy9EO1VBQUksb0JBQUosQUFBd0IsQUFDeEI7cUJBQUEsQUFBZSxRQUFRLFVBQUEsQUFBQyxlQUFELEFBQWdCLEdBQU0sQUFDM0M7WUFBSSxjQUFKLEFBQWtCLFFBQVEsb0JBQUEsQUFBb0IsQUFDL0M7QUFGRCxBQUdBO1VBQUksbUJBQUosQUFBdUIsQUFDdkI7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUE7aUJBQUE7b0ZBQUEsQUFNZSx3QkFDQyxTQVBoQixBQU95QixNQVB6QixBQVVFO0FBVkYsMEJBVUUsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxPQUFHLDBCQUF3QixRQUF4QixBQUFnQyxhQUFRLFFBQXhDLEFBQWdELE1BQW5ELGdCQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7d0JBQ0csQUFBZSxJQUFJLFVBQUEsQUFBQyxlQUFELEFBQWdCLEdBQU0sQUFDeEM7WUFBTSxJQUFJLE9BQUEsQUFBSyxXQUFmLEFBQVUsQUFBZ0IsQUFDMUI7WUFBTSxRQUFRLE9BQUEsQUFBSyxXQUFXLG1CQUFtQixjQUFuQyxBQUFpRCxVQUEvRCxBQUF5RSxBQUN6RTs0QkFBb0IsY0FBcEIsQUFBa0MsQUFDbEM7b0JBQVEsQUFBSztlQUVGLGNBRFQsQUFDdUIsQUFDbkI7YUFGSixBQUVPLEFBQ0g7YUFISixBQUdPLEFBQ0g7aUJBSkosQUFJVyxBQUNQO2tCQUFRLFNBQVMsUUFBVCxBQUFpQixNQUFNLFFBTG5DLEFBSzJDLEFBQ3ZDO2lCQUFPLEVBQUMsTUFBTSxtQ0FBbUIsY0FBMUIsQUFBTyxBQUFpQyxhQUFhLGFBTmhFLEFBTVcsQUFBa0U7cUJBTjdFOztzQkFBQTt3QkFETSxBQUNOO0FBQUE7QUFDSSxTQURKLENBRE07ZUFVRyxjQURULEFBQ3VCLEFBQ25CO2FBQUcsT0FBQSxBQUFLLGlCQUFMLEFBQXNCLEdBQXRCLEFBQXlCLEdBQXpCLEFBQTRCLE9BQU8sU0FBUyxRQUFULEFBQWlCLE1BQU0sUUFBMUQsQUFBa0UsUUFGekUsQUFFTyxBQUEwRSxBQUM3RTtpQkFBTyxFQUFDLE1BQU0sbUNBQW1CLGNBSHJDLEFBR1csQUFBTyxBQUFpQztxQkFIbkQ7O3NCQUFBO3dCQVRGLEFBU0UsQUFNSDtBQU5HO0FBQ0ksU0FESjtBQWROLEFBQ0csQUFvQkQsK0NBQUcsS0FBSyxtQkFBQTtpQkFBTyxPQUFBLEFBQUssVUFBWixBQUFzQjtBQUE5QixBQUNJO21CQURKOzRDQUFBLEFBQTZDOztvQkFBN0M7c0JBckJGLEFBcUJFLEFBR0E7QUFIQTsrQ0FHRyxLQUFLLG9CQUFBO2lCQUFPLE9BQUEsQUFBSyxhQUFaLEFBQXlCO0FBQWpDLEFBQ0k7cUNBQTBCLFNBQVMsUUFBVCxBQUFpQixNQUFNLFFBQXZCLEFBQStCLFNBQXpELEFBQWtFLEtBRHRFOzRDQUFBLEFBQWdEOztvQkFBaEQ7c0JBcENSLEFBQ0UsQUFVRSxBQUNFLEFBd0JFLEFBT1Q7QUFQUzs7Ozs7O0VBL0ZtQixnQkFBTSxBLEFBeUdyQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJMZXZlbFRoZXJtb21ldGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yYWNoZWxsZS9Eb2N1bWVudHMvR2l0SHViL3Nub3dmbGFrZSJ9