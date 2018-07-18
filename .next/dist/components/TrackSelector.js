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

var _jsxFileName = '/Users/rachelle/Documents/GitHub/snowflake/components/TrackSelector.js';


var TrackSelector = function (_React$Component) {
  (0, _inherits3.default)(TrackSelector, _React$Component);

  function TrackSelector() {
    (0, _classCallCheck3.default)(this, TrackSelector);

    return (0, _possibleConstructorReturn3.default)(this, (TrackSelector.__proto__ || (0, _getPrototypeOf2.default)(TrackSelector)).apply(this, arguments));
  }

  (0, _createClass3.default)(TrackSelector, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('table', {
        className: 'jsx-886021826',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '886021826',
        css: 'table.jsx-886021826{width:100%;border-spacing:3px;border-bottom:2px solid #ccc;padding-bottom:20px;margin-bottom:20px;margin-left:-3px}.track-selector-value.jsx-886021826{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer}.track-selector-label.jsx-886021826{text-align:center;font-size:9px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2tTZWxlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQm9CLEFBR3dCLEFBUU0sQUFVQyxXQWpCQyxNQVFSLENBVUcsVUFUSSxFQVJXLEVBa0IvQixjQVRrQixhQVJJLEdBU0gsaUJBUkUsQUFTSixlQUNHLElBVEQsY0FVRixHQVRqQixZQVVBIiwiZmlsZSI6ImNvbXBvbmVudHMvVHJhY2tTZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmFjaGVsbGUvRG9jdW1lbnRzL0dpdEh1Yi9zbm93Zmxha2UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0cmFja0lkcywgdHJhY2tzLCBjYXRlZ29yeUNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCwgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBmb2N1c2VkVHJhY2tJZDogVHJhY2tJZCxcbiAgc2V0Rm9jdXNlZFRyYWNrSWRGbjogKFRyYWNrSWQpID0+IHZvaWRcbn1cblxuY2xhc3MgVHJhY2tTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50cmFjay1zZWxlY3Rvci12YWx1ZSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudHJhY2stc2VsZWN0b3ItbGFiZWwge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7dHJhY2tJZHMubWFwKHRyYWNrSWQgPT4gKFxuICAgICAgICAgICAgICA8dGQga2V5PXt0cmFja0lkfSBjbGFzc05hbWU9XCJ0cmFjay1zZWxlY3Rvci1sYWJlbFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2V0Rm9jdXNlZFRyYWNrSWRGbih0cmFja0lkKX0+XG4gICAgICAgICAgICAgICAge3RyYWNrc1t0cmFja0lkXS5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge3RyYWNrSWRzLm1hcCh0cmFja0lkID0+IChcbiAgICAgICAgICAgICAgPHRkIGtleT17dHJhY2tJZH0gY2xhc3NOYW1lPVwidHJhY2stc2VsZWN0b3ItdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6ICc0cHggc29saWQgJyArICh0cmFja0lkID09IHRoaXMucHJvcHMuZm9jdXNlZFRyYWNrSWQgPyAnIzAwMCc6IGNhdGVnb3J5Q29sb3JTY2FsZSh0cmFja3NbdHJhY2tJZF0uY2F0ZWdvcnkpKSwgYmFja2dyb3VuZDogY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrc1t0cmFja0lkXS5jYXRlZ29yeSl9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZXRGb2N1c2VkVHJhY2tJZEZuKHRyYWNrSWQpfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrU2VsZWN0b3JcbiJdfQ== */\n/*@ sourceURL=components/TrackSelector.js */'
      }), _react2.default.createElement('tbody', {
        className: 'jsx-886021826',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('tr', {
        className: 'jsx-886021826',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _constants.trackIds.map(function (trackId) {
        return _react2.default.createElement('td', { key: trackId, onClick: function onClick() {
            return _this2.props.setFocusedTrackIdFn(trackId);
          }, className: 'jsx-886021826' + ' ' + 'track-selector-label',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _constants.tracks[trackId].displayName);
      })), _react2.default.createElement('tr', {
        className: 'jsx-886021826',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _constants.trackIds.map(function (trackId) {
        return _react2.default.createElement('td', { key: trackId,
          style: { border: '4px solid ' + (trackId == _this2.props.focusedTrackId ? '#000' : (0, _constants.categoryColorScale)(_constants.tracks[trackId].category)), background: (0, _constants.categoryColorScale)(_constants.tracks[trackId].category) },
          onClick: function onClick() {
            return _this2.props.setFocusedTrackIdFn(trackId);
          }, className: 'jsx-886021826' + ' ' + 'track-selector-value',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _this2.props.milestoneByTrack[trackId]);
      }))));
    }
  }]);

  return TrackSelector;
}(_react2.default.Component);

exports.default = TrackSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2tTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInRyYWNrSWRzIiwidHJhY2tzIiwiY2F0ZWdvcnlDb2xvclNjYWxlIiwiVHJhY2tTZWxlY3RvciIsIm1hcCIsInRyYWNrSWQiLCJwcm9wcyIsInNldEZvY3VzZWRUcmFja0lkRm4iLCJkaXNwbGF5TmFtZSIsImJvcmRlciIsImZvY3VzZWRUcmFja0lkIiwiY2F0ZWdvcnkiLCJiYWNrZ3JvdW5kIiwibWlsZXN0b25lQnlUcmFjayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBVSxBQUFRLEFBQTBCOzs7Ozs7O0ksQUFTL0M7Ozs7Ozs7Ozs7OzZCQUNLO21CQUNQOzs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQTtpQkFBQTthQUFBLEFBeUJFO0FBekJGLDBCQXlCRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSw2QkFDRyxBQUFTLElBQUksbUJBQUE7K0JBQ1osY0FBQSxRQUFJLEtBQUosQUFBUyxTQUEwQyxTQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsb0JBQWpCLEFBQU0sQUFBK0I7QUFBakcsZ0RBQUEsQUFBNEI7O3NCQUE1Qjt3QkFBQSxBQUNHO0FBREg7U0FBQSxvQkFDRyxBQUFPLFNBRkUsQUFDWixBQUNtQjtBQUp6QixBQUNFLEFBQ0csQUFNSCwyQkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSw2QkFDRyxBQUFTLElBQUksbUJBQUE7K0JBQ1osY0FBQSxRQUFJLEtBQUosQUFBUyxBQUNMO2lCQUFPLEVBQUMsUUFBUSxnQkFBZ0IsV0FBVyxPQUFBLEFBQUssTUFBaEIsQUFBc0IsaUJBQXRCLEFBQXVDLFNBQVEsbUNBQW1CLGtCQUFBLEFBQU8sU0FBbEcsQUFBUyxBQUErRCxBQUFtQyxZQUFZLFlBQVksbUNBQW1CLGtCQUFBLEFBQU8sU0FEeEssQUFDVyxBQUFtSSxBQUFtQyxBQUM3SzttQkFBUyxtQkFBQTttQkFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLG9CQUFqQixBQUFNLEFBQStCO0FBRmxELGdEQUFBLEFBQTRCOztzQkFBNUI7d0JBQUEsQUFHRztBQUhIO1NBQUEsU0FHRyxBQUFLLE1BQUwsQUFBVyxpQkFKRixBQUNaLEFBR0csQUFBNEI7QUF2Q3pDLEFBQ0UsQUF5QkUsQUFRRSxBQUNHLEFBV1Y7Ozs7O0VBaER5QixnQkFBTSxBLEFBbURsQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJUcmFja1NlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yYWNoZWxsZS9Eb2N1bWVudHMvR2l0SHViL3Nub3dmbGFrZSJ9