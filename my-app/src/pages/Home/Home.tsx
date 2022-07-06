import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "../../layout/Header/Header";

import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { Role } from "../../lib/ProtectedRoute/RouteWrapper";
import { HomeSidebar } from "./HomeSidebar";

const userTexts: { [key in Role]: string } = {
  admin: "Hello Drejtor",
  editor: "Hello Putor",
  user: "Hello Shef",
};

export const Home = () => {
  const { user, userRole } = useAuthContext();

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />

      <HomeSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Outlet />
        <Toolbar />
        <h1>Welcome {user?.split("@")[0]}!</h1>
        <h2>{userTexts[userRole]}</h2>
      </Box>
    </Box>
  );
};
