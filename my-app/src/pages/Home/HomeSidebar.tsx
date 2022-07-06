import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

export const HomeSidebar = () => {
  return (
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
      <List
        sx={{
          marginTop: "10px",
        }}
      >
        <ListItem key="account" disablePadding>
          <ListItemButton>
            <ListItemText>
              <Link className="Link-list" to="/posts">
                Posts
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="privacy" disablePadding>
          <ListItemButton>
            <ListItemText>
              <Link to="/comments" className="Link-list">
                Comments
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem key="deactivate" disablePadding>
          <ListItemButton>
            <ListItemText>
              <Link to="/photos" className="Link-list">
                Photos
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
