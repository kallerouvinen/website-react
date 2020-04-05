import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

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
  let history = useHistory();

  const onItem1Click = () => {
    history.push("/slide1");
  };

  const onItem2Click = () => {
    history.push("/slide2");
  };

  const onItem3Click = () => {
    history.push("/slide3");
  };

  return (
    <div className={classes.root}>
      <SlideMenu>
        <Slide backgroundColor="red" onClick={onItem1Click} />
        <Slide backgroundColor="blue" onClick={onItem2Click} />
        <Slide backgroundColor="cyan" onClick={onItem3Click} />
        <Mystery />
      </SlideMenu>
    </div>
  );
}

export default DemoList;
