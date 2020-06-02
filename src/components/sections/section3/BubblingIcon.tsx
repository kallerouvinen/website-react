import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Help from "mdi-material-ui/Help";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    color: "#ffe8cc",
    animation: "$float linear infinite",
  },

  "@keyframes float": {
    "0%": { transform: "translateY(220px)", opacity: 0 },
    "30%": { opacity: 1 },
    "70%": { opacity: 1 },
    "100%": { transform: "translateY(10px)", opacity: 0 },
  },
});

interface Props {
  animationDuration?: string;
  size?: "small" | "medium" | "large";
  xOffset?: number;
}

function BubblingIcon(props: Props) {
  const classes = useStyles();
  const {
    animationDuration = "5s",
    size = "medium",
    xOffset: left = 0,
  } = props;

  const fontSize = size === "small" ? 24 : size === "medium" ? 48 : 72;

  return (
    <Help
      className={classes.root}
      style={{ animationDuration, left, fontSize }}
    />
  );
}

export default BubblingIcon;
