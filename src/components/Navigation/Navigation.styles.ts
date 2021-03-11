import styled from "styled-components"

export const NavigationList = styled.ul<{ active: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 0;

  @media (max-width: 768px) {
    ${props =>
      props.active
        ? `
          max-height: 1000px;
          visibility: visible;
          transform: translateY(0%);
          top: 60px;
          border-top: 1px solid var(--light);
        `
        : ` 
          max-height: 0;
          visibility: hidden;
          transform: translateY(-200%);
          top: -200px;
        `};
    background-color: ${props => (props.active ? "#222329" : "transparent")};
    position: fixed;
    flex-direction: column;
    left: 0;
    right: 0;
    display: flex;
    padding: 20px 0;
  }
  a {
    text-decoration: none;
    color: var(--light);
    margin: 0 15px;
    text-transform: capitalize;
    letter-spacing: 1.2px;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 768px) {
      margin-bottom: 10px;
      ${({ active }) => active && `animation-name: rotate`};
    }
    animation-duration: 0.75s;

    &:hover, &[aria-current="page"] {
      color: var(--primary);
    }
  }

  @keyframes rotate{
    from {
      transform: rotateX(0);
    }
    to {
      transform: rotateX(360deg);
    }
  }
`
