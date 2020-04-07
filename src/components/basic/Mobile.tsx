import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BatteryFull from "@material-ui/icons/BatteryFull";
import SignalCellular4Bar from "@material-ui/icons/SignalCellular4Bar";

const useStyles = makeStyles({
  bezel: {
    display: "flex",
    padding: "4px 4px 4px 4px",
    width: 135, // 9 * 15
    height: 270, // 18 * 15
    backgroundColor: "#242429",
    borderRadius: 12,
    boxShadow: "0px 6px 10px -4px #808080",
  },
  screen: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  statusBar: {
    display: "flex",
    flex: 1,
    height: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 6,
    fontSize: 6,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 6,
  },
});

interface Props {
  children: any;
}

function Mobile(props: Props) {
  const classes = useStyles();
  const now = new Date();
  const clock = `${now.getHours()}:${("0" + now.getMinutes()).slice(-2)}`;

  return (
    <div className={classes.bezel}>
      <div className={classes.screen}>
        <div className={classes.statusBar}>
          <SignalCellular4Bar className={classes.icon} />
          <BatteryFull className={classes.icon} />
          {clock}
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Mobile;
