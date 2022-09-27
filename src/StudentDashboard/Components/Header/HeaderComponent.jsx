import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import StudentDashboard from "../../Components/Dashboard/StudentDashboard";
import PersonalCoincirage from "../Dashboard/PersonalCoincirage";
import ProfileUpdate from "../Dashboard/ProfileUpdate";
import ConnectWithExpert from "../Dashboard/ConnectToExperts";
import OngoingTraining from "../Dashboard/OngoingTraining";
import JobAssistance from "../Dashboard/JobAssistance";
import Privacy from "../Dashboard/Privacy";

import { useStyles } from "./HeaderStyles";

export default function HeaderComponent() {
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
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* // registerian our routes  */}
      <Box className={classes.wrapper}>
        <Switch>
          {/* <Route path='/' component={<Dashboard />} /> */}
          <Route exact path="/Student_dash" Redirect={() => <StudentDashboard />} />
          <Route exact path="/profileUpdate" render={() => <ProfileUpdate />} />
          <Route exact path="/jobAssistance" render={() => <JobAssistance />} />
          <Route exact path="/privacy" render={() => <Privacy />} />
          <Route
            exact
            path="/ongoingTraining"
            render={() => <OngoingTraining />}
          />
          <Route
            exact
            path="/connectWithExpert"
            render={() => <ConnectWithExpert />}
          />
          <Route
            exact
            path="/personalCoincirage"
            render={() => <PersonalCoincirage />}
          />
        </Switch>
      </Box>
    </div>
  );
}
