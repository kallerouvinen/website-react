import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Code from "./Code";
import Cursor from "./Cursor";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "tomato",
  },
  left: {
    // flex: 1,
    width: 24,
    // height: "100%",
    backgroundColor: "#333333",
  },
  codeArea: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1e1e1e",
  },
  row: {
    display: "flex",
    padding: 4,
  },
});

function CodeEditor() {
  const classes = useStyles();

  // #569cd6 - variable type - keyword
  // #9cdcfe - variable name
  // #c56a78 - return - import - keywords
  // #c3915b - string
  // #b5cea8 - integer
  // #d4d4c9 - gray
  // #dcdcaa - function names
  // #4ebc7c - component name, type

  return (
    <div className={classes.root}>
      <div className={classes.left} />
      <div className={classes.codeArea}>
        <div className={classes.row}>
          <Code color="#c56a78" width={6} />
          <Code color="transparent" width={1} />
          <Code color="#9cdcfe" width={5} />
          <Code color="transparent" width={1} />
          <Code color="#c56a78" width={4} />
          <Code color="transparent" width={1} />
          <Code color="#c3915b" width={7} />
        </div>
        <div className={classes.row}>
          <Code color="transparent" width={1} />
        </div>
        <div className={classes.row}>
          <Code color="#569cd6" width={8} />
          <Code color="transparent" width={1} />
          <Code color="#dcdcaa" width={4} />
          <Code color="transparent" width={1} />
          <Code color="#9cdcfe" width={5} />
          <Code color="transparent" width={1} />
          <Code color="#4ebc7c" width={5} />
        </div>
        <div className={classes.row}>
          <Code color="transparent" width={2} />
          <Code color="#569cd6" width={5} />
          <Code color="transparent" width={1} />
          <Code color="#9cdcfe" width={7} />
          <Code color="transparent" width={1} />
          <Code color="#dcdcaa" width={9} />
        </div>
        <div className={classes.row}>
          <Code color="transparent" width={2} />
          <Code color="#569cd6" width={5} />
          <Code color="transparent" width={1} />
          <Code color="#9cdcfe" width={5} />
          <Code color="transparent" width={1} />
          <Code color="#c3915b" width={9} />
          <Code color="transparent" width={1} />
          <Code color="#9cdcfe" width={5} />
          <Code color="transparent" width={1} />
          <Code color="#b5cea8" width={1} />
          <Code color="transparent" width={1} />
          <Code color="#9cdcfe" width={5} />
        </div>
        <div className={classes.row}>
          <Code color="transparent" width={1} />
        </div>
        <div className={classes.row}>
          <Code color="transparent" width={2} />
          <Code color="#c56a78" width={6} />
        </div>
        <div className={classes.row}>
          <Code color="transparent" width={4} />
          <Code color="#569cd6" width={3} />
        </div>
        <div className={classes.row}>
          <Code color="transparent" width={6} />
          <Code color="#9cdcfe" width={9} />
          <Code color="transparent" width={1} />
          <Code color="#9cdcfe" width={7} />
          <Code color="transparent" width={1} />
          <Code color="#9cdcfe" width={4} />
          <Cursor />
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
