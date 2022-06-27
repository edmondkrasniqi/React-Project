import { Box, Toolbar } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Header } from "../../../layout/Header/Header";
import { Sidebar } from "../../../layout/Sidebar/Sidebar";
import { useAuthContext } from "../../../lib/context/AuthContext/AuthContext";

// interface Props {
//   user: string;
// }

export const Home = () => {
  const { user } = useAuthContext();
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />
      {/* onLogOut={onLogout} */}
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <h1>Welcome {user?.split("@")[0]}!</h1>
      </Box>
    </Box>
  );
};
