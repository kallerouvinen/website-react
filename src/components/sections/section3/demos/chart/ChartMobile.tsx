import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: "linear-gradient(20deg, #ff8080, #ffc680)",
    overflow: "hidden",
  },
});

function ChartMobile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>TODO</p>
    </div>
  );
}

export default ChartMobile;
