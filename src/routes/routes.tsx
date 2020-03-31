const routes = [
  {
    path: "/",
    component: "../layouts/BasicLayout",
    routes: [
      {
        name: "Home",
        path: "/",
        component: () => import("../components/Home")
      },
      {
        name: "Hello",
        path: "/hello",
        component: () => import("../components/Hello")
      }
    ]
  }
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
  //     path: "/user",
  //     component: "../layouts/UserLayout",
  //     routes: [
  //       {
  //         name: "login",
  //         path: "/user/login",
  //         component: "./user/login"
  //       }
  //     ]
  //   },
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