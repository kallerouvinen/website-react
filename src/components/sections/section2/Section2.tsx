import React from "react";
import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import CardWhatIDo from "./CardWhatIDo";
import CardTechnologies from "./CardTechnologies";

const Root = styled.div`
  // TODO: Get backgroundColor from theme
  background-color: #fc466b;
  padding: 48px 0 144px 0;
  border-top: 5px solid #fff;
  clip-path: polygon(0 0, 0 calc(100% - 96px), 100% 100%, 100% 0);
`;

const Container = styled(MUIContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 96px 24px;
`;

const GridItem = styled(Grid)`
  display: flex;
`;

function Section2() {
  return (
    <Root id="section2">
      <Container maxWidth="lg">
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
