'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(val) {
  return typeof val === 'string' && val.length > 0;
};


var Title = function Title(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle;
  return [validate(title) ? _react2.default.createElement(
    'h4',
    { key: 'box-title', className: 'title' },
    title
  ) : null, validate(subTitle) ? _react2.default.createElement(
    'h4',
    { key: 'box-sub-title', className: 'sub-title' },
    subTitle
  ) : null];
};

Title.propTypes = {
  title: _react.PropTypes.string,
  subTitle: _react.PropTypes.string
};

exports.default = Title;