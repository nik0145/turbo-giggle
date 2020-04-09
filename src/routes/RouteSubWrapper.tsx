import { Route } from "react-router-dom";
import React from "react";

const RouteSubWrapper = (route: any, ...rest: any) => {
  return (
    <Route
      path={route.path}
      {...rest}
      render={(props: any) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};
export default RouteSubWrapper;
