/* eslint-disable react/no-array-index-key */
import React, { PropTypes } from 'react';
import handleArrayOption from '../utils';

const Body = ({ arrayOption = [], columns = '', data = [] } = {}) => {
  const handleOptionVal = handleArrayOption(...arrayOption);
  const arrProp = arrayOption[0];
  let columnsArr;

  if (data.length <= 0) throw new Error('Can\'t reslove data property.');

  if (columns.split && columns.length > 0) {
    columnsArr = columns.split('.');
  } else {
    throw new Error('Can\'t reslove columns property.');
  }

  return data.map((single, i) => {
    const optionResult = handleOptionVal && handleOptionVal(single);
    return (
      <tr key={ `row-${i}` }>
        {
          columnsArr.map(col =>
            <td key={ `col-${col}` }>
              {
                arrProp === col ? optionResult : single[col]
              }
            </td>,
          )
        }
      </tr>
    );
  });
};

Body.propTypes = {
  arrayOption: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ),
  columns: PropTypes.string.isRequire,
  data: PropTypes.arrayOf(PropTypes.object).isRequire,
};

export default Body;
