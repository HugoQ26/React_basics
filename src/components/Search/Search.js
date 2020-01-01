import React from 'react';
import PropTypes from 'prop-types';

import styles from './Search.scss';
import { settings } from '../../data/dataStore';

import Button from '../Button/Button';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Search extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
  };

  static defaultProps = {
    text: settings.search.defaultText,
  };

  state = {
    value: this.props.searchString,
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK() {
    this.props.changeSearchString(this.state.value);
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchString != prevProps.searchString) {
      this.setState({ value: this.props.searchString });
    }
  }

  render() {
    const { text, countVisible, countAll } = this.props;
    const { value } = this.state;
    const { icon } = settings.search;
    return (
      <div className={styles.component}>
        <Container></Container>
        <input
          type="text"
          placeholder={text}
          value={value}
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
    );
  }
}

export default Search;
