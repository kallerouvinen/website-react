import React from "react";
import styled from "styled-components";

import { FadeIn } from "components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 310px;
`;

const First = styled.span`
  font-family: "Roboto";
  font-size: 26vw;
  color: #3f5efb;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 208px;
  }
  @media (min-width: 960px) {
    font-size: 14.77vw;
  }
  @media (min-width: 1280px) {
    font-size: 189px;
  }
`;

const Second = styled.span`
  font-family: "Roboto";
  font-size: 22.875vw;
  color: #7e56cb;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 183px;
  }
  @media (min-width: 960px) {
    font-size: 12.97vw;
  }
  @media (min-width: 1280px) {
    font-size: 166px;
  }
`;

const Third = styled.span`
  font-family: "Roboto";
  font-size: 11.63vw;
  color: #bd4e9b;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 93px;
  }
  @media (min-width: 960px) {
    font-size: 6.56vw;
  }
  @media (min-width: 1280px) {
    font-size: 84px;
  }
`;

const Fourth = styled.span`
  font-family: "Roboto";
  font-size: 13.38vw;
  color: #fc466b;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 107px;
  }
  @media (min-width: 960px) {
    font-size: 7.5vw;
  }
  @media (min-width: 1280px) {
    font-size: 96px;
  }
`;

function TextPanel() {
  return (
    <Container>
      <FadeIn delay={0} direction="up">
        <First>Hi, I'm</First>
      </FadeIn>
      <FadeIn delay={0} direction="left">
        <Second>Kalle,</Second>
      </FadeIn>
      <FadeIn delay={0} direction="right">
        <Third>a software</Third>
      </FadeIn>
      <FadeIn delay={0} direction="down">
        <Fourth>developer</Fourth>
      </FadeIn>
    </Container>
  );
}

export default TextPanel;
