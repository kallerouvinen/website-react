import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  Contact,
  Menu,
  Section1,
  Section2,
  Section3,
  Section4,
} from "components/sections/";
import { Footer } from "components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contact">
          <Contact />
          <Footer />
          <Menu />
        </Route>
        <Route path="/">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Footer />
          <Menu />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
