import React, { useState } from "react";
import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";

import { demos } from "data";
import Carousel from "./Carousel";
import Slide from "./Slide";

const Root = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 96px 0;
`;

const Container = styled(MUIContainer)`
  padding: 0;
  text-align: center;
`;

const Title = styled.h1`
  margin: 12px;
  font-size: 44px;
`;

function Section3() {
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
    <Root id="section3">
      <Container maxWidth="lg">
        <Title>My work</Title>
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
    </Root>
  );
}

export default Section3;
