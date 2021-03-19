import styled from "styled-components"

export const PortfolioDetailsWrapper = styled.div`
  color: var(--light);
  text-align: center;
`;

export const PortfolioDetailsTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
`;
export const PortfolioDetailsCategory = styled.p`
  margin-top: 15px;
  color: #888;
  text-transform: capitalize;
  text-align: center;
`;
export const PortfolioDetailsMeta = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  padding-left: 0;
  max-width: 768px;
  margin: 60px auto;
`;
export const PortfolioDetailsMetaItem = styled.li`
  margin: 0 20px;
  flex-basis: 33.333%;
  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 3px;
  }
  p, a {
    color: #888;
    position: relative;
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 16px;
  }
`;
export const PortfolioDetailsImage = styled.img``;
export const PortfolioDetailsDescription = styled.div`
  margin-top: 60px;
  h3 {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 24px;
  }
  
  p {
    line-height: 1.5;
    font-size: 16px;
  }
`;


