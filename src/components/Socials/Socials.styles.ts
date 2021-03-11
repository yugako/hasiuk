import styled from "styled-components";

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  a {
    margin-right: 10px;
    
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