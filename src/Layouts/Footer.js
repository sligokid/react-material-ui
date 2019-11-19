import React from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core/";

export default props => (
  <AppBar position="static">
    <Tabs value={0} indicatorColor="primary">
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </AppBar>
);
