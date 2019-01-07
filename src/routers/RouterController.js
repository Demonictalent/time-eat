import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';


class RouterController extends Component {
  constructor() {
    super()

    this.state = {
      aa: 'ss'
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RouterController;