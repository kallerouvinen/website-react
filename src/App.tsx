import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Section1, Section2, Section3, Section4 } from "./components/sections/";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* TODO: Add routes here in the following manner:

        <Route path="/pathToDemo">
          <DemoComponent />
        </Route>
            
        */}
        <Route path="/">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
