import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  monitorOuter: {
    display: "flex",
    padding: "6px 6px 16px 6px",
    width: 512, // 16 * 32
    height: 288, // 9 * 32
    backgroundColor: "#18181b",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: "2px 14px",
    borderBottomRightRadius: "2px 14px",
  },
  monitorInner: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboard: {
    display: "flex",
    justifyContent: "center",
    width: 652,
    height: 4,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    backgroundImage:
      "linear-gradient(to right, #18181b, #d9d9d9 2%, #d9d9d9 4%, #a6a6b0 6%, #c9c9cf 50%, #a6a6b0 94%, #d9d9d9 96%, #d9d9d9 98%, #18181b 100%)",
  },
  touchpad: {
    width: 120,
    height: 4,
    backgroundImage:
      "linear-gradient(to right, #18181b, #60606c 4%, #aeaeb7 20%, #aeaeb7 80%, #60606c 96%, #18181b 100%)",
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
    width: 652,
    height: 10,
    borderBottomLeftRadius: "100px 10px",
    borderBottomRightRadius: "100px 10px",
    backgroundImage: "linear-gradient(#54545f, #000000)",
    boxShadow: "0px 6px 8px #808080",
  },
});

interface Props {
  children: any;
}

function Laptop(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.monitorOuter}>
        <div className={classes.monitorInner}>{props.children}</div>
      </div>
      <div className={classes.keyboard}>
        <div className={classes.touchpad} />
      </div>
      <div className={classes.bottom} />
    </div>
  );
}

export default Laptop;
