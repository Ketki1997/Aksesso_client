import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
import Notification from "./Navtabs/notification";
import { useStyles } from "./HeaderStyles";
import Messages from "./Navtabs/Messages";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo}>
          AKSESSO
        </Typography>
        <Hidden smDown>
          <Box style={{ display: "flex", alignItems: "justify-between" }}>
            <Profile name="Ketki Lonare" size="50" />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
