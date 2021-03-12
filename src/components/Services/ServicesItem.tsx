import * as React from "react"
import {ServicesItemWrapper, ServicesItemTitle, ServicesItemDescription} from './ServicesItem.style'

export const ServicesItem = ({Icon, title, description}) => {
  return (
    <ServicesItemWrapper>
      <Icon color={'var(--light)'}/>
      <ServicesItemTitle>
        { title }
      </ServicesItemTitle>
      <ServicesItemDescription>
        {description}
      </ServicesItemDescription>
    </ServicesItemWrapper>
  )
}