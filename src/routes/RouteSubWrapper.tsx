import React from "react";
import PrivateRoute from "./PrivateRoute";
const RouteSubWrapper = (route: any, ...rest: any) => {
  return (
    <PrivateRoute
      {...route}
      render={(props: any) => (
        <route.component {...props} routes={route.routes} />
            )      }
    />
  );
};
export default RouteSubWrapper;
