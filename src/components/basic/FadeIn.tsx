import React, { useEffect, useState, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ContainerProps {
  animatedIn: boolean;
  direction?: "up" | "down" | "left" | "right";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  transition: 1s all;

  opacity: ${({ animatedIn }) => (animatedIn ? 1 : 0)};
  transform: ${({ animatedIn, direction }) =>
    animatedIn
      ? css`translate(0px)`
      : direction === "up"
      ? css`translateY(-30px)`
      : direction === "down"
      ? css`translateY(30px)`
      : direction === "left"
      ? css`translateX(-30px)`
      : css`translateX(30px)`};
`;

interface Props {
  children?: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function FadeIn(props: Props) {
  const { delay = 0, direction = "up" } = props;
  const [animatedIn, setAnimatedIn] = useState(false);

  const animate = async (value: boolean, delay: number) => {
    await sleep(delay);
    setAnimatedIn(value);
  };

  useEffect(() => {
    animate(true, delay);
  }, [delay]);

  return (
    <Container animatedIn={animatedIn} direction={direction}>
      {props.children}
    </Container>
  );
}

export default FadeIn;
