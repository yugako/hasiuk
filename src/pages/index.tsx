import React from "react"

import { Layout } from "../Layout"
import { Greetings } from "../components/Greetings"


import { HomeWrapper } from "../assets/styles/home.styles"
import { LayoutContainer } from "../Layout/Layout.styles"

export default function Home() {
  return (
    <Layout>
      <HomeWrapper>
        <LayoutContainer>
          <Greetings />
        </LayoutContainer>
      </HomeWrapper>
    </Layout>
  )
}
