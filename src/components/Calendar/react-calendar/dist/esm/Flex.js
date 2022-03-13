import React from 'react';
import PropTypes from 'prop-types';

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

function toPercent(num) {
  return ''.concat(num, '%');
}

export default function Flex(_ref) {
  const { children } = _ref;
  const { className } = _ref;
  const { direction } = _ref;
  const { count } = _ref;
  const { offset } = _ref;
  const { style } = _ref;
  const { wrap } = _ref;
  const otherProps = _objectWithoutProperties(_ref, ['children', 'className', 'direction', 'count', 'offset', 'style', 'wrap']);

  return /* #__PURE__ */React.createElement('div', {
    className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'no-wrap',
    }, style),
    ...otherProps,
  }, React.Children.map(children, (child, index) =>
  /* #__PURE__ */React.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
      style: {
        flexBasis: toPercent(100 / count),
        maxWidth: toPercent(100 / count),
        overflow: 'hidden',
        marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null,
      },
    }))));
}
Flex.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.number.isRequired,
  direction: PropTypes.string,
  offset: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  wrap: PropTypes.bool,
};
