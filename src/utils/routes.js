import React from "react";

import { Router, Route, Redirect, Switch } from "dva/router";

function dynamic({ app, models, component }) {
  class Dynamic extends React.Component {
    state = { Component: null };
    componentDidMount() {
      Promise.all([Promise.all(models()), component()]);
    }
  }

  return Dynamic;
}

export function renderRoutes(routeConfig, app) {
  return (
    <Switch>
      {routeConfig.map(
        ({ path, component: RouteComponent, routes = [], exact = false }) => {
          return (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(routeProps) => (
                <RouteComponent {...routeProps} routes={routes} />
              )}
            />
          );
        }
      )}
    </Switch>
  );
}
