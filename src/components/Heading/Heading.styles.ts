import styled from "styled-components"

export const HeadingBlock = styled.h1`
  position: relative;
  margin-bottom: 25px;
  font-family: 'Reggae One', cursive;
  line-height: 1.2;
  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 50px;
    background: rgb(0, 123, 255);
    background: linear-gradient(
            90deg,
            rgba(0, 123, 255, 1) 0%,
            rgba(0, 123, 255, 0.05644255993412994) 100%
    );
    left: 9px;
    margin-left: -6px;
    z-index: 1;
    top: calc(100% + 5px);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  &::before {
    top: calc(100% + 10px);
    width: 60px;
  }
`;