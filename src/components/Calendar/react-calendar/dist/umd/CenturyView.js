Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = CenturyView;

const _react = _interopRequireDefault(require('react'));

const _Decades = _interopRequireDefault(require('./CenturyView/Decades'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function CenturyView(props) {
  function renderDecades() {
    return /* #__PURE__ */_react.default.createElement(_Decades.default, props);
  }

  return /* #__PURE__ */_react.default.createElement('div', {
    className: 'react-calendar__century-view',
  }, renderDecades());
}
