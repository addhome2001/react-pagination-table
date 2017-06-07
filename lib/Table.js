'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Titles = require('./Components/Titles');

var _Titles2 = _interopRequireDefault(_Titles);

var _Header = require('./Components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Components/Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableSimple = function (_Component) {
  _inherits(TableSimple, _Component);

  function TableSimple() {
    _classCallCheck(this, TableSimple);

    return _possibleConstructorReturn(this, (TableSimple.__proto__ || Object.getPrototypeOf(TableSimple)).apply(this, arguments));
  }

  _createClass(TableSimple, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headers = _props.headers,
          className = _props.className,
          title = _props.title,
          subTitle = _props.subTitle,
          arrayOption = _props.arrayOption,
          columns = _props.columns,
          data = _props.data;

      var Table = (0, _Body2.default)({ arrayOption: arrayOption, columns: columns, data: data });
      var Title = (0, _Titles2.default)({ title: title, subTitle: subTitle });

      return _react2.default.createElement(
        'div',
        { className: className },
        Title,
        _react2.default.createElement(
          'table',
          { className: 'table' },
          _react2.default.createElement(_Header2.default, { headers: headers }),
          _react2.default.createElement(
            'tbody',
            null,
            Table
          )
        )
      );
    }
  }]);

  return TableSimple;
}(_react.Component);

TableSimple.propTypes = {
  title: _propTypes2.default.string,
  subTitle: _propTypes2.default.string,
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  columns: _propTypes2.default.string.isRequired,
  headers: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  arrayOption: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string)),
  className: _propTypes2.default.string
};
TableSimple.defaultProps = {
  title: '',
  subTitle: '',
  arrayOption: [''],
  className: 'react-pagination-table'
};
exports.default = TableSimple;