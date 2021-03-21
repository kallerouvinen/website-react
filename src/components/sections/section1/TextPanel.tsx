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
  divider: {
    backgroundColor: "#8655c5",
    width: 225,
    height: 4,
    margin: "16px 0",
    borderRadius: 3,
    opacity: 0.5,
    "@media (min-width:450px)": {
      width: 320,
      height: 4,
      margin: "16px 0",
    },
    "@media (min-width:600px)": {
      width: 420,
      height: 5,
      margin: "24px 0",
    },
    "@media (min-width:960px)": {
      width: 300,
      height: 4,
      margin: "16px 0",
    },
    "@media (min-width:1280px)": {
      width: 420,
      height: 5,
      margin: "24px 0",
    },
    "@media (min-width:1920px)": {
      width: 500,
      height: 6,
      margin: "32px 0",
    },
  },
  first: {
    color: "#3f5efb",
    fontSize: 45,
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:450px)": {
      fontSize: 64,
    },
    "@media (min-width:600px)": {
      fontSize: 85,
    },
    "@media (min-width:960px)": {
      fontSize: 62,
    },
    "@media (min-width:1280px)": {
      fontSize: 85,
    },
    "@media (min-width:1920px)": {
      fontSize: 100,
    },
  },
  second: {
    color: "#6e58d7",
    fontSize: 31,
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:450px)": {
      fontSize: 44,
    },
    "@media (min-width:600px)": {
      fontSize: 58,
    },
    "@media (min-width:960px)": {
      fontSize: 42,
    },
    "@media (min-width:1280px)": {
      fontSize: 58,
    },
    "@media (min-width:1920px)": {
      fontSize: 69,
    },
  },
  third: {
    color: "#9e52b3",
    fontSize: 26,
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:450px)": {
      fontSize: 37,
    },
    "@media (min-width:600px)": {
      fontSize: 49,
    },
    "@media (min-width:960px)": {
      fontSize: 35,
    },
    "@media (min-width:1280px)": {
      fontSize: 49,
    },
    "@media (min-width:1920px)": {
      fontSize: 57.5,
    },
  },
  fourth: {
    color: "#cd4c8f",
    fontSize: 28,
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:450px)": {
      fontSize: 40,
    },
    "@media (min-width:600px)": {
      fontSize: 53,
    },
    "@media (min-width:960px)": {
      fontSize: 38,
    },
    "@media (min-width:1280px)": {
      fontSize: 53,
    },
    "@media (min-width:1920px)": {
      fontSize: 62,
    },
  },
  fifth: {
    color: "#fc466b",
    fontSize: 48,
    fontWeight: 700,
    textTransform: "uppercase",
    "@media (min-width:450px)": {
      fontSize: 69,
    },
    "@media (min-width:600px)": {
      fontSize: 92,
    },
    "@media (min-width:960px)": {
      fontSize: 65,
    },
    "@media (min-width:1280px)": {
      fontSize: 92,
    },
    "@media (min-width:1920px)": {
      fontSize: 107,
    },
  },
});

function TextPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FadeIn shouldAnimate delay={0} direction="up">
        <Typography className={classes.first}>Hi, I'm Kalle</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="left">
        <Typography className={classes.second}>A Web Developer</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="right">
        <div className={classes.divider} />
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="left">
        <Typography className={classes.third}>Bring Me Your Ideas</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="right">
        <Typography className={classes.fourth}>And I'll Turn Them</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="down">
        <Typography className={classes.fifth}>Into Magic</Typography>
      </FadeIn>
    </div>
  );
}

export default TextPanel;
