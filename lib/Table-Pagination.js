'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPaginationStatus = require('react-pagination-status');

var _reactPaginationStatus2 = _interopRequireDefault(_reactPaginationStatus);

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

var TablePagination = function (_Component) {
  _inherits(TablePagination, _Component);

  function TablePagination(props) {
    _classCallCheck(this, TablePagination);

    var _this = _possibleConstructorReturn(this, (TablePagination.__proto__ || Object.getPrototypeOf(TablePagination)).call(this, props));

    _this.state = {
      activePage: 0,
      pageCount: Math.ceil(props.totalCount / props.perPageItemCount)
    };
    _this.handleChangePage = _this.handleChangePage.bind(_this);
    return _this;
  }

  _createClass(TablePagination, [{
    key: 'handleChangePage',
    value: function handleChangePage(status) {
      this.setState({
        activePage: status
      });
    }
  }, {
    key: 'renderPartialTable',
    value: function renderPartialTable(defaultTable) {
      var perPageItemCount = this.props.perPageItemCount;
      var _state = this.state,
          activePage = _state.activePage,
          pageCount = _state.pageCount;

      var start = void 0;
      if (pageCount > activePage) {
        start = perPageItemCount * activePage;
      } else {
        start = perPageItemCount * 0;
      }
      return defaultTable.slice(start, start + perPageItemCount);
    }
  }, {
    key: 'renderTable',
    value: function renderTable(isPaginationTable) {
      var _props = this.props,
          _props$arrayOption = _props.arrayOption,
          arrayOption = _props$arrayOption === undefined ? [] : _props$arrayOption,
          columns = _props.columns,
          data = _props.data;

      var defaultTable = (0, _Body2.default)({ arrayOption: arrayOption, columns: columns, data: data });
      return isPaginationTable ? this.renderPartialTable(defaultTable) : defaultTable;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          headers = _props2.headers,
          perPageItemCount = _props2.perPageItemCount,
          totalCount = _props2.totalCount,
          className = _props2.className,
          paginationClassName = _props2.paginationClassName,
          title = _props2.title,
          subTitle = _props2.subTitle,
          nextPageText = _props2.nextPageText,
          prePageText = _props2.prePageText;
      var pageCount = this.state.pageCount;

      var isPaginationTable = pageCount > 1;
      var Table = this.renderTable(isPaginationTable);

      return _react2.default.createElement(
        'div',
        { className: className },
        (0, _Titles2.default)({ title: title, subTitle: subTitle }),
        _react2.default.createElement(
          'table',
          { className: 'table' },
          _react2.default.createElement(_Header2.default, { headers: headers }),
          _react2.default.createElement(
            'tbody',
            null,
            Table
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'clearfix' },
          isPaginationTable && _react2.default.createElement(_reactPaginationStatus2.default, {
            handleChangePage: this.handleChangePage,
            activePage: this.state.activePage,
            totalCount: totalCount,
            perPageItemCount: perPageItemCount,
            className: paginationClassName,
            nextPageText: nextPageText,
            prePageText: prePageText
          })
        )
      );
    }
  }]);

  return TablePagination;
}(_react.Component);

TablePagination.propTypes = {
  title: _propTypes2.default.string,
  subTitle: _propTypes2.default.string,
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  columns: _propTypes2.default.string.isRequired,
  headers: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  arrayOption: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string)),
  nextPageText: _propTypes2.default.string,
  prePageText: _propTypes2.default.string,
  paginationClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  perPageItemCount: _propTypes2.default.number.isRequired,
  totalCount: _propTypes2.default.number.isRequired
};
TablePagination.defaultProps = {
  title: '',
  subTitle: '',
  arrayOption: [''],
  perPageItemCount: 0,
  totalCount: 0,
  className: 'react-pagination-table',
  nextPageText: 'Next',
  prePageText: 'Prev',
  paginationClassName: 'pagination-status'
};
exports.default = TablePagination;