import { click } from '@testing-library/user-event/dist/click';
import React, { Component } from 'react';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement}>+</button>

        <button onClick={this.handleDecrement} disabled={count === 0 ? true : false }>
          -
        </button>
      </div>
    );
  }
}

export default State;
