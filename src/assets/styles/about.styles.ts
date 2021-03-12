import styled from "styled-components"

export const AboutContent = styled.div`
  background-color: #111;
  display: flex;
  align-items: center;
  padding: 75px 50px;
  border-radius: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 75px 0;
    padding: 30px;
  }
`

export const AboutImage = styled.img`
  max-width: 300px;
  height: auto;
  margin-right: 30px;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 100%;
    margin-bottom: 10px;
  }
`

export const AboutText = styled.div`
  line-height: 1.8;
  font-size: 17px;
  color: #ddd;
`
