import Home from "./routes/Home";
import User from "./routes/User";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import Register from "./routes/Register";
import IndexPage from "./routes/IndexPage";

export default [
  {
    path: "/",
    component: IndexPage,
    routes: [
      {
        path: "/home",
        redirect: true,
        component: Home,
      },
      {
        path: "/user",
        redirect: true,
        component: User,
      },
      {
        path: "/profile",
        redirect: true,
        component: Profile,
      },
      {
        path: "/register",
        redirect: true,
        component: Register,
      },
      {
        path: "/login",
        redirect: true,
        component: Login,
      },
    ],
  },
];
