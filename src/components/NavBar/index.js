import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "dva/router";

import styles from "./index.less";

const { Header } = Layout;

let logo = require("../../assets/yay.jpg");

export default class index extends Component {
  render() {
    return (
      <Header className={styles.headers}>
        <img src={logo} alt="logo" />
        <Menu
          className={styles.menu}
          mode="horizontal"
          selectedKeys={[this.props.location.pathname]}
        >
          <Menu.Item key="/home">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="/user">
            <Link to="/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="/profile">
            <Link to="/profile">个人中心</Link>
          </Menu.Item>
          <Menu.Item key="/login">
            <Link to="/login">登陆</Link>
          </Menu.Item>
          <Menu.Item key="/register">
            <Link to="/register">注册</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
