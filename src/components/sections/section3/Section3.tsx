import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import SlideMenu from "./SlideMenu";
import Slide from "./Slide";
import Mystery from "./demos/Mystery";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
});

function Section3() {
  const classes = useStyles();
  let history = useHistory();
  const [selected, setSelected] = useState(0);

  const onItem1Click = () => {
    if (selected !== 0) {
      setSelected(0);
    } else {
      history.push("/slide1");
    }
  };

  const onItem2Click = () => {
    if (selected !== 1) {
      setSelected(1);
    } else {
      history.push("/slide2");
    }
  };

  const onItem3Click = () => {
    if (selected !== 2) {
      setSelected(2);
    } else {
      history.push("/slide3");
    }
  };

  return (
    <div className={classes.root}>
      <SlideMenu selected={selected} onItemClick={setSelected}>
        <Slide backgroundColor="red" onClick={onItem1Click} />
        <Slide backgroundColor="blue" onClick={onItem2Click} />
        <Slide backgroundColor="cyan" onClick={onItem3Click} />
        <Mystery />
      </SlideMenu>
    </div>
  );
}

export default Section3;
