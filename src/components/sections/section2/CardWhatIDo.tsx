import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    border: "1px solid lightgray",
  },
  icon: {
    fontSize: 48,
    color: "gray",
  },
  label: {
    textAlign: "center",
    margin: 12,
  },
  divider: {
    marginTop: 16,
    marginBottom: 16,
  },
});

function CardWhatIDo() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.label}>What I do</h2>
      <p className={classes.label}>
        I create dynamic, responsive and fast user interfaces with years of
        experience in building apps with <b>React</b> and <b>React Native</b>.
      </p>
      <p className={classes.label}>
        On my free time I have dabbled with game programming using{" "}
        <b>Unreal Engine</b>. Outside of programming, I enjoy travelling to new
        places, though that is obviously on hold because of COVID-19.
      </p>
      <Divider className={classes.divider} variant="middle" />
      <h2 className={classes.label}>What I don't do</h2>
      <p className={classes.label}>
        I would fail to draw any popular sorting algorithm on a whiteboard or
        tell you anything about NP-completeness. I also do google the difference
        between slice() and splice() whenever I need to split an array.
      </p>
      <p className={classes.label}>Also, I don't drink coffee.</p>
    </div>
  );
}

export default CardWhatIDo;
