import styled from "styled-components";

import { ReactComponent as CPPIcon } from "assets/icons/language-cpp.svg";
import { ReactComponent as CSSIcon } from "assets/icons/language-css3.svg";
import { ReactComponent as GitIcon } from "assets/icons/git.svg";
import { ReactComponent as GraphQLIcon } from "assets/icons/graphql.svg";
import { ReactComponent as HTMLIcon } from "assets/icons/language-html5.svg";
import { ReactComponent as JSIcon } from "assets/icons/language-javascript.svg";
import { ReactComponent as ReactIcon } from "assets/icons/react.svg";
import { ReactComponent as TSIcon } from "assets/icons/language-typescript.svg";
import { ReactComponent as UnrealIcon } from "assets/icons/unreal.svg";
import { Divider } from "components";
import TechChip from "./TechChip";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 12px;
  font-size: 32px;
  color: #fff;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 12px;
  & > * {
    margin: 4px;
  }
`;

function CardDevelopment() {
  return (
    <Container>
      <Title>Technologies I have used professionally</Title>
      <ChipContainer>
        <TechChip icon={<HTMLIcon />} label="HTML5" />
        <TechChip icon={<CSSIcon />} label="CSS3" />
        <TechChip icon={<JSIcon />} label="JavaScript" />
        <TechChip icon={<TSIcon />} label="TypeScript" />
        <TechChip icon={<ReactIcon />} label="React.js" />
        <TechChip icon={<ReactIcon />} label="React Native" />
        <TechChip label="Redux" />
        <TechChip icon={<GitIcon />} label="Git" />
        <TechChip label="RESTAPI" />
      </ChipContainer>
      <Divider />
      <Title>Technologies I have used on my free time</Title>
      <ChipContainer>
        <TechChip icon={<GraphQLIcon />} label="GraphQL" />
        <TechChip icon={<UnrealIcon />} label="Unreal Engine" />
        <TechChip icon={<CPPIcon />} label="C++" />
      </ChipContainer>
    </Container>
  );
}

export default CardDevelopment;
