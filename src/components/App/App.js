import React from 'react';
import List from '../List/List.js';
import Hamburger from '../Hamburger/Hamburger.js';
import Creator from '../Creator/Creator.js';
import Rollout from '../Rollout/Rollout.js';
import { pageContents, listData, settings } from '../../data/dataStore.js';
import styles from './App.scss';

class App extends React.Component {
  state = {
    list: listData,
  };

  addList(title) {
    this.setState(state => ({
      list: [
        ...state.list,
        {
          key: state.list.length
            ? state.list[state.list.length - 1].key + 1
            : 0,
          title,
          description: 'description',
          image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
          columns: [],
        },
      ],
    }));
  }

  render() {
    return (
      <main className={styles.component}>
        <Hamburger />
        <Rollout list={this.state.list} />
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>

        {this.state.list.map(({ key, ...listProps }, index) => {
          return <List key={key} {...listProps} listIndex={index} />;
        })}
        <Creator
          text={settings.listCreatorText}
          action={title => this.addList(title)}
        />
      </main>
    );
  }
}

export default App;
