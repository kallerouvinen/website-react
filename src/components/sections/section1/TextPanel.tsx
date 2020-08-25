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
    backgroundColor: "#ff3200",
    width: 225,
    height: 4,
    margin: "16px 0",
    borderRadius: 3,
    opacity: 0.5,
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
    fontSize: 45,
    color: "#ff0000",
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
    fontSize: 31,
    color: "#ff2300",
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
    fontSize: 26,
    color: "#ff4600",
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
    fontSize: 28,
    color: "#ff6900",
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
    fontSize: 48,
    color: "#ff8c00",
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
        <Typography className={classes.first}>HI, I'M KALLE</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="left">
        <Typography className={classes.second}>A WEB DEVELOPER</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="right">
        <div className={classes.divider} />
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="left">
        <Typography className={classes.third}>BRING ME YOUR IDEAS</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="right">
        <Typography className={classes.fourth}>AND I'LL TURN THEM</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={0} direction="down">
        <Typography className={classes.fifth}>INTO MAGIC</Typography>
      </FadeIn>
    </div>
  );
}

export default TextPanel;
