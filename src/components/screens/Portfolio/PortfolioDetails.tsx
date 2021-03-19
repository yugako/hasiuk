import * as React from 'react';
import {
  PortfolioDetailsWrapper,
  PortfolioDetailsTitle,
  PortfolioDetailsMeta,
  PortfolioDetailsMetaItem,
  PortfolioDetailsImage,
  PortfolioDetailsCategory,
  PortfolioDetailsDescription,
} from './PortfolioDetails.styles';

export const PortfolioDetails = ({title, category, client, link, date, preview, description, ...props}) => {
  return (
    <PortfolioDetailsWrapper>
      <PortfolioDetailsTitle>
        {title}
      </PortfolioDetailsTitle>
      <PortfolioDetailsCategory>{category}</PortfolioDetailsCategory>
      <PortfolioDetailsMeta>
        <PortfolioDetailsMetaItem>
          <h4>Client</h4>
          <p>{client}</p>
        </PortfolioDetailsMetaItem>
        <PortfolioDetailsMetaItem>
          <h4>Link</h4>
          <a href={link}>View Project</a>
        </PortfolioDetailsMetaItem>
        <PortfolioDetailsMetaItem>
          <h4>Date</h4>
          <p>{date}</p>
        </PortfolioDetailsMetaItem>
      </PortfolioDetailsMeta>
      <PortfolioDetailsImage src={preview} alt={title} />
      <PortfolioDetailsDescription>
        <h3>About the project</h3>
        <p>{description}</p>
      </PortfolioDetailsDescription>
    </PortfolioDetailsWrapper>
  )
}