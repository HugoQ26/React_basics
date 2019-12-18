import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button.js';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
  };

  static defaultProps = {
    text: 'Add new item',
  };

  state = {
    value: '',
    visibleButtons: false,
    showConfirmButton: false,
  };

  handleChange({ target: { value } }) {
    this.setState({
      value,
      visibleButtons: value.length > 0,
    });
  }

  handleOK() {
    if (this.state.value != '') {
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel() {
    this.setState({
      showConfirmButton: true,
    });
  }

  handleConfirm() {
    this.setState({
      value: '',
      visibleButtons: false,
      showConfirmButton: false,
    });
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type="text"
          placeholder={this.props.text}
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />
        <div
          className={
            styles.buttons +
            (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')
          }
        >
          <Button onClick={() => this.handleOK()}>OK</Button>
          <Button onClick={() => this.handleCancel()} variant="danger">
            cancel
          </Button>
          {this.state.showConfirmButton && (
            <Button onClick={() => this.handleConfirm()} variant="warning">
              Confirm cancel
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default Creator;
