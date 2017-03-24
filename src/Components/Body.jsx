/* eslint-disable react/no-array-index-key */

/* @flow */
import React, { PropTypes } from 'react';
import handleArrayOption from '../helpers';

import type { BodyProps } from './types';

const Body = ({
  columns,
  data,
  arrayOption,
}: BodyProps) => {
  const columnsArr: string[] = columns.split('.');
  let handleOptionVal: mixed;
  let arrProp: ?string;

  if (Array.isArray(arrayOption) && arrayOption.length > 0) {
    handleOptionVal = handleArrayOption(...arrayOption);
    arrProp = arrayOption[0];
  }

  if (columnsArr.length === 0) {
    throw new Error('Can\'t reslove columns');
  }

  return data.map((single, i) => {
    let optionResult: ?string;
    if (typeof handleOptionVal === 'function') {
      optionResult = handleOptionVal(single);
    }

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
  columns: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Body;
