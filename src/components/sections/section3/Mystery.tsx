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
          <BubblingIcon
            animationDuration="2.2s"
            size="small"
            left={100}
            top={200}
          />
          <BubblingIcon
            animationDuration="2.7s"
            size="large"
            left={150}
            top={50}
          />
          <BubblingIcon
            animationDuration="4s"
            size="large"
            left={230}
            top={230}
          />
          <BubblingIcon
            animationDuration="3s"
            size="medium"
            left={300}
            top={110}
          />
          <BubblingIcon
            animationDuration="3.5s"
            size="large"
            left={350}
            top={170}
          />
          <BubblingIcon
            animationDuration="3.7s"
            size="small"
            left={420}
            top={60}
          />
          <BubblingIcon
            animationDuration="2.5s"
            size="medium"
            left={470}
            top={190}
          />
          <BubblingIcon
            animationDuration="3.2s"
            size="medium"
            left={520}
            top={110}
          />
        </>
      ) : (
        <>
          <BubblingIcon
            animationDuration="2s"
            size="small"
            left={10}
            top={60}
          />
          <BubblingIcon
            animationDuration="2.5s"
            size="medium"
            left={30}
            top={150}
          />
          <BubblingIcon
            animationDuration="3s"
            size="small"
            left={70}
            top={100}
          />
          <BubblingIcon
            animationDuration="3.5s"
            size="medium"
            left={90}
            top={20}
          />
        </>
      )}
    </div>
  );
}

export default memo(Mystery);
