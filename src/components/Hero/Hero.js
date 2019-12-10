import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img
      src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
      className={styles.image}
    />
  </header>
);

export default Hero;
