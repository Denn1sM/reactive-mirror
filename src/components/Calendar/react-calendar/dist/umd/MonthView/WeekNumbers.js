Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = WeekNumbers;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _dateUtils = require('@wojtekmaj/date-utils');

const _WeekNumber = _interopRequireDefault(require('./WeekNumber'));

const _Flex = _interopRequireDefault(require('../Flex'));

const _dates = require('../shared/dates');

const _propTypes2 = require('../shared/propTypes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function WeekNumbers(props) {
  const { activeStartDate } = props;
  const { calendarType } = props;
  const { onClickWeekNumber } = props;
  const { onMouseLeave } = props;
  const { showFixedNumberOfWeeks } = props;

  const numberOfWeeks = (function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }

    const numberOfDays = (0, _dateUtils.getDaysInMonth)(activeStartDate);
    const startWeekday = (0, _dates.getDayOfWeek)(activeStartDate, calendarType);
    const days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }());

  const dates = (function () {
    const year = (0, _dateUtils.getYear)(activeStartDate);
    const monthIndex = (0, _dateUtils.getMonth)(activeStartDate);
    const day = (0, _dateUtils.getDate)(activeStartDate);
    const result = [];

    for (let index = 0; index < numberOfWeeks; index += 1) {
      result.push((0, _dates.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
    }

    return result;
  }());

  const weekNumbers = dates.map((date) => (0, _dates.getWeekNumber)(date, calendarType));
  return /* #__PURE__ */_react.default.createElement(_Flex.default, {
    className: 'react-calendar__month-view__weekNumbers',
    count: numberOfWeeks,
    direction: 'column',
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
    style: {
      flexBasis: 'calc(100% * (1 / 8)',
      flexShrink: 0,
    },
  }, weekNumbers.map((weekNumber, weekIndex) =>
  /* #__PURE__ */_react.default.createElement(_WeekNumber.default, {
      key: weekNumber,
      date: dates[weekIndex],
      onClickWeekNumber,
      weekNumber,
    })));
}

WeekNumbers.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  calendarType: _propTypes2.isCalendarType.isRequired,
  onClickWeekNumber: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  showFixedNumberOfWeeks: _propTypes.default.bool,
};
