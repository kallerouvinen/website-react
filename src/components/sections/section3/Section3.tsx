import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

import Slide from "./Slide";
import { demos } from "data";

const useStyles = makeStyles({
  section3: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    padding: 10,
    alignSelf: "center",
  },
  swipeableViewsOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    background:
      "linear-gradient(to right, #fff calc(50% - 680px), transparent calc(50% - 600px), transparent calc(50% + 600px), #fff calc(50% + 680px))",
  },
});

const styles = {
  views: {
    height: "100%",
    // This effectively makes single slide max width 1280px
    // and allows rest of the slides be visible
    padding: "0 calc(50% - 640px)",
  },
  container: {
    height: "100%",
  },
};

function Section3() {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  const decrementSelected = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    }
  };

  const incrementSelected = () => {
    if (selected < demos.length - 1) {
      setSelected(selected + 1);
    }
  };

  const handleChangeIndex = (index: number) => {
    setSelected(index);
  };

  return (
    <div className={classes.section3}>
      <div className={classes.buttonContainer}>
        <IconButton onClick={decrementSelected}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={incrementSelected}>
          <ChevronRight />
        </IconButton>
      </div>
      {/* TODO: Add virtualization for performance */}
      {/* TODO: Add autoplay */}
      <SwipeableViews
        style={styles.views}
        containerStyle={styles.container}
        index={selected}
        onChangeIndex={handleChangeIndex}
      >
        {demos.map((item) => (
          <Slide
            description={item.description}
            title={item.title}
            demos={item.demos}
            livePath={item.livePath}
          />
        ))}
      </SwipeableViews>
      <div className={classes.swipeableViewsOverlay} />
    </div>
  );
}

export default Section3;
