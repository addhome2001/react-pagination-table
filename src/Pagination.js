import React, { PropTypes, Component } from 'react';

export default class Pagination extends Component {

    static PropTypes = {
        handleChangePage: PropTypes.func.isRequired,
        activePage: PropTypes.number.isRequired,
        totalCount: PropTypes.number.isRequired,
        perPageItemCount: PropTypes.number.isRequired,
        nextPageText: PropTypes.string,
        prePageText: PropTypes.string,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: "react-pagination-status",
        nextPageText: "下一頁",
        prePageText: "上一頁"
    };

    constructor(props) {
        super(props);
        this.handleChangePage = ::this.handleChangePage;
        this.state = {
            pageCount: Math.ceil(this.props.totalCount / this.props.perPageItemCount)
        }

    }

    handleChangePage(status) {
        return () => {
            let { activePage } = this.props;
            let { pageCount } = this.state;
            let newActive;

            if (status === 'next') {
                newActive = activePage === --pageCount ? 0 : ++activePage;
            } else if (status === 'pre') {
                newActive = activePage === 0 ? --pageCount : --activePage;
            } else {
                newActive = status
            }
            this.props.handleChangePage(newActive);
        }
    }

    render() {
        const { activePage, nextPageText, prePageText, className } = this.props;
        const { pageCount } = this.state;
        const pageArr = [...new Array(pageCount).keys()];

        return (
            <ul className={ className }>
                <li onClick={ this.handleChangePage('pre') }><a>{ prePageText }</a></li>
                    {
                        pageArr.map((u, i) => {
                            return <li className={ activePage === i ? 'active' : null }
                                       key={ `page-${i}` }
                                       onClick={ this.handleChangePage(i) }
                                    >
                                        <a>{ i + 1 }</a>
                                    </li>
                        })
                    }
                <li onClick={ this.handleChangePage('next') }><a>{ nextPageText }</a></li>
            </ul>
        );
    }
}
