import GlobalStyle from "@/components/GlobalStyle";
import SectionClip from "@/components/SectionClip";
import {
  Section1,
  Section2,
  // Section3,
  Section4,
  Menu,
  Footer,
} from "@/features";
import theme from "@/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <Section1 />
      <Section2 />
      {/* Commented out for now as there are currently no projects to show */}
      {/* <Section3 /> */}
      <SectionClip
        startColor={theme.bg.section2}
        endColor={theme.bg.section4}
      />
      <Section4 />
      <Footer />
      <Menu />
    </>
  );
}

export default App;
