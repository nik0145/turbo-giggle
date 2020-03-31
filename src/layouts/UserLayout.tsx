import React from "react";
import { Layout} from "antd";
import {
  Route,
} from "react-router-dom";
const { Header, Content, Footer } = Layout;
export interface propsType {
  path: string;
  component: any; // тут должен быть тип реакт компонента
}
const UserLayout = ({ component: Component, ...rest }: propsType) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout style={{ minHeight: "100vh" }}>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Component {...matchProps} />
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
