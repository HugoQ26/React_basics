import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';
import Container from '../Container/Container';

const SearchResults = ({ cards }) => {
  /* TODO zrobic mapowanie cards i wyswitlic card title, column id i list id */
  console.log(cards);

  return (
    <Container>
      <section className={styles.component}>
        <h2>
          Znaleziono {cards.length} {cards.length === 1 ? 'kartę' : 'kart'}{' '}
        </h2>
        {cards.map(({ title, id, columnId }) => {
          return (
            <section key={id}>
              {columnId}
              <Card title={title} />
            </section>
          );
        })}
      </section>
    </Container>
  );
};
SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;
