import React from "react";
import styled from "styled-components";
import MUIContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { FadeIn } from "components";
import ScrollIndicator from "./ScrollIndicator";
import TextPanel from "./TextPanel";

const Root = styled.div`
  position: relative;
  display: flex;
  min-height: 100%;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled(MUIContainer)`
  display: flex;
`;

const GridContainer = styled(Grid)`
  height: 100%;
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.1;
  @media (min-width: 960px) {
    left: calc(25% - 30vh);
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 85vh;
  object-fit: contain;
  @media (min-width: 1280px) {
    height: 90vh;
  }
`;

const GridItem = styled(Grid)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

const ScrollIndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  align-self: center;
`;

function Section1() {
  const mdUp = useMediaQuery("(min-width:960px)");
  const gridJustify = mdUp ? "flex-end" : "center";

  return (
    <Root id="section1">
      <Container maxWidth="xl">
        <GridContainer container justify={gridJustify}>
          <ImageContainer>
            <FadeIn delay={0} direction="down">
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL}/assets/image900.webp`}
                  type="image/webp"
                />
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/image900.jpg`}
                  alt=""
                />
              </picture>
            </FadeIn>
          </ImageContainer>
          <GridItem item md={6}>
            <TextPanel />
          </GridItem>
        </GridContainer>
      </Container>
      <ScrollIndicatorContainer>
        <FadeIn delay={1000} direction="down">
          <ScrollIndicator />
        </FadeIn>
      </ScrollIndicatorContainer>
    </Root>
  );
}

export default Section1;
