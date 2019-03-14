import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
              <h1>仿佛走错地方了...</h1>
              <Link to ='/'><h3>回到主页！</h3></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;