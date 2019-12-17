import React from 'react';
import Icon from '../Icon/Icon.js';
import styles from './Hamburger.scss';
import { listData } from '../../data/dataStore.js';

class Hamburger extends React.Component {
  handleHamClick() {
    console.log('click');
  }

  render() {
    return (
      <div className={styles.component}>
        <div onClick={() => this.handleHamClick()} className={styles.hamburger}>
          <Icon name="bars" />
        </div>
      </div>
    );
  }
}

export default Hamburger;
