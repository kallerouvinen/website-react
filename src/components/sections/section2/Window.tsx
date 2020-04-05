import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  windowOuter: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  bar: {
    display: "flex",
    padding: 3,
    backgroundColor: "#3c3c3c",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: "tomato",
    marginLeft: 3,
  },
  windowInner: {
    display: "flex",
    flex: 1,
  },
});

interface Props {
  children: any;
}

function Window(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.windowOuter}>
      <div className={classes.bar}>
        <div className={classes.button} />
        <div className={classes.button} />
        <div className={classes.button} />
      </div>
      <div className={classes.windowInner}>{props.children}</div>
    </div>
  );
}

export default Window;
