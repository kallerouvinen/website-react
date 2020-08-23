import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MusicNote from "@material-ui/icons/MusicNote";
import Pause from "@material-ui/icons/Pause";
import Repeat from "@material-ui/icons/Repeat";
import Shuffle from "@material-ui/icons/Shuffle";
import SkipNext from "@material-ui/icons/SkipNext";
import SkipPrevious from "@material-ui/icons/SkipPrevious";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
  },
  background: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundImage: "radial-gradient(#002b33, #04042f)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    height: 30,
    width: "50%",
    borderRadius: 3,
    margin: 20,
  },
  noteContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  controlBar: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    height: 30,
    width: "50%",
    borderRadius: 3,
    margin: 20,
  },
  timeContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  timeIndicator: {
    height: 2,
    width: "100%",
    backgroundColor: "#0098b3",

    animationName: "$progress",
    animationDuration: "30s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  buttonContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 20px",
  },
  "@keyframes progress": {
    // "0%": { transform: "scaleX(0)" },
    // "100%": { transform: "scaleX(1)" },
    "0%": { width: "0%" },
    "100%": { width: "100%" },
  },
});

function MusicPlayer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <div className={classes.topContainer} />
        <div className={classes.noteContainer}>
          <MusicNote style={{ color: "white" }} />
        </div>
        <div className={classes.controlBar}>
          <div className={classes.timeContainer}>
            <div className={classes.timeIndicator} />
          </div>
          <div className={classes.buttonContainer}>
            <Shuffle style={{ fontSize: 12, color: "white" }} />
            <SkipPrevious style={{ fontSize: 24, color: "white" }} />
            <Pause style={{ fontSize: 24, color: "white" }} />
            <SkipNext style={{ fontSize: 24, color: "white" }} />
            <Repeat style={{ fontSize: 12, color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
