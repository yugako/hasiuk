import * as React from "react"
import { Layout } from "../layouts"
import { Greetings } from "../components/common/Greetings"
import { Socials } from "../components/common/Socials"
import { LayoutContainer, FlexWrapper } from "../layouts/Layout.styles"
import SEO from "../components/common/SEO"

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
