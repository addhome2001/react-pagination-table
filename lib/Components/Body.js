'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable react/no-array-index-key */

var Body = function Body(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      arrayOption = _ref.arrayOption;

  var columnsArr = columns.split('.');
  var handleOptionVal = void 0;
  var arrProp = void 0;

  if (Array.isArray(arrayOption) && arrayOption.length > 0) {
    handleOptionVal = _helpers2.default.apply(undefined, _toConsumableArray(arrayOption));
    arrProp = arrayOption[0];
  }

  if (columnsArr.length === 0) {
    throw new Error('Can\'t reslove columns');
  }

  return data.map(function (single, i) {
    var optionResult = void 0;
    if (typeof handleOptionVal === 'function') {
      optionResult = handleOptionVal(single);
    }

    return _react2.default.createElement(
      'tr',
      { key: 'row-' + i },
      columnsArr.map(function (col) {
        return _react2.default.createElement(
          'td',
          { key: 'col-' + col },
          arrProp === col ? optionResult : single[col]
        );
      })
    );
  });
};

Body.propTypes = {
  arrayOption: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),
  columns: _react.PropTypes.string.isRequired,
  data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
};

exports.default = Body;