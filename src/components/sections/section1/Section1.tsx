import MUIContainer from "@mui/material/Container";
import styled from "styled-components";

import { FadeIn } from "@/components";
import GridItem from "@/components/basic/GridItem";
import ScrollIndicator from "@/components/sections/section1/ScrollIndicator";
import TextPanel from "@/components/sections/section1/TextPanel";

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

const GridContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "image image"
    "text text";
  align-items: start;
  @media (min-width: 960px) {
    grid-template-areas: "image text";
    align-items: center;
  }
`;

const ImageContainer = styled(GridItem)`
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.1;

  @media (min-width: 960px) {
    width: initial;
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

const ScrollIndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  align-self: center;
`;

function Section1() {
  return (
    <Root id="section1">
      <Container maxWidth="xl">
        <GridContainer>
          <ImageContainer name="image" justify="flex-end">
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
          <GridItem name="text">
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
