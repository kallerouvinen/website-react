import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
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

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    margin: 12,
    fontSize: 32,
    color: "#fff",
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: 12,
    "& > *": {
      margin: 4,
    },
  },
  divider: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
});

function CardDevelopment() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Technologies I have used professionally</h1>
      <div className={classes.chipContainer}>
        <TechChip icon={<HTMLIcon />} label="HTML5" />
        <TechChip icon={<CSSIcon />} label="CSS3" />
        <TechChip icon={<JSIcon />} label="JavaScript" />
        <TechChip icon={<TSIcon />} label="TypeScript" />
        <TechChip icon={<ReactIcon />} label="React.js" />
        <TechChip icon={<ReactIcon />} label="React Native" />
        <TechChip label="Redux" />
        <TechChip icon={<GitIcon />} label="Git" />
        <TechChip label="RESTAPI" />
      </div>
      <Divider className={classes.divider} variant="middle" />
      <h1 className={classes.title}>
        Technologies I have used on my free time
      </h1>
      <div className={classes.chipContainer}>
        <TechChip icon={<GraphQLIcon />} label="GraphQL" />
        <TechChip icon={<UnrealIcon />} label="Unreal Engine" />
        <TechChip icon={<CPPIcon />} label="C++" />
      </div>
    </div>
  );
}

export default CardDevelopment;
