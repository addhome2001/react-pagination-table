/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

import type { HeaderProps } from './types';

const Header = ({ headers = [] }: HeaderProps) => {
  if (Array.isArray(headers) && headers.length > 0) {
    return (
      <thead className="table-header">
        <tr>
          {
            headers.map(header =>
              <th key={ `Header-${header}` }>{ header }</th>,
            )
          }
        </tr>
      </thead>
    );
  }
  return null;
};

Header.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
