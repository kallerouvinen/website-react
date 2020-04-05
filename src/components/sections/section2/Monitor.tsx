import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  monitorOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 650,
    height: 290,
    backgroundColor: "white",
    border: "1px solid lightgray",
    borderRadius: 6,
  },
  monitorInner: {
    display: "flex",
    width: 630,
    height: 270,
    backgroundColor: "#1e1e1e",
    border: "1px solid lightgray",
  },
});

interface Props {
  children: any;
}

function Monitor(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.monitorOuter}>
      <div className={classes.monitorInner}>{props.children}</div>
    </div>
  );
}

export default Monitor;
