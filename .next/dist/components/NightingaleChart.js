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

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _constants = require('../constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rachelle/Documents/GitHub/snowflake/components/NightingaleChart.js';


var width = 400;
var arcMilestones = _constants.milestones.slice(1); // we'll draw the '0' milestone with a circle, not an arc.

var NightingaleChart = function (_React$Component) {
  (0, _inherits3.default)(NightingaleChart, _React$Component);

  function NightingaleChart(props) {
    (0, _classCallCheck3.default)(this, NightingaleChart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NightingaleChart.__proto__ || (0, _getPrototypeOf2.default)(NightingaleChart)).call(this, props));

    _this.colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 5]);

    _this.radiusScale = d3.scaleBand().domain(arcMilestones).range([.15 * width, .45 * width]).paddingInner(0.1);

    _this.arcFn = d3.arc().innerRadius(function (milestone) {
      return _this.radiusScale(milestone);
    }).outerRadius(function (milestone) {
      return _this.radiusScale(milestone) + _this.radiusScale.bandwidth();
    }).startAngle(-Math.PI / _constants.trackIds.length).endAngle(Math.PI / _constants.trackIds.length).padAngle(Math.PI / 200).padRadius(.45 * width).cornerRadius(2);
    return _this;
  }

  (0, _createClass3.default)(NightingaleChart, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentMilestoneId = this.props.milestoneByTrack[this.props.focusedTrackId];
      return _react2.default.createElement('figure', {
        className: 'jsx-3023698355',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '3023698355',
        css: 'figure.jsx-3023698355{margin:0}svg.jsx-3023698355{width:' + width + 'px;height:' + width + 'px}.track-milestone.jsx-3023698355{-webkit-fill:#eee;fill:#eee;cursor:pointer}.track-milestone-current.jsx-3023698355,.track-milestone.jsx-3023698355:hover{stroke:#000;stroke-width:4px;stroke-linejoin:round}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmlnaHRpbmdhbGVDaGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q29CLEFBR3NCLEFBRzRCLEFBSTNCLEFBSUUsU0FWZCxHQVdtQixnQkFKRixDQUtPLFFBVGdCLE1BS3hDLFFBS0Esd0JBVEEiLCJmaWxlIjoiY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yYWNoZWxsZS9Eb2N1bWVudHMvR2l0SHViL3Nub3dmbGFrZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgdHJhY2tJZHMsIG1pbGVzdG9uZXMsIHRyYWNrcywgY2F0ZWdvcnlDb2xvclNjYWxlIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUcmFja0lkLCBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3Qgd2lkdGggPSA0MDBcbmNvbnN0IGFyY01pbGVzdG9uZXMgPSBtaWxlc3RvbmVzLnNsaWNlKDEpIC8vIHdlJ2xsIGRyYXcgdGhlICcwJyBtaWxlc3RvbmUgd2l0aCBhIGNpcmNsZSwgbm90IGFuIGFyYy5cblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBmb2N1c2VkVHJhY2tJZDogVHJhY2tJZCxcbiAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbjogKFRyYWNrSWQsIE1pbGVzdG9uZSkgPT4gdm9pZFxufVxuXG5jbGFzcyBOaWdodGluZ2FsZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbG9yU2NhbGU6IGFueVxuICByYWRpdXNTY2FsZTogYW55XG4gIGFyY0ZuOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogKikge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5jb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlV2FybSlcbiAgICAgIC5kb21haW4oWzAsIDVdKVxuXG4gICAgdGhpcy5yYWRpdXNTY2FsZSA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGFyY01pbGVzdG9uZXMpXG4gICAgICAucmFuZ2UoWy4xNSAqIHdpZHRoLCAuNDUgKiB3aWR0aF0pXG4gICAgICAucGFkZGluZ0lubmVyKDAuMSlcblxuICAgIHRoaXMuYXJjRm4gPSBkMy5hcmMoKVxuICAgICAgLmlubmVyUmFkaXVzKG1pbGVzdG9uZSA9PiB0aGlzLnJhZGl1c1NjYWxlKG1pbGVzdG9uZSkpXG4gICAgICAub3V0ZXJSYWRpdXMobWlsZXN0b25lID0+IHRoaXMucmFkaXVzU2NhbGUobWlsZXN0b25lKSArIHRoaXMucmFkaXVzU2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgICAuc3RhcnRBbmdsZSgtIE1hdGguUEkgLyB0cmFja0lkcy5sZW5ndGgpXG4gICAgICAuZW5kQW5nbGUoTWF0aC5QSSAvIHRyYWNrSWRzLmxlbmd0aClcbiAgICAgIC5wYWRBbmdsZShNYXRoLlBJIC8gMjAwKVxuICAgICAgLnBhZFJhZGl1cyguNDUgKiB3aWR0aClcbiAgICAgIC5jb3JuZXJSYWRpdXMoMilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjdXJyZW50TWlsZXN0b25lSWQgPSB0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5wcm9wcy5mb2N1c2VkVHJhY2tJZF1cbiAgICByZXR1cm4gKFxuICAgICAgPGZpZ3VyZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZpZ3VyZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICAgIGhlaWdodDogJHt3aWR0aH1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRyYWNrLW1pbGVzdG9uZSB7XG4gICAgICAgICAgICBmaWxsOiAjZWVlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudHJhY2stbWlsZXN0b25lLWN1cnJlbnQsIC50cmFjay1taWxlc3RvbmU6aG92ZXIge1xuICAgICAgICAgICAgc3Ryb2tlOiAjMDAwO1xuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3ZnPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3dpZHRoLzJ9LCR7d2lkdGgvMn0pIHJvdGF0ZSgtMzMuNzUpYH0+XG4gICAgICAgICAgICB7dHJhY2tJZHMubWFwKCh0cmFja0lkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudFRyYWNrID0gdHJhY2tJZCA9PSB0aGlzLnByb3BzLmZvY3VzZWRUcmFja0lkXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGcga2V5PXt0cmFja0lkfSB0cmFuc2Zvcm09e2Byb3RhdGUoJHtpICogMzYwIC8gdHJhY2tJZHMubGVuZ3RofSlgfT5cbiAgICAgICAgICAgICAgICAgIHthcmNNaWxlc3RvbmVzLm1hcCgobWlsZXN0b25lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudE1pbGVzdG9uZSA9IGlzQ3VycmVudFRyYWNrICYmIG1pbGVzdG9uZSA9PSBjdXJyZW50TWlsZXN0b25lSWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNNZXQgPSB0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPj0gbWlsZXN0b25lIHx8IG1pbGVzdG9uZSA9PSAwXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttaWxlc3RvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3RyYWNrLW1pbGVzdG9uZSAnICsgKGlzTWV0ID8gJ2lzLW1ldCAnIDogJyAnKSArIChpc0N1cnJlbnRNaWxlc3RvbmUgPyAndHJhY2stbWlsZXN0b25lLWN1cnJlbnQnIDogJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm4odHJhY2tJZCwgbWlsZXN0b25lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD17dGhpcy5hcmNGbihtaWxlc3RvbmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZpbGw6IGlzTWV0ID8gY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrc1t0cmFja0lkXS5jYXRlZ29yeSkgOiB1bmRlZmluZWR9fSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICByPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgY3g9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICBjeT1cIi01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmaWxsOiBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2tzW3RyYWNrSWRdLmNhdGVnb3J5KX19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInRyYWNrLW1pbGVzdG9uZSBcIiArIChpc0N1cnJlbnRUcmFjayAmJiAhY3VycmVudE1pbGVzdG9uZUlkID8gXCJ0cmFjay1taWxlc3RvbmUtY3VycmVudFwiIDogXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuKHRyYWNrSWQsIDApfSAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICl9KX1cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9maWd1cmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5pZ2h0aW5nYWxlQ2hhcnRcbiJdfQ== */\n/*@ sourceURL=components/NightingaleChart.js */'
      }), _react2.default.createElement('svg', {
        className: 'jsx-3023698355',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('g', { transform: 'translate(' + width / 2 + ',' + width / 2 + ') rotate(-33.75)', className: 'jsx-3023698355',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _constants.trackIds.map(function (trackId, i) {
        var isCurrentTrack = trackId == _this2.props.focusedTrackId;
        return _react2.default.createElement('g', { key: trackId, transform: 'rotate(' + i * 360 / _constants.trackIds.length + ')', className: 'jsx-3023698355',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, arcMilestones.map(function (milestone) {
          var isCurrentMilestone = isCurrentTrack && milestone == currentMilestoneId;
          var isMet = _this2.props.milestoneByTrack[trackId] >= milestone || milestone == 0;
          return _react2.default.createElement('path', {
            key: milestone,

            onClick: function onClick() {
              return _this2.props.handleTrackMilestoneChangeFn(trackId, milestone);
            },
            d: _this2.arcFn(milestone),
            style: { fill: isMet ? (0, _constants.categoryColorScale)(_constants.tracks[trackId].category) : undefined }, className: 'jsx-3023698355' + ' ' + ('track-milestone ' + (isMet ? 'is-met ' : ' ') + (isCurrentMilestone ? 'track-milestone-current' : '') || ''),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          });
        }), _react2.default.createElement('circle', {
          r: '8',
          cx: '0',
          cy: '-50',
          style: { fill: (0, _constants.categoryColorScale)(_constants.tracks[trackId].category) },

          onClick: function onClick() {
            return _this2.props.handleTrackMilestoneChangeFn(trackId, 0);
          }, className: 'jsx-3023698355' + ' ' + ("track-milestone " + (isCurrentTrack && !currentMilestoneId ? "track-milestone-current" : "") || ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }));
      }))));
    }
  }]);

  return NightingaleChart;
}(_react2.default.Component);

