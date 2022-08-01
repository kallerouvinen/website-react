import styled from "styled-components";

import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import GridItem from "@/components/GridItem";
import ScrollIndicator from "@/features/Section1/ScrollIndicator";
import TextPanel from "@/features/Section1/TextPanel";

const Root = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100%;
  overflow: hidden;
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
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.1;
  overflow: hidden;

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
      <Container maxWidth={1536}>
        <GridContainer>
          <ImageContainer name="image">
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
