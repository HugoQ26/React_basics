import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
// import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
// import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  };

  render() {
    const { title, icon } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            {' '}
            <Icon name={icon} />
          </span>
        </h3>
        {/* {this.state.cards.map(({ key, ...cardProps }) => (
          <Card key={key} {...cardProps} />
        ))}
        <Creator
          text={settings.cardCreatorText}
          action={title => this.addCard(title)}
        /> */}
      </section>
    );
  }
}

export default Column;
