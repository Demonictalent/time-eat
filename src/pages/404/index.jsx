import React, { Component } from 'react';

class NotFound extends Component {
  constructor() {
    super();
    this.state = {
      user: 'customer'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.user}</h1>
        <p>welcome, 404</p>
      </div>
    )
  }
}

export default NotFound;