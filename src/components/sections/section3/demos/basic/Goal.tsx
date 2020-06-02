import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircle from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    borderRadius: 10000,
    overflow: "hidden",
    height: 48,
    margin: "8px 0px",
  },
  bar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  inner: {
    background: "linear-gradient(to right, #8080ff, #80ccff)",
    color: "#fff",
  },
  leftContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  labelContainer: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    fontSize: 24,
    padding: "0 16px",
  },
  text: {
    fontSize: 14,
    textOverflow: "ellipsis",
  },
  secondaryText: {
    fontSize: 10,
    textOverflow: "ellipsis",
  },
  checkIcon: {
    fontSize: 32,
    padding: "0 8px",
  },
});

interface Props {
  icon: any;
  label: string;
  goal: number;
  current: number;
}

function Goal(props: Props) {
  const classes = useStyles();
  const { current, goal, icon, label } = props;

  const goalIcon = React.cloneElement(icon, { className: classes.icon });

  return (
    <div className={classes.root}>
      <div className={`${classes.bar} ${classes.outer}`}>
        <div className={classes.leftContainer}>
          {goalIcon}
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
          {goalIcon}
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
