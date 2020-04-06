import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bezel: {
    display: "flex",
    padding: "2px 2px 10px 2px",
    width: 135, // 9 * 15
    height: 240, // 16 * 15
    backgroundColor: "#fff",
    border: "1px solid lightgray",
    borderRadius: 8,
  },
  screen: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    border: "1px solid lightgray",
    borderRadius: 6,
  },
});

interface Props {
  children: any;
}

function Mobile(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.bezel}>
      <div className={classes.screen}>{props.children}</div>
    </div>
  );
}

export default Mobile;
