import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Chart from "./Chart";
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
  feed: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
  },
});

function ChartLaptop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.navBar}>TODO: Navbar</div>
      <div className={classes.top}>
        <Value />
        <Divider className={classes.divider} orientation="vertical" />
        <Trade />
        <Divider className={classes.divider} orientation="vertical" />
        <div className={classes.feed}>
          <Typography variant="caption">News</Typography>
        </div>
      </div>
      <div className={classes.chart}>
        <Chart />
      </div>
    </div>
  );
}

export default ChartLaptop;
