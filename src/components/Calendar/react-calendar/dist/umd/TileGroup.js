Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = TileGroup;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _Flex = _interopRequireDefault(require('./Flex'));

const _utils = require('./shared/utils');

const _propTypes2 = require('./shared/propTypes');

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

function TileGroup(_ref) {
  const { className } = _ref;
  const _ref$count = _ref.count;
  const count = _ref$count === void 0 ? 3 : _ref$count;
  const { dateTransform } = _ref;
  const { dateType } = _ref;
  const { end } = _ref;
  const { hover } = _ref;
  const { offset } = _ref;
  const { start } = _ref;
  const _ref$step = _ref.step;
  const step = _ref$step === void 0 ? 1 : _ref$step;
  const Tile = _ref.tile;
  const { value } = _ref;
  const { valueType } = _ref;
  const tileProps = _objectWithoutProperties(_ref, ['className', 'count', 'dateTransform', 'dateType', 'end', 'hover', 'offset', 'start', 'step', 'tile', 'value', 'valueType']);

  const tiles = [];

  for (let point = start; point <= end; point += step) {
    const date = dateTransform(point);
    tiles.push(/* #__PURE__ */_react.default.createElement(Tile, {
      key: date.getTime(),
      classes: (0, _utils.getTileClasses)({
        value,
        valueType,
        date,
        dateType,
        hover,
      }),
      date,
      point,
      ...tileProps,
    }));
  }

  return /* #__PURE__ */_react.default.createElement(_Flex.default, {
    className,
    count,
    offset,
    wrap: true,
  }, tiles);
}

TileGroup.propTypes = _objectSpread(_objectSpread({}, _propTypes2.tileGroupProps), {}, {
  activeStartDate: _propTypes.default.instanceOf(Date),
  count: _propTypes.default.number,
  dateTransform: _propTypes.default.func.isRequired,
  offset: _propTypes.default.number,
  step: _propTypes.default.number,
  tile: _propTypes.default.func.isRequired,
});
