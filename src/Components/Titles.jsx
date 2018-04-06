/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

import type { TitlesProps } from './types';

const validate = (val: mixed): boolean =>
  typeof val === 'string' && val.length > 0;

const Titles = ({ title, subTitle, className }: TitlesProps) =>
  [
    validate(title) ? <h4 key="box-title" className={ `${className}__title` }>{ title }</h4> : null,
    validate(subTitle) ? <h4 key="box-sub-title" className={ `${className}__sub-title` }>{ subTitle }</h4> : null,
  ];

Titles.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
};

export default Titles;
