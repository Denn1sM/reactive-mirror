Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.tileProps = exports.tileGroupProps = exports.isView = exports.isViews = exports.isValue = exports.isRef = exports.isMaxDate = exports.isMinDate = exports.isClassName = exports.isCalendarType = void 0;

const _propTypes = _interopRequireDefault(require('prop-types'));

const _const = require('./const');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
  }
  return _typeof(obj);
}

const calendarTypes = Object.values(_const.CALENDAR_TYPES);
const allViews = ['century', 'decade', 'year', 'month'];

const isCalendarType = _propTypes.default.oneOf(calendarTypes);

exports.isCalendarType = isCalendarType;

const isClassName = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]);

exports.isClassName = isClassName;

const isMinDate = function isMinDate(props, propName, componentName) {
  const minDate = props[propName];

  if (!minDate) {
    return null;
  }

  if (!(minDate instanceof Date)) {
    return new Error('Invalid prop `'.concat(propName, '` of type `').concat(_typeof(minDate), '` supplied to `').concat(componentName, '`, expected instance of `Date`.'));
  }

  const { maxDate } = props;

  if (maxDate && minDate > maxDate) {
    return new Error('Invalid prop `'.concat(propName, '` of type `').concat(_typeof(minDate), '` supplied to `').concat(componentName, '`, minDate cannot be larger than maxDate.'));
  }

  return null;
};

exports.isMinDate = isMinDate;

const isMaxDate = function isMaxDate(props, propName, componentName) {
  const maxDate = props[propName];

  if (!maxDate) {
    return null;
  }

  if (!(maxDate instanceof Date)) {
    return new Error('Invalid prop `'.concat(propName, '` of type `').concat(_typeof(maxDate), '` supplied to `').concat(componentName, '`, expected instance of `Date`.'));
  }

  const { minDate } = props;

  if (minDate && maxDate < minDate) {
    return new Error('Invalid prop `'.concat(propName, '` of type `').concat(_typeof(maxDate), '` supplied to `').concat(componentName, '`, maxDate cannot be smaller than minDate.'));
  }

  return null;
};

exports.isMaxDate = isMaxDate;

const isRef = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
  // eslint-disable-next-line react/forbid-prop-types
  current: _propTypes.default.any,
})]);

exports.isRef = isRef;

const isValue = _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date))]);

exports.isValue = isValue;

const isViews = _propTypes.default.arrayOf(_propTypes.default.oneOf(allViews));

exports.isViews = isViews;

const isView = function isView(props, propName, componentName) {
  const view = props[propName];
  const { views } = props;
  const allowedViews = views || allViews;

  if (view !== undefined && allowedViews.indexOf(view) === -1) {
    return new Error('Invalid prop `'.concat(propName, '` of value `').concat(view, '` supplied to `').concat(componentName, '`, expected one of [').concat(allowedViews.map((a) => '"'.concat(a, '"')).join(', '), '].'));
  } // Everything is fine

  return null;
};

exports.isView = isView;

isView.isRequired = function (props, propName, componentName) {
  const view = props[propName];

  if (!view) {
    return new Error('The prop `'.concat(propName, '` is marked as required in `').concat(componentName, '`, but its value is `').concat(view, '`.'));
  }

  return isView(props, propName, componentName);
};

const tileGroupProps = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  hover: _propTypes.default.instanceOf(Date),
  locale: _propTypes.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, isClassName]),
  tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  value: isValue,
  valueType: _propTypes.default.string,
};
exports.tileGroupProps = tileGroupProps;
const tileProps = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  classes: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  date: _propTypes.default.instanceOf(Date).isRequired,
  locale: _propTypes.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, isClassName]),
  tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  tileDisabled: _propTypes.default.func,
};
exports.tileProps = tileProps;
