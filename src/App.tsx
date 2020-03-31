import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Section1 } from "./components/sections/";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section1 />
    </div>
  );
}

export default App;
