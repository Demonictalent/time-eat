import React, { Component } from 'react';

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
      </div>
    )
  }
}
export default Home;