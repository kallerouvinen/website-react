import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SlideMenu from "./SlideMenu";
import Slide from "./Slide";

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

  return (
    <div className={classes.root}>
      <SlideMenu>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </SlideMenu>
    </div>
  );
}

export default DemoList;
