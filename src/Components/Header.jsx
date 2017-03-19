import React, { PropTypes } from 'react';

const Header = ({ headers = [] }) => {
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
