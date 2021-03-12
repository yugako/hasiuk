import styled from "styled-components"

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(33.333% - 15px));
  grid-gap: 10px;
  width: 100%;
`;