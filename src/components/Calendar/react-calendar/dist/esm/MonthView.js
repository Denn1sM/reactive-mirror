import React from 'react';
import PropTypes from 'prop-types';
import Days from './MonthView/Days';
import Weekdays from './MonthView/Weekdays';
import WeekNumbers from './MonthView/WeekNumbers';
import { CALENDAR_TYPE_LOCALES, CALENDAR_TYPES } from './shared/const';
import { isCalendarType } from './shared/propTypes';

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

function getCalendarTypeFromLocale(locale) {
  return Object.keys(CALENDAR_TYPE_LOCALES).find((calendarType) => CALENDAR_TYPE_LOCALES[calendarType].includes(locale)) || CALENDAR_TYPES.ISO_8601;
}

export default function MonthView(props) {
  const { activeStartDate } = props;
  const { locale } = props;
  const { onMouseLeave } = props;
  const { showFixedNumberOfWeeks } = props;

  const _props$calendarType = props.calendarType;
  const calendarType = _props$calendarType === void 0 ? getCalendarTypeFromLocale(locale) : _props$calendarType;
  const { formatShortWeekday } = props;
  const { onClickWeekNumber } = props;
  const { showWeekNumbers } = props;
  const childProps = _objectWithoutProperties(props, ['calendarType', 'formatShortWeekday', 'onClickWeekNumber', 'showWeekNumbers']);

  function renderWeekdays() {
    return /* #__PURE__ */React.createElement(Weekdays, {
      calendarType,
      formatShortWeekday,
      locale,
      onMouseLeave,
    });
  }

  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }

    return /* #__PURE__ */React.createElement(WeekNumbers, {
      activeStartDate,
      calendarType,
      onClickWeekNumber,
      onMouseLeave,
      showFixedNumberOfWeeks,
    });
  }

  function renderDays() {
    return /* #__PURE__ */React.createElement(Days, { calendarType, ...childProps });
  }

  const className = 'react-calendar__month-view';
  return /* #__PURE__ */React.createElement('div', {
    className: [className, showWeekNumbers ? ''.concat(className, '--weekNumbers') : ''].join(' '),
  }, /* #__PURE__ */React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
    },
  }, renderWeekNumbers(), /* #__PURE__ */React.createElement('div', {
    style: {
      flexGrow: 1,
      width: '100%',
    },
  }, renderWeekdays(), renderDays())));
}
MonthView.propTypes = {
  activeStartDate: PropTypes.instanceOf(Date).isRequired,
  calendarType: isCalendarType,
  formatShortWeekday: PropTypes.func,
  locale: PropTypes.string,
  onClickWeekNumber: PropTypes.func,
  onMouseLeave: PropTypes.func,
  showFixedNumberOfWeeks: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
};
