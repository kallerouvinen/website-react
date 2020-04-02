import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import DemoList from "./DemoList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
});

function Section3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DemoList />
    </div>
  );
}

export default Section3;
