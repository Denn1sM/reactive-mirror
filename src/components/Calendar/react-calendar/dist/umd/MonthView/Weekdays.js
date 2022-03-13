Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = Weekdays;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _dateUtils = require('@wojtekmaj/date-utils');

const _Flex = _interopRequireDefault(require('../Flex'));

const _dates = require('../shared/dates');

const _dateFormatter = require('../shared/dateFormatter');

const _propTypes2 = require('../shared/propTypes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const className = 'react-calendar__month-view__weekdays';

function Weekdays(props) {
  const { calendarType } = props;
  const _props$formatShortWee = props.formatShortWeekday;
  const formatShortWeekday = _props$formatShortWee === void 0 ? _dateFormatter.formatShortWeekday : _props$formatShortWee;
  const { locale } = props;
  const { onMouseLeave } = props;
  const anyDate = new Date();
  const beginOfMonth = (0, _dateUtils.getMonthStart)(anyDate);
  const year = (0, _dateUtils.getYear)(beginOfMonth);
  const monthIndex = (0, _dateUtils.getMonth)(beginOfMonth);
  const weekdays = [];

  for (let weekday = 1; weekday <= 7; weekday += 1) {
    const weekdayDate = new Date(year, monthIndex, weekday - (0, _dates.getDayOfWeek)(beginOfMonth, calendarType));
    const abbr = (0, _dateFormatter.formatWeekday)(locale, weekdayDate);
    weekdays.push(/* #__PURE__ */_react.default.createElement('div', {
      key: weekday,
      className: ''.concat(className, '__weekday'),
    }, /* #__PURE__ */_react.default.createElement('abbr', {
      'aria-label': abbr,
      title: abbr,
    }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
  }

  return /* #__PURE__ */_react.default.createElement(_Flex.default, {
    className,
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
  }, weekdays);
}

Weekdays.propTypes = {
  calendarType: _propTypes2.isCalendarType.isRequired,
  formatShortWeekday: _propTypes.default.func,
  locale: _propTypes.default.string,
  onMouseLeave: _propTypes.default.func,
};
