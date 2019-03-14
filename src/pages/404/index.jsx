import React, { Component } from 'react';
import './NotFound.scss'

class NotFound extends Component {
  constructor() {
    super();
    this.state = {
      user: 'customer'
    }
  }

  render() {
    console.log('render Height:' + document.body.clientHeight)
    return (
      <div>
        <div className="not-found-container">
          <div className="main">
              <h1>404</h1>
              <h1>{this.state.user}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;