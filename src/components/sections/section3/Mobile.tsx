import React, { MouseEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";

import BatteryFull from "@material-ui/icons/BatteryFull";
import SignalCellular4Bar from "@material-ui/icons/SignalCellular4Bar";

const useStyles = makeStyles({
  bezel: {
    display: "flex",
    padding: "2.97%",
    backgroundColor: "#242429",
    borderTopLeftRadius: "11.85% 5.93%",
    borderTopRightRadius: "11.85% 5.93%",
    borderBottomLeftRadius: "11.85% 5.93%",
    borderBottomRightRadius: "11.85% 5.93%",
    boxShadow: "0px 6px 10px -4px #808080", // TODO: Use percentages instead of pixels
    width: 50.5,
    height: 101.5,
    "@media (min-width:600px)": {
      width: 67.5,
      height: 135,
    },
    "@media (min-width:960px)": {
      width: 101.25,
      height: 202.5,
    },
    "@media (min-width:1280px)": {
      width: 101.25,
      height: 202.5,
    },
    "@media (min-width:1920px)": {
      width: 135, // 9 * 15
      height: 270, // 18 * 15
    },
  },
  screen: {
    position: "relative",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderTopLeftRadius: "8.89% 4.44%",
    borderTopRightRadius: "8.89% 4.44%",
    borderBottomLeftRadius: "8.89% 4.44%",
    borderBottomRightRadius: "8.89% 4.44%",
    overflow: "hidden",
  },
  statusBar: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "5.93%",
    justifyContent: "flex-end",
    alignItems: "center",
    right: 0,
    paddingRight: "7.41%",
    "& > *": {
      fontSize: 3,
      fontWeight: "bold",
      color: "#333333",
      "@media (min-width:600px)": {
        fontSize: 4,
      },
      "@media (min-width:960px)": {
        fontSize: 5,
      },
      "@media (min-width:1280px)": {
        fontSize: 5,
      },
      "@media (min-width:1920px)": {
        fontSize: 6,
      },
    },
  },
  clickBlocker: {
    position: "absolute",
    width: "100%",
    height: "100%",
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
          <SignalCellular4Bar />
          <BatteryFull />
          <span>{clock}</span>
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