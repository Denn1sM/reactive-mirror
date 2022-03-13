import React from 'react';
import PropTypes from 'prop-types';
import { getUserLocale } from 'get-user-locale';
import {
  getBeginNext,
  getBeginNext2,
  getBeginPrevious,
  getBeginPrevious2,
  getCenturyLabel,
  getDecadeLabel,
  getEndPrevious,
  getEndPrevious2,
} from '../shared/dates';
import { formatMonthYear as defaultFormatMonthYear, formatYear as defaultFormatYear } from '../shared/dateFormatter';
import { isView, isViews } from '../shared/propTypes';

const className = 'react-calendar__navigation';
export default function Navigation(_ref) {
  const { activeStartDate } = _ref;
  const { drillUp } = _ref;
  const _ref$formatMonthYear = _ref.formatMonthYear;
  const formatMonthYear = _ref$formatMonthYear === void 0 ? defaultFormatMonthYear : _ref$formatMonthYear;
  const _ref$formatYear = _ref.formatYear;
  const formatYear = _ref$formatYear === void 0 ? defaultFormatYear : _ref$formatYear;
  const { locale } = _ref;
  const { maxDate } = _ref;
  const { minDate } = _ref;
  const _ref$navigationAriaLa = _ref.navigationAriaLabel;
  const navigationAriaLabel = _ref$navigationAriaLa === void 0 ? '' : _ref$navigationAriaLa;
  const { navigationLabel } = _ref;
  const _ref$next2AriaLabel = _ref.next2AriaLabel;
  const next2AriaLabel = _ref$next2AriaLabel === void 0 ? '' : _ref$next2AriaLabel;
  const _ref$next2Label = _ref.next2Label;
  const next2Label = _ref$next2Label === void 0 ? '»' : _ref$next2Label;
  const _ref$nextAriaLabel = _ref.nextAriaLabel;
  const nextAriaLabel = _ref$nextAriaLabel === void 0 ? '' : _ref$nextAriaLabel;
  const _ref$nextLabel = _ref.nextLabel;
  const nextLabel = _ref$nextLabel === void 0 ? '›' : _ref$nextLabel;
  const _ref$prev2AriaLabel = _ref.prev2AriaLabel;
  const prev2AriaLabel = _ref$prev2AriaLabel === void 0 ? '' : _ref$prev2AriaLabel;
  const _ref$prev2Label = _ref.prev2Label;
  const prev2Label = _ref$prev2Label === void 0 ? '«' : _ref$prev2Label;
  const _ref$prevAriaLabel = _ref.prevAriaLabel;
  const prevAriaLabel = _ref$prevAriaLabel === void 0 ? '' : _ref$prevAriaLabel;
  const _ref$prevLabel = _ref.prevLabel;
  const prevLabel = _ref$prevLabel === void 0 ? '‹' : _ref$prevLabel;
  const { setActiveStartDate } = _ref;
  const { showDoubleView } = _ref;
  const { view } = _ref;
  const { views } = _ref;
  const drillUpAvailable = views.indexOf(view) > 0;
  const shouldShowPrevNext2Buttons = view !== 'century';
  const previousActiveStartDate = getBeginPrevious(view, activeStartDate);
  const previousActiveStartDate2 = shouldShowPrevNext2Buttons && getBeginPrevious2(view, activeStartDate);
  const nextActiveStartDate = getBeginNext(view, activeStartDate);
  const nextActiveStartDate2 = shouldShowPrevNext2Buttons && getBeginNext2(view, activeStartDate);

  const prevButtonDisabled = (function () {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }

    const previousActiveEndDate = getEndPrevious(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }());

  const prev2ButtonDisabled = shouldShowPrevNext2Buttons && (function () {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }

    const previousActiveEndDate = getEndPrevious2(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }());

  const nextButtonDisabled = maxDate && maxDate <= nextActiveStartDate;
  const next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate <= nextActiveStartDate2;

  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate);
  }

  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2);
  }

  function onClickNext() {
    setActiveStartDate(nextActiveStartDate);
  }

  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2);
  }

  function renderLabel(date) {
    const label = (function () {
      switch (view) {
        case 'century':
          return getCenturyLabel(locale, formatYear, date);

        case 'decade':
          return getDecadeLabel(locale, formatYear, date);

        case 'year':
          return formatYear(locale, date);

        case 'month':
          return formatMonthYear(locale, date);

        default:
          throw new Error('Invalid view: '.concat(view, '.'));
      }
    }());

    return navigationLabel ? navigationLabel({
      date,
      label,
      locale: locale || getUserLocale(),
      view,
    }) : label;
  }

  function renderButton() {
    const labelClassName = ''.concat(className, '__label');
    return /* #__PURE__ */React.createElement('button', {
      'aria-label': navigationAriaLabel,
      className: labelClassName,
      disabled: !drillUpAvailable,
      onClick: drillUp,
      style: {
        flexGrow: 1,
      },
      type: 'button',
    }, /* #__PURE__ */React.createElement('span', {
      className: ''.concat(labelClassName, '__labelText ').concat(labelClassName, '__labelText--from'),
    }, renderLabel(activeStartDate)), showDoubleView && /* #__PURE__ */React.createElement(React.Fragment, null, /* #__PURE__ */React.createElement('span', {
      className: ''.concat(labelClassName, '__divider'),
    }, ' ', '\u2013', ' '), /* #__PURE__ */React.createElement('span', {
      className: ''.concat(labelClassName, '__labelText ').concat(labelClassName, '__labelText--to'),
    }, renderLabel(nextActiveStartDate))));
  }

  return /* #__PURE__ */React.createElement('div', {
    className,
    style: {
      display: 'flex',
    },
  }, prev2Label !== null && shouldShowPrevNext2Buttons && /* #__PURE__ */React.createElement('button', {
    'aria-label': prev2AriaLabel,
    className: ''.concat(className, '__arrow ').concat(className, '__prev2-button'),
    disabled: prev2ButtonDisabled,
    onClick: onClickPrevious2,
    type: 'button',
  }, prev2Label), prevLabel !== null && /* #__PURE__ */React.createElement('button', {
    'aria-label': prevAriaLabel,
    className: ''.concat(className, '__arrow ').concat(className, '__prev-button'),
    disabled: prevButtonDisabled,
    onClick: onClickPrevious,
    type: 'button',
  }, prevLabel), renderButton(), nextLabel !== null && /* #__PURE__ */React.createElement('button', {
    'aria-label': nextAriaLabel,
    className: ''.concat(className, '__arrow ').concat(className, '__next-button'),
    disabled: nextButtonDisabled,
    onClick: onClickNext,
    type: 'button',
  }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons && /* #__PURE__ */React.createElement('button', {
    'aria-label': next2AriaLabel,
    className: ''.concat(className, '__arrow ').concat(className, '__next2-button'),
    disabled: next2ButtonDisabled,
    onClick: onClickNext2,
    type: 'button',
  }, next2Label));
}
Navigation.propTypes = {
  activeStartDate: PropTypes.instanceOf(Date).isRequired,
  drillUp: PropTypes.func.isRequired,
  formatMonthYear: PropTypes.func,
  formatYear: PropTypes.func,
  locale: PropTypes.string,
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  navigationAriaLabel: PropTypes.string,
  navigationLabel: PropTypes.func,
  next2AriaLabel: PropTypes.string,
  next2Label: PropTypes.node,
  nextAriaLabel: PropTypes.string,
  nextLabel: PropTypes.node,
  prev2AriaLabel: PropTypes.string,
  prev2Label: PropTypes.node,
  prevAriaLabel: PropTypes.string,
  prevLabel: PropTypes.node,
  setActiveStartDate: PropTypes.func.isRequired,
  showDoubleView: PropTypes.bool,
  view: isView.isRequired,
  views: isViews.isRequired,
};
