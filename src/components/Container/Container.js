import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <div className={styles.component}>{children}</div>;
};

Container.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
