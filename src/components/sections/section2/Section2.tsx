import styled from "styled-components";
import MUIContainer from "@mui/material/Container";

import CardWhatIDo from "./CardWhatIDo";
import CardTechnologies from "./CardTechnologies";
import GridItem from "components/basic/GridItem";

const Root = styled.div`
  // TODO: Get backgroundColor from theme
  background-color: #fc466b;
  border-top: 3px solid #fff;
  padding: 24px 0 96px 0;
  @media (min-width: 600px) {
    padding: 24px 0 96px 0;
  }
  @media (min-width: 960px) {
    padding: 36px 0 120px 0;
  }
  @media (min-width: 1280px) {
    padding: 48px 0 144px 0;
  }
  @media (min-width: 1920px) {
    padding: 72px 0 192px 0;
  }

  clip-path: polygon(0 0, 0 calc(100% - 48px), 100% 100%, 100% 0);
  @media (min-width: 600px) {
    clip-path: polygon(0 0, 0 calc(100% - 48px), 100% 100%, 100% 0);
  }
  @media (min-width: 960px) {
    clip-path: polygon(0 0, 0 calc(100% - 60px), 100% 100%, 100% 0);
  }
  @media (min-width: 1280px) {
    clip-path: polygon(0 0, 0 calc(100% - 72px), 100% 100%, 100% 0);
  }
  @media (min-width: 1920px) {
    clip-path: polygon(0 0, 0 calc(100% - 96px), 100% 100%, 100% 0);
  }
`;

const Container = styled(MUIContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "about-me about-me"
    "technologies technologies";
  @media (min-width: 900px) {
    grid-template-areas: "about-me technologies";
  }
`;

function Section2() {
  return (
    <Root>
      <Container id="section2" maxWidth="lg">
        <GridContainer>
          {/* TODO: Styling */}
          <GridItem name="about-me">
            <CardWhatIDo />
          </GridItem>
          <GridItem name="technologies">
            <CardTechnologies />
          </GridItem>
        </GridContainer>
      </Container>
    </Root>
  );
}

export default Section2;
