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

var _constants = require('../constants');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rachelle/Documents/GitHub/snowflake/components/PointSummaries.js';


var PointSummaries = function (_React$Component) {
  (0, _inherits3.default)(PointSummaries, _React$Component);

  function PointSummaries() {
    (0, _classCallCheck3.default)(this, PointSummaries);

    return (0, _possibleConstructorReturn3.default)(this, (PointSummaries.__proto__ || (0, _getPrototypeOf2.default)(PointSummaries)).apply(this, arguments));
  }

  (0, _createClass3.default)(PointSummaries, [{
    key: 'render',
    value: function render() {
      var totalPoints = (0, _constants.totalPointsFromMilestoneMap)(this.props.milestoneByTrack);

      var currentLevel = void 0,
          nextLevel = void 0;

      var pointsForCurrentLevel = totalPoints;
      while (!(currentLevel = _constants.pointsToLevels[pointsForCurrentLevel])) {
        pointsForCurrentLevel--;
      }

      var pointsToNextLevel = 1;
      while (!(nextLevel = _constants.pointsToLevels[totalPoints + pointsToNextLevel])) {
        pointsToNextLevel++;
        if (pointsToNextLevel > 135) {
          pointsToNextLevel = 'N/A';
          break;
        }
      }

      var blocks = [{
        label: 'Current level',
        value: currentLevel
      }, {
        label: 'Total points',
        value: totalPoints
      }, {
        label: 'Points to next level',
        value: pointsToNextLevel
      }];

      return _react2.default.createElement('table', {
        className: 'jsx-3403694977',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '3403694977',
        css: 'table.jsx-3403694977{border-spacing:3px;margin-bottom:20px;margin-left:-3px}.point-summary-label.jsx-3403694977{font-size:12px;text-align:center;font-weight:normal;width:120px}.point-summary-value.jsx-3403694977{width:120px;background:#eee;font-size:24px;font-weight:bold;line-height:50px;border-radius:2px;text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NvQixBQUdnQyxBQUtKLEFBTUgsWUFDSSxHQU5FLElBTEMsU0FZSixLQU5JLEtBTEYsS0FZQSxTQU5MLEdBTGQsS0FZbUIsSUFObkIsYUFPb0Isa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JhY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvc25vd2ZsYWtlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHsgcG9pbnRzVG9MZXZlbHMsIG1pbGVzdG9uZVRvUG9pbnRzLCB0cmFja0lkcywgdG90YWxQb2ludHNGcm9tTWlsZXN0b25lTWFwIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmVNYXAgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1pbGVzdG9uZUJ5VHJhY2s6IE1pbGVzdG9uZU1hcFxufVxuXG5jbGFzcyBQb2ludFN1bW1hcmllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdG90YWxQb2ludHMgPSB0b3RhbFBvaW50c0Zyb21NaWxlc3RvbmVNYXAodGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrKVxuXG4gICAgbGV0IGN1cnJlbnRMZXZlbCwgbmV4dExldmVsXG5cbiAgICBsZXQgcG9pbnRzRm9yQ3VycmVudExldmVsID0gdG90YWxQb2ludHNcbiAgICB3aGlsZSAoIShjdXJyZW50TGV2ZWwgPSBwb2ludHNUb0xldmVsc1twb2ludHNGb3JDdXJyZW50TGV2ZWxdKSkge1xuICAgICAgcG9pbnRzRm9yQ3VycmVudExldmVsLS1cbiAgICB9XG5cbiAgICBsZXQgcG9pbnRzVG9OZXh0TGV2ZWwgPSAxXG4gICAgd2hpbGUgKCEobmV4dExldmVsID0gcG9pbnRzVG9MZXZlbHNbdG90YWxQb2ludHMgKyBwb2ludHNUb05leHRMZXZlbF0pKSB7XG4gICAgICBwb2ludHNUb05leHRMZXZlbCsrXG4gICAgICBpZiAocG9pbnRzVG9OZXh0TGV2ZWwgPiAxMzUpIHtcbiAgICAgICAgcG9pbnRzVG9OZXh0TGV2ZWwgPSAnTi9BJ1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDdXJyZW50IGxldmVsJyxcbiAgICAgICAgdmFsdWU6IGN1cnJlbnRMZXZlbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBwb2ludHMnLFxuICAgICAgICB2YWx1ZTogdG90YWxQb2ludHNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnUG9pbnRzIHRvIG5leHQgbGV2ZWwnLFxuICAgICAgICB2YWx1ZTogcG9pbnRzVG9OZXh0TGV2ZWxcbiAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvaW50LXN1bW1hcnktbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvaW50LXN1bW1hcnktdmFsdWUge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAge2Jsb2Nrcy5tYXAoKHtsYWJlbH0sIGkpID0+IChcbiAgICAgICAgICAgIDx0aCBrZXk9e2l9IGNsYXNzTmFtZT1cInBvaW50LXN1bW1hcnktbGFiZWxcIj5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICB7YmxvY2tzLm1hcCgoe3ZhbHVlfSwgaSkgPT4gKFxuICAgICAgICAgICAgPHRkIGtleT17aX0gY2xhc3NOYW1lPVwicG9pbnQtc3VtbWFyeS12YWx1ZVwiPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludFN1bW1hcmllc1xuIl19 */\n/*@ sourceURL=components/PointSummaries.js */'
      }), _react2.default.createElement('tbody', {
        className: 'jsx-3403694977',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('tr', {
        className: 'jsx-3403694977',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, blocks.map(function (_ref, i) {
        var label = _ref.label;
        return _react2.default.createElement('th', { key: i, className: 'jsx-3403694977' + ' ' + 'point-summary-label',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, label);
      })), _react2.default.createElement('tr', {
        className: 'jsx-3403694977',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, blocks.map(function (_ref2, i) {
        var value = _ref2.value;
        return _react2.default.createElement('td', { key: i, className: 'jsx-3403694977' + ' ' + 'point-summary-value',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, value);
      }))));
    }
  }]);

  return PointSummaries;
}(_react2.default.Component);

exports.default = PointSummaries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiXSwibmFtZXMiOlsicG9pbnRzVG9MZXZlbHMiLCJtaWxlc3RvbmVUb1BvaW50cyIsInRyYWNrSWRzIiwidG90YWxQb2ludHNGcm9tTWlsZXN0b25lTWFwIiwiUmVhY3QiLCJQb2ludFN1bW1hcmllcyIsInRvdGFsUG9pbnRzIiwicHJvcHMiLCJtaWxlc3RvbmVCeVRyYWNrIiwiY3VycmVudExldmVsIiwibmV4dExldmVsIiwicG9pbnRzRm9yQ3VycmVudExldmVsIiwicG9pbnRzVG9OZXh0TGV2ZWwiLCJibG9ja3MiLCJsYWJlbCIsInZhbHVlIiwibWFwIiwiaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBUyxBQUFnQixBQUFtQixBQUFVLEFBQW1DOztBQUV6RixBQUFPOzs7Ozs7Ozs7SUFNRCxBOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQO1VBQU0sY0FBYyw0Q0FBNEIsS0FBQSxBQUFLLE1BQXJELEFBQW9CLEFBQXVDLEFBRTNEOztVQUFJLG9CQUFKO1VBQWtCLGlCQUFsQixBQUVBOztVQUFJLHdCQUFKLEFBQTRCLEFBQzVCO2FBQU8sRUFBRSxlQUFlLDBCQUF4QixBQUFPLEFBQWlCLEFBQWUseUJBQXlCLEFBQzlEO0FBQ0Q7QUFFRDs7VUFBSSxvQkFBSixBQUF3QixBQUN4QjthQUFPLEVBQUUsWUFBWSwwQkFBZSxjQUFwQyxBQUFPLEFBQWMsQUFBNkIscUJBQXFCLEFBQ3JFO0FBQ0E7WUFBSSxvQkFBSixBQUF3QixLQUFLLEFBQzNCOzhCQUFBLEFBQW9CLEFBQ3BCO0FBQ0Q7QUFDRjtBQUVEOztVQUFNO2VBQ0osQUFDUyxBQUNQO2VBSFcsQUFDYixBQUVTO0FBRlQsQUFDRSxPQUZXO2VBS2IsQUFDUyxBQUNQO2VBUFcsQUFLYixBQUVTO0FBRlQsQUFDRTtlQUdGLEFBQ1MsQUFDUDtlQVhKLEFBQWUsQUFTYixBQUVTLEFBSVg7QUFORSxBQUNFOzs2QkFNRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBdUJFO0FBdkJGLDBCQXVCRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNDO0FBREQ7QUFBQSxnQkFDQyxBQUFPLElBQUksZ0JBQUEsQUFBVSxHQUFWO1lBQUEsQUFBRSxhQUFGLEFBQUU7K0JBQ1osY0FBQSxRQUFJLEtBQUosQUFBUyx1Q0FBVCxBQUFzQjs7c0JBQXRCO3dCQUFBLEFBQ0c7QUFESDtTQUFBLEVBRFUsQUFDVjtBQUhKLEFBQ0UsQUFDQyxBQU1ELDJCQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLGdCQUNDLEFBQU8sSUFBSSxpQkFBQSxBQUFVLEdBQVY7WUFBQSxBQUFFLGNBQUYsQUFBRTsrQkFDWixjQUFBLFFBQUksS0FBSixBQUFTLHVDQUFULEFBQXNCOztzQkFBdEI7d0JBQUEsQUFDRztBQURIO1NBQUEsRUFEVSxBQUNWO0FBbENSLEFBQ0UsQUF1QkUsQUFRRSxBQUNDLEFBU1I7Ozs7O0VBN0UwQixnQkFBTSxBLEFBZ0ZuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJQb2ludFN1bW1hcmllcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmFjaGVsbGUvRG9jdW1lbnRzL0dpdEh1Yi9zbm93Zmxha2UifQ==