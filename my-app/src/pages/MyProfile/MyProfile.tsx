import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { ProfileSidebar } from "../../components/MyProfile/ProfileSidebar/ProfileSidebar";

export const MyProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <ProfileSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Welcome to your profile</h1>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>

    // <div>
    //   <h2
    //     style={{
    //       margin: "15px",
    //     }}
    //   >
    //     MY Profile
    //   </h2>
    //   <ul>
    //     <li>
    //       <Link
    //         to="account"
    //         style={{
    //           textDecoration: "none",
    //         }}
    //       >
    //         Account
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         to="privacy"
    //         style={{
    //           textDecoration: "none",
    //         }}
    //       >
    //         Privacy
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         to="deactivateAccount"
    //         style={{
    //           textDecoration: "none",
    //         }}
    //       >
    //         Deactivate Account
    //       </Link>
    //     </li>
    //   </ul>

    //   <Outlet />
    // </div>}
  );
};
