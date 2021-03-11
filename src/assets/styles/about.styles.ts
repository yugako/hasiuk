import styled from "styled-components"

export const AboutWrapper = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const AboutContent = styled.div`
  background-color: #111;
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 50px 0;
  }
`

export const AboutImage = styled.img`
  max-width: 250px;
  height: auto;
  margin-right: 30px;
  border-radius: 5px;
`

export const AboutText = styled.div`
  line-height: 1.8;
  font-size: 17px;
  color: #ddd;
  h1 {
    position: relative;
    margin-bottom: 25px;
    font-family: 'Reggae One', cursive;
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
  }
`
