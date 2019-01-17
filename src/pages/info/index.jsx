import React, { Component } from 'react';

class Info extends Component {
  constructor () {
    super ();
    this.state = {
      name: 'customer',
      sex: 'male'
    }
  }

  render () {
    return (
      <div>{this.state.name}</div>
    )
  }
}

export default Info;