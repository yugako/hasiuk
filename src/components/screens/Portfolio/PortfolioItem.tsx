import * as React from "react"
import { PortfolioItemWrapper, PortfolioItemInfo, PortfolioItemImage, PortfolioItemTitle, PortfolioItemDate, PortfolioItemDetailsButton } from './PortfolioItem.styles'
import { IExpand } from "../../common/Icons"

export const PortfolioItem = ({title, clickHandler}) => {
  return (
    <PortfolioItemWrapper>
        <PortfolioItemImage src="https://ixtheme.netlify.app/zuman/img/work_01.jpg" alt="" />
        <PortfolioItemInfo>
          <PortfolioItemTitle title={title}>{title}</PortfolioItemTitle>
          <PortfolioItemDate>Upcoming</PortfolioItemDate>
          <PortfolioItemDetailsButton onClick={ clickHandler }>
            <IExpand color={'var(--light)'} />
          </PortfolioItemDetailsButton>
        </PortfolioItemInfo>
    </PortfolioItemWrapper>
  )
}