import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  store => {
    return {
      userInfo = store.userInfo
    }
  },
  dispatch => {

  }
)

class loginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let bar;
    if (isLoggedIn) {
      bar = (<div>
        <button onClick={this.handleLoginClick}> haha </button>
        <button onClick={this.handleLogoutClick}> 注册 </button>
      </div>)
    } else {
      bar = (<div>
        <button onClick={this.handleLoginClick}> 登录 </button>
        <button onClick={this.handleLogoutClick}> 注册 </button>
      </div>)
    }
    return (
      <div>
        {bar}
      </div>
    )
  }
}

export default LoginControl 