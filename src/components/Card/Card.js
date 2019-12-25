import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = ({ title }) => {
  return (
    <section className={styles.component}>
      <h3>{title}</h3>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Card;
