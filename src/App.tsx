import React, { Suspense } from "react";
// import { Button } from "antd";
import "./App.css";
/** Layouts **/

// import BasicLayout from "./layouts/BasicLayout";
// import UserLayout from "./layouts/UserLayout";

// import Hello from "./components/Hello";
// import UserPage from "./pages/UserPage";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";
import routes from "./routes/routes";

 // !TODO сделать по этому видосу https://habr.com/ru/post/358124/

//  https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
// !решил блин выучить typescript
export interface propsType {
  path?: string;
  component: any;
  layout: any;
  key: any;
  children?: any;
}
// function RouteWrapper({ component: Component, layout: Layout, ...rest }:propsType) {
//   return (
//         <Layout {...rest}>
//           <Component {...rest} />
//         </Layout>
//   );
// }
// function RouteWrapper({
//   component: Component,
//   layout: Layout,
//   ...rest
// }: propsType) {
//   return (
//     <Route
//       {...rest}
//       render={props => (
//         <Layout {...props}>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   );
// }
//  < path="/user" render={props => <UserLayout {...props} />} />
// <RouteWrapper path="/" render={props => <BasicLayout {...props} />} />
//https://habr.com/ru/post/358124/
//https://medium.com/@vvladislavv/%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%B4%D0%B0-%D1%81-react-%D0%B8-react-router-a3fc72a2430c
//https://medium.com/javascript-in-plain-english/simple-guide-for-layouts-in-react-router-e32b26c12cee
//https://tylermcginnis.com/react-router-route-config/
//https://www.youtube.com/watch?v=aeK8kS-goIA&list=PLqrUy7kON1mfJ1cQfJJ1FiULLNngvlFTD&index=12

class SiderDemo extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            {routes.map((route, i) => (
              <route.component
                key={i}
               
                {...route}
              ></route.component>
            ))}
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default SiderDemo;
