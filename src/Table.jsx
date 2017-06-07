/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titles from './Components/Titles';
import Header from './Components/Header';
import Body from './Components/Body';

import type { TableProps, TableDefaultProps } from './types';

export default class TableSimple extends Component
<TableDefaultProps, TableProps, *> {

  props: TableProps;

  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.string.isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    arrayOption: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string),
    ),
    className: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    subTitle: '',
    arrayOption: [''],
    className: 'react-pagination-table',
  };

  render() {
    const {
      headers,
      className,
      title,
      subTitle,
      arrayOption,
      columns,
      data,
    } = this.props;
    const Table: Array<React$Element<*>> = Body({ arrayOption, columns, data });
    const Title: Array<React$Element<*> | mixed> = Titles({ title, subTitle });

    return (
      <div className={ className }>
        { Title }
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
