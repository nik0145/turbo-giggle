import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
// !решил блин выучить typescript
export interface propsType {
  path: string;
  component: any;
  children?: any;
  routes: {
    name: string;
    path: string;
    component:any;
  }[];
}

const BasicLayout = ({ component: Component, routes, ...rest }: propsType) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <div className="logo">turbo-giggle</div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              {/* сделать нормальный роутинг чек ридми */}
              <Menu.Item key="1">
                <PieChartOutlined />
                <span>Home</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <PieChartOutlined />
                <span>Hello</span>
                <Link to="/hello" />
              </Menu.Item>
            </Menu>
          </Sider>
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
                            <route.component exact key={i} {...route} />
                          ) : null
                        )}
                  </Switch>
                {/* <Component {...matchProps} /> */}
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

export default BasicLayout;
