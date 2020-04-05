import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  code: {
    // width: 30,
    height: 10,
    borderRadius: 8,
    // margin: "0px 1px",
    // backgroundColor: "lime",
  },
});

interface Props {
  color?: string;
  width?: number;
}

function Code(props: Props) {
  const classes = useStyles();
  const { color = "#d4d4c9", width = 2 } = props;

  return (
    <div
      className={classes.code}
      style={{ backgroundColor: color, width: width * 5 }}
    />
  );
}

export default Code;
