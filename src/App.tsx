import { lazy, Suspense } from "react";

import GlobalStyle from "@/components/GlobalStyle";
import { Section1, Section2 } from "@/components/sections/";

const Section3 = lazy(() => import("@/components/sections/section3/Section3"));
const Section4 = lazy(() => import("@/components/sections/section4/Section4"));
const Footer = lazy(() => import("@/components/Footer"));
const Menu = lazy(() => import("@/components/sections/menu/Menu"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Section1 />
      <Section2 />
      <Suspense fallback={null}>
        <Section3 />
        <Section4 />
        <Footer />
        <Menu />
      </Suspense>
    </>
  );
}

export default App;
