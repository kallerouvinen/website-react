import { useState } from "react";
import styled from "styled-components";
import MUIContainer from "@mui/material/Container";

import { demos } from "data";
import Carousel from "./Carousel";
import Slide from "./Slide";

const Root = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0;
  @media (min-width: 600px) {
    padding: 24px 0;
  }
  @media (min-width: 960px) {
    padding: 36px 0;
  }
  @media (min-width: 1280px) {
    padding: 48px 0;
  }
  @media (min-width: 1920px) {
    padding: 72px 0;
  }
`;

const Container = styled(MUIContainer)`
  padding: 24px 0 !important;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0px;
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
    <Root>
      <Container id="section3" maxWidth="lg">
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
