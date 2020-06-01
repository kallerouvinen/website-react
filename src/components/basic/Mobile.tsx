import React, { MouseEvent } from "react";
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
    borderRadius: 16,
    boxShadow: "0px 6px 10px -4px #808080",
  },
  screen: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  statusBar: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    height: 16,
    right: 10,
    fontSize: 6,
    fontWeight: "bold",
    color: "#333333",
  },
  clickBlocker: {
    position: "absolute",
    width: 135,
    height: 270,
  },
  icon: {
    fontSize: 6,
  },
});

interface Props {
  component?: React.ReactNode;
}

function Mobile(props: Props) {
  const classes = useStyles();
  const { component = null } = props;

  const now = new Date();
  const clock = `${now.getHours()}:${("0" + now.getMinutes()).slice(-2)}`;

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.bezel}>
      <div className={classes.screen}>
        <div className={classes.statusBar}>
          <SignalCellular4Bar className={classes.icon} />
          <BatteryFull className={classes.icon} />
          {clock}
        </div>
        {component && typeof component === "string" && (
          <img src={component} alt="Demo" />
        )}
        {component && typeof component === "object" && component}
        <div className={classes.clickBlocker} onClick={stopPropagation} />
      </div>
    </div>
  );
}

export default Mobile;