exports.default = NightingaleChart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmlnaHRpbmdhbGVDaGFydC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImQzIiwidHJhY2tJZHMiLCJtaWxlc3RvbmVzIiwidHJhY2tzIiwiY2F0ZWdvcnlDb2xvclNjYWxlIiwid2lkdGgiLCJhcmNNaWxlc3RvbmVzIiwic2xpY2UiLCJOaWdodGluZ2FsZUNoYXJ0IiwicHJvcHMiLCJjb2xvclNjYWxlIiwic2NhbGVTZXF1ZW50aWFsIiwiaW50ZXJwb2xhdGVXYXJtIiwiZG9tYWluIiwicmFkaXVzU2NhbGUiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmdJbm5lciIsImFyY0ZuIiwiYXJjIiwiaW5uZXJSYWRpdXMiLCJtaWxlc3RvbmUiLCJvdXRlclJhZGl1cyIsImJhbmR3aWR0aCIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJsZW5ndGgiLCJlbmRBbmdsZSIsInBhZEFuZ2xlIiwicGFkUmFkaXVzIiwiY29ybmVyUmFkaXVzIiwiY3VycmVudE1pbGVzdG9uZUlkIiwibWlsZXN0b25lQnlUcmFjayIsImZvY3VzZWRUcmFja0lkIiwibWFwIiwidHJhY2tJZCIsImkiLCJpc0N1cnJlbnRUcmFjayIsImlzQ3VycmVudE1pbGVzdG9uZSIsImlzTWV0IiwiaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbiIsImZpbGwiLCJjYXRlZ29yeSIsInVuZGVmaW5lZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFTLEFBQVUsQUFBWSxBQUFRLEFBQTBCOzs7Ozs7Ozs7QUFHakUsSUFBTSxRQUFOLEFBQWM7QUFDZCxJQUFNLGdCQUFnQixzQkFBQSxBQUFXLE1BQWpDLEFBQXNCLEEsQUFBaUIsSUFBRzs7SSxBQVFwQzs0Q0FLSjs7NEJBQUEsQUFBWSxPQUFVO3dDQUFBOzswSkFBQSxBQUNkLEFBRU47O1VBQUEsQUFBSyxhQUFhLEdBQUEsQUFBRyxnQkFBZ0IsR0FBbkIsQUFBc0IsaUJBQXRCLEFBQ2YsT0FBTyxDQUFBLEFBQUMsR0FEWCxBQUFrQixBQUNSLEFBQUksQUFFZDs7VUFBQSxBQUFLLGNBQWMsR0FBQSxBQUFHLFlBQUgsQUFDaEIsT0FEZ0IsQUFDVCxlQURTLEFBRWhCLE1BQU0sQ0FBQyxNQUFELEFBQU8sT0FBTyxNQUZKLEFBRVYsQUFBb0IsUUFGVixBQUdoQixhQUhILEFBQW1CLEFBR0gsQUFFaEI7O1VBQUEsQUFBSyxXQUFRLEFBQUcsTUFBSCxBQUNWLFlBQVkscUJBQUE7YUFBYSxNQUFBLEFBQUssWUFBbEIsQUFBYSxBQUFpQjtBQURoQyxLQUFBLEVBQUEsQUFFVixZQUFZLHFCQUFBO2FBQWEsTUFBQSxBQUFLLFlBQUwsQUFBaUIsYUFBYSxNQUFBLEFBQUssWUFBaEQsQUFBMkMsQUFBaUI7QUFGOUQsT0FBQSxBQUdWLFdBQVcsQ0FBRSxLQUFGLEFBQU8sS0FBSyxvQkFIYixBQUdzQixRQUh0QixBQUlWLFNBQVMsS0FBQSxBQUFLLEtBQUssb0JBSlQsQUFJa0IsUUFKbEIsQUFLVixTQUFTLEtBQUEsQUFBSyxLQUxKLEFBS1MsS0FMVCxBQU1WLFVBQVUsTUFOQSxBQU1NLE9BTk4sQUFPVixhQWxCaUIsQUFXcEIsQUFBYSxBQU9HO1dBQ2pCOzs7Ozs2QkFFUTttQkFDUDs7VUFBTSxxQkFBcUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBaUIsS0FBQSxBQUFLLE1BQTVELEFBQTJCLEFBQXVDLEFBQ2xFOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBO2lCQUFBOzBFQUFBLEFBTWUsdUJBTmYsQUFPZ0IsUUFQaEIsQUFtQkU7QUFuQkYsMEJBbUJFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsT0FBRywwQkFBd0IsUUFBeEIsQUFBOEIsVUFBSyxRQUFuQyxBQUF5QyxJQUE1QywrQkFBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIOzZCQUNHLEFBQVMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLEdBQU0sQUFDNUI7WUFBTSxpQkFBaUIsV0FBVyxPQUFBLEFBQUssTUFBdkMsQUFBNkMsQUFDN0M7K0JBQ0UsY0FBQSxPQUFHLEtBQUgsQUFBUSxTQUFTLHVCQUFxQixJQUFBLEFBQUksTUFBTSxvQkFBL0IsQUFBd0MsU0FBekQsZ0JBQUE7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtTQUFBLGdCQUNHLEFBQWMsSUFBSSxVQUFBLEFBQUMsV0FBYyxBQUNoQztjQUFNLHFCQUFxQixrQkFBa0IsYUFBN0MsQUFBMEQsQUFDMUQ7Y0FBTSxRQUFRLE9BQUEsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsWUFBNUIsQUFBd0MsYUFBYSxhQUFuRSxBQUFnRixBQUNoRjs7aUJBQ0UsQUFDUyxBQUVMOztxQkFBUyxtQkFBQTtxQkFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLDZCQUFYLEFBQXdDLFNBQTlDLEFBQU0sQUFBaUQ7QUFIcEUsQUFJSTtlQUFHLE9BQUEsQUFBSyxNQUpaLEFBSU8sQUFBVyxBQUNkO21CQUFPLEVBQUMsTUFBTSxRQUFRLG1DQUFtQixrQkFBQSxBQUFPLFNBQWxDLEFBQVEsQUFBbUMsWUFMN0QsQUFLVyxBQUE4RCxrREFIMUQsc0JBQXNCLFFBQUEsQUFBUSxZQUE5QixBQUEwQyxRQUFRLHFCQUFBLEFBQXFCLDRCQUZ0RixBQUVlLEFBQW1HLE9BRmxIOzt3QkFBQTswQkFERixBQUNFLEFBT0g7QUFQRztBQUNJLFdBREo7QUFMTixBQUNHLEFBWUQ7YUFBQSxBQUNNLEFBQ0Y7Y0FGSixBQUVPLEFBQ0g7Y0FISixBQUdPLEFBQ0g7aUJBQU8sRUFBQyxNQUFNLG1DQUFtQixrQkFBQSxBQUFPLFNBSjVDLEFBSVcsQUFBTyxBQUFtQyxBQUVqRDs7bUJBQVMsbUJBQUE7bUJBQU0sT0FBQSxBQUFLLE1BQUwsQUFBVyw2QkFBWCxBQUF3QyxTQUE5QyxBQUFNLEFBQWlEO0FBTnBFLGtEQUtlLHNCQUFzQixrQkFBa0IsQ0FBbEIsQUFBbUIscUJBQW5CLEFBQXdDLDRCQUw3RSxBQUtlLEFBQTBGLE9BTHpHOztzQkFBQTt3QkFkSixBQUNFLEFBYUUsQUFRSjtBQVJJO0FBQ0k7QUF2Q2xCLEFBQ0UsQUFtQkUsQUFDRSxBQUNHLEFBNkJWOzs7OztFQS9FNEIsZ0JBQU0sQSxBQWtGckM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTmlnaHRpbmdhbGVDaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmFjaGVsbGUvRG9jdW1lbnRzL0dpdEh1Yi9zbm93Zmxha2UifQ==