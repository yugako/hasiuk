import styled from "styled-components";

export const MenuToggleWrapper = styled.div<{active: boolean}>`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  height: 15px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }

  ${({active}) => active 
    &&
      `
        justify-content: center;
        align-items: center;
        
        span:nth-of-type(2) {
          display: none;
        }

        span:nth-of-type(1) {
          transform: rotate(-45deg) translateX(-1px);
        }

        span:nth-of-type(3) {
          transform: rotate(45deg) translateX(-0.5px);
        }

      `
  }
`;

export const MenuLine = styled.span`
  width: 20px;
  height: 2px;
  background-color: var(--light);
  display: block;
  transform-origin: 50% 50%;
`;