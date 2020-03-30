import React from "react";
// import { Button } from "antd";
import "./App.css";
import Hello from "./components/Hello";
/** Layouts **/ 
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";

import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import routes from "./routes/routes";
//  https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
console.log(routes)
      //  <Route path="/user" render={props => <UserLayout {...props} />} />
    // <Route path="/" render={props => <BasicLayout {...props} />} />
class SiderDemo extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/layout1"></Redirect>
          </Route>
          <UserLayout path="/layout1" component={Hello}></UserLayout>
          <BasicLayout path="/layout2" component={Home}></BasicLayout>
        </Switch>
        {/*  <UserLayout>
          <Route path="/hello" component={Hello}></Route>
        </UserLayout>
        <BasicLayout>
          <Route exact path="/" component={Home}></Route>
        </BasicLayout> */}
      </Router>
    );
  }
}

export default SiderDemo;
