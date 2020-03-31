import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "moccasin",
  },
});

function Section3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>TODO</Typography>
    </div>
  );
}

export default Section3;
