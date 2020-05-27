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
    border: "2px solid #f2f2f2",
  },
  inner: {
    background: "linear-gradient(to right, #8080ff, #80ccff)",
    color: "#fff",
    padding: "0 1px",
  },
  labelContainer: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
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
  progress: number;
}

function Goal(props: Props) {
  const classes = useStyles();
  const { icon, label, progress } = props;
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
        <div className={classes.labelContainer}>
          {icon}
          <Typography className={classes.text}>{label}</Typography>
        </div>
        {progress === 100 && <CheckCircle className={classes.checkIcon} />}
      </div>
      <div
        className={`${classes.bar} ${classes.inner}`}
        style={{ width: `${progress}%` }}
      >
        <div className={classes.labelContainer}>
          {icon}
          <Typography className={classes.text}>{label}</Typography>
        </div>
        {progress === 100 && <CheckCircle className={classes.checkIcon} />}
      </div>
    </div>
  );
}

export default Goal;
