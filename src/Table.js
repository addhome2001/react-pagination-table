import React, { PropTypes, Component } from 'react';

export default class TableSimple extends Component {

  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.string.isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    arrayOption: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    subTitle: '',
    arrayOption: [''],
    className: 'react-pagination-table',
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

  renderTitle() {
    const { title, subTitle } = this.props;
    const TitleComponent = title ? <h4 key="box-title" className="title">{ title }</h4> : '';
    const SubTitleComponent = subTitle ? <h4 key="box-sub-title" className="sub-title">{ subTitle }</h4> : '';
    return ([TitleComponent, SubTitleComponent]);
  }

  renderDefaultTable() {
    const { arrayOption, columns, data } = this.props;
    const [propArr, index = 0, plus = ''] = arrayOption;
    const returnHandleOptionVal = TableSimple.handleArrayOption(index, plus, propArr);
    const columnsArr = columns.split('.');

    return data.map((single, i) => {
      const optionResult = returnHandleOptionVal && returnHandleOptionVal(single);

      return (
        <tr key={ `data${i}` }>
          {
            columnsArr.map((col, j) => {
              if (propArr === col) {
                return <td key={ `col-${j}` }>{ optionResult }</td>;
              }
              return <td key={ `col-${j}` }>{ single[col] }</td>;
            })
          }
        </tr>
      );
    });
  }

  render() {
    const { headers, className } = this.props;
    const Table = this.renderDefaultTable();

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
            { Table }
          </tbody>
        </table>
      </div>
    );
  }
}
