import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

import BubblingIcon from "./BubblingIcon";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(20deg, #3f5efb, #fc466b)",
    overflow: "hidden",
  },
  laptop: {
    width: 768,
    height: 432,
  },
  mobile: {
    width: 200,
    height: 400,
  },
});

interface Props {
  mode?: "laptop" | "mobile";
}

function Mystery(props: Props) {
  const classes = useStyles();
  const { mode = "laptop" } = props;

  return (
    <div
      className={`${classes.root} ${
        mode === "laptop" ? classes.laptop : classes.mobile
      }`}
    >
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
            left={30}
            top={120}
          />
          <BubblingIcon
            animationDuration="2.5s"
            size="medium"
            left={50}
            top={270}
          />
          <BubblingIcon
            animationDuration="3s"
            size="small"
            left={105}
            top={190}
          />
          <BubblingIcon
            animationDuration="3.5s"
            size="medium"
            left={125}
            top={60}
          />
        </>
      )}
    </div>
  );
}

export default memo(Mystery);
