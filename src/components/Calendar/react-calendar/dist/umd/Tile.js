Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireWildcard(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _mergeClassNames = _interopRequireDefault(require('merge-class-names'));

const _propTypes2 = require('./shared/propTypes');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  const cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== 'object' && typeof obj !== 'function') {
    return { default: obj };
  }
  const cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  const newObj = {};
  const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
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

function getValue(nextProps, prop) {
  const { activeStartDate } = nextProps;
  const { date } = nextProps;
  const { view } = nextProps;
  return typeof prop === 'function' ? prop({
    activeStartDate,
    date,
    view,
  }) : prop;
}

const Tile = /* #__PURE__ */(function (_Component) {
  _inherits(Tile, _Component);

  const _super = _createSuper(Tile);

  function Tile() {
    let _this;

    _classCallCheck(this, Tile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), 'state', {});

    return _this;
  }

  _createClass(Tile, [{
    key: 'render',
    value: function render() {
      const _this$props = this.props;
      const { activeStartDate } = _this$props;
      const { children } = _this$props;
      const { classes } = _this$props;
      const { date } = _this$props;
      const { formatAbbr } = _this$props;
      const { locale } = _this$props;
      const { maxDate } = _this$props;
      const { maxDateTransform } = _this$props;
      const { minDate } = _this$props;
      const { minDateTransform } = _this$props;
      const { onClick } = _this$props;
      const { onMouseOver } = _this$props;
      const { style } = _this$props;
      const { tileDisabled } = _this$props;
      const { view } = _this$props;
      const _this$state = this.state;
      const { tileClassName } = _this$state;
      const { tileContent } = _this$state;
      return /* #__PURE__ */_react.default.createElement('button', {
        className: (0, _mergeClassNames.default)(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
          activeStartDate,
          date,
          view,
        }),
        onClick: onClick && function (event) {
          return onClick(date, event);
        },
        onFocus: onMouseOver && function () {
          return onMouseOver(date);
        },
        onMouseOver: onMouseOver && function () {
          return onMouseOver(date);
        },
        style,
        type: 'button',
      }, formatAbbr ? /* #__PURE__ */_react.default.createElement('abbr', {
        'aria-label': formatAbbr(locale, date),
      }, children) : children, tileContent);
    },
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      const { tileClassName } = nextProps;
      const { tileContent } = nextProps;
      const nextState = {};

      if (tileClassName !== prevState.tileClassNameProps) {
        nextState.tileClassName = getValue(nextProps, tileClassName);
        nextState.tileClassNameProps = tileClassName;
      }

      if (tileContent !== prevState.tileContentProps) {
        nextState.tileContent = getValue(nextProps, tileContent);
        nextState.tileContentProps = tileContent;
      }

      return nextState;
    },
  }]);

  return Tile;
}(_react.Component));

exports.default = Tile;
Tile.propTypes = _objectSpread(_objectSpread({}, _propTypes2.tileProps), {}, {
  children: _propTypes.default.node.isRequired,
  formatAbbr: _propTypes.default.func,
  maxDateTransform: _propTypes.default.func.isRequired,
  minDateTransform: _propTypes.default.func.isRequired,
});
