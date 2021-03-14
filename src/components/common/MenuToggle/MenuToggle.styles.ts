import styled, { css } from "styled-components"

const MenuToggleActive = css`
  transform: rotate(-45deg);
  transition-delay: 0.3s;
  &::before {
    transform: rotate(-90deg) translateY(0px);
  }
  
  &::after {
    content: none;
  }
`

export const MenuToggle = styled.div<{active: boolean}>`
  width: 20px;
  height: 2px;
  background-color: var(--light);
  display: block;
  transform-origin: 50% 50%;
  position: relative;
  transition-delay: 0.3s;
  transition: .5s ease-out;
  &::before, &::after {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background-color: var(--light);
  }
  &::before {
    transform: translateY(-7px);
    transition: .5s ease-out;
  }

  &::after {
    transform: translateY(5px);
    transition: .5s ease-out;
  }
  @media (min-width: 768px) {
    opacity: 0;
    visibility: hidden;
    transition: .5s ease-out;
  }

  ${({active}) => active && MenuToggleActive};
`;
