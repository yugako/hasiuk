import styled from "styled-components"

export const PortfolioItemWrapper = styled.div``

export const PortfolioItemInfo = styled.div`
  background-color: var(--light);
  padding: 20px 20px 20px 40px;
  margin-left: 22px;
  text-align: left;
  position: relative;
  transition: .3s;
  margin-top: -4px;
`
export const PortfolioItemImage = styled.img`
  max-width: 100%;
  height: auto;
  object-position: center;
`

export const PortfolioItemTitle = styled.h6`
  font-weight: 600;
  font-size: 17px;
  color: var(--dark);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const PortfolioItemDate = styled.p`
  font-size: 15px;
  margin-top: 5px;
  font-weight: 600;    
  position: relative;
  padding-left: 30px;
  color: var(--dark);
  &::after {
  position: absolute;
    content: "";
    height: 1px;
    width: 20px;
    top: 49%;
    left: 0;
    background-color: var(--dark);
    transition: .3s;
  }
`;

export const PortfolioItemDetailsButton = styled.button`
  font-size: 24px;
  color: #fff;
  border: none;
  position: absolute;
  height: 44px;
  width: 44px;
  background: #111;
  line-height: 44px;
  text-align: center;
  left: -22px;
  top: 50%;
  margin-top: -22px;
  z-index: 1;
  cursor: pointer;
  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 0;
    background-color: #fff;
    top: 0;
    right: 0;
    transition: .3s;
    z-index: -1;
  }
  &:focus, &:active {
    outline: none;
  }
  &:hover {
    &::after {
      right: auto;
      left: 0;
      width: 100%;
    }
    svg {
      path {
        fill: var(--dark);
      }
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;