import styled from "styled-components";

import GitIcon from "@/assets/icons/git.svg?react";
import GraphQLIcon from "@/assets/icons/graphql.svg?react";
import CPPIcon from "@/assets/icons/language-cpp.svg?react";
import CSSIcon from "@/assets/icons/language-css3.svg?react";
import HTMLIcon from "@/assets/icons/language-html5.svg?react";
import JSIcon from "@/assets/icons/language-javascript.svg?react";
import TSIcon from "@/assets/icons/language-typescript.svg?react";
import ReactIcon from "@/assets/icons/react.svg?react";
import UnrealIcon from "@/assets/icons/unreal.svg?react";
import Divider from "@/components/Divider";
import TechChip from "@/features/Section2/TechChip";

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
