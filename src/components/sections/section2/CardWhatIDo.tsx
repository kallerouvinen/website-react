import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    margin: 12,
    fontSize: 44,
    color: "#fff",
  },
  description: {
    margin: 12,
    fontSize: 18,
    color: "#fff",
  },
  divider: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
});

function CardWhatIDo() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>What I do</h1>
      <p className={classes.description}>
        I create dynamic, responsive and fast user interfaces with years of
        experience in building apps using <b>React</b> and <b>React Native</b>.
      </p>
      <p className={classes.description}>
        On my free time I have dabbled with game programming using{" "}
        <b>Unreal Engine</b>. I also enjoy travelling to new places.
      </p>
      <Divider className={classes.divider} variant="middle" />
      <h1 className={classes.title}>What I don't do</h1>
      <p className={classes.description}>
        I would fail to draw any popular sorting algorithm on a whiteboard or
        tell you anything about NP-completeness. I also do google the difference
        between slice() and splice() whenever I need to split an array.
      </p>
      <p className={classes.description}>Also, I don't drink coffee.</p>
    </div>
  );
}

export default CardWhatIDo;
