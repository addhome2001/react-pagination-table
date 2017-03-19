import React, { PropTypes, Component } from 'react';
import Titles from './Components/Titles';
import Header from './Components/Header';
import Body from './Components/Body';

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

  renderTable() {
    const { arrayOption, columns, data } = this.props;
    return Body({ arrayOption, columns, data });
  }

  render() {
    const {
      headers,
      className,
      title,
      subTitle,
    } = this.props;
    const Table = this.renderTable();

    return (
      <div className={ className }>
        { Titles({ title, subTitle }) }
        <table className="table">
          <Header headers={ headers } />
          <tbody>
            { Table }
          </tbody>
        </table>
      </div>
    );
  }
}
