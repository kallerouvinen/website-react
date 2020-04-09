import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Section1, Section2, Section3, Section4 } from "./components/sections/";
import ChartLaptop from "./components/sections/section3/demos/chart/ChartLaptop";
import Mystery from "./components/sections/section3/demos/mystery/Mystery";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route path="/slide1">
          <div className={classes.root}>
            <ChartLaptop />
          </div>
        </Route>
        <Route path="/slide2">
          <Mystery mode="laptop" />
        </Route>
        <Route path="/slide3">
          <div>TODO</div>
        </Route>
        <Route path="/">
          <div className={classes.root}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
