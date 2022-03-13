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

export default function WeekNumber(_ref) {
  const { date } = _ref;
  const { onClickWeekNumber } = _ref;
  const { weekNumber } = _ref;
  const props = {
    className: 'react-calendar__tile',
    style: {
      flexGrow: 1,
    },
  };
  const children = /* #__PURE__ */React.createElement('span', null, weekNumber);
  return onClickWeekNumber ? /* #__PURE__ */React.createElement('button', {
    ...props,
    onClick: function onClick(event) {
      return onClickWeekNumber(weekNumber, date, event);
    },
    type: 'button',
  }, children) : /* #__PURE__ */React.createElement('div', props, children);
}
WeekNumber.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onClickWeekNumber: PropTypes.func,
  weekNumber: PropTypes.node.isRequired,
};
