import React from 'react';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore';
import styles from './List.scss';

class List extends React.Component {
  state = {
    columns: this.props.columns || []
  };

  static propTypes = {
    title: PropTypes.node.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array
  };

  static defaultProps = {
    description: settings.defaultListDescription,
    imgSrc:
      'https://images.pexels.com/photos/3345270/pexels-photo-3345270.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  };

  addColumn(title) {
    this.setState(state => ({
      columns: [
        ...state.columns,
        {
          key: state.columns.length
            ? state.columns[state.columns.length - 1].key + 1
            : 0,
          title,
          icon: 'list-alt',
          cards: []
        }
      ]
    }));
  }

  render() {
    return (
      <section className="styles.component">
        <Hero titleText={this.props.title} image={this.props.image}></Hero>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={title => this.addColumn(title)}
          />
        </div>
      </section>
    );
  }
}

export default List;
