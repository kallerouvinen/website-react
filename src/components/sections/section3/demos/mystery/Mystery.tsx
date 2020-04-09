import React, { memo } from "react";
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

interface Props {
  mode?: "laptop" | "mobile";
}

function Mystery(props: Props) {
  const classes = useStyles();
  const { mode = "laptop" } = props;

  // TODO: Make properly responsive instead of having different modes

  return (
    <div className={classes.root}>
      {mode === "laptop" ? (
        <>
          <BubblingIcon animationDuration="4.5s" size="small" xOffset={100} />
          <BubblingIcon animationDuration="5.5s" size="large" xOffset={150} />
          <BubblingIcon animationDuration="8s" size="large" xOffset={230} />
          <BubblingIcon animationDuration="6s" size="medium" xOffset={300} />
          <BubblingIcon animationDuration="7s" size="large" xOffset={350} />
          <BubblingIcon animationDuration="7.5s" size="small" xOffset={420} />
          <BubblingIcon animationDuration="5s" size="medium" xOffset={470} />
          <BubblingIcon animationDuration="6.5s" size="medium" xOffset={520} />
        </>
      ) : (
        <>
          <BubblingIcon animationDuration="4.5s" size="small" xOffset={10} />
          <BubblingIcon animationDuration="5.5s" size="medium" xOffset={30} />
          <BubblingIcon animationDuration="7s" size="small" xOffset={70} />
          <BubblingIcon animationDuration="8s" size="medium" xOffset={90} />
        </>
      )}
    </div>
  );
}

export default memo(Mystery);
