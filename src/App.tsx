import { lazy, Suspense } from "react";

import GlobalStyle from "@/components/GlobalStyle";
import { Section1, Section2 } from "@/features";

const Section3 = lazy(() => import("@/features/Section3"));
const Section4 = lazy(() => import("@/features/Section4"));
const Footer = lazy(() => import("@/features/Footer"));
const Menu = lazy(() => import("@/features/Menu"));

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
