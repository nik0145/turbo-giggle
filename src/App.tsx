import React from "react";
// import { Button } from "antd";
import "./App.css";
import Hello from "./components/Hello";
import Home from "./components/Home";
import { Layout, Menu } from "antd";
import { Route, Link } from "react-router-dom";
import {
  PieChartOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
//  
class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed:boolean):void => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            turbo-giggle
          </div>
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
              <Route exact path="/" component={Home}></Route>
              <Route path="/hello" component={Hello}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            https://github.com/nik0145/turbo-giggle
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
