import { Router, Route, Redirect, Switch } from "dva/router";

export default function (routeConfig) {
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
