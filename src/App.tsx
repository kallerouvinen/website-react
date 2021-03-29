import React, { lazy, Suspense } from "react";

import Section1 from "components/sections/section1/Section1";

const Section2 = lazy(() => import("components/sections/section2/Section2"));
const Section3 = lazy(() => import("components/sections/section3/Section3"));
const Section4 = lazy(() => import("components/sections/section4/Section4"));
const Footer = lazy(() => import("components/Footer"));
const Menu = lazy(() => import("components/sections/menu/Menu"));

function App() {
  return (
    <>
      <Section1 />
      <Suspense fallback={null}>
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
        <Menu />
      </Suspense>
    </>
  );
}

export default App;
