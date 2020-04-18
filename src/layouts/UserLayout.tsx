import React from "react";
import { Layout} from "antd";
import {
  Switch,
} from "react-router-dom";
import RouteSubWrapper from "../routes/RouteSubWrapper";
import Footer from "./Footer";
const { Header, Content } = Layout;
// https://www.youtube.com/watch?v=FyyPUIAe6kc
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

const UserLayout = ({ component: Component, routes, ...rest }: PropsType) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              {routes && routes.map((route, i) => (
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
export default UserLayout;
