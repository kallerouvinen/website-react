import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  html,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  svg {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }
`;

export default GlobalStyle;
