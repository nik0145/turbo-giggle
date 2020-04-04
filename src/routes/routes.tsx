import BasicLayout from "../layouts/BasicLayout";
import UserLayout from "../layouts/UserLayout";
import UserPage from "../pages/UserPage";

import Home from "../components/Home";
import Hello from "../components/Hello";
import React from "react";
import UserLogin from "../pages/UserLogin";
const NoMatch = () => {
  return (
    <div>
      <h3>No Match</h3>
    </div>
  );
};
// ! Так как Switch останавливается после первого матча, а "/" матчится на любой урл.
//* следует урл "/" ставить в конец
// TODO а лучше разобраться с этим чтоб багу такую с собой не таскать
const routes = [
  {
    path: "/user",
    name: "UserLayout",
    exact: false,
    component: UserLayout,
    routes: [
      {
        name: "login",
        exact: true,
        path: "/user/login",
        component: UserPage,
      },
      {
        name: "auth",
        exact: true,
        path: "/user/auth",
        component: UserLogin,
      },
      {
        name: "NoMatch",
        exact: false,
        path: "*",
        component: NoMatch,
      },
    ],
  },
  {
    path: "/",
    name: "BasicLayout",
    exact: false,
    component: BasicLayout,
    routes: [
      {
        name: "Hello",
        path: "/hello",
        exact: false,
        component: Hello,
      },
      {
        name: "Home",
        path: "/",
        exact: false,
        component: Home,
      },
      {
        name: "NoMatch",
        exact: false,
        path: "*",
        component: NoMatch,
      },
    ],
  },
  // {
  //   path: "/",
  //   component: "../layouts/BasicLayout",
  //   routes: [
  //     {
  //       name: "Hello",
  //       path: "/hello",
  //       component: "../components/Hello"
  //     }
  //   ]
  // }

  //   {
  //     path: "/",
  //     component: "../layouts/SecurityLayout",
  //     routes: [
  //       {
  //         path: "/",
  //         component: "../layouts/BasicLayout",
  //         authority: ["admin", "user"],
  //         routes: [
  //           {
  //             path: "/",
  //             redirect: "/welcome"
  //           },
  //           {
  //             path: "/hello",
  //             name: "hello",
  //             icon: "crown",
  //             component: "./Hello",
  //             authority: ["admin"]
  //           }
  //         ]
  //       }
  //     ]
  //   }
];
export default routes;
