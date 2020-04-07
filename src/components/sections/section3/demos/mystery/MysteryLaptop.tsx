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
      <BubblingIcon animationDuration="4.5s" size="small" xOffset={100} />
      <BubblingIcon animationDuration="5.5s" size="large" xOffset={150} />
      <BubblingIcon animationDuration="8s" size="large" xOffset={230} />
      <BubblingIcon animationDuration="6s" size="medium" xOffset={300} />
      <BubblingIcon animationDuration="7s" size="large" xOffset={350} />
      <BubblingIcon animationDuration="7.5s" size="small" xOffset={420} />
      <BubblingIcon animationDuration="5s" size="medium" xOffset={470} />
      <BubblingIcon animationDuration="6.5s" size="medium" xOffset={520} />
    </div>
  );
}

export default Mystery;
