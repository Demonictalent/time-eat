import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Info from '../pages/info';
import NotFound from '../pages/404';


class RouterController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  render() {
    const supportsHistory = 'pushState' in window.history;

    return (
      <BrowserRouter forceRefresh={!supportsHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info" render={() => (
            this.props.loggedIn ? (<Info />) : (<Redirect to="/404" />)
          )} />
          <Route path="/404" component={NotFound} />
          <Route render={() => (<Redirect to="/404" />)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RouterController;