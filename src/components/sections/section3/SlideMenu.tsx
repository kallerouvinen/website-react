import React, { useState, ReactNode } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
  },
  box: {
    display: "flex",
    flex: 1,
    padding: "20px 0",
    transition: "0.5s all",
  },
  faded: {
    opacity: 0.3,
  },
  faded2: {
    opacity: 0,
  },
});

const styles = {
  list: {
    display: "flex",
    height: "100%",
    width: 600,
    paddingTop: "38%", // TODO: Calculate this correctly
    overflow: "visible",
    transform: "scale(0.8) perspective(750px) rotateY(30deg)",
  },
  slideContainer: {
    height: 400,
    width: "100%",
  },
  slide: {
    display: "flex",
    height: 400,
  },
};

interface Props {
  children: ReactNode[];
}

function SlideMenu(props: Props) {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  const decrementSelected = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    }
  };

  const incrementSelected = () => {
    if (selected < props.children.length - 1) {
      setSelected(selected + 1);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonContainer}>
        <IconButton onClick={decrementSelected}>
          <KeyboardArrowUp />
        </IconButton>
        <IconButton onClick={incrementSelected}>
          <KeyboardArrowDown />
        </IconButton>
      </div>
      <SwipeableViews
        style={styles.list}
        containerStyle={styles.slideContainer}
        axis="y"
        index={selected}
        onChangeIndex={setSelected}
      >
        {props.children.map((child: any, index: number) => (
          <div style={styles.slide}>
            <div
              className={`${classes.box} ${selected !== index &&
                (Math.abs(index - selected) === 1
                  ? classes.faded
                  : classes.faded2)}`}
            >
              {child}
            </div>
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
}

export default SlideMenu;
