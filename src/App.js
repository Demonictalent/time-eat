import React, { Component } from 'react';
import Button from 'antd/lib/button';

import RouterController from './routers/RouterController';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Time-Eat">
        <Button type="primary">Button</Button>
        <RouterController/>
      </div>
    );
  }
}

export default App;
