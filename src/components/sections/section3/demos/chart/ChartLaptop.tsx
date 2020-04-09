import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Chart from "./Chart";
import Feed from "./Feed";
import NavTabs from "./NavTabs";
import Trade from "./Trade";
import Value from "./Value";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
  },
  navBar: {
    display: "flex",
    flex: 1,
  },
  top: {
    display: "flex",
    flex: 6,
    padding: "16px 0",
  },
  chart: {
    display: "flex",
    flex: 6,
  },
  text: {},
  value: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#262626",
    padding: 8,
  },
  positive: {
    color: "#00b300",
  },
  divider: {
    height: "80%",
    alignSelf: "center",
  },
});

function ChartLaptop() {
  const classes = useStyles();
  const [navTab, setNavTab] = useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.navBar}>
        <NavTabs value={navTab} onChange={setNavTab} />
      </div>
      <div className={classes.top}>
        <Value />
        <Divider className={classes.divider} orientation="vertical" />
        <Trade />
        <Divider className={classes.divider} orientation="vertical" />
        <Feed />
      </div>
      <div className={classes.chart}>
        <Chart />
      </div>
    </div>
  );
}

export default ChartLaptop;
