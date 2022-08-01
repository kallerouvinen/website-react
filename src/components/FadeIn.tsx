import { useEffect, useState, ReactNode } from "react";
import styled from "styled-components";

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
      ? "translate(0px)"
      : direction === "up"
      ? "translateY(-30px)"
      : direction === "down"
      ? "translateY(30px)"
      : direction === "left"
      ? "translateX(-30px)"
      : "translateX(30px)"};
`;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface FadeInProps {
  children?: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
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
      {children}
    </Container>
  );
}

export default FadeIn;
