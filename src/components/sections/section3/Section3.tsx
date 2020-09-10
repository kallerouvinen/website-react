import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

import { demos } from "data";
import Slide from "./Slide";
import { Stepper } from "components";

const useStyles = makeStyles({
  section3: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    padding: "96px 0",
    justifyContent: "center",
  },
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    "&:hover > button": {
      opacity: 1,
    },
  },
  swipeableViewsOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    background:
      "linear-gradient(to right, #fff, transparent 5%, transparent 95%, #fff)",
  },
  buttonPrev: {
    position: "absolute",
    left: 16,
    opacity: 0,
    color: "white",
    backgroundColor: "#3f5efb",
  },
  buttonNext: {
    position: "absolute",
    right: 16,
    opacity: 0,
    color: "white",
    backgroundColor: "#3f5efb",
  },
});

const styles = {
  views: {
    height: "100%",
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
      <Container className={classes.container} maxWidth="lg">
        {/* TODO: Add virtualization for performance */}
        {/* TODO: Add autoplay */}
        <SwipeableViews
          style={styles.views}
          containerStyle={styles.container}
          index={selected}
          onChangeIndex={handleChangeIndex}
        >
          {demos.map((item, index) => (
            <Slide
              demos={item.demos}
              description={item.description}
              key={index}
              livePath={item.livePath}
              title={item.title}
            />
          ))}
        </SwipeableViews>
        <Hidden mdDown>
          <div className={classes.swipeableViewsOverlay} />
        </Hidden>
        <Hidden smDown>
          <IconButton
            className={classes.buttonPrev}
            onClick={decrementSelected}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            className={classes.buttonNext}
            onClick={incrementSelected}
          >
            <ChevronRight />
          </IconButton>
        </Hidden>
        <Stepper activeStep={selected} steps={demos.length} />
      </Container>
    </div>
  );
}

export default Section3;
