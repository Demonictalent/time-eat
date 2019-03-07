import React, { Component } from 'react';

import RouterController from './routers/RouterController';
import './App.scss';

class App extends Component {
  render() {
    let loggedIn = false;
    return (
      <div className="Time-Eat">
        <RouterController loggedIn={loggedIn}/>
      </div>
    );
  }
}

export default App;
