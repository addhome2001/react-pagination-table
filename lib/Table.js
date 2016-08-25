'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableSimple = function (_Component) {
    _inherits(TableSimple, _Component);

    function TableSimple(props) {
        _classCallCheck(this, TableSimple);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TableSimple).call(this, props));

        _this.handleArrayOption = _this.handleArrayOption.bind(_this);
        return _this;
    }

    _createClass(TableSimple, [{
        key: 'renderTitle',
        value: function renderTitle() {
            var _props = this.props;
            var title = _props.title;
            var subTitle = _props.subTitle;

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
        key: 'handleArrayOption',
        value: function handleArrayOption(index, plus, propArr) {
            if (!propArr) return false;
            if (isNaN(index)) {
                return function (single) {
                    return single[propArr] ? single[propArr].join(plus) : '';
                };
            } else {
                return function (single) {
                    return single[propArr][index] || '';
                };
            }
        }
    }, {
        key: 'renderDefaultTable',
        value: function renderDefaultTable() {
            var _props2 = this.props;
            var arrayOption = _props2.arrayOption;
            var columns = _props2.columns;
            var data = _props2.data;

            var _arrayOption = _slicedToArray(arrayOption, 3);

            var propArr = _arrayOption[0];
            var _arrayOption$ = _arrayOption[1];
            var index = _arrayOption$ === undefined ? 0 : _arrayOption$;
            var _arrayOption$2 = _arrayOption[2];
            var plus = _arrayOption$2 === undefined ? '' : _arrayOption$2;

            var returnHandleOptionVal = this.handleArrayOption(index, plus, propArr);
            var columnsArr = columns.split('.');

            return data.map(function (single, i) {
                var optionResult = returnHandleOptionVal && returnHandleOptionVal(single);

                return _react2.default.createElement(
                    'tr',
                    { key: 'data' + i },
                    columnsArr.map(function (col, i) {
                        return propArr === col ? _react2.default.createElement(
                            'td',
                            { key: 'col-' + i },
                            optionResult
                        ) : _react2.default.createElement(
                            'td',
                            { key: 'col-' + i },
                            single[col]
                        );
                    })
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var headers = _props3.headers;
            var className = _props3.className;

            var Table = this.renderDefaultTable();

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
                        Table
                    )
                )
            );
        }
    }]);

    return TableSimple;
}(_react.Component);

TableSimple.PropTypes = {
    title: _react.PropTypes.string,
    subTitle: _react.PropTypes.string,
    data: _react.PropTypes.array.isRequired,
    columns: _react.PropTypes.string.isRequired,
    headers: _react.PropTypes.array.isRequired,
    arrayOption: _react.PropTypes.array,
    className: _react.PropTypes.string
};
TableSimple.defaultProps = {
    title: '',
    subTitle: '',
    arrayOption: [''],
    className: 'react-pagination-table'
};
exports.default = TableSimple;