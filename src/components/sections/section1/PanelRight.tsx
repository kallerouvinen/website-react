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
    height: 6,
    width: 250,
    margin: "16px 0",
    borderRadius: 3,
    opacity: 0.5,
    "@media (min-width:600px)": {
      width: 370,
    },
    "@media (min-width:960px)": {
      width: 500,
    },
    "@media (min-width:1280px)": {
      width: 370,
      margin: "24px 0",
    },
    "@media (min-width:1920px)": {
      width: 500,
      margin: "32px 0",
    },
  },
  first: {
    fontSize: 50,
    color: "#ff0000",
    "@media (min-width:600px)": {
      fontSize: 75,
    },
    "@media (min-width:960px)": {
      fontSize: 100,
    },
    "@media (min-width:1280px)": {
      fontSize: 75,
    },
    "@media (min-width:1920px)": {
      fontSize: 100,
    },
  },
  second: {
    fontSize: 34,
    color: "#ff2300",
    "@media (min-width:600px)": {
      fontSize: 51,
    },
    "@media (min-width:960px)": {
      fontSize: 69,
    },
    "@media (min-width:1280px)": {
      fontSize: 51,
    },
    "@media (min-width:1920px)": {
      fontSize: 69,
    },
  },
  third: {
    fontSize: 29,
    color: "#ff4600",
    "@media (min-width:600px)": {
      fontSize: 43,
    },
    "@media (min-width:960px)": {
      fontSize: 57.5,
    },
    "@media (min-width:1280px)": {
      fontSize: 43,
    },
    "@media (min-width:1920px)": {
      fontSize: 57.5,
    },
  },
  fourth: {
    fontSize: 31,
    color: "#ff6900",
    "@media (min-width:600px)": {
      fontSize: 46,
    },
    "@media (min-width:960px)": {
      fontSize: 62,
    },
    "@media (min-width:1280px)": {
      fontSize: 46,
    },
    "@media (min-width:1920px)": {
      fontSize: 62,
    },
  },
  fifth: {
    fontSize: 54,
    color: "#ff8c00",
    "@media (min-width:600px)": {
      fontSize: 80,
    },
    "@media (min-width:960px)": {
      fontSize: 107,
    },
    "@media (min-width:1280px)": {
      fontSize: 80,
    },
    "@media (min-width:1920px)": {
      fontSize: 107,
    },
  },
});

function PanelRight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FadeIn shouldAnimate delay={100} direction="up">
        <Typography className={classes.first}>HI, I'M KALLE</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={300} direction="left">
        <Typography className={classes.second}>A WEB DEVELOPER</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={500} direction="right">
        <div className={classes.divider} />
      </FadeIn>
      <FadeIn shouldAnimate delay={700} direction="left">
        <Typography className={classes.third}>BRING ME YOUR IDEAS</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={900} direction="right">
        <Typography className={classes.fourth}>AND I'LL TURN THEM</Typography>
      </FadeIn>
      <FadeIn shouldAnimate delay={1100} direction="down">
        <Typography className={classes.fifth}>INTO MAGIC</Typography>
      </FadeIn>
    </div>
  );
}

export default PanelRight;
