import React from 'react';
import { getDecadeStart } from '@wojtekmaj/date-utils';
import TileGroup from '../TileGroup';
import Decade from './Decade';
import { getBeginOfCenturyYear } from '../shared/dates';
import { tileGroupProps } from '../shared/propTypes';

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

export default function Decades(props) {
  const { activeStartDate } = props;
  const start = getBeginOfCenturyYear(activeStartDate);
  const end = start + 99;
  return /* #__PURE__ */React.createElement(TileGroup, {
    ...props,
    className: 'react-calendar__century-view__decades',
    dateTransform: getDecadeStart,
    dateType: 'decade',
    end,
    start,
    step: 10,
    tile: Decade,
  });
}
Decades.propTypes = _objectSpread({}, tileGroupProps);
