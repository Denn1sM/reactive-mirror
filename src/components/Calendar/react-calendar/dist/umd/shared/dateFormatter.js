Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.formatWeekday = exports.formatShortWeekday = exports.formatYear = exports.formatMonthYear = exports.formatMonth = exports.formatLongDate = exports.formatDate = void 0;

const _getUserLocale = _interopRequireDefault(require('get-user-locale'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale.default)(), options);
  };
}

/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */

function toSafeHour(date) {
  const safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

const formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};
const formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};
const formatMonthOptions = {
  month: 'long',
};
const formatMonthYearOptions = {
  month: 'long',
  year: 'numeric',
};
const formatYearOptions = {
  year: 'numeric',
};
const formatShortWeekdayOptions = {
  weekday: 'short',
};
const formatWeekdayOptions = {
  weekday: 'long',
};
const formatDate = getSafeFormatter(formatDateOptions);
exports.formatDate = formatDate;
const formatLongDate = getSafeFormatter(formatLongDateOptions);
exports.formatLongDate = formatLongDate;
const formatMonth = getSafeFormatter(formatMonthOptions);
exports.formatMonth = formatMonth;
const formatMonthYear = getSafeFormatter(formatMonthYearOptions);
exports.formatMonthYear = formatMonthYear;
const formatYear = getSafeFormatter(formatYearOptions);
exports.formatYear = formatYear;
const formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
exports.formatShortWeekday = formatShortWeekday;
const formatWeekday = getSafeFormatter(formatWeekdayOptions);
exports.formatWeekday = formatWeekday;
