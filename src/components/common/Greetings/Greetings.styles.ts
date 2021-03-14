import styled from "styled-components"

export const GreetingsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GretingsSubtitle = styled.h5`
  color: var(--light);
  position: relative;
  z-index: 2;
  font-size: 20px;
  opacity: 0.8;
  font-weight: 400;
`;

export const GretingsTitle = styled.h1`
  color: var(--light);
  position: relative;
  z-index: 2;
  font-size: 60px;
  line-height: 1.5;
  font-family: 'Reggae One', cursive;
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 1.3;
    text-align: center;
  }
`;

export const GreetingsPosition = styled.h4`
  color: var(--light);
  position: relative;
  z-index: 2;
  font-size: 24px;
  opacity: 0.8;
  font-weight: 400;
  text-align: center;
`;
