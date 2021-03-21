import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { FadeIn } from "components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 310,
  },
  first: {
    fontSize: "26vw",
    color: "#3f5efb",
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:800px)": {
      fontSize: 208,
    },
    "@media (min-width:960px)": {
      fontSize: "13vw",
    },
    "@media (min-width:1280px)": {
      fontSize: 166,
    },
  },
  second: {
    fontSize: "21vw",
    color: "#6e58d7",
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:800px)": {
      fontSize: 168,
    },
    "@media (min-width:960px)": {
      fontSize: "10.5vw",
    },
    "@media (min-width:1280px)": {
      fontSize: 134,
    },
  },
  third: {
    fontSize: "11vw",
    color: "#9e52b3",
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:800px)": {
      fontSize: 88,
    },
    "@media (min-width:960px)": {
      fontSize: "5.5vw",
    },
    "@media (min-width:1280px)": {
      fontSize: 70,
    },
  },
  fourth: {
    fontSize: "12vw",
    color: "#cd4c8f",
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:800px)": {
      fontSize: 96,
    },
    "@media (min-width:960px)": {
      fontSize: "6vw",
    },
    "@media (min-width:1280px)": {
      fontSize: 77,
    },
  },
});

function TextPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FadeIn shouldAnimate delay={0} direction="up">
        <Typography className={classes.first}>Hi, I'm</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="left">
        <Typography className={classes.second}> Kalle,</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="right">
        <Typography className={classes.third}>A Software</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="down">
        <Typography className={classes.fourth}>Developer</Typography>
      </FadeIn>
    </div>
  );
}

export default TextPanel;
