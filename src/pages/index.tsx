import * as React from "react"
import { Layout } from "../Layout"
import { Greetings } from "../components/Greetings"
import { Socials } from "../components/Socials"
import { LayoutContainer, FlexWrapper } from "../Layout/Layout.styles"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <LayoutContainer>
        <FlexWrapper style={{flexDirection: 'column'}}>
          <Greetings />
          <Socials horizontal={"center"} />
        </FlexWrapper>
      </LayoutContainer>
    </Layout>
  )
}
