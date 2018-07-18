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

var _jsxFileName = '/Users/rachelle/Documents/GitHub/snowflake/components/Track.js';


var Track = function (_React$Component) {
  (0, _inherits3.default)(Track, _React$Component);

  function Track() {
    (0, _classCallCheck3.default)(this, Track);

    return (0, _possibleConstructorReturn3.default)(this, (Track.__proto__ || (0, _getPrototypeOf2.default)(Track)).apply(this, arguments));
  }

  (0, _createClass3.default)(Track, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var track = _constants.tracks[this.props.trackId];
      var currentMilestoneId = this.props.milestoneByTrack[this.props.trackId];
      var currentMilestone = track.milestones[currentMilestoneId - 1];
      return _react2.default.createElement('div', {
        className: 'jsx-2815140849' + ' ' + 'track',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2815140849',
        css: 'div.track.jsx-2815140849{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc}h2.jsx-2815140849{margin:0 0 10px 0}p.track-description.jsx-2815140849{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc}table.jsx-2815140849{border-spacing:3px}td.jsx-2815140849{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer}ul.jsx-2815140849{line-height:1.5em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBVUMsYUFqQkUsSUFRVCxDQWhCUyxBQUt0QixBQXFCQSxDQWJBLFNBSW9CLEtBUlcsS0FSQSxRQWlCYixnQkFSbEIsQUFTbUIsS0FqQm5CLFlBa0JpQixlQUNHLGtCQUNILGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvVHJhY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JhY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvc25vd2ZsYWtlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHsgdHJhY2tzLCBtaWxlc3RvbmVzLCBjYXRlZ29yeUNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCwgVHJhY2tJZCwgTWlsZXN0b25lIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIHRyYWNrSWQ6IFRyYWNrSWQsXG4gIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm46IChUcmFja0lkLCBNaWxlc3RvbmUpID0+IHZvaWRcbn1cblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRyYWNrID0gdHJhY2tzW3RoaXMucHJvcHMudHJhY2tJZF1cbiAgICBjb25zdCBjdXJyZW50TWlsZXN0b25lSWQgPSB0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5wcm9wcy50cmFja0lkXVxuICAgIGNvbnN0IGN1cnJlbnRNaWxlc3RvbmUgPSB0cmFjay5taWxlc3RvbmVzW2N1cnJlbnRNaWxlc3RvbmVJZCAtIDFdXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi50cmFjayB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAudHJhY2stZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgyPnt0cmFjay5kaXNwbGF5TmFtZX08L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFjay1kZXNjcmlwdGlvblwiPnt0cmFjay5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICA8dGFibGUgc3R5bGU9e3tmbGV4OiAwLCBtYXJnaW5SaWdodDogNTB9fT5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge21pbGVzdG9uZXMuc2xpY2UoKS5yZXZlcnNlKCkubWFwKChtaWxlc3RvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc01ldCA9IG1pbGVzdG9uZSA8PSBjdXJyZW50TWlsZXN0b25lSWRcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bWlsZXN0b25lfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbih0aGlzLnByb3BzLnRyYWNrSWQsIG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogYDRweCBzb2xpZCAke21pbGVzdG9uZSA9PT0gY3VycmVudE1pbGVzdG9uZUlkID8gJyMwMDAnIDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2suY2F0ZWdvcnkpIDogJyNlZWUnfWAsIGJhY2tncm91bmQ6IGlzTWV0ID8gY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrLmNhdGVnb3J5KSA6IHVuZGVmaW5lZH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttaWxlc3RvbmV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAge2N1cnJlbnRNaWxlc3RvbmUgPyAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRNaWxlc3RvbmUuc3VtbWFyeX08L2gzPlxuICAgICAgICAgICAgICA8aDQ+RXhhbXBsZSBiZWhhdmlvcnM6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50TWlsZXN0b25lLnNpZ25hbHMubWFwKChzaWduYWwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntzaWduYWx9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGg0PkV4YW1wbGUgdGFza3M6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50TWlsZXN0b25lLmV4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+e2V4YW1wbGV9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFja1xuIl19 */\n/*@ sourceURL=components/Track.js */'
      }), _react2.default.createElement('h2', {
        className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, track.displayName), _react2.default.createElement('p', {
        className: 'jsx-2815140849' + ' ' + 'track-description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, track.description), _react2.default.createElement('div', { style: { display: 'flex' }, className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('table', { style: { flex: 0, marginRight: 50 }, className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('tbody', {
        className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _constants.milestones.slice().reverse().map(function (milestone) {
        var isMet = milestone <= currentMilestoneId;
        return _react2.default.createElement('tr', { key: milestone, className: 'jsx-2815140849',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement('td', { onClick: function onClick() {
            return _this2.props.handleTrackMilestoneChangeFn(_this2.props.trackId, milestone);
          },
          style: { border: '4px solid ' + (milestone === currentMilestoneId ? '#000' : isMet ? (0, _constants.categoryColorScale)(track.category) : '#eee'), background: isMet ? (0, _constants.categoryColorScale)(track.category) : undefined }, className: 'jsx-2815140849',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, milestone));
      }))), currentMilestone ? _react2.default.createElement('div', { style: { flex: 1 }, className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, currentMilestone.summary), _react2.default.createElement('h4', {
        className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Example behaviors:'), _react2.default.createElement('ul', {
        className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, currentMilestone.signals.map(function (signal, i) {
        return _react2.default.createElement('li', { key: i, className: 'jsx-2815140849',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, signal);
      })), _react2.default.createElement('h4', {
        className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Example tasks:'), _react2.default.createElement('ul', {
        className: 'jsx-2815140849',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, currentMilestone.examples.map(function (example, i) {
        return _react2.default.createElement('li', { key: i, className: 'jsx-2815140849',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, example);
      }))) : null));
    }
  }]);

  return Track;
}(_react2.default.Component);

exports.default = Track;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOlsidHJhY2tzIiwibWlsZXN0b25lcyIsImNhdGVnb3J5Q29sb3JTY2FsZSIsIlJlYWN0IiwiVHJhY2siLCJ0cmFjayIsInByb3BzIiwidHJhY2tJZCIsImN1cnJlbnRNaWxlc3RvbmVJZCIsIm1pbGVzdG9uZUJ5VHJhY2siLCJjdXJyZW50TWlsZXN0b25lIiwiZGlzcGxheU5hbWUiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXkiLCJmbGV4IiwibWFyZ2luUmlnaHQiLCJzbGljZSIsInJldmVyc2UiLCJtYXAiLCJtaWxlc3RvbmUiLCJpc01ldCIsImhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm4iLCJib3JkZXIiLCJjYXRlZ29yeSIsImJhY2tncm91bmQiLCJ1bmRlZmluZWQiLCJzdW1tYXJ5Iiwic2lnbmFscyIsInNpZ25hbCIsImkiLCJleGFtcGxlcyIsImV4YW1wbGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQVMsQUFBUSxBQUFZLEFBQTBCOztBQUN2RCxBQUFPOzs7Ozs7Ozs7SSxBQVNEOzs7Ozs7Ozs7Ozs2QkFDSzttQkFDUDs7VUFBTSxRQUFRLGtCQUFPLEtBQUEsQUFBSyxNQUExQixBQUFjLEFBQWtCLEFBQ2hDO1VBQU0scUJBQXFCLEtBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQWlCLEtBQUEsQUFBSyxNQUE1RCxBQUEyQixBQUF1QyxBQUNsRTtVQUFNLG1CQUFtQixNQUFBLEFBQU0sV0FBVyxxQkFBMUMsQUFBeUIsQUFBc0MsQUFDL0Q7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBZ0NFO0FBaENGLDBCQWdDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxlQWhDRixBQWdDRSxBQUFXLEFBQ1gsOEJBQUEsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQSxBQUFrQztBQUFsQztBQUFBLGVBakNGLEFBaUNFLEFBQXdDLEFBQ3hDLDhCQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUMsU0FBYixBQUFZLEFBQVUscUJBQXRCOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxXQUFPLE9BQU8sRUFBQyxNQUFELEFBQU8sR0FBRyxhQUF4QixBQUFjLEFBQXVCLGlCQUFyQzs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLCtCQUNHLEFBQVcsUUFBWCxBQUFtQixVQUFuQixBQUE2QixJQUFJLFVBQUEsQUFBQyxXQUFjLEFBQy9DO1lBQU0sUUFBUSxhQUFkLEFBQTJCLEFBQzNCOytCQUNFLGNBQUEsUUFBSSxLQUFKLEFBQVMsc0JBQVQ7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUEsUUFBSSxTQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsNkJBQTZCLE9BQUEsQUFBSyxNQUE3QyxBQUFtRCxTQUF6RCxBQUFNLEFBQTREO0FBQS9FLEFBQ0k7aUJBQU8sRUFBQyx3QkFBcUIsY0FBQSxBQUFjLHFCQUFkLEFBQW1DLFNBQVMsUUFBUSxtQ0FBbUIsTUFBM0IsQUFBUSxBQUF5QixZQUFuRyxBQUFDLEFBQThHLFNBQVUsWUFBWSxRQUFRLG1DQUFtQixNQUEzQixBQUFRLEFBQXlCLFlBRGpMLEFBQ1csQUFBa0wsd0JBRDdMOztzQkFBQTt3QkFBQSxBQUVHO0FBRkg7V0FGSixBQUNFLEFBQ0UsQUFNTDtBQWJQLEFBQ0UsQUFDRSxBQUNHLEFBYUosK0NBQ0MsY0FBQSxTQUFLLE9BQU8sRUFBQyxNQUFiLEFBQVksQUFBTyxnQkFBbkI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLDBCQURGLEFBQ0UsQUFBc0IsQUFDdEIsMEJBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLHVDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLDBCQUNHLEFBQWlCLFFBQWpCLEFBQXlCLElBQUksVUFBQSxBQUFDLFFBQUQsQUFBUyxHQUFUOytCQUM1QixjQUFBLFFBQUksS0FBSixBQUFTLGNBQVQ7O3NCQUFBO3dCQUFBLEFBQWE7QUFBYjtTQUFBLEVBRDRCLEFBQzVCO0FBTE4sQUFHRSxBQUNHLEFBSUgsMkJBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBUkYsQUFRRSxBQUNBLG1DQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLDBCQUNHLEFBQWlCLFNBQWpCLEFBQTBCLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxHQUFWOytCQUM3QixjQUFBLFFBQUksS0FBSixBQUFTLGNBQVQ7O3NCQUFBO3dCQUFBLEFBQWE7QUFBYjtTQUFBLEVBRDZCLEFBQzdCO0FBWlAsQUFDQyxBQVNFLEFBQ0csYUE5RGIsQUFDRSxBQWtDRSxBQWdDTSxBQUlYOzs7OztFQTVFaUIsZ0JBQU0sQSxBQStFMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JhY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvc25vd2ZsYWtlIn0=