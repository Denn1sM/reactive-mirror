Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = Decades;

const _react = _interopRequireDefault(require('react'));

const _dateUtils = require('@wojtekmaj/date-utils');

const _TileGroup = _interopRequireDefault(require('../TileGroup'));

const _Decade = _interopRequireDefault(require('./Decade'));

const _dates = require('../shared/dates');

const _propTypes = require('../shared/propTypes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

function Decades(props) {
  const { activeStartDate } = props;
  const start = (0, _dates.getBeginOfCenturyYear)(activeStartDate);
  const end = start + 99;
  return /* #__PURE__ */_react.default.createElement(_TileGroup.default, {
    ...props,
    className: 'react-calendar__century-view__decades',
    dateTransform: _dateUtils.getDecadeStart,
    dateType: 'decade',
    end,
    start,
    step: 10,
    tile: _Decade.default,
  });
}

Decades.propTypes = _objectSpread({}, _propTypes.tileGroupProps);
