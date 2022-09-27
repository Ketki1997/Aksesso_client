import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyles";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Aksesso Training Program", link: "/stud" },
    { label: "My Training Program", link: "/ongoingTraining" },
    { label: "JobAssistance", link: "/jobAssistance" },

    { label: "Connect With Expert", link: "/connectWithExpert" },
    { label: "PersonalCoincirage", link: "/personalCoincirage" },
    { label: "ProfileUpdate", link: "/profileUpdate" },
    { label: "Privacy", link: "/privacy" },
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size="small"
          className={classes.navButton}
          onClick={() => handleDrawerClose()}
          key={i}
        >
          <ListItem
            exact
            component={NavLink}
            to={item.link}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}
          >
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
