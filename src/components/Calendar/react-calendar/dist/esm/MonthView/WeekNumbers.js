import React from 'react';
import PropTypes from 'prop-types';
import {
  getDate, getDaysInMonth, getMonth, getYear,
} from '@wojtekmaj/date-utils';
import WeekNumber from './WeekNumber';
import Flex from '../Flex';
import { getBeginOfWeek, getDayOfWeek, getWeekNumber } from '../shared/dates';
import { isCalendarType } from '../shared/propTypes';

export default function WeekNumbers(props) {
  const { activeStartDate } = props;
  const { calendarType } = props;
  const { onClickWeekNumber } = props;
  const { onMouseLeave } = props;
  const { showFixedNumberOfWeeks } = props;

  const numberOfWeeks = (function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }

    const numberOfDays = getDaysInMonth(activeStartDate);
    const startWeekday = getDayOfWeek(activeStartDate, calendarType);
    const days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }());

  const dates = (function () {
    const year = getYear(activeStartDate);
    const monthIndex = getMonth(activeStartDate);
    const day = getDate(activeStartDate);
    const result = [];

    for (let index = 0; index < numberOfWeeks; index += 1) {
      result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
    }

    return result;
  }());

  const weekNumbers = dates.map((date) => getWeekNumber(date, calendarType));
  return /* #__PURE__ */React.createElement(Flex, {
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
  /* #__PURE__ */React.createElement(WeekNumber, {
      key: weekNumber,
      date: dates[weekIndex],
      onClickWeekNumber,
      weekNumber,
    })));
}
WeekNumbers.propTypes = {
  activeStartDate: PropTypes.instanceOf(Date).isRequired,
  calendarType: isCalendarType.isRequired,
  onClickWeekNumber: PropTypes.func,
  onMouseLeave: PropTypes.func,
  showFixedNumberOfWeeks: PropTypes.bool,
};
