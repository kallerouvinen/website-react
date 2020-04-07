import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BubblingIcon from "./BubblingIcon";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundImage: "linear-gradient(20deg, #ff8080, #ffc680)",
    overflow: "hidden",
  },
});

function Mystery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BubblingIcon animationDuration="4.5s" size="small" xOffset={10} />
      <BubblingIcon animationDuration="5.5s" size="medium" xOffset={30} />
      <BubblingIcon animationDuration="7s" size="small" xOffset={70} />
      <BubblingIcon animationDuration="8s" size="medium" xOffset={90} />
    </div>
  );
}

export default Mystery;
