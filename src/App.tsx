import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  // Link,
  Switch
} from "react-router-dom";
import routes from "./routes/routes";
import RouteSubWrapper from "./routes/RouteSubWrapper";
// !решил блин выучить typescript
export interface propsType {
  path?: string;
  exact?: boolean;
  component: any;
  layout: any;
  routes?: {
    name: string;
    exact?: boolean;
    path: string;
    component: any;
  }[];
  key: any;
  children?: any;
}

//https://habr.com/ru/post/358124/
//https://medium.com/@vvladislavv/%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%B4%D0%B0-%D1%81-react-%D0%B8-react-router-a3fc72a2430c
//https://medium.com/javascript-in-plain-english/simple-guide-for-layouts-in-react-router-e32b26c12cee
//https://tylermcginnis.com/react-router-route-config/
//https://www.youtube.com/watch?v=aeK8kS-goIA&list=PLqrUy7kON1mfJ1cQfJJ1FiULLNngvlFTD&index=12

class SiderDemo extends React.Component {
  render() {
    return (
      <Router>
      {/*    <ul>
           <li>
             <Link to="/user/login">user</Link>
           </li>
           <li>
             <Link to="/hello">hello</Link>
           </li>
           <li>
             <Link to="/">/</Link>
           </li>
           <li>
             <Link to="/home">home</Link>
           </li>
         </ul> */}

        <Switch>
          {routes.map(route => (
            <RouteSubWrapper key={route.name} {...route} />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default SiderDemo;
