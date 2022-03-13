Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = MonthView;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _Days = _interopRequireDefault(require('./MonthView/Days'));

const _Weekdays = _interopRequireDefault(require('./MonthView/Weekdays'));

const _WeekNumbers = _interopRequireDefault(require('./MonthView/WeekNumbers'));

const _const = require('./shared/const');

const _propTypes2 = require('./shared/propTypes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

function getCalendarTypeFromLocale(locale) {
  return Object.keys(_const.CALENDAR_TYPE_LOCALES).find((calendarType) => _const.CALENDAR_TYPE_LOCALES[calendarType].includes(locale)) || _const.CALENDAR_TYPES.ISO_8601;
}

function MonthView(props) {
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
    return /* #__PURE__ */_react.default.createElement(_Weekdays.default, {
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

    return /* #__PURE__ */_react.default.createElement(_WeekNumbers.default, {
      activeStartDate,
      calendarType,
      onClickWeekNumber,
      onMouseLeave,
      showFixedNumberOfWeeks,
    });
  }

  function renderDays() {
    return /* #__PURE__ */_react.default.createElement(_Days.default, { calendarType, ...childProps });
  }

  const className = 'react-calendar__month-view';
  return /* #__PURE__ */_react.default.createElement('div', {
    className: [className, showWeekNumbers ? ''.concat(className, '--weekNumbers') : ''].join(' '),
  }, /* #__PURE__ */_react.default.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
    },
  }, renderWeekNumbers(), /* #__PURE__ */_react.default.createElement('div', {
    style: {
      flexGrow: 1,
      width: '100%',
    },
  }, renderWeekdays(), renderDays())));
}

MonthView.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  calendarType: _propTypes2.isCalendarType,
  formatShortWeekday: _propTypes.default.func,
  locale: _propTypes.default.string,
  onClickWeekNumber: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  showFixedNumberOfWeeks: _propTypes.default.bool,
  showWeekNumbers: _propTypes.default.bool,
};
