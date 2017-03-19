import React, { PropTypes } from 'react';

const validate = val => typeof val === 'string' && val.length > 0;

const Title = ({ title, subTitle }) =>
  [
    validate(title) ? <h4 key="box-title" className="title">{ title }</h4> : null,
    validate(subTitle) ? <h4 key="box-sub-title" className="sub-title">{ subTitle }</h4> : null,
  ];

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Title;
