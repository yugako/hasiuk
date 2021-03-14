import styled from "styled-components"

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(50% - 15px));
  grid-gap: 10px;
  width: 100%;
  margin-top: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;