import React, { PropTypes, Component } from 'react';

import Pagination from './Pagination';

export default class TablePagination extends Component {

  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.string.isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    arrayOption: PropTypes.arrayOf(PropTypes.string),
    nextPageText: PropTypes.string,
    prePageText: PropTypes.string,
    paginationClassName: PropTypes.string,
    className: PropTypes.string,
    perPageItemCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
  };

  static defaultProps = {
    title: '',
    subTitle: '',
    arrayOption: [''],
    perPageItemCount: 0,
    totalCount: 0,
    className: 'react-pagination-table',
    nextPageText: 'Next',
    prePageText: 'Prev',
    paginationClassName: 'pagination-status',
  };

  static handleArrayOption(index, plus, propArr) {
    if (!propArr) return false;
    if (isNaN(index)) {
      return (single) => {
        if (single[propArr]) {
          return single[propArr].join(plus);
        }
        return '';
      };
    }
    return single => single[propArr][index] || '';
  }

  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      pageCount: Math.ceil(props.totalCount / props.perPageItemCount),
    };
    this.handleChangePage = ::this.handleChangePage;
  }

  handleChangePage(status) {
    this.setState({
      activePage: status,
    });
  }

  generatePaginationTable(pageArr) {
    const { perPageItemCount } = this.props;
    const defaultTable = this.renderDefaultTable();
    return pageArr.map(() => defaultTable.splice(0, perPageItemCount));
  }

  renderDefaultTable() {
    const { arrayOption, columns, data } = this.props;
    const [propArr, index = 0, plus = ''] = arrayOption;
    const returnHandleOptionVal = TablePagination.handleArrayOption(index, plus, propArr);
    const columnsArr = columns.split('.');

    return data.map((single, i) => {
      const optionResult = returnHandleOptionVal && returnHandleOptionVal(single);
      return (
        <tr key={ `data-row-${i}` }>
          {
            columnsArr.map((col, j) => {
              if (propArr === col) {
                return <td key={ `data-col-${j}` }>{ optionResult }</td>;
              }
              return <td key={ `data-col-${j}` }>{ single[col] }</td>;
            })
          }
        </tr>
      );
    });
  }

  renderTitle() {
    const { title, subTitle } = this.props;
    const TitleComponent = title ? <h4 key="box-title" className="title">{ title }</h4> : '';
    const SubTitleComponent = subTitle ? <h4 key="box-sub-title" className="sub-title">{ subTitle }</h4> : '';
    return ([TitleComponent, SubTitleComponent]);
  }

  render() {
    const { headers,
            perPageItemCount,
            totalCount,
            className,
            paginationClassName,
            nextPageText,
            prePageText } = this.props;
    const { activePage, pageCount } = this.state;
    const pageArr = pageCount && [...new Array(pageCount).keys()];
    const Table = pageCount ? this.generatePaginationTable(pageArr) : this.renderDefaultTable();

    return (
      <div className={ className }>
        { this.renderTitle() }
        <table className="table">
          <thead className="table-header">
            <tr>
              {
                headers.map((header, i) =>
                  <th key={ `Header-${i}` }>{ header }</th>,
                )
              }
            </tr>
          </thead>
          <tbody>
            { pageCount ? Table[activePage] : Table }
          </tbody>
        </table>
        <div className="clearfix">
          {
            pageCount && totalCount > perPageItemCount ?
              <Pagination
                handleChangePage={ this.handleChangePage }
                activePage={ this.state.activePage }
                totalCount={ totalCount }
                perPageItemCount={ perPageItemCount }
                className={ paginationClassName }
                nextPageText={ nextPageText }
                prePageText={ prePageText }
              /> : null
           }
        </div>
      </div>
    );
  }
}
