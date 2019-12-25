import React from 'react';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore';
import styles from './List.scss';

const List = ({ title, image, description, columns, addColumn }) => {
  return (
    <section className="styles.component">
      <Hero titleText={title} image={image} />
      <div className={styles.description}>{ReactHtmlParser(description)}</div>
      <div className={styles.columns}>
        {columns.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={addColumn} />
      </div>
    </section>
  );
};

List.propTypes = {
  title: PropTypes.node.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  listIndex: PropTypes.string,
  image: PropTypes.string,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
  imgSrc:
    'https://images.pexels.com/photos/3345270/pexels-photo-3345270.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
};

export default List;
