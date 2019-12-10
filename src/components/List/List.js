import React from 'react';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import styles from './List.scss';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    imgSrc: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    imgSrc:
      'https://images.pexels.com/photos/3345270/pexels-photo-3345270.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  };

  render() {
    return (
      <section className="styles.component">
        <Hero titleText={this.props.title} imgSrc={this.props.imgSrc}></Hero>
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column title="First title"></Column>
          <Column title="Second title"></Column>
          <Column title="Third title"></Column>
        </div>
      </section>
    );
  }
}

export default List;
