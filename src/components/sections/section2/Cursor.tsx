import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  "@keyframes blinker": {
    "0%": { opacity: 1 },
    "50%": { opacity: 1 },
    "51%": { opacity: 0 },
    "100%": { opacity: 0 },
  },
  cursor: {
    width: 2,
    height: 10,
    backgroundColor: "white",
    margin: "0 3px",

    animationName: "$blinker",
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

function Cursor() {
  const classes = useStyles();

  return <div className={classes.cursor} />;
}

export default Cursor;
