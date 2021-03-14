import styled from "styled-components"

export const PortfolioDetailsContent = styled.div`
  .modal {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    overflow: hidden;
    position: fixed;
    background: var(--dark-secondary);
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
      background-color: #fff;
    }
  }
`;