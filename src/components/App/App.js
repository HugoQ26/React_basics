import React from 'react';
import List from '../List/ListContainer';
import Hamburger from '../Hamburger/Hamburger.js';
import styles from './App.scss';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  };

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <Hamburger />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;
