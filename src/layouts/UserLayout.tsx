import React from "react";
import { Layout} from "antd";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
const { Header, Content, Footer } = Layout;
export interface propsType {
  path: string;
  component: any;
  exact?: any;
  children?: any;
  routes: {
    name: string;
    path: string;
    component: any;
  }[];
}
const UserLayout = ({ component: Component, routes, ...rest }: propsType) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout style={{ minHeight: "100vh" }}>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Switch>
                  {routes.map((route, i) =>
                    route ? (
                      <Route
                        path={route.path}
                        key={i}
                        exact
                        render={(props) => <route.component {...props} />}
                      />
                    ) : null
                  )}
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              https://github.com/nik0145/turbo-giggle
            </Footer>
          </Layout>
        </Layout>
      )}
    />
  );
};
export default UserLayout;
