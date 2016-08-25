import React, { PropTypes, Component } from 'react';

export default class TableSimple extends Component {

    static PropTypes = {
        title: PropTypes.string,
        subTitle: PropTypes.string,
        data: PropTypes.array.isRequired,
        columns: PropTypes.string.isRequired,
        headers: PropTypes.array.isRequired,
        arrayOption: PropTypes.array,
        className: PropTypes.string
    };

    static defaultProps = {
        title: '',
        subTitle: '',
        arrayOption: [''],
        className:'react-pagination-table'
    };

    constructor(props) {
        super(props);
        this.handleArrayOption = ::this.handleArrayOption;
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
                                headers.map((header, i) => {
                                    return <th key={ `Header-${i}` }>{ header }</th>
                                })
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
