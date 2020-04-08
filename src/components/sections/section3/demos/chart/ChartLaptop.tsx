import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Chart from "./Chart";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  top: {
    display: "flex",
    flex: 1,
    padding: 16,
  },
  text: {},
  value: {
    display: "flex",
    flex: 2,
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
    height: "60%",
    alignSelf: "center",
  },
  trade: {
    display: "flex",
    flex: 1.5,
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
  },
  feed: {
    display: "flex",
    flex: 1.5,
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
  },
  chart: {
    display: "flex",
    flex: 1,
  },
});

function ChartLaptop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.value}>
          <Typography variant="body2" gutterBottom>
            Example Ltd.
          </Typography>
          <Typography variant="h5" gutterBottom>
            $46.55
          </Typography>
          <Typography variant="caption">
            <strong className={classes.positive}>+$1.22 (2.69%)</strong> Today
          </Typography>
        </div>
        <Divider className={classes.divider} orientation="vertical" />
        <div className={classes.trade}>
          <Typography variant="caption">Trade</Typography>
        </div>
        <Divider className={classes.divider} orientation="vertical" />
        <div className={classes.feed}>
          <Typography variant="caption">News</Typography>
        </div>
      </div>
      <Chart />
    </div>
  );
}

export default ChartLaptop;
