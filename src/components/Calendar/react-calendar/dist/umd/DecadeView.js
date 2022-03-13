Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = DecadeView;

const _react = _interopRequireDefault(require('react'));

const _Years = _interopRequireDefault(require('./DecadeView/Years'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function DecadeView(props) {
  function renderYears() {
    return /* #__PURE__ */_react.default.createElement(_Years.default, props);
  }

  return /* #__PURE__ */_react.default.createElement('div', {
    className: 'react-calendar__decade-view',
  }, renderYears());
}
