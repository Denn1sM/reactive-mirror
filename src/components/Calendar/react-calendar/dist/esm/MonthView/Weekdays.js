import React from 'react';
import PropTypes from 'prop-types';
import { getMonth, getMonthStart, getYear } from '@wojtekmaj/date-utils';
import Flex from '../Flex';
import { getDayOfWeek } from '../shared/dates';
import { formatShortWeekday as defaultFormatShortWeekday, formatWeekday } from '../shared/dateFormatter';
import { isCalendarType } from '../shared/propTypes';

const className = 'react-calendar__month-view__weekdays';
export default function Weekdays(props) {
  const { calendarType } = props;
  const _props$formatShortWee = props.formatShortWeekday;
  const formatShortWeekday = _props$formatShortWee === void 0 ? defaultFormatShortWeekday : _props$formatShortWee;
  const { locale } = props;
  const { onMouseLeave } = props;
  const anyDate = new Date();
  const beginOfMonth = getMonthStart(anyDate);
  const year = getYear(beginOfMonth);
  const monthIndex = getMonth(beginOfMonth);
  const weekdays = [];

  for (let weekday = 1; weekday <= 7; weekday += 1) {
    const weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    const abbr = formatWeekday(locale, weekdayDate);
    weekdays.push(/* #__PURE__ */React.createElement('div', {
      key: weekday,
      className: ''.concat(className, '__weekday'),
    }, /* #__PURE__ */React.createElement('abbr', {
      'aria-label': abbr,
      title: abbr,
    }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
  }

  return /* #__PURE__ */React.createElement(Flex, {
    className,
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
  }, weekdays);
}
Weekdays.propTypes = {
  calendarType: isCalendarType.isRequired,
  formatShortWeekday: PropTypes.func,
  locale: PropTypes.string,
  onMouseLeave: PropTypes.func,
};
