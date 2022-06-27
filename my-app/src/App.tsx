import { Home } from "./components/pages/Home/Home";
import { Login } from "./components/pages/Login/Login";
import { MyProfile } from "./components/pages/MyProfile/MyProfile";
import { Signup } from "./components/pages/Signup/Signup";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "login",
      element: <Login />,
    },
    { path: "my-profile", element: <MyProfile /> },
    { path: "register", element: <Signup /> },
  ]);
  return element;
}

export default App;
