import React, { MouseEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 244.5,
    height: 121.5,
    "@media (min-width:600px)": {
      width: 326,
      height: 162,
    },
    "@media (min-width:960px)": {
      width: 326,
      height: 162,
    },
    "@media (min-width:1280px)": {
      width: 489,
      height: 243,
    },
    // Original values for reference
    //   width: 652,
    //   height: 324,
  },
  monitorOuter: {
    display: "flex",
    width: "78.53%",
    height: "88.89%",
    padding: "0.92% 0.92% 2.45% 0.92%",
    backgroundColor: "#18181b",
    borderTopLeftRadius: "1.15% 1.94%",
    borderTopRightRadius: "1.15% 1.94%",
    borderBottomLeftRadius: "0.38% 4.52%",
    borderBottomRightRadius: "0.38% 4.52%",
  },
  monitorInner: {
    position: "relative",
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
  },
  clickBlocker: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  keyboard: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "1.23%",
    borderTopLeftRadius: "0.31% 50%",
    borderTopRightRadius: "0.31% 50%",
    backgroundImage:
      "linear-gradient(to right, #18181b, #d9d9d9 2%, #d9d9d9 4%, #a6a6b0 6%, #c9c9cf 50%, #a6a6b0 94%, #d9d9d9 96%, #d9d9d9 98%, #18181b 100%)",
  },
  touchpad: {
    width: "18.40%",
    height: "100%",
    backgroundImage:
      "linear-gradient(to right, #18181b, #60606c 4%, #aeaeb7 20%, #aeaeb7 80%, #60606c 96%, #18181b 100%)",
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "3.09%",
    borderBottomLeftRadius: "15.34% 100%",
    borderBottomRightRadius: "15.34% 100%",
    backgroundImage: "linear-gradient(#54545f, #000000)",
    boxShadow: "0px 0.140625em 0.1875em #808080",
    "@media (min-width:600px)": {
      boxShadow: "0px 0.1875em 0.25em #808080",
    },
    "@media (min-width:960px)": {
      boxShadow: "0px 0.1875em 0.25em #808080",
    },
    "@media (min-width:1280px)": {
      boxShadow: "0px 0.28125em 0.375em #808080",
    },
    // Original values for reference
    //   boxShadow: "0px 0.375em 0.5em #808080",
  },
});

interface Props {
  component?: React.ReactNode;
}

function Laptop(props: Props) {
  const classes = useStyles();
  const { component = null } = props;

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.root}>
      <div className={classes.monitorOuter}>
        <div className={classes.monitorInner}>
          {component && typeof component === "string" && (
            <img src={component} alt="Demo" />
          )}
          {component && typeof component === "object" && component}
          <div className={classes.clickBlocker} onClick={stopPropagation} />
        </div>
      </div>
      <div className={classes.keyboard}>
        <div className={classes.touchpad} />
      </div>
      <div className={classes.bottom} />
    </div>
  );
}

export default Laptop;
