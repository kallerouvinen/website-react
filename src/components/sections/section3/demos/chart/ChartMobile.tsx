import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    padding: 8,
    paddingTop: 20,
  },
  text: {},
  chart: {
    display: "flex",
    flex: 1,
  },
});

function ChartMobile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Typography className={classes.text}>TODO</Typography>
      </div>
      <Chart />
    </div>
  );
}

export default ChartMobile;
