import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Arial', sans-serif;
    background-color: var(--background);
    color: var(--foreground);
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  button {
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  h1, h2, h3 {
    font-family: 'Helvetica', sans-serif;
  }
`;

export default GlobalStyle;