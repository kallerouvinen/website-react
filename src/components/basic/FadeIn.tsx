import React, { useEffect, useState, ReactNode } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    transition: "1s all",
  },
  in: {
    opacity: 1,
    transform: "translate(0px)",
  },
  up: {
    opacity: 0,
    transform: "translateY(-30px)",
  },
  down: {
    opacity: 0,
    transform: "translateY(30px)",
  },
  left: {
    opacity: 0,
    transform: "translateX(-30px)",
  },
  right: {
    opacity: 0,
    transform: "translateX(30px)",
  },
});

interface Props {
  children?: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  shouldAnimate?: boolean;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function FadeIn(props: Props) {
  const { delay = 0, direction = "up", shouldAnimate = false } = props;
  const [animatedIn, setAnimatedIn] = useState(false);
  const classes = useStyles();

  const animate = async (value: boolean, delay: number) => {
    await sleep(delay);
    setAnimatedIn(value);
  };

  useEffect(() => {
    animate(shouldAnimate, delay);
  }, [shouldAnimate, delay]);

  return (
    <div
      className={`${classes.root} ${
        animatedIn ? classes.in : classes[direction]
      }`}
    >
      {props.children}
    </div>
  );
}

export default FadeIn;
