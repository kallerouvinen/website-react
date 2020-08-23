import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// import PureCSS from "./PureCSS";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
  },
});

function Section2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>TODO</Typography>
      {/* <PureCSS /> */}
    </div>
  );
}

export default Section2;
