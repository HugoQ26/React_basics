import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = ({ title, searchString }) => {  
  

  // eslint-disable-next-line no-unused-vars
  const styleModify = () => {
    if(searchString) {
      if (new RegExp(searchString, 'i').test(title)) {
        return {color: 'red'};
      }      
    }
  };
  
  return (
    <section className={styles.component} style={styleModify()}>
      <h3>{title}</h3>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.node.isRequired,
  searchString: PropTypes.string,
};

export default Card;
