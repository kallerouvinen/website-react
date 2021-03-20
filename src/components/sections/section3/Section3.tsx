import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { demos } from "data";
import Carousel from "./Carousel";
import Slide from "./Slide";

const useStyles = makeStyles({
  section3: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    padding: "96px 0",
    justifyContent: "center",
  },
  container: {
    padding: 0,
  },
});

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
    <div id="section3" className={classes.section3}>
      <Container className={classes.container} maxWidth="lg">
        {/* TODO: Add virtualization for performance */}
        {/* TODO: Add autoplay */}
        <Carousel
          onChangeIndex={handleChangeIndex}
          onNextClick={incrementSelected}
          onPrevClick={decrementSelected}
          selected={selected}
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
        </Carousel>
      </Container>
    </div>
  );
}

export default Section3;
