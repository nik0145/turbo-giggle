import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import Footer from './Footer';
import {
  // Redirect,
  Switch,
} from "react-router-dom";
import RouteSubWrapper from "../routes/RouteSubWrapper";
const { Header, Content, Sider } = Layout;
// !решил блин выучить typescript
export interface PropsType {
  path: string;
  component: any;
  children?: any;
  routes: {
    name: string;
    path: string;
    component: any;
  }[];
}

const BasicLayout = ({ component: Component, routes, ...rest }: PropsType) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">turbo-giggle</div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
              {routes &&
                routes.map((route, i) => (
                  <RouteSubWrapper key={i} {...route} />
                ))}
            </Switch>
          </div>
        </Content>
       <Footer/>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
