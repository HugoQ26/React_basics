import React from 'react';
import PropTypes from 'prop-types';

import styles from './home.scss';

import Hamburger from '../Hamburger/Hamburger.js';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    searchString: PropTypes.string,
  };

  render() {
    const { title, subtitle, lists, searchString } = this.props;
    return (
      <main className={styles.component}>
        <Hamburger />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {!searchString ? (
          lists.map(listData => <List key={listData.id} {...listData} />)
        ) : (
          <SearchResults />
        )}
      </main>
    );
  }
}

export default Home;
