'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TablePagination = function (_Component) {
  _inherits(TablePagination, _Component);

  _createClass(TablePagination, null, [{
    key: 'handleArrayOption',
    value: function handleArrayOption(index, plus, propArr) {
      if (!propArr) return false;
      if (isNaN(index)) {
        return function (single) {
          if (single[propArr]) {
            return single[propArr].join(plus);
          }
          return '';
        };
      }
      return function (single) {
        return single[propArr][index] || '';
      };
    }
  }]);

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
    key: 'generatePaginationTable',
    value: function generatePaginationTable(pageArr) {
      var perPageItemCount = this.props.perPageItemCount;

      var defaultTable = this.renderDefaultTable();
      return pageArr.map(function () {
        return defaultTable.splice(0, perPageItemCount);
      });
    }
  }, {
    key: 'renderDefaultTable',
    value: function renderDefaultTable() {
      var _props = this.props,
          arrayOption = _props.arrayOption,
          columns = _props.columns,
          data = _props.data;

      var _arrayOption = _slicedToArray(arrayOption, 3),
          propArr = _arrayOption[0],
          _arrayOption$ = _arrayOption[1],
          index = _arrayOption$ === undefined ? 0 : _arrayOption$,
          _arrayOption$2 = _arrayOption[2],
          plus = _arrayOption$2 === undefined ? '' : _arrayOption$2;

      var returnHandleOptionVal = TablePagination.handleArrayOption(index, plus, propArr);
      var columnsArr = columns.split('.');

      return data.map(function (single, i) {
        var optionResult = returnHandleOptionVal && returnHandleOptionVal(single);
        return _react2.default.createElement(
          'tr',
          { key: 'data-row-' + i },
          columnsArr.map(function (col, j) {
            if (propArr === col) {
              return _react2.default.createElement(
                'td',
                { key: 'data-col-' + j },
                optionResult
              );
            }
            return _react2.default.createElement(
              'td',
              { key: 'data-col-' + j },
              single[col]
            );
          })
        );
      });
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      var _props2 = this.props,
          title = _props2.title,
          subTitle = _props2.subTitle;

      var TitleComponent = title ? _react2.default.createElement(
        'h4',
        { key: 'box-title', className: 'title' },
        title
      ) : '';
      var SubTitleComponent = subTitle ? _react2.default.createElement(
        'h4',
        { key: 'box-sub-title', className: 'sub-title' },
        subTitle
      ) : '';
      return [TitleComponent, SubTitleComponent];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          headers = _props3.headers,
          perPageItemCount = _props3.perPageItemCount,
          totalCount = _props3.totalCount,
          className = _props3.className,
          paginationClassName = _props3.paginationClassName,
          nextPageText = _props3.nextPageText,
          prePageText = _props3.prePageText;
      var _state = this.state,
          activePage = _state.activePage,
          pageCount = _state.pageCount;

      var pageArr = pageCount && [].concat(_toConsumableArray(new Array(pageCount).keys()));
      var Table = pageCount ? this.generatePaginationTable(pageArr) : this.renderDefaultTable();

      return _react2.default.createElement(
        'div',
        { className: className },
        this.renderTitle(),
        _react2.default.createElement(
          'table',
          { className: 'table' },
          _react2.default.createElement(
            'thead',
            { className: 'table-header' },
            _react2.default.createElement(
              'tr',
              null,
              headers.map(function (header, i) {
                return _react2.default.createElement(
                  'th',
                  { key: 'Header-' + i },
                  header
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            pageCount ? Table[activePage] : Table
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'clearfix' },
          pageCount && totalCount > perPageItemCount ? _react2.default.createElement(_Pagination2.default, {
            handleChangePage: this.handleChangePage,
            activePage: this.state.activePage,
            totalCount: totalCount,
            perPageItemCount: perPageItemCount,
            className: paginationClassName,
            nextPageText: nextPageText,
            prePageText: prePageText
          }) : null
        )
      );
    }
  }]);

  return TablePagination;
}(_react.Component);

TablePagination.propTypes = {
  title: _react.PropTypes.string,
  subTitle: _react.PropTypes.string,
  data: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  columns: _react.PropTypes.string.isRequired,
  headers: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  arrayOption: _react.PropTypes.arrayOf(_react.PropTypes.string),
  nextPageText: _react.PropTypes.string,
  prePageText: _react.PropTypes.string,
  paginationClassName: _react.PropTypes.string,
  className: _react.PropTypes.string,
  perPageItemCount: _react.PropTypes.number.isRequired,
  totalCount: _react.PropTypes.number.isRequired
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