import React, { PropTypes, Component } from 'react';

import Pagination from './Pagination.js';

export default class TablePagination extends Component {

    static PropTypes = {
        title: PropTypes.string,
        subTitle: PropTypes.string,
        data: PropTypes.array.isRequired,
        columns: PropTypes.string.isRequired,
        headers: PropTypes.array.isRequired,
        arrayOption: PropTypes.array,
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
        className:'react-pagination-table',
        nextPageText: "Next",
        prePageText: "Prev",
        paginationClassName:"pagination-status"
    };

    constructor(props) {
        super(props);
        this.state = {
            activePage: 0,
            pageCount: Math.ceil(this.props.totalCount/ this.props.perPageItemCount)
        };
        this.handleArrayOption = ::this.handleArrayOption;
        this.handleChangePage = ::this.handleChangePage;
    }

    handleChangePage(status) {
        this.setState({
            activePage: status
        });
    }

    renderTitle() {
        const { title, subTitle } = this.props;
        const TitleComponent = title ? <h4 key="box-title" className="title">{ title }</h4> : '';
        const SubTitleComponent = subTitle ? <h4 key="box-sub-title" className="sub-title">{ subTitle }</h4> : '';
        return ([TitleComponent, SubTitleComponent])
    }

    handleArrayOption(index, plus, propArr) {
        if(!propArr) return false;
        if (isNaN(index)) {
            return (single) => single[propArr] ? single[propArr].join(plus) : '';
        } else {
            return (single) => single[propArr][index] || '';
        }
    }

    renderDefaultTable() {
        const { arrayOption, columns, data } = this.props;
        const [ propArr, index = 0, plus = '' ] = arrayOption;
        const returnHandleOptionVal = this.handleArrayOption(index, plus, propArr);
        const columnsArr = columns.split('.');

        return data.map((single, i) => {
            let optionResult = returnHandleOptionVal && returnHandleOptionVal(single);

            return (
                <tr key={ `data${i}` }>
                    {
                        columnsArr.map((col, i) => {
                            return propArr === col ?
                            <td key={ `col-${i}` }>{ optionResult }</td> :
                            <td key={ `col-${i}` }>{ single[col] }</td>
                        })
                    }
                </tr>
            )
        });
    }

    generatePaginationTable(pageArr) {
        const { perPageItemCount } = this.props;
        const defaultTable = this.renderDefaultTable();

        return pageArr.map(() => defaultTable.splice(0, perPageItemCount));
    };

    render() {
        const { headers, perPageItemCount, totalCount, className, paginationClassName } = this.props;
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
                                headers.map((header, i) => {
                                    return <th key={ `Header-${i}` }>{ header }</th>
                                })
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
                            handleChangePage = { this.handleChangePage }
                            activePage = { this.state.activePage }
                            totalCount = { totalCount }
                            perPageItemCount = { perPageItemCount }
                            className={ paginationClassName }
                        /> : null
                    }
                </div>
            </div>
        );
    }
}
