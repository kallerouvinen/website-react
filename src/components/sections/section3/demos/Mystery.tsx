import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BubblingIcon from "./BubblingIcon";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // TODO: Adjust background color
    backgroundColor: "purple",
    // TODO: Icons are visible on other slides
    overflow: "hidden",
  },
});

function Mystery() {
  const classes = useStyles();

  // TODO: Adjust animations
  // xOffset: 0-600

  return (
    <div className={classes.root}>
      <BubblingIcon animationDuration="7s" size="small" xOffset={50} />
      <BubblingIcon animationDuration="10s" size="large" xOffset={150} />
      <BubblingIcon animationDuration="18s" size="large" xOffset={200} />
      <BubblingIcon animationDuration="11s" size="medium" xOffset={300} />
      <BubblingIcon animationDuration="13s" size="large" xOffset={350} />
      <BubblingIcon animationDuration="14s" size="small" xOffset={450} />
      <BubblingIcon animationDuration="9s" size="medium" xOffset={500} />
      <BubblingIcon animationDuration="16s" size="medium" xOffset={600} />
    </div>
  );
}

export default Mystery;
