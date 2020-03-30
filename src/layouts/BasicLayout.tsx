import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {  Link } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import { Route } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
export interface propsType {
  path: String;
  component: any;
}
class BasicLayout extends Component<propsType> {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed: boolean): void => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Route
        {...this.props}
        render={matchprops => (
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
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
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "0 16px" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  {this.props.children}
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
  }
}

export default BasicLayout;
