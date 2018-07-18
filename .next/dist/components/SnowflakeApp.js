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

var _TrackSelector = require('../components/TrackSelector');

var _TrackSelector2 = _interopRequireDefault(_TrackSelector);

var _NightingaleChart = require('../components/NightingaleChart');

var _NightingaleChart2 = _interopRequireDefault(_NightingaleChart);

var _KeyboardListener = require('../components/KeyboardListener');

var _KeyboardListener2 = _interopRequireDefault(_KeyboardListener);

var _Track = require('../components/Track');

var _Track2 = _interopRequireDefault(_Track);

var _Wordmark = require('../components/Wordmark');

var _Wordmark2 = _interopRequireDefault(_Wordmark);

var _LevelThermometer = require('../components/LevelThermometer');

var _LevelThermometer2 = _interopRequireDefault(_LevelThermometer);

var _constants = require('../constants');

var _PointSummaries = require('../components/PointSummaries');

var _PointSummaries2 = _interopRequireDefault(_PointSummaries);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TitleSelector = require('../components/TitleSelector');

var _TitleSelector2 = _interopRequireDefault(_TitleSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rachelle/Documents/GitHub/snowflake/components/SnowflakeApp.js';


var hashToState = function hashToState(hash) {
  if (!hash) return null;
  var result = defaultState();
  var hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  _constants.trackIds.forEach(function (trackId, i) {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]));
  });
  if (hashValues[16]) result.name = decodeURI(hashValues[16]);
  if (hashValues[17]) result.title = decodeURI(hashValues[17]);
  return result;
};

var coerceMilestone = function coerceMilestone(value) {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch (value) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 0;
  }
};

var emptyState = function emptyState() {
  return {
    name: '',
    title: '',
    milestoneByTrack: {
      'MOBILE': 0,
      'WEB_CLIENT': 0,
      'FOUNDATIONS': 0,
      'SERVERS': 0,
      'PROJECT_MANAGEMENT': 0,
      'COMMUNICATION': 0,
      'CRAFT': 0,
      'INITIATIVE': 0,
      'CAREER_DEVELOPMENT': 0,
      'ORG_DESIGN': 0,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 0,
      'MENTORSHIP': 0,
      'EVANGELISM': 0,
      'RECRUITING': 0,
      'COMMUNITY': 0
    },
    focusedTrackId: 'MOBILE'
  };
};

var defaultState = function defaultState() {
  return {
    name: 'Cersei Lannister',
    title: 'Staff Engineer',
    milestoneByTrack: {
      'MOBILE': 1,
      'WEB_CLIENT': 2,
      'FOUNDATIONS': 3,
      'SERVERS': 2,
      'PROJECT_MANAGEMENT': 4,
      'COMMUNICATION': 1,
      'CRAFT': 1,
      'INITIATIVE': 4,
      'CAREER_DEVELOPMENT': 3,
      'ORG_DESIGN': 2,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 4,
      'MENTORSHIP': 2,
      'EVANGELISM': 2,
      'RECRUITING': 3,
      'COMMUNITY': 0
    },
    focusedTrackId: 'MOBILE'
  };
};

var stateToHash = function stateToHash(state) {
  if (!state || !state.milestoneByTrack) return null;
  var values = _constants.trackIds.map(function (trackId) {
    return state.milestoneByTrack[trackId];
  }).concat(encodeURI(state.name), encodeURI(state.title));
  return values.join(',');
};

