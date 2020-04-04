
import BasicLayout from "../layouts/BasicLayout";
import UserLayout from "../layouts/UserLayout";
import UserPage from "../pages/UserPage";
import Home from "../components/Home";
import Hello from "../components/Hello";
const routes = [
  {
    path: "/kek",
    name: "BasicLayout",
    component: BasicLayout,
    routes: [
      {
        name: "Home",
        path: "/kek/home",
        component: Home,
      },
      {
        name: "Hello",
        path: "/kek/hello",
        component: Hello,
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
  {
    path: "/user",
    component: UserLayout,
    routes: [
      {
        name: "login",
        path: "/user/login",
        component: UserPage,
      },
    ],
  },
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