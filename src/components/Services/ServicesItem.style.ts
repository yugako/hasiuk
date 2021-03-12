import styled from "styled-components"

export const ServicesItemWrapper = styled.div`
  padding: 35px 20px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  border: 1px solid #222;
  margin-top: 30px;
  svg {
    width: 35px;
    height: 35px;
    margin-bottom: 20px;
  }
  &::after {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    top: 0;
    left: 0;
    background-color: #181818;
    z-index: -1;
    border-radius: 52% 48% 23% 77% / 44% 68% 32% 56%;
    transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
  }
  &:hover {
    &::after {
      left: 20px;
      top: 15px;
      transform: scale(5) rotate(35deg);
      -moz-transform: scale(5) rotate(35deg);
      -ms-transform: scale(5) rotate(35deg);
      -o-transform: scale(5) rotate(35deg);
    }
  }
`;

export const ServicesItemTitle = styled.h6`
  color: var(--primary);
  font-size: 22px;
  display: inline-block;
  cursor: pointer;
  font-family: 'Reggae One', cursive;
  position: relative;
  overflow: hidden;
  text-transform: capitalize;
  margin: 10px 0;
`;

export const ServicesItemDescription = styled.p`
  color: #ccc;
  font-size: 15px;
  line-height: 1.5;
`;