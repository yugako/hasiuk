import * as React from 'react';
import { Layout } from '../Layout';
import { Heading } from "../components/Heading"
import { ServicesContainer } from "../assets/styles/services.styles"
import { LayoutContainer, FlexWrapper } from "../Layout/Layout.styles"
import { ServicesItem } from "../components/Services/ServicesItem"
import { IGithub } from "../components/Icons/Github"

const servicesList = [
  {
    icon: '',
    title: 'Build Single-Page Application',
    description: 'You`ve saw many times these cool sites which don`t reload after going to another page? It`s a SPA? Do you want the same? Just write me.'
  }
]

export default function Services() {
  return (
    <Layout>
      <LayoutContainer>
        <FlexWrapper direction={'column'}>
          <Heading text={'Services'} style={{color: 'var(--light)'}} />
          <ServicesContainer>
            {servicesList.map(service => (
              <ServicesItem
                title={ service.title }
                description={ service.description }
                Icon={IGithub}
              />
            ))}

          </ServicesContainer>
        </FlexWrapper>
      </LayoutContainer>

    </Layout>
  )
}