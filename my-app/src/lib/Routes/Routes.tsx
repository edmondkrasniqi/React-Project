import { useRoutes } from "react-router-dom";
import { Admin } from "../../pages/Admin/Admin";
import { Home } from "../../pages/Home/Home";
import { Comments } from "../../pages/Home/Nested/Comments";
import { Photos } from "../../pages/Home/Nested/Photos";
import { Posts } from "../../pages/Home/Nested/Posts";
import { Login } from "../../pages/Login/Login";
import Account from "../../pages/MyProfile/Account";
import DeactivateAccount from "../../pages/MyProfile/DeactivateAccount";
import { MyProfile } from "../../pages/MyProfile/MyProfile";
import Privacy from "../../pages/MyProfile/Privacy";
import { Signup } from "../../pages/Signup/Signup";
import { RouteWrapper } from "../ProtectedRoute/RouteWrapper";

export const Routes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <RouteWrapper routeType="protected">
          <Home />
        </RouteWrapper>
      ),
      children: [
        { path: "/posts", element: <Posts /> },
        { path: "/comments", element: <Comments /> },
        {
          path: "/photos",
          element: <Photos />,
        },
      ],
    },

    {
      path: "/login",
      element: (
        <RouteWrapper routeType="guest">
          <Login />
        </RouteWrapper>
      ),
    },
    {
      path: "/my-profile",
      element: (
        <RouteWrapper routeType="protected">
          <MyProfile />
        </RouteWrapper>
      ),
      children: [
        { path: "account", element: <Account /> },
        { path: "privacy", element: <Privacy /> },
        { path: "deactivate-account", element: <DeactivateAccount /> },
      ],
    },
    {
      path: "/admin",
      element: (
        <RouteWrapper role={["admin", "editor"]} routeType="guest">
          <Admin />
        </RouteWrapper>
      ),
    },

    {
      path: "/register",
      element: (
        <RouteWrapper routeType="guest">
          <Signup />
        </RouteWrapper>
      ),
    },
  ]);
  return element;
};
