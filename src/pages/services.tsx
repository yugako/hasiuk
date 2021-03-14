import * as React from "react"
import { Layout } from "../Layout"
import { Heading } from "../components/Heading"
import { ServicesContainer } from "../assets/styles/services.styles"
import { LayoutContainer, FlexWrapper } from "../Layout/Layout.styles"
import { ServicesItem } from "../components/Services/ServicesItem"
import { ICode, ICogs, IDesign, IWordpress } from "../components/Icons"
import SEO from "../components/SEO"

const servicesList = [
  {
    icon: ICode,
    title: "Build Single-Page Application",
    description: "You`ve saw many times these cool sites which don`t reload after going to another page? It`s a SPA? Do you want the same? Just write me."
  },
  {
    icon: IWordpress,
    title: "WordPress developing",
    description: "You have a website, but you don`t imagine how change content? So, in this case, you need a content management system and I`ll help you with it"
  },
  {
    icon: IDesign,
    title: 'Creating sites from existing design',
    description: 'Do you have a design and you don`t know how make it alive? I can help you with this problem.'
  },
  {
    icon: ICogs,
    title: 'Search Engine Optimization',
    description: 'Would you like to see your website on the first position in search results? You are in the right place :)'
  }
]

export default function Services() {
  return (
    <Layout>
      <SEO title={'Services'} />
      <LayoutContainer>
        <FlexWrapper direction={"column"}>
          <Heading text={"Services"} style={{ color: "var(--light)" }} />
          <ServicesContainer>
            {servicesList.map(service => (
              <ServicesItem
                title={service.title}
                description={service.description}
                Icon={service.icon}
              />
            ))}
          </ServicesContainer>
        </FlexWrapper>
      </LayoutContainer>
    </Layout>
  )
}