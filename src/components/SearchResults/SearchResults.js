import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import { withRouter } from 'react-router';

const SearchResults = ({ cards }) => {
  return (
    <Container>
      <section className={styles.component}>
        <h2>Znaleziono {cards.length}</h2>
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
  params: PropTypes.string,
  match: PropTypes.object,
};

export default withRouter(SearchResults);
