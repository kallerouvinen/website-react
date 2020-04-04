import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s all",
  },
  faded: {
    opacity: 0,
  },
});

const styles = {
  list: {
    display: "flex",
    flex: 1,
    overflow: "visible",
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
  data: any;
  selected: number;
}

function InfoContainer(props: Props) {
  const classes = useStyles();
  const { data, selected } = props;

  return (
    <SwipeableViews
      style={styles.list}
      containerStyle={styles.slideContainer}
      axis="y"
      index={selected}
    >
      {data.map((item: any, index: number) => (
        <div style={styles.slide}>
          <div
            className={`${classes.box} ${selected !== index && classes.faded}`}
          >
            <Typography gutterBottom variant="h5">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </div>
        </div>
      ))}
    </SwipeableViews>
  );
}

export default InfoContainer;
