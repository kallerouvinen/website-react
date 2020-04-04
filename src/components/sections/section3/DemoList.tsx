import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SlideMenu from "./SlideMenu";
import Slide from "./Slide";
import Mystery from "./demos/Mystery";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

function DemoList() {
  const classes = useStyles();

  const onItemClick = () => {
    console.log("TODO");
  };

  return (
    <div className={classes.root}>
      <SlideMenu>
        <Slide backgroundColor="red" onClick={onItemClick} />
        <Slide backgroundColor="blue" onClick={onItemClick} />
        <Slide backgroundColor="cyan" onClick={onItemClick} />
        <Mystery />
      </SlideMenu>
    </div>
  );
}

export default DemoList;
