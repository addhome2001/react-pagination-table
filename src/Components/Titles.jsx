/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

import type { TitleProps } from './types';

const validate = (val: mixed): boolean =>
  typeof val === 'string' && val.length > 0;

const Title = ({ title, subTitle }: TitleProps) =>
  [
    validate(title) ? <h4 key="box-title" className="title">{ title }</h4> : null,
    validate(subTitle) ? <h4 key="box-sub-title" className="sub-title">{ subTitle }</h4> : null,
  ];

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Title;
