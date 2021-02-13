import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Reggae+One&family=Montserrat:wght@400;500;700&display=swap');

  :root {
    --light: #fff;
    --dark: #000;
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
  }
`;

export const LayoutContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 0 15px;
`;