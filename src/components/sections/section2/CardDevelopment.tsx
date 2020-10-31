import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Code from "@material-ui/icons/Code";
import HTMLIcon from "mdi-material-ui/LanguageHtml5";
import CSSIcon from "mdi-material-ui/LanguageCss3";
import JSIcon from "mdi-material-ui/LanguageJavascript";
import TSIcon from "mdi-material-ui/LanguageTypescript";
import ReactIcon from "mdi-material-ui/React";
import GraphQLIcon from "mdi-material-ui/Graphql";
import TechChip from "./TechChip";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: 8,
    border: "1px solid lightgray",
  },
  icon: {
    fontSize: 48,
    color: "gray",
  },
  label: {
    textAlign: "center",
    margin: 12,
  },
  chipContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "0 10%",
    "& > *": {
      margin: 2,
    },
  },
});

function CardDevelopment() {
  const classes = useStyles();

  /* 
    TODO:
    Frontend: Redux
    Package managers: NPM, Yarn
    Version control: Git
  */

  return (
    <div className={classes.container}>
      <Code className={classes.icon} />
      <h3 className={classes.label}>Development</h3>
      <p className={classes.label}>
        I create dynamic, responsive and fast user interfaces
      </p>
      <h3 className={classes.label}>Technologies I use</h3>
      <div className={classes.chipContainer}>
        <TechChip icon={<HTMLIcon />} label="HTML5" />
        <TechChip icon={<CSSIcon />} label="CSS3" />
        <TechChip icon={<JSIcon />} label="JavaScript" />
        <TechChip icon={<TSIcon />} label="TypeScript" />
        <TechChip icon={<ReactIcon />} label="React.js" />
        <TechChip icon={<ReactIcon />} label="React Native" />
        <TechChip label="RESTAPI" />
        <TechChip icon={<GraphQLIcon />} label="GraphQL" />
      </div>
    </div>
  );
}

export default CardDevelopment;
