import { Drawer, List, ListItem, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const ProfileSidebar = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, top: "auto" },
        }}
      >
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <Link
              style={{
                padding: "10px",
                textDecoration: "none",
                width: "100%",
              }}
              to="account"
            >
              Account
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="privacy"
              style={{
                padding: "10px",
                textDecoration: "none",
                width: "100%",
              }}
            >
              Privacy
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="deactivate-account"
              style={{
                padding: "10px",
                textDecoration: "none",
                width: "100%",
              }}
            >
              Deactivate Account
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
