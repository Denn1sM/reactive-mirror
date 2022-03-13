import React from 'react';
import PropTypes from 'prop-types';
import { getMonthEnd, getMonthStart } from '@wojtekmaj/date-utils';
import Tile from '../Tile';
import { formatMonth as defaultFormatMonth, formatMonthYear as defaultFormatMonthYear } from '../shared/dateFormatter';
import { tileProps } from '../shared/propTypes';

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

const className = 'react-calendar__year-view__months__month';
export default function Month(_ref) {
  const { classes } = _ref;
  const _ref$formatMonth = _ref.formatMonth;
  const formatMonth = _ref$formatMonth === void 0 ? defaultFormatMonth : _ref$formatMonth;
  const _ref$formatMonthYear = _ref.formatMonthYear;
  const formatMonthYear = _ref$formatMonthYear === void 0 ? defaultFormatMonthYear : _ref$formatMonthYear;
  const otherProps = _objectWithoutProperties(_ref, ['classes', 'formatMonth', 'formatMonthYear']);

  const { date } = otherProps;
  const { locale } = otherProps;
  return /* #__PURE__ */React.createElement(Tile, {
    ...otherProps,
    classes: [].concat(classes, className),
    formatAbbr: formatMonthYear,
    maxDateTransform: getMonthEnd,
    minDateTransform: getMonthStart,
    view: 'year',
  }, formatMonth(locale, date));
}
Month.propTypes = _objectSpread(_objectSpread({}, tileProps), {}, {
  formatMonth: PropTypes.func,
  formatMonthYear: PropTypes.func,
});
