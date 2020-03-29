import React from "react";
// import { Button } from "antd";
import "./App.css";
import Hello from "./components/Hello";
import BasicLayout from "./layouts/BasicLayout";
import Home from "./components/Home";
import { Route } from "react-router-dom";
//  
class SiderDemo extends React.Component {
  render() {
    return (
      <BasicLayout >
              <Route exact path="/" component={Home}></Route>
              <Route path="/hello" component={Hello}></Route>
      </BasicLayout>
    );
  }
}

export default SiderDemo;
