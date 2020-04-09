import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
// import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

import ChartLaptop from "./demos/chart/ChartLaptop";
import ChartMobile from "./demos/chart/ChartMobile";
import Mystery from "./demos/mystery/Mystery";

import Slide from "./Slide";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonContainer: {
    display: "flex",
    padding: 10,
  },
});

const styles = {
  views: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
  container: {
    display: "flex",
    flex: 1,
  },
};

function Section3() {
  const classes = useStyles();
  // const history = useHistory();
  const [selected, setSelected] = useState(0);

  const decrementSelected = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    }
  };

  const incrementSelected = () => {
    if (selected < data.length - 1) {
      setSelected(selected + 1);
    }
  };

  const data = [
    {
      title: "Data visualization",
      description: "TODO: Description",
      demos: {
        laptop: <ChartLaptop />,
        mobile: <ChartMobile />,
      },
    },
    {
      title: "Landing pages",
      description: "TODO: Description",
      demos: {
        laptop: null,
        mobile: null,
      },
    },
    {
      title: "E-commerce websites",
      description: "TODO: Description",
      demos: {
        laptop: null,
        mobile: null,
      },
    },
    {
      title: "Something else?",
      description:
        "Contact me with your ideas and let's see if we can build something awesome together",
      demos: {
        laptop: <Mystery mode="laptop" />,
        mobile: <Mystery mode="mobile" />,
      },
    },
  ];

  return (
    <div className={classes.root}>
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
        onChangeIndex={() => console.log("TODO")}
      >
        {data.map((item) => (
          <Slide
            description={item.description}
            title={item.title}
            demos={item.demos}
          />
        ))}
      </SwipeableViews>
    </div>
  );
}

export default Section3;
