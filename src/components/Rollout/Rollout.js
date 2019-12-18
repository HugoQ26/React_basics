import React from 'react';
import PropTypes from 'prop-types';

class Rollout extends React.Component {
  static propTypes = {
    list: PropTypes.node,
  };

  render() {
    return (
      <div>
        {this.props.list.map(({ key, title, columns }) => {
          return (
            <div key={key * 10}>
              <h2 key={key}>{title}</h2>
              {columns.map(({ key, title, cards }) => {
                return (
                  <div key={key * 100}>
                    <h3 key={key}>{title}</h3>
                    {cards.map(({ key, title }) => {
                      return <h4 key={key}>{title}</h4>;
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Rollout;
