import styled from "styled-components";

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 0;
  a {
    text-decoration: none;
    color: var(--light);
    margin: 0 15px;
    text-transform: capitalize;
    letter-spacing: 1.2px;
    font-size: 16px;
    &:hover {
      color: var(--primary);
    }
  }
`;