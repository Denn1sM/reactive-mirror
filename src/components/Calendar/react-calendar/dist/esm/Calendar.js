import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';
import Navigation from './Calendar/Navigation';
import CenturyView from './CenturyView';
import DecadeView from './DecadeView';
import YearView from './YearView';
import MonthView from './MonthView';
import {
  getBegin, getBeginNext, getEnd, getValueRange,
} from './shared/dates';
import {
  isCalendarType, isClassName, isMaxDate, isMinDate, isRef, isValue, isView,
} from './shared/propTypes';
import { between } from './shared/utils';

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  const hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    const Super = _getPrototypeOf(Derived); let
      result;
    if (hasNativeReflectConstruct) {
      const NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], () => {
    }));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

const defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
const defaultMaxDate = new Date(8.64e15);
const baseClassName = 'react-calendar';
const allViews = ['century', 'decade', 'year', 'month'];
const allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

function toDate(value) {
  if (value instanceof Date) {
    return value;
  }

  return new Date(value);
}

/**
 * Returns views array with disallowed values cut off.
 */

function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}

/**
 * Determines whether a given view is allowed with currently applied settings.
 */

function isViewAllowed(view, minDetail, maxDetail) {
  const views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}

/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */

function getView(view, minDetail, maxDetail) {
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }

  return maxDetail;
}

/**
 * Returns value type that can be returned with currently applied settings.
 */

function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
}

function getValue(value, index) {
  if (!value) {
    return null;
  }

  const rawValue = Array.isArray(value) && value.length === 2 ? value[index] : value;

  if (!rawValue) {
    return null;
  }

  const valueDate = toDate(rawValue);

  if (isNaN(valueDate.getTime())) {
    throw new Error('Invalid date: '.concat(value));
  }

  return valueDate;
}

function getDetailValue(_ref, index) {
  const { value } = _ref;
  const { minDate } = _ref;
  const { maxDate } = _ref;
  const { maxDetail } = _ref;
  const valuePiece = getValue(value, index);

  if (!valuePiece) {
    return null;
  }

  const valueType = getValueType(maxDetail);
  const detailValueFrom = [getBegin, getEnd][index](valueType, valuePiece);
  return between(detailValueFrom, minDate, maxDate);
}

const getDetailValueFrom = function getDetailValueFrom(args) {
  return getDetailValue(args, 0);
};

const getDetailValueTo = function getDetailValueTo(args) {
  return getDetailValue(args, 1);
};

const getDetailValueArray = function getDetailValueArray(args) {
  const { value } = args;

  if (Array.isArray(value)) {
    return value;
  }

  return [getDetailValueFrom, getDetailValueTo].map((fn) => fn(args));
};

function getActiveStartDate(props) {
  const { maxDate } = props;
  const { maxDetail } = props;
  const { minDate } = props;
  const { minDetail } = props;
  const { value } = props;
  const { view } = props;
  const rangeType = getView(view, minDetail, maxDetail);
  const valueFrom = getDetailValueFrom({
    value,
    minDate,
    maxDate,
    maxDetail,
  }) || new Date();
  return getBegin(rangeType, valueFrom);
}

function getInitialActiveStartDate(props) {
  const { activeStartDate } = props;
  const { defaultActiveStartDate } = props;
  const { defaultValue } = props;
  const { defaultView } = props;
  const { maxDetail } = props;
  const { minDetail } = props;
  const { value } = props;
  const { view } = props;
  const otherProps = _objectWithoutProperties(props, ['activeStartDate', 'defaultActiveStartDate', 'defaultValue', 'defaultView', 'maxDetail', 'minDetail', 'value', 'view']);

  const rangeType = getView(view, minDetail, maxDetail);
  const valueFrom = activeStartDate || defaultActiveStartDate;

  if (valueFrom) {
    return getBegin(rangeType, valueFrom);
  }

  return getActiveStartDate(_objectSpread({
    maxDetail,
    minDetail,
    value: value || defaultValue,
    view: view || defaultView,
  }, otherProps));
}

