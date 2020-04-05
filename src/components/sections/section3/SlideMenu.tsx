import React, { ReactNode } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import InfoContainer from "./InfoContainer";

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
    flex: 2,
    flexDirection: "column",
    padding: 10,
  },
  infoContainer: {
    display: "flex",
    flex: 3,
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
    flex: 3,
    overflow: "visible",
    // TODO: Edit translateX to move horizontally
    transform: "translateX(-35px) perspective(750px) rotateY(-30deg)",
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
  onItemClick: (i: number) => void;
  selected: number;
}

function SlideMenu(props: Props) {
  const classes = useStyles();
  const { children, onItemClick, selected } = props;

  const data = [
    { title: "E-commerce websites", description: "" },
    { title: "Slide 2", description: "" },
    { title: "Slide 3", description: "" },
    {
      title: "Anything you need",
      description: "Maybe your website will be the next one I create",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.buttonContainer}>
        {data.map((item, index) => (
          <Button onMouseEnter={() => onItemClick(index)}>{item.title}</Button>
        ))}
      </div>
      <div className={classes.infoContainer}>
        <InfoContainer data={data} selected={selected} />
      </div>
      <SwipeableViews
        style={styles.list}
        containerStyle={styles.slideContainer}
        axis="y"
        index={selected}
        onChangeIndex={onItemClick}
      >
        {children.map((child: any, index: number) => (
          <div style={styles.slide}>
            <div
              className={`${classes.box} ${
                selected !== index &&
                (Math.abs(index - selected) === 1
                  ? classes.faded
                  : classes.faded2)
              }`}
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
