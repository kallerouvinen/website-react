import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { FadeIn } from "../../basic";

const useStyles = makeStyles({
  mouse: {
    display: "flex",
    height: 35,
    width: 20,
    borderRadius: 15,
    border: "solid 2px #ff6900",
    alignItems: "center",
    justifyContent: "center",
  },
  wheel: {
    height: 10,
    width: 4,
    borderRadius: "50%",
    backgroundColor: "#ff8c00",
    animation: "$scroll 0.9s ease infinite alternate",
  },
  "@keyframes scroll": {
    "0%": { transform: "scaleY(1) translateY(-9px)" },
    "100%": { transform: "scaleY(0.8) translateY(0px)" },
  },
});

interface Props {
  shouldAnimate: boolean;
}

function ScrollIndicator(props: Props) {
  const { shouldAnimate } = props;
  const classes = useStyles();

  return (
    <FadeIn shouldAnimate={shouldAnimate} delay={2000} direction="down">
      <div className={classes.mouse}>
        <div className={classes.wheel} />
      </div>
    </FadeIn>
  );
}

export default ScrollIndicator;
