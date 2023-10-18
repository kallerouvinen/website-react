import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import theme from "./theme";
import StyleSheetManager from "@/components/StyleSheetManager";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleSheetManager>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>,
);
