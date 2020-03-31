import React from "react";
// import { Button } from "antd";
import "./App.css";
/** Layouts **/ 
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";

import Hello from "./components/Hello";
import Home from "./components/Home";
import UserPage from "./pages/UserPage";
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


    //https://habr.com/ru/post/358124/
    //https://habr.com/ru/post/358124/
    //https://habr.com/ru/post/358124/
    //https://habr.com/ru/post/358124/
    //https://habr.com/ru/post/358124/
    //https://habr.com/ru/post/358124/
    //https://habr.com/ru/post/358124/
    //https://habr.com/ru/post/358124/
    //https://habr.com/ru/post/358124/
    //https://medium.com/@vvladislavv/%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%B4%D0%B0-%D1%81-react-%D0%B8-react-router-a3fc72a2430c
class SiderDemo extends React.Component {
  render() {
    
    return (
      <Router>
        <Switch>
          {routes[0].routes.map(route => (
            <BasicLayout
              key={route.path}
              path={route.path}
              render={route.component}
            ></BasicLayout>
          ))}
          {/*   <Route exact path="/">
            <BasicLayout path="/" component={Home}></BasicLayout>
          </Route>
          <UserLayout path="/asd" component={Hello}></UserLayout>
          <UserLayout path="/asasdd" component={UserPage}></UserLayout> */}
        </Switch>
      </Router>
    );
  }
}

export default SiderDemo;
