import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import styles from './Search.scss';
import { settings } from '../../data/dataStore';

import Button from '../Button/Button';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Search extends React.Component {
  static propTypes = {
    searchString: PropTypes.string,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
    changeSearchString: PropTypes.func,
    text: PropTypes.string,
    history: PropTypes.object,
  };

  static defaultProps = {
    text: settings.search.defaultText,
  };

  handleChange(event) {
    this.props.changeSearchString(event.target.value);
  }

  handleOK() {
    this.props.changeSearchString(this.props.searchString);
    this.props.history.push(`/search/${this.props.searchString}`);
  }

  render() {
    const { text, countVisible, countAll, searchString } = this.props;

    const { icon } = settings.search;
    return (
      <Container>
        <div className={styles.component}>
          <input
            type="text"
            placeholder={text}
            value={searchString}
            onChange={event => this.handleChange(event)}
          />
          <div className={styles.buttons}>
            <Button onClick={() => this.handleOK()}>
              <Icon name={icon} />
            </Button>
          </div>
          <div>
            {countVisible == countAll ? '' : `${countVisible} / ${countAll}`}
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Search);
