import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';
import './styles.scss'
class Home extends Component {
  constructor() {
    super()

    this.state = {
      haslogin: 'false',
      current: 'mail'
    }
  }

  handleClick = (e) => {
    console.log('click', e)
  }

  render() {
    return (
      <div className="box">ss : {this.state.haslogin}
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="mail">
            <Icon type="mail" />
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />
          </Menu.Item>
        </Menu>
        <Link to="/404">404</Link>
      </div>
    )
  }
}
export default Home;