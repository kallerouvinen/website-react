import React from "react";
import styled from "styled-components";
import CPPIcon from "mdi-material-ui/LanguageCpp";
import CSSIcon from "mdi-material-ui/LanguageCss3";
import GitIcon from "mdi-material-ui/Git";
import GraphQLIcon from "mdi-material-ui/Graphql";
import HTMLIcon from "mdi-material-ui/LanguageHtml5";
import JSIcon from "mdi-material-ui/LanguageJavascript";
import ReactIcon from "mdi-material-ui/React";
import TSIcon from "mdi-material-ui/LanguageTypescript";
import UnrealIcon from "mdi-material-ui/Unreal";
import TechChip from "./TechChip";

import { Divider } from "components";

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
