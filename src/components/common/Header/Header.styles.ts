import styled from 'styled-components';

export const HeaderWrapper = styled.header<{active: boolean}>`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 20px 0;
  background-color: ${props => props.active ? 'var(--dark-secondary)' : 'var(--dark)'};
  & + div {
    padding: 75px 0;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;