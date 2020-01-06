import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = ({ title, searchString }) => {    

  const classIf = () => {
    if(searchString) {
      if (new RegExp(searchString, 'i').test(title)) {
        return `${styles.component} ${styles.active}`;
      }            
    }
    return styles.component;
  };
  
  return (
    <section className={classIf()} >
      <h3>{title}</h3>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.node.isRequired,
  searchString: PropTypes.string,
};

export default Card;