const getIsSingleValue = function getIsSingleValue(value) {
  return value && [].concat(value).length === 1;
};

const Calendar = /* #__PURE__ */(function (_Component) {
  _inherits(Calendar, _Component);

  const _super = _createSuper(Calendar);

  function Calendar() {
    let _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), 'state', {
      /* eslint-disable react/destructuring-assignment */
      activeStartDate: _this.props.defaultActiveStartDate,
      value: _this.props.defaultValue,
      view: _this.props.defaultView,
      /* eslint-enable react/destructuring-assignment */

    });

    _defineProperty(_assertThisInitialized(_this), 'setStateAndCallCallbacks', (nextState, event, callback) => {
      const _assertThisInitialize = _assertThisInitialized(_this);
      const previousActiveStartDate = _assertThisInitialize.activeStartDate;
      const previousView = _assertThisInitialize.view;

      const _this$props = _this.props;
      const { allowPartialRange } = _this$props;
      const { onActiveStartDateChange } = _this$props;
      const { onChange } = _this$props;
      const { onViewChange } = _this$props;
      const { selectRange } = _this$props;
      const prevArgs = {
        activeStartDate: previousActiveStartDate,
        view: previousView,
      };

      _this.setState(nextState, () => {
        const args = {
          activeStartDate: nextState.activeStartDate || _this.activeStartDate,
          value: nextState.value || _this.value,
          view: nextState.view || _this.view,
        };

        function shouldUpdate(key) {
          return (// Key must exist, and…
            key in nextState && ( // …key changed from undefined to defined or the other way around, or…
              _typeof(nextState[key]) !== _typeof(prevArgs[key]) // …value changed.
                            || (nextState[key] instanceof Date ? nextState[key].getTime() !== prevArgs[key].getTime() : nextState[key] !== prevArgs[key]))
          );
        }

        if (shouldUpdate('activeStartDate')) {
          if (onActiveStartDateChange) onActiveStartDateChange(args);
        }

        if (shouldUpdate('view')) {
          if (onViewChange) onViewChange(args);
        }

        if (shouldUpdate('value')) {
          if (onChange) {
            if (selectRange) {
              const isSingleValue = getIsSingleValue(nextState.value);

              if (!isSingleValue) {
                onChange(nextState.value, event);
              } else if (allowPartialRange) {
                onChange([nextState.value], event);
              }
            } else {
              onChange(nextState.value, event);
            }
          }
        }

        if (callback) callback(args);
      });
    });

    _defineProperty(_assertThisInitialized(_this), 'setActiveStartDate', (activeStartDate) => {
      _this.setStateAndCallCallbacks({
        activeStartDate,
      });
    });

    _defineProperty(_assertThisInitialized(_this), 'drillDown', (nextActiveStartDate, event) => {
      if (!_this.drillDownAvailable) {
        return;
      }

      _this.onClickTile(nextActiveStartDate, event);

      const _assertThisInitialize2 = _assertThisInitialized(_this);
      const { view } = _assertThisInitialize2;
      const { views } = _assertThisInitialize2;

      const { onDrillDown } = _this.props;
      const nextView = views[views.indexOf(view) + 1];

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        view: nextView,
      }, undefined, onDrillDown);
    });

    _defineProperty(_assertThisInitialized(_this), 'drillUp', () => {
      if (!_this.drillUpAvailable) {
        return;
      }

      const _assertThisInitialize3 = _assertThisInitialized(_this);
      const { activeStartDate } = _assertThisInitialize3;
      const { view } = _assertThisInitialize3;
      const { views } = _assertThisInitialize3;

      const { onDrillUp } = _this.props;
      const nextView = views[views.indexOf(view) - 1];
      const nextActiveStartDate = getBegin(nextView, activeStartDate);

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        view: nextView,
      }, undefined, onDrillUp);
    });

    _defineProperty(_assertThisInitialized(_this), 'onChange', (value, event) => {
      const { selectRange } = _this.props;

      _this.onClickTile(value, event);

      let nextValue;

      if (selectRange) {
        // Range selection turned on
        const _assertThisInitialize4 = _assertThisInitialized(_this);
        const previousValue = _assertThisInitialize4.value;
        const { valueType } = _assertThisInitialize4;

        if (!getIsSingleValue(previousValue)) {
          // Value has 0 or 2 elements - either way we're starting a new array
          // First value
          nextValue = getBegin(valueType, value);
        } else {
          // Second value
          nextValue = getValueRange(valueType, previousValue, value);
        }
      } else {
        // Range selection turned off
        nextValue = _this.getProcessedValue(value);
      }

      const nextActiveStartDate = getActiveStartDate(_objectSpread(_objectSpread({}, _this.props), {}, {
        value: nextValue,
      }));
      event.persist();

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        value: nextValue,
      }, event);
    });

    _defineProperty(_assertThisInitialized(_this), 'onClickTile', (value, event) => {
      const _assertThisInitialize5 = _assertThisInitialized(_this);
      const { view } = _assertThisInitialize5;

      const _this$props2 = _this.props;
      const { onClickDay } = _this$props2;
      const { onClickDecade } = _this$props2;
      const { onClickMonth } = _this$props2;
      const { onClickYear } = _this$props2;

      const callback = (function () {
        switch (view) {
          case 'century':
            return onClickDecade;

          case 'decade':
            return onClickYear;

          case 'year':
            return onClickMonth;

          case 'month':
            return onClickDay;

          default:
            throw new Error('Invalid view: '.concat(view, '.'));
        }
      }());

      if (callback) callback(value, event);
    });

    _defineProperty(_assertThisInitialized(_this), 'onMouseOver', (value) => {
      _this.setState((prevState) => {
        if (prevState.hover && prevState.hover.getTime() === value.getTime()) {
          return null;
        }

        return {
          hover: value,
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), 'onMouseLeave', () => {
      _this.setState({
        hover: null,
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: 'getProcessedValue',

    /**
         * Gets current value in a desired format.
         */
    value: function getProcessedValue(value) {
      const _this$props3 = this.props;
      const { minDate } = _this$props3;
      const { maxDate } = _this$props3;
      const { maxDetail } = _this$props3;
      const { returnValue } = _this$props3;

      const processFunction = (function () {
        switch (returnValue) {
          case 'start':
            return getDetailValueFrom;

          case 'end':
            return getDetailValueTo;

          case 'range':
            return getDetailValueArray;

          default:
            throw new Error('Invalid returnValue.');
        }
      }());

      return processFunction({
        value,
        minDate,
        maxDate,
        maxDetail,
      });
    },
  }, {
    key: 'renderContent',
    value: function renderContent(next) {
      const currentActiveStartDate = this.activeStartDate;
      const { onMouseOver } = this;
      const { valueType } = this;
      const { value } = this;
      const { view } = this;
      const _this$props4 = this.props;
      const { calendarType } = _this$props4;
      const { locale } = _this$props4;
      const { maxDate } = _this$props4;
      const { minDate } = _this$props4;
      const { selectRange } = _this$props4;
      const { tileClassName } = _this$props4;
      const { tileContent } = _this$props4;
      const { tileDisabled } = _this$props4;
      const { hover } = this;
      const activeStartDate = next ? getBeginNext(view, currentActiveStartDate) : getBegin(view, currentActiveStartDate);
      const onClick = this.drillDownAvailable ? this.drillDown : this.onChange;
      const commonProps = {
        activeStartDate,
        hover,
        locale,
        maxDate,
        minDate,
        onClick,
        onMouseOver: selectRange ? onMouseOver : null,
        tileClassName,
        tileContent,
        tileDisabled,
        value,
        valueType,
      };

      switch (view) {
        case 'century': {
          const { formatYear } = this.props;
          return /* #__PURE__ */React.createElement(CenturyView, { formatYear, ...commonProps });
        }

        case 'decade': {
          const _formatYear = this.props.formatYear;
          return /* #__PURE__ */React.createElement(DecadeView, { formatYear: _formatYear, ...commonProps });
        }

        case 'year': {
          const _this$props5 = this.props;
          const { formatMonth } = _this$props5;
          const { formatMonthYear } = _this$props5;
          return /* #__PURE__ */React.createElement(YearView, {
            formatMonth,
            formatMonthYear,
            ...commonProps,
          });
        }

        case 'month': {
          const _this$props6 = this.props;
          const { formatLongDate } = _this$props6;
          const { formatShortWeekday } = _this$props6;
          const { onClickWeekNumber } = _this$props6;
          const { showDoubleView } = _this$props6;
          const { showFixedNumberOfWeeks } = _this$props6;
          const { showNeighboringMonth } = _this$props6;
          const { showWeekNumbers } = _this$props6;
          const { onMouseLeave } = this;
          return /* #__PURE__ */React.createElement(MonthView, {
            calendarType,
            formatLongDate,
            formatShortWeekday,
            onClickWeekNumber,
            onMouseLeave: selectRange ? onMouseLeave : null,
            showFixedNumberOfWeeks: showFixedNumberOfWeeks || showDoubleView,
            showNeighboringMonth,
            showWeekNumbers,
            ...commonProps,
          });
        }

        default:
          throw new Error('Invalid view: '.concat(view, '.'));
      }
    },
  }, {
    key: 'renderNavigation',
    value: function renderNavigation() {
      const { showNavigation } = this.props;

      if (!showNavigation) {
        return null;
      }

      const { activeStartDate } = this;
      const { view } = this;
      const { views } = this;
      const _this$props7 = this.props;
      const { formatMonthYear } = _this$props7;
      const { formatYear } = _this$props7;
      const { locale } = _this$props7;
      const { maxDate } = _this$props7;
      const { minDate } = _this$props7;
      const { navigationAriaLabel } = _this$props7;
      const { navigationLabel } = _this$props7;
      const { next2AriaLabel } = _this$props7;
      const { next2Label } = _this$props7;
      const { nextAriaLabel } = _this$props7;
      const { nextLabel } = _this$props7;
      const { prev2AriaLabel } = _this$props7;
      const { prev2Label } = _this$props7;
      const { prevAriaLabel } = _this$props7;
      const { prevLabel } = _this$props7;
      const { showDoubleView } = _this$props7;
      return /* #__PURE__ */React.createElement(Navigation, {
        activeStartDate,
        drillUp: this.drillUp,
        formatMonthYear,
        formatYear,
        locale,
        maxDate,
        minDate,
        navigationAriaLabel,
        navigationLabel,
        next2AriaLabel,
        next2Label,
        nextAriaLabel,
        nextLabel,
        prev2AriaLabel,
        prev2Label,
        prevAriaLabel,
        prevLabel,
        setActiveStartDate: this.setActiveStartDate,
        showDoubleView,
        view,
        views,
      });
    },
  }, {
    key: 'render',
    value: function render() {
      const _this$props8 = this.props;
      const { className } = _this$props8;
      const { inputRef } = _this$props8;
      const { selectRange } = _this$props8;
      const { showDoubleView } = _this$props8;
      const { onMouseLeave } = this;
      const { value } = this;
      const valueArray = [].concat(value);
      return /* #__PURE__ */React.createElement('div', {
        className: mergeClassNames(baseClassName, selectRange && valueArray.length === 1 && ''.concat(baseClassName, '--selectRange'), showDoubleView && ''.concat(baseClassName, '--doubleView'), className),
        ref: inputRef,
      }, this.renderNavigation(), /* #__PURE__ */React.createElement('div', {
        className: ''.concat(baseClassName, '__viewContainer'),
        onBlur: selectRange ? onMouseLeave : null,
        onMouseLeave: selectRange ? onMouseLeave : null,
      }, this.renderContent(), showDoubleView && this.renderContent(true)));
    },
  }, {
    key: 'activeStartDate',
    get: function get() {
      const activeStartDateProps = this.props.activeStartDate;
      const activeStartDateState = this.state.activeStartDate;
      return activeStartDateProps || activeStartDateState || getInitialActiveStartDate(this.props);
    },
  }, {
    key: 'value',
    get: function get() {
      const _this$props9 = this.props;
      const { selectRange } = _this$props9;
      const valueProps = _this$props9.value;
      const valueState = this.state.value; // In the middle of range selection, use value from state

      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }

      return valueProps !== undefined ? valueProps : valueState;
    },
  }, {
    key: 'valueType',
    get: function get() {
      const { maxDetail } = this.props;
      return getValueType(maxDetail);
    },
  }, {
    key: 'view',
    get: function get() {
      const _this$props10 = this.props;
      const { minDetail } = _this$props10;
      const { maxDetail } = _this$props10;
      const viewProps = _this$props10.view;
      const viewState = this.state.view;
      return getView(viewProps || viewState, minDetail, maxDetail);
    },
  }, {
    key: 'views',
    get: function get() {
      const _this$props11 = this.props;
      const { minDetail } = _this$props11;
      const { maxDetail } = _this$props11;
      return getLimitedViews(minDetail, maxDetail);
    },
  }, {
    key: 'hover',
    get: function get() {
      const { selectRange } = this.props;
      const { hover } = this.state;
      return selectRange ? hover : null;
    },
  }, {
    key: 'drillDownAvailable',
    get: function get() {
      const { view } = this;
      const { views } = this;
      return views.indexOf(view) < views.length - 1;
    },
  }, {
    key: 'drillUpAvailable',
    get: function get() {
      const { view } = this;
      const { views } = this;
      return views.indexOf(view) > 0;
    },
  }]);

  return Calendar;
}(Component));

export { Calendar as default };
Calendar.defaultProps = {
  maxDate: defaultMaxDate,
  maxDetail: 'month',
  minDate: defaultMinDate,
  minDetail: 'century',
  returnValue: 'start',
  showNavigation: true,
  showNeighboringMonth: true,
};
const isActiveStartDate = PropTypes.instanceOf(Date);
const isLooseValue = PropTypes.oneOfType([PropTypes.string, isValue]);
Calendar.propTypes = {
  activeStartDate: isActiveStartDate,
  allowPartialRange: PropTypes.bool,
  calendarType: isCalendarType,
  className: isClassName,
  defaultActiveStartDate: isActiveStartDate,
  defaultValue: isLooseValue,
  defaultView: isView,
  formatLongDate: PropTypes.func,
  formatMonth: PropTypes.func,
  formatMonthYear: PropTypes.func,
  formatShortWeekday: PropTypes.func,
  formatYear: PropTypes.func,
  inputRef: isRef,
  locale: PropTypes.string,
  maxDate: isMaxDate,
  maxDetail: PropTypes.oneOf(allViews),
  minDate: isMinDate,
  minDetail: PropTypes.oneOf(allViews),
  navigationAriaLabel: PropTypes.string,
  navigationLabel: PropTypes.func,
  next2AriaLabel: PropTypes.string,
  next2Label: PropTypes.node,
  nextAriaLabel: PropTypes.string,
  nextLabel: PropTypes.node,
  onActiveStartDateChange: PropTypes.func,
  onChange: PropTypes.func,
  onClickDay: PropTypes.func,
  onClickDecade: PropTypes.func,
  onClickMonth: PropTypes.func,
  onClickWeekNumber: PropTypes.func,
  onClickYear: PropTypes.func,
  onDrillDown: PropTypes.func,
  onDrillUp: PropTypes.func,
  onViewChange: PropTypes.func,
  prev2AriaLabel: PropTypes.string,
  prev2Label: PropTypes.node,
  prevAriaLabel: PropTypes.string,
  prevLabel: PropTypes.node,
  returnValue: PropTypes.oneOf(['start', 'end', 'range']),
  selectRange: PropTypes.bool,
  showDoubleView: PropTypes.bool,
  showFixedNumberOfWeeks: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showNeighboringMonth: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  tileClassName: PropTypes.oneOfType([PropTypes.func, isClassName]),
  tileContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  tileDisabled: PropTypes.func,
  value: isLooseValue,
  view: isView,
};
