import React, { useState,useRouteMatch } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route,Link, Routes } from "react-router-dom";
import BlogComponent from "../BodyComponent/BlogComponent";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import { useStyles } from "./HeaderStyles";
import Dashboard from "../Dashboard/Dashboard";
import NewTraining from "../Dashboard/Main.js"
import AddConstruction from "../Dashboard/AddConstruction"
import VirtualTraining from "../Dashboard/VirtualTraining"
import VedioVirtual from "../Dashboard/Virtual"
import Student_data from "../Dashboard/Student_data"
import Trainer_data from "../Dashboard/Trainer_data"




export default function HeaderComponent() {

  let match = useRouteMatch();

  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      
      {/* // registerian our routes  */}
      <Box>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
        <Routes>
          <Route exact  path=":dashboard" render={() => <Dashboard />} />
          <Route exact path="blog" render={() => <BlogComponent />} />
          <Route exact path="link" render={() => <Link />} />
          <Route exact path="notification" render={() => <Notification />} />
          <Route exact path="logout" render={() => <Logout />} />
          <Route exact path="newTraining" render={() => <NewTraining />} />
          <Route exact path="addConstruction" render={() => <AddConstruction />} />
          <Route exact path="VedioVirtual" render={() => <VedioVirtual />} /> 
          <Route exact path="virtualTraining" render={() => <VirtualTraining />} />
          <Route exact path="Student_data" render={() => <Student_data />} /> 
          <Route exact path="Trainer_data" render={() => <Trainer_data />} /> 
    {  /*     <Route
            exact
            path="/AK"
            render={() => <Ak/>}
  /> */}
        </Routes>
      </Box>
    </div>
  );
}
