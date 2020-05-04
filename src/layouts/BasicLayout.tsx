import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PieChartOutlined } from '@ant-design/icons';
import Footer from './Footer';
import Header from './Header';

import {
  // Redirect,
  Switch,
} from 'react-router-dom';
import RouteSubWrapper from '../routes/RouteSubWrapper';
const { Content, Sider } = Layout;
// !решил блин выучить typescript
export interface PropsType {
  path: string;
  component: any;
  children?: any;
  location: any;
  routes: {
    name: string;
    path: string;
    component: any;
  }[];
}

const BasicLayout = ({ component: Component, routes, ...rest }: PropsType) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">turbo-giggle</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[rest.location.pathname]}
          mode="inline"
        >
          <Menu.Item key="/">
            <PieChartOutlined />
            <span>Home</span>

            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="/hello">
            <PieChartOutlined />
            <span>Hello</span>
            <Link to="/hello" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: '0 16px' }}>
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
        <Footer />
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
