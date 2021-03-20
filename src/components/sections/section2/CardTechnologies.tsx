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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    border: "1px solid lightgray",
  },
  icon: {
    fontSize: 48,
    color: "gray",
  },
  title: {
    textAlign: "center",
    marginBottom: 16,
  },
  chipContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "16px 32px 32px 32px",
    "& > *": {
      margin: 2,
    },
  },
});

function CardDevelopment() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Technologies I have used professionally</h2>
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
      <Divider variant="middle" />
      <h2 className={classes.title}>
        Technologies I have used on my free time
      </h2>
      <div className={classes.chipContainer}>
        <TechChip icon={<GraphQLIcon />} label="GraphQL" />
        <TechChip icon={<UnrealIcon />} label="Unreal Engine" />
        <TechChip icon={<CPPIcon />} label="C++" />
      </div>
    </div>
  );
}

export default CardDevelopment;
