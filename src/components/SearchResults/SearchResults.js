import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const SearchResults = ({ cards }) => {
  console.log('cardsssss', cards);

  return (
    <Container>
      <section className={styles.component}>
        <h2>Znaleziono {cards.length}</h2>
        {cards.map(({ title, id, columnTitle, listId }) => {
          return (
            <Link key={id} to={`/list/${listId}`} className={styles.link}>
              <section>
                <div>
                  Column title: {columnTitle} List: {listId}
                </div>
                <Card title={title} />
              </section>
            </Link>
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
