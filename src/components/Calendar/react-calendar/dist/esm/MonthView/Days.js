import React from 'react';
import PropTypes from 'prop-types';
import { getDaysInMonth, getMonth, getYear } from '@wojtekmaj/date-utils';
import TileGroup from '../TileGroup';
import Day from './Day';
import { getDayOfWeek } from '../shared/dates';
import { isCalendarType, tileGroupProps } from '../shared/propTypes';

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable);
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach((key) => {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach((key) => {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value, enumerable: true, configurable: true, writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  const target = _objectWithoutPropertiesLoose(source, excluded);
  let key; let
    i;
  if (Object.getOwnPropertySymbols) {
    const sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  const target = {};
  const sourceKeys = Object.keys(source);
  let key; let
    i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

export default function Days(props) {
  const { activeStartDate } = props;
  const { calendarType } = props;

  const { showFixedNumberOfWeeks } = props;
  const { showNeighboringMonth } = props;
  const otherProps = _objectWithoutProperties(props, ['showFixedNumberOfWeeks', 'showNeighboringMonth']);

  const year = getYear(activeStartDate);
  const monthIndex = getMonth(activeStartDate);
  const hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  const dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
  const offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */

  const start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */

  const end = (function () {
    if (showFixedNumberOfWeeks) {
      // Always show 6 weeks
      return start + 6 * 7 - 1;
    }

    const daysInMonth = getDaysInMonth(activeStartDate);

    if (showNeighboringMonth) {
      const activeEndDate = new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      const daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }

    return daysInMonth;
  }());

  return /* #__PURE__ */React.createElement(TileGroup, {
    ...otherProps,
    className: 'react-calendar__month-view__days',
    count: 7,
    currentMonthIndex: monthIndex,
    dateTransform: function dateTransform(day) {
      const date = new Date();
      date.setFullYear(year, monthIndex, day);
      date.setHours(0, 0, 0, 0);
      return date;
    },
    dateType: 'day',
    end,
    offset,
    start,
    tile: Day,
  });
}
Days.propTypes = _objectSpread({
  calendarType: isCalendarType.isRequired,
  showFixedNumberOfWeeks: PropTypes.bool,
  showNeighboringMonth: PropTypes.bool,
}, tileGroupProps);
