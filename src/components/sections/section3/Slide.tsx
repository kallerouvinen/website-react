import { ReactNode } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

import { Button } from "components";
import Laptop from "./Laptop";
import Mobile from "./Mobile";

const GridContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const DemoContainer = styled(Grid)`
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

const TextContainer = styled(Grid)`
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
    <GridContainer container>
      <DemoContainer item xs={12} md={6}>
        <Laptop component={demos.laptop} />
        <MobileContainer>
          <Mobile component={demos.mobile} />
        </MobileContainer>
      </DemoContainer>
      <TextContainer item xs={12} md={6}>
        <h1>{title}</h1>
        <Paragraph>{description}</Paragraph>
        {livePath && livePath !== "NOT_AVAILABLE" && (
          <a href={livePath} target="_blank" rel="noreferrer">
            <Button>Visit Website</Button>
          </a>
        )}
        {livePath === "NOT_AVAILABLE" && <Button disabled>No live demo</Button>}
      </TextContainer>
    </GridContainer>
  );
}

export default Slide;
