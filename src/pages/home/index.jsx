import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super()

    this.state = {
      haslogin: false
    } 
  }

  componentDidMount() {
    setInterval(() => this.clicks(), 5000);
  }

  clicks() {
    this.setState({haslogin: 'HAPPY NEW YEAR'})
  }

  render() {
    return (
      <div>ss : {this.state.haslogin}
      <Link to="/404">404</Link>
      </div>
    )
  }
}
export default Home;