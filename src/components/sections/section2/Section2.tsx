import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

// import PureCSS from "./PureCSS";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f29022",
    padding: 32,
  },
  title: {
    color: "#fff",
    fontWeight: 500,
  },
  text: {
    color: "#fff",
  },
});

function Section2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography className={classes.title} gutterBottom variant="h4">
        TODO: Title
      </Typography>
      <Typography className={classes.text}>TODO: Description</Typography> */}
      {/* <PureCSS /> */}
    </div>
  );
}

export default Section2;
