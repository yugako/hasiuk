import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --light: #fff;
    --dark: #000;
    --grey: #ccc;
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
  
  img {
    max-width: 100%;
    height: auto;
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

export const FlexWrapper = styled.div<{direction?: string}>`
  min-height: calc( 100vh - 160px );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  flex-direction: ${({direction}) => direction || 'row'};
`;

export const GridWrapper = styled.div<{columns?: number, gap?: number}>`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(${({columns}) => ( 100 / columns ) || 100}% - ${({gap}) => gap || 10}px));
  grid-gap: ${({gap}) => gap || 10}px;
  width: 100%;
  margin-top: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;