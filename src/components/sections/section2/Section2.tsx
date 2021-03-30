import React from "react";
import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import CardWhatIDo from "./CardWhatIDo";
import CardTechnologies from "./CardTechnologies";

const Root = styled.div`
  // TODO: Get backgroundColor from theme
  background-color: #fc466b;
  border-top: 5px solid #fff;
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

const GridItem = styled(Grid)`
  display: flex;
`;

function Section2() {
  return (
    <Root>
      <Container id="section2" maxWidth="lg">
        <Grid container spacing={2}>
          <GridItem item xs={12} md={6}>
            <CardWhatIDo />
          </GridItem>
          <GridItem item xs={12} md={6}>
            <CardTechnologies />
          </GridItem>
        </Grid>
      </Container>
    </Root>
  );
}

export default Section2;
