import styled from "styled-components";

import Carousel from "@/components/Carousel";
import Container from "@/components/Container";
import { projects } from "@/data";
import Slide from "@/features/Section3/Slide";

const Root = styled.div`
  display: flex;
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

const Title = styled.h1`
  margin: 0px;
  font-size: 44px;
  text-align: center;
`;

function Section3() {
  return (
    <Root>
      <Container id="section3" padding="24px 0" maxWidth={1200}>
        <Title>My work</Title>
        <Carousel>
          {projects.map((project, index) => (
            <Slide
              demos={project.demos}
              description={project.description}
              key={index}
              livePath={project.livePath}
              title={project.title}
            />
          ))}
        </Carousel>
      </Container>
    </Root>
  );
}

export default Section3;
