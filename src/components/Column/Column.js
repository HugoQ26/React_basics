import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';

const Column = ({ title, icon, cards, addCard }) => {
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>
        {title}
        <span className={styles.icon}>
          {' '}
          <Icon name={icon} />
        </span>
      </h3>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
      <Creator text={settings.cardCreatorText} action={addCard} />
    </section>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array,
  icon: PropTypes.node,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
