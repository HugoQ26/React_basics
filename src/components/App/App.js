import React from 'react';
import List from '../List/List.js';
import { pageContents, listData } from '../../data/dataStore.js';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    );
  }
}

export default App;
