import React, { Component } from "react";
import { Layout} from "antd";
import {
  Route,
} from "react-router-dom";
const { Header, Content, Footer } = Layout;
export interface propsType {
  path: String;
  component: any;
}
class BasicLayout extends Component<propsType> {
  state = {
    collapsed: false
  };
  onCollapse = (collapsed: boolean): void => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Route
        {...this.props}
        render={matchprops => (
          <Layout style={{ minHeight: "100vh" }}>
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
                  ss{matchprops}ss
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
