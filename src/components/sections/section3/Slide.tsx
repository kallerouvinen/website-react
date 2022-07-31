import { ReactNode } from "react";
import styled from "styled-components";

import { PrimaryButton } from "@/components";
import GridItem from "@/components/basic/GridItem";
import Laptop from "@/components/sections/section3/Laptop";
import Mobile from "@/components/sections/section3/Mobile";

const DemoContainer = styled(GridItem)`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    height: 280px;
  }
  @media (min-width: 960px) {
    height: 420px;
  }
  @media (min-width: 1280px) {
    height: 480px;
  }
  @media (min-width: 1920px) {
    height: 560px;
  }
`;

const TextContainer = styled(GridItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 960px) {
    padding: 24px;
  }
  & > * {
    margin: 12px 48px;
  }
`;

const MobileContainer = styled.div`
  position: absolute;
  transform: translate(150%, 25%);
`;

const Paragraph = styled.p`
  font-size: 18px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "demo demo"
    "info info";
  @media (min-width: 900px) {
    grid-template-areas: "demo info";
  }
  overflow: hidden;
`;

interface Props {
  description?: string;
  title?: string;
  demos: {
    laptop?: ReactNode;
    mobile?: ReactNode;
  };
  livePath?: string;
}

function Slide(props: Props) {
  const { demos, description = "", livePath, title = "" } = props;

  return (
    <GridContainer>
      <DemoContainer name="demo">
        <Laptop component={demos.laptop} />
        <MobileContainer>
          <Mobile component={demos.mobile} />
        </MobileContainer>
      </DemoContainer>
      <TextContainer name="info">
        <h1>{title}</h1>
        <Paragraph>{description}</Paragraph>
        {livePath && livePath !== "NOT_AVAILABLE" && (
          <a href={livePath} target="_blank" rel="noreferrer">
            <PrimaryButton>Visit Website</PrimaryButton>
          </a>
        )}
        {/* TODO: Change this to !livePath && */}
        {livePath === "NOT_AVAILABLE" && (
          <PrimaryButton disabled>No live demo</PrimaryButton>
        )}
      </TextContainer>
    </GridContainer>
  );
}

export default Slide;