var SnowflakeApp = function (_React$Component) {
  (0, _inherits3.default)(SnowflakeApp, _React$Component);

  function SnowflakeApp(props) {
    (0, _classCallCheck3.default)(this, SnowflakeApp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SnowflakeApp.__proto__ || (0, _getPrototypeOf2.default)(SnowflakeApp)).call(this, props));

    _this.state = emptyState();
    return _this;
  }

  (0, _createClass3.default)(SnowflakeApp, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var hash = stateToHash(this.state);
      if (hash) window.location.replace('#' + hash);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var state = hashToState(window.location.hash);
      if (state) {
        this.setState(state);
      } else {
        this.setState(defaultState());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('main', {
        className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2126963245',
        css: 'body{font-family:Helvetica}main{width:960px;margin:0 auto}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0}a{color:#888;text-decoration:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtJMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLEdBS1osT0FKQSxnQkFUaUIsZUFDRSxpQkFDQSxpQkFDTCxZQUNPLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL1Nub3dmbGFrZUFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmFjaGVsbGUvRG9jdW1lbnRzL0dpdEh1Yi9zbm93Zmxha2UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgVHJhY2tTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1RyYWNrU2VsZWN0b3InXG5pbXBvcnQgTmlnaHRpbmdhbGVDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL05pZ2h0aW5nYWxlQ2hhcnQnXG5pbXBvcnQgS2V5Ym9hcmRMaXN0ZW5lciBmcm9tICcuLi9jb21wb25lbnRzL0tleWJvYXJkTGlzdGVuZXInXG5pbXBvcnQgVHJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFjaydcbmltcG9ydCBXb3JkbWFyayBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRtYXJrJ1xuaW1wb3J0IExldmVsVGhlcm1vbWV0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFRoZXJtb21ldGVyJ1xuaW1wb3J0IHsgZWxpZ2libGVUaXRsZXMsIHRyYWNrSWRzLCBtaWxlc3RvbmVzLCBtaWxlc3RvbmVUb1BvaW50cyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBQb2ludFN1bW1hcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1BvaW50U3VtbWFyaWVzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCwgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZVNlbGVjdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVTZWxlY3RvcidcblxudHlwZSBTbm93Zmxha2VBcHBTdGF0ZSA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBuYW1lOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxufVxuXG5jb25zdCBoYXNoVG9TdGF0ZSA9IChoYXNoOiBTdHJpbmcpOiA/U25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICBpZiAoIWhhc2gpIHJldHVybiBudWxsXG4gIGNvbnN0IHJlc3VsdCA9IGRlZmF1bHRTdGF0ZSgpXG4gIGNvbnN0IGhhc2hWYWx1ZXMgPSBoYXNoLnNwbGl0KCcjJylbMV0uc3BsaXQoJywnKVxuICBpZiAoIWhhc2hWYWx1ZXMpIHJldHVybiBudWxsXG4gIHRyYWNrSWRzLmZvckVhY2goKHRyYWNrSWQsIGkpID0+IHtcbiAgICByZXN1bHQubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IGNvZXJjZU1pbGVzdG9uZShOdW1iZXIoaGFzaFZhbHVlc1tpXSkpXG4gIH0pXG4gIGlmIChoYXNoVmFsdWVzWzE2XSkgcmVzdWx0Lm5hbWUgPSBkZWNvZGVVUkkoaGFzaFZhbHVlc1sxNl0pXG4gIGlmIChoYXNoVmFsdWVzWzE3XSkgcmVzdWx0LnRpdGxlID0gZGVjb2RlVVJJKGhhc2hWYWx1ZXNbMTddKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNvZXJjZU1pbGVzdG9uZSA9ICh2YWx1ZTogbnVtYmVyKTogTWlsZXN0b25lID0+IHtcbiAgLy8gSEFDSyBJIGtub3cgdGhpcyBpcyBnb29meSBidXQgaSdtIGRlYWxpbmcgd2l0aCBmbG93IHR5cGluZ1xuICBzd2l0Y2godmFsdWUpIHtcbiAgICBjYXNlIDA6IHJldHVybiAwXG4gICAgY2FzZSAxOiByZXR1cm4gMVxuICAgIGNhc2UgMjogcmV0dXJuIDJcbiAgICBjYXNlIDM6IHJldHVybiAzXG4gICAgY2FzZSA0OiByZXR1cm4gNFxuICAgIGNhc2UgNTogcmV0dXJuIDVcbiAgICBkZWZhdWx0OiByZXR1cm4gMFxuICB9XG59XG5cbmNvbnN0IGVtcHR5U3RhdGUgPSAoKTogU25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBtaWxlc3RvbmVCeVRyYWNrOiB7XG4gICAgICAnTU9CSUxFJzogMCxcbiAgICAgICdXRUJfQ0xJRU5UJzogMCxcbiAgICAgICdGT1VOREFUSU9OUyc6IDAsXG4gICAgICAnU0VSVkVSUyc6IDAsXG4gICAgICAnUFJPSkVDVF9NQU5BR0VNRU5UJzogMCxcbiAgICAgICdDT01NVU5JQ0FUSU9OJzogMCxcbiAgICAgICdDUkFGVCc6IDAsXG4gICAgICAnSU5JVElBVElWRSc6IDAsXG4gICAgICAnQ0FSRUVSX0RFVkVMT1BNRU5UJzogMCxcbiAgICAgICdPUkdfREVTSUdOJzogMCxcbiAgICAgICdXRUxMQkVJTkcnOiAwLFxuICAgICAgJ0FDQ09NUExJU0hNRU5UJzogMCxcbiAgICAgICdNRU5UT1JTSElQJzogMCxcbiAgICAgICdFVkFOR0VMSVNNJzogMCxcbiAgICAgICdSRUNSVUlUSU5HJzogMCxcbiAgICAgICdDT01NVU5JVFknOiAwXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ01PQklMRSdcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSAoKTogU25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDZXJzZWkgTGFubmlzdGVyJyxcbiAgICB0aXRsZTogJ1N0YWZmIEVuZ2luZWVyJyxcbiAgICBtaWxlc3RvbmVCeVRyYWNrOiB7XG4gICAgICAnTU9CSUxFJzogMSxcbiAgICAgICdXRUJfQ0xJRU5UJzogMixcbiAgICAgICdGT1VOREFUSU9OUyc6IDMsXG4gICAgICAnU0VSVkVSUyc6IDIsXG4gICAgICAnUFJPSkVDVF9NQU5BR0VNRU5UJzogNCxcbiAgICAgICdDT01NVU5JQ0FUSU9OJzogMSxcbiAgICAgICdDUkFGVCc6IDEsXG4gICAgICAnSU5JVElBVElWRSc6IDQsXG4gICAgICAnQ0FSRUVSX0RFVkVMT1BNRU5UJzogMyxcbiAgICAgICdPUkdfREVTSUdOJzogMixcbiAgICAgICdXRUxMQkVJTkcnOiAwLFxuICAgICAgJ0FDQ09NUExJU0hNRU5UJzogNCxcbiAgICAgICdNRU5UT1JTSElQJzogMixcbiAgICAgICdFVkFOR0VMSVNNJzogMixcbiAgICAgICdSRUNSVUlUSU5HJzogMyxcbiAgICAgICdDT01NVU5JVFknOiAwXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ01PQklMRSdcbiAgfVxufVxuXG5jb25zdCBzdGF0ZVRvSGFzaCA9IChzdGF0ZTogU25vd2ZsYWtlQXBwU3RhdGUpID0+IHtcbiAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUubWlsZXN0b25lQnlUcmFjaykgcmV0dXJuIG51bGxcbiAgY29uc3QgdmFsdWVzID0gdHJhY2tJZHMubWFwKHRyYWNrSWQgPT4gc3RhdGUubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSkuY29uY2F0KGVuY29kZVVSSShzdGF0ZS5uYW1lKSwgZW5jb2RlVVJJKHN0YXRlLnRpdGxlKSlcbiAgcmV0dXJuIHZhbHVlcy5qb2luKCcsJylcbn1cblxudHlwZSBQcm9wcyA9IHt9XG5cbmNsYXNzIFNub3dmbGFrZUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU25vd2ZsYWtlQXBwU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IGVtcHR5U3RhdGUoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IGhhc2ggPSBzdGF0ZVRvSGFzaCh0aGlzLnN0YXRlKVxuICAgIGlmIChoYXNoKSB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgIyR7aGFzaH1gKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBoYXNoVG9TdGF0ZSh3aW5kb3cubG9jYXRpb24uaGFzaClcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZGVmYXVsdFN0YXRlKCkpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDk2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtaW5wdXQ6aG92ZXIsIC5uYW1lLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogJzE5cHggYXV0byAwJywgd2lkdGg6IDE0Mn19PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8V29yZG1hcmsgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDF9fT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe25hbWU6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRpdGxlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHNldFRpdGxlRm49eyh0aXRsZSkgPT4gdGhpcy5zZXRUaXRsZSh0aXRsZSl9IC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8UG9pbnRTdW1tYXJpZXMgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfSAvPlxuICAgICAgICAgICAgPExldmVsVGhlcm1vbWV0ZXIgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwfX0+XG4gICAgICAgICAgICA8TmlnaHRpbmdhbGVDaGFydFxuICAgICAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUcmFja1NlbGVjdG9yXG4gICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgIHNldEZvY3VzZWRUcmFja0lkRm49e3RoaXMuc2V0Rm9jdXNlZFRyYWNrSWQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPEtleWJvYXJkTGlzdGVuZXJcbiAgICAgICAgICAgIHNlbGVjdE5leHRUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgICBzZWxlY3RQcmV2VHJhY2tGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFjay5iaW5kKHRoaXMsIC0xKX1cbiAgICAgICAgICAgIGluY3JlYXNlRm9jdXNlZE1pbGVzdG9uZUZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YS5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgICAgZGVjcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgLTEpfSAvPlxuICAgICAgICA8VHJhY2tcbiAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgIHRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgcGFkZGluZ0JvdHRvbTogJzIwcHgnfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDF9fT5cbiAgICAgICAgICAgIE1hZGUgd2l0aCDinaTvuI8gYnkgPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmVuZ2luZWVyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWVkaXVtIEVuZzwvYT4uXG4gICAgICAgICAgICBMZWFybiBhYm91dCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9zL2VuZ2luZWVyaW5nLWdyb3d0aC1mcmFtZXdvcmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5ncm93dGggZnJhbWV3b3JrPC9hPi5cbiAgICAgICAgICAgIEdldCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9NZWRpdW0vc25vd2ZsYWtlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+c291cmNlIGNvZGU8L2E+LlxuICAgICAgICAgICAgUmVhZCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9wLzg1ZTA3OGJjMTViN1wiIHRhcmdldD1cIl9ibGFua1wiPnRlcm1zIG9mIHNlcnZpY2U8L2E+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cblxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFja0lkOiBUcmFja0lkLCBtaWxlc3RvbmU6IE1pbGVzdG9uZSkge1xuICAgIGNvbnN0IG1pbGVzdG9uZUJ5VHJhY2sgPSB0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tcbiAgICBtaWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdID0gbWlsZXN0b25lXG5cbiAgICBjb25zdCB0aXRsZXMgPSBlbGlnaWJsZVRpdGxlcyhtaWxlc3RvbmVCeVRyYWNrKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVzLmluZGV4T2YodGhpcy5zdGF0ZS50aXRsZSkgPT09IC0xID8gdGl0bGVzWzBdIDogdGhpcy5zdGF0ZS50aXRsZVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbGVzdG9uZUJ5VHJhY2ssIGZvY3VzZWRUcmFja0lkOiB0cmFja0lkLCB0aXRsZSB9KVxuICB9XG5cbiAgc2hpZnRGb2N1c2VkVHJhY2soZGVsdGE6IG51bWJlcikge1xuICAgIGxldCBpbmRleCA9IHRyYWNrSWRzLmluZGV4T2YodGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZClcbiAgICBpbmRleCA9IChpbmRleCArIGRlbHRhICsgdHJhY2tJZHMubGVuZ3RoKSAlIHRyYWNrSWRzLmxlbmd0aFxuICAgIGNvbnN0IGZvY3VzZWRUcmFja0lkID0gdHJhY2tJZHNbaW5kZXhdXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUcmFja0lkIH0pXG4gIH1cblxuICBzZXRGb2N1c2VkVHJhY2tJZCh0cmFja0lkOiBUcmFja0lkKSB7XG4gICAgbGV0IGluZGV4ID0gdHJhY2tJZHMuaW5kZXhPZih0cmFja0lkKVxuICAgIGNvbnN0IGZvY3VzZWRUcmFja0lkID0gdHJhY2tJZHNbaW5kZXhdXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUcmFja0lkIH0pXG4gIH1cblxuICBzaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEoZGVsdGE6IG51bWJlcikge1xuICAgIGxldCBwcmV2TWlsZXN0b25lID0gdGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrW3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWRdXG4gICAgbGV0IG1pbGVzdG9uZSA9IHByZXZNaWxlc3RvbmUgKyBkZWx0YVxuICAgIGlmIChtaWxlc3RvbmUgPCAwKSBtaWxlc3RvbmUgPSAwXG4gICAgaWYgKG1pbGVzdG9uZSA+IDUpIG1pbGVzdG9uZSA9IDVcbiAgICB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWQsIG1pbGVzdG9uZSlcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBsZXQgdGl0bGVzID0gZWxpZ2libGVUaXRsZXModGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrKVxuICAgIHRpdGxlID0gdGl0bGVzLmluZGV4T2YodGl0bGUpID09IC0xID8gdGl0bGVzWzBdIDogdGl0bGVcbiAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGUgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbm93Zmxha2VBcHBcbiJdfQ== */\n/*@ sourceURL=components/SnowflakeApp.js */'
      }), _react2.default.createElement('div', { style: { margin: '19px auto 0', width: 142 }, className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement('a', { href: 'https://medium.com/', target: '_blank', className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement(_Wordmark2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }))), _react2.default.createElement('div', { style: { display: 'flex' }, className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement('div', { style: { flex: 1 }, className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement('form', {
        className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement('input', {
        type: 'text',

        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.setState({ name: e.target.value });
        },
        placeholder: 'Name',
        className: 'jsx-2126963245' + ' ' + 'name-input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), _react2.default.createElement(_TitleSelector2.default, {
        milestoneByTrack: this.state.milestoneByTrack,
        currentTitle: this.state.title,
        setTitleFn: function setTitleFn(title) {
          return _this2.setTitle(title);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      })), _react2.default.createElement(_PointSummaries2.default, { milestoneByTrack: this.state.milestoneByTrack, __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }), _react2.default.createElement(_LevelThermometer2.default, { milestoneByTrack: this.state.milestoneByTrack, __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      })), _react2.default.createElement('div', { style: { flex: 0 }, className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement(_NightingaleChart2.default, {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }))), _react2.default.createElement(_TrackSelector2.default, {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), _react2.default.createElement(_KeyboardListener2.default, {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1), __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), _react2.default.createElement(_Track2.default, {
        milestoneByTrack: this.state.milestoneByTrack,
        trackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }), _react2.default.createElement('div', { style: { display: 'flex', paddingBottom: '20px' }, className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, _react2.default.createElement('div', { style: { flex: 1 }, className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, 'Made with \u2764\uFE0F by ', _react2.default.createElement('a', { href: 'https://medium.engineering', target: '_blank', className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, 'Medium Eng'), '. Learn about the ', _react2.default.createElement('a', { href: 'https://medium.com/s/engineering-growth-framework', target: '_blank', className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, 'growth framework'), '. Get the ', _react2.default.createElement('a', { href: 'https://github.com/Medium/snowflake', target: '_blank', className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, 'source code'), '. Read the ', _react2.default.createElement('a', { href: 'https://medium.com/p/85e078bc15b7', target: '_blank', className: 'jsx-2126963245',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, 'terms of service'), '.')));
    }
  }, {
    key: 'handleTrackMilestoneChange',
    value: function handleTrackMilestoneChange(trackId, milestone) {
      var milestoneByTrack = this.state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;

      var titles = (0, _constants.eligibleTitles)(milestoneByTrack);
      var title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title;

      this.setState({ milestoneByTrack: milestoneByTrack, focusedTrackId: trackId, title: title });
    }
  }, {
    key: 'shiftFocusedTrack',
    value: function shiftFocusedTrack(delta) {
      var index = _constants.trackIds.indexOf(this.state.focusedTrackId);
      index = (index + delta + _constants.trackIds.length) % _constants.trackIds.length;
      var focusedTrackId = _constants.trackIds[index];
      this.setState({ focusedTrackId: focusedTrackId });
    }
  }, {
    key: 'setFocusedTrackId',
    value: function setFocusedTrackId(trackId) {
      var index = _constants.trackIds.indexOf(trackId);
      var focusedTrackId = _constants.trackIds[index];
      this.setState({ focusedTrackId: focusedTrackId });
    }
  }, {
    key: 'shiftFocusedTrackMilestoneByDelta',
    value: function shiftFocusedTrackMilestoneByDelta(delta) {
      var prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId];
      var milestone = prevMilestone + delta;
      if (milestone < 0) milestone = 0;
      if (milestone > 5) milestone = 5;
      this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
    }
  }, {
    key: 'setTitle',
    value: function setTitle(title) {
      var titles = (0, _constants.eligibleTitles)(this.state.milestoneByTrack);
      title = titles.indexOf(title) == -1 ? titles[0] : title;
      this.setState({ title: title });
    }
  }]);

  return SnowflakeApp;
}(_react2.default.Component);

exports.default = SnowflakeApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbIlRyYWNrU2VsZWN0b3IiLCJOaWdodGluZ2FsZUNoYXJ0IiwiS2V5Ym9hcmRMaXN0ZW5lciIsIlRyYWNrIiwiV29yZG1hcmsiLCJMZXZlbFRoZXJtb21ldGVyIiwiZWxpZ2libGVUaXRsZXMiLCJ0cmFja0lkcyIsIm1pbGVzdG9uZXMiLCJtaWxlc3RvbmVUb1BvaW50cyIsIlBvaW50U3VtbWFyaWVzIiwiUmVhY3QiLCJUaXRsZVNlbGVjdG9yIiwiaGFzaFRvU3RhdGUiLCJoYXNoIiwicmVzdWx0IiwiZGVmYXVsdFN0YXRlIiwiaGFzaFZhbHVlcyIsInNwbGl0IiwiZm9yRWFjaCIsInRyYWNrSWQiLCJpIiwibWlsZXN0b25lQnlUcmFjayIsImNvZXJjZU1pbGVzdG9uZSIsIk51bWJlciIsIm5hbWUiLCJkZWNvZGVVUkkiLCJ0aXRsZSIsInZhbHVlIiwiZW1wdHlTdGF0ZSIsImZvY3VzZWRUcmFja0lkIiwic3RhdGVUb0hhc2giLCJzdGF0ZSIsInZhbHVlcyIsIm1hcCIsImNvbmNhdCIsImVuY29kZVVSSSIsImpvaW4iLCJTbm93Zmxha2VBcHAiLCJwcm9wcyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInNldFN0YXRlIiwibWFyZ2luIiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleCIsImUiLCJ0YXJnZXQiLCJzZXRUaXRsZSIsInRyYWNrIiwibWlsZXN0b25lIiwiaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UiLCJzZXRGb2N1c2VkVHJhY2tJZCIsImJpbmQiLCJzaGlmdEZvY3VzZWRUcmFjayIsInNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YSIsInBhZGRpbmdCb3R0b20iLCJ0aXRsZXMiLCJpbmRleE9mIiwiZGVsdGEiLCJpbmRleCIsImxlbmd0aCIsInByZXZNaWxlc3RvbmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBakIsQUFBMEIsVUFBVSxvQkFBNUMsQUFBcUQsQUFDckQ7VUFBTSxpQkFBaUIsb0JBQXZCLEFBQXVCLEFBQVMsQUFDaEM7V0FBQSxBQUFLLFNBQVMsRUFBRSxnQkFBaEIsQUFBYyxBQUNmOzs7O3NDLEFBRWlCLFNBQWtCLEFBQ2xDO1VBQUksUUFBUSxvQkFBQSxBQUFTLFFBQXJCLEFBQVksQUFBaUIsQUFDN0I7VUFBTSxpQkFBaUIsb0JBQXZCLEFBQXVCLEFBQVMsQUFDaEM7V0FBQSxBQUFLLFNBQVMsRUFBRSxnQkFBaEIsQUFBYyxBQUNmOzs7O3NELEFBRWlDLE9BQWUsQUFDL0M7VUFBSSxnQkFBZ0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBaUIsS0FBQSxBQUFLLE1BQXJELEFBQW9CLEFBQXVDLEFBQzNEO1VBQUksWUFBWSxnQkFBaEIsQUFBZ0MsQUFDaEM7VUFBSSxZQUFKLEFBQWdCLEdBQUcsWUFBQSxBQUFZLEFBQy9CO1VBQUksWUFBSixBQUFnQixHQUFHLFlBQUEsQUFBWSxBQUMvQjtXQUFBLEFBQUssMkJBQTJCLEtBQUEsQUFBSyxNQUFyQyxBQUEyQyxnQkFBM0MsQUFBMkQsQUFDNUQ7Ozs7NkJBRVEsQSxPQUFlLEFBQ3RCO1VBQUksU0FBUywrQkFBZSxLQUFBLEFBQUssTUFBakMsQUFBYSxBQUEwQixBQUN2QztjQUFRLE9BQUEsQUFBTyxRQUFQLEFBQWUsVUFBVSxDQUF6QixBQUEwQixJQUFJLE9BQTlCLEFBQThCLEFBQU8sS0FBN0MsQUFBa0QsQUFDbEQ7V0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFoQixBQUFjLEFBQ2Y7Ozs7O0VBNUl3QixnQkFBTSxBLEFBK0lqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJTbm93Zmxha2VBcHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JhY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvc25vd2ZsYWtlIn0=