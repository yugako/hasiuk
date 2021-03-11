import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --light: #fff;
    --dark: #000;
    --dark-secondary: #222329;
    --primary: #1b9cfc;
  }

  * {
    margin: 0;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--dark);
    overflow-x: hidden;
  }

  #particles {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
`;

export const LayoutContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;