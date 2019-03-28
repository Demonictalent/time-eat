import React, { Component } from 'react';
import RouterController from './routers/RouterController';
import store from './store'
import './layouts/App.scss';

class App extends Component {
  render() {
    let loggedIn = false;
    return (
      <div className="Time-Eat">
        <RouterController loggedIn={loggedIn}/>
      </div>
    );
  }

  componentDidMount () {
    console.log('store', store.getState());
    
    let unsubscribe = store.subscribe(() => {
      console.log('store', store.getState());
    })

    unsubscribe();
  }
}

export default App;
