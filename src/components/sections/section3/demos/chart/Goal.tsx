import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircle from "@material-ui/icons/CheckCircle";

import { ResponsiveWrapperProps } from "../../../../hoc/withResponsiveWrapper";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: 48,
    margin: 8,
    borderRadius: 48,
    overflow: "hidden",
  },
  bar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textIndent: 8,
    position: "absolute",
    whiteSpace: "nowrap",
    overflow: "hidden",
    height: "100%",
  },
  outer: {
    backgroundColor: "#fff",
    color: "#000",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: 24,
  },
  inner: {
    background: "linear-gradient(to right, #8080ff, #80ccff)",
    color: "#fff",
  },
  leftContainer: {
    display: "flex",
    flex: 1,
  },
  labelContainer: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: 14,
    textOverflow: "ellipsis",
  },
  secondaryText: {
    fontSize: 10,
    textOverflow: "ellipsis",
  },
  icon: {
    fontSize: 28,
    padding: "4px 0 4px 12px",
  },
  checkIcon: {
    fontSize: 36,
    padding: 8,
  },
});

interface Props extends ResponsiveWrapperProps {
  icon: any;
  label: string;
  goal: number;
  current: number;
}

function Goal(props: Props) {
  const classes = useStyles();
  const { current, goal, icon, label } = props;
  const { isMobile, isWide, wideBreakpoint, width } = props.size;

  const mobileMultiplier = isMobile ? 3 : 1;
  const widthMultiplier = isWide ? wideBreakpoint : width;

  const fontSize = 0.02 * mobileMultiplier * widthMultiplier;
  // const priceFontSize = 0.05 * mobileMultiplier * widthMultiplier;
  // const priceChangeFontSize = 0.018 * mobileMultiplier * widthMultiplier;

  const styles = {
    text: { fontSize: `${fontSize}px` },
    // price: { fontSize: `${priceFontSize}px` },
    // priceChange: { fontSize: `${priceChangeFontSize}px` },
  };

  return (
    <div className={classes.root}>
      <div className={`${classes.bar} ${classes.outer}`}>
        <div className={classes.leftContainer}>
          {icon}
          <div className={classes.labelContainer}>
            <Typography className={classes.text}>{label}</Typography>
            <Typography
              className={classes.secondaryText}
            >{`$${current} / $${goal}`}</Typography>
          </div>
        </div>

        {current >= goal && <CheckCircle className={classes.checkIcon} />}
      </div>
      <div
        className={`${classes.bar} ${classes.inner}`}
        style={{ width: `${(current / goal) * 100}%` }}
      >
        <div className={classes.leftContainer}>
          {icon}
          <div className={classes.labelContainer}>
            <Typography className={classes.text}>{label}</Typography>
            <Typography
              className={classes.secondaryText}
            >{`$${current} / $${goal}`}</Typography>
          </div>
        </div>
        {current >= goal && <CheckCircle className={classes.checkIcon} />}
      </div>
    </div>
  );
}

export default Goal;
