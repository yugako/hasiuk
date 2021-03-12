import styled from "styled-components";

export const SocialsWrapper = styled.div<{horizontal?: string}>`
  display: flex;
  align-items: center;
  margin-top: 15px;
  position: relative;
  z-index: 2;
  justify-content: ${({horizontal}) => horizontal || 'flex-start'};
  a {
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      svg, svg path {
        fill: var(--primary);
      }
    }
  }
`;