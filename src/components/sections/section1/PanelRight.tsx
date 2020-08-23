import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { FadeIn } from "components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  divider: {
    backgroundColor: "#ff3200",
    height: 6,
    width: 500,
    margin: "30px 0",
    borderRadius: 3,
    opacity: 0.5,
  },
  first: {
    fontSize: 100,
    color: "#ff0000",
  },
  second: {
    fontSize: 69,
    color: "#ff2300",
  },
  third: {
    fontSize: 57.5,
    color: "#ff4600",
  },
  fourth: {
    fontSize: 62,
    color: "#ff6900",
  },
  fifth: {
    fontSize: 107,
    color: "#ff8c00",
  },
});

interface Props {
  shouldAnimate: boolean;
}

function PanelRight(props: Props) {
  const { shouldAnimate } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FadeIn shouldAnimate={shouldAnimate} delay={100} direction="up">
        <Typography className={classes.first}>HI, I'M KALLE</Typography>
      </FadeIn>
      <FadeIn shouldAnimate={shouldAnimate} delay={300} direction="left">
        <Typography className={classes.second}>A WEB DEVELOPER</Typography>
      </FadeIn>
      <FadeIn shouldAnimate={shouldAnimate} delay={500} direction="right">
        <div className={classes.divider} />
      </FadeIn>
      <FadeIn shouldAnimate={shouldAnimate} delay={700} direction="left">
        <Typography className={classes.third}>BRING ME YOUR IDEAS</Typography>
      </FadeIn>
      <FadeIn shouldAnimate={shouldAnimate} delay={900} direction="right">
        <Typography className={classes.fourth}>AND I'LL TURN THEM</Typography>
      </FadeIn>
      <FadeIn shouldAnimate={shouldAnimate} delay={1100} direction="down">
        <Typography className={classes.fifth}>INTO MAGIC</Typography>
      </FadeIn>
    </div>
  );
}

export default PanelRight;
