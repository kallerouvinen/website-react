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
  font-size: 22.5vw;
  color: #3f5efb;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 180px;
  }
  @media (min-width: 960px) {
    font-size: 12.5vw;
  }
  @media (min-width: 1280px) {
    font-size: 160px;
  }
`;

const Second = styled.span`
  font-family: "Roboto";
  font-size: 19.75vw;
  color: #7e56cb;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 158px;
  }
  @media (min-width: 960px) {
    font-size: 11.02vw;
  }
  @media (min-width: 1280px) {
    font-size: 141px;
  }
`;

const Third = styled.span`
  font-family: "Roboto";
  font-size: 10vw;
  color: #bd4e9b;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 80px;
  }
  @media (min-width: 960px) {
    font-size: 5.63vw;
  }
  @media (min-width: 1280px) {
    font-size: 72px;
  }
`;

const Fourth = styled.span`
  font-family: "Roboto";
  font-size: 11.5vw;
  color: #fc466b;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  @media (min-width: 800px) {
    font-size: 92px;
  }
  @media (min-width: 960px) {
    font-size: 6.48vw;
  }
  @media (min-width: 1280px) {
    font-size: 83px;
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
