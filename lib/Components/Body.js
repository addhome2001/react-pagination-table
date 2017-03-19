'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable react/no-array-index-key */


var Body = function Body() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$arrayOption = _ref.arrayOption,
      arrayOption = _ref$arrayOption === undefined ? [] : _ref$arrayOption,
      _ref$columns = _ref.columns,
      columns = _ref$columns === undefined ? '' : _ref$columns,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data;

  var handleOptionVal = _utils2.default.apply(undefined, _toConsumableArray(arrayOption));
  var arrProp = arrayOption[0];
  var columnsArr = void 0;

  if (data.length <= 0) throw new Error('Can\'t reslove data property.');

  if (columns.split && columns.length > 0) {
    columnsArr = columns.split('.');
  } else {
    throw new Error('Can\'t reslove columns property.');
  }

  return data.map(function (single, i) {
    var optionResult = handleOptionVal && handleOptionVal(single);
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
  columns: _react.PropTypes.string.isRequire,
  data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequire
};

exports.default = Body;