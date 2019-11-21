import React from "react";
import { Tab, Tabs, Paper } from "@material-ui/core/";

export default ({ muscles }) => (
  <Paper>
    <Tabs
      lablel="All"
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      {muscles.map(group => (
        <Tab label={group} />
      ))}
    </Tabs>
  </Paper>
);
