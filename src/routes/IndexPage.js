import React from "react";
import { connect } from "dva";
import { Layout } from "antd";
import NavBar from "./../components/NavBar";
import { Router, Route, Redirect, Switch } from "dva/router";

import Home from "./Home";
import User from "./User";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import renderRoutes from "../renderRoutes";

const { Content } = Layout;

function IndexPage(props) {
  return (
    <Layout>
      <NavBar {...props} />
      <Content>
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/user" exact component={User}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {};

function IndexPage2(props) {
  return (
    <Layout>
      <NavBar {...props} />
      <Content>{renderRoutes(props.routes)}</Content>
    </Layout>
  );
}

export default connect()(IndexPage);
