import React from 'react';
import PropTypes from 'prop-types';

import styles from './Home.scss';

import Hamburger from '../Hamburger/Hamburger.js';
import ListLink from '../ListLink/ListLink';
// import Search from '../Search/SearchContainer';
// import SearchResults from '../SearchResults/SearchResultsContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    searchString: PropTypes.string,
  };

  render() {
    const { title, subtitle, lists } = this.props;
    console.log(lists);

    return (
      <main className={styles.component}>
        <Hamburger />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;
