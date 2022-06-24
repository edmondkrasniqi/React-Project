import { Box, Toolbar } from "@mui/material";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/Sidebar/Sidebar";

interface Props {
  user: string;
}

export const Home = ({ user }: Props) => {
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
        <h1>Welcome {user.split("@")[0]}!</h1>
      </Box>
    </Box>
  );
};
