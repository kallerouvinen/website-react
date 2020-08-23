import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

import Mystery from "./Mystery";
import Slide from "./Slide";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    minHeight: "100%",
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
      id: 1,
      title: "Applications",
      description: "TODO: Description",
      demos: {
        laptop: "", // TODO: Add .gif for desktop demo
        mobile: "", // TODO: Add .gif for mobile demo
      },
      livePath: "COMING_SOON",
    },
    {
      id: 2,
      title: "Landing pages",
      description: "TODO: Description",
      demos: {
        laptop: "", // TODO: Add .gif for desktop demo
        mobile: "", // TODO: Add .gif for mobile demo
      },
      livePath: "COMING_SOON",
    },
    {
      id: 3,
      title: "E-commerce websites",
      description: "TODO: Description",
      demos: {
        laptop: "", // TODO: Add .gif for desktop demo
        mobile: "", // TODO: Add .gif for mobile demo
      },
      livePath: "COMING_SOON",
    },
    {
      id: 4,
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
            key={`${item.id}`}
            description={item.description}
            title={item.title}
            demos={item.demos}
            livePath={item.livePath}
          />
        ))}
      </SwipeableViews>
    </div>
  );
}

export default Section3;
