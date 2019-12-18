/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => <i className={`fas fa-${props.name}`}></i>;

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
