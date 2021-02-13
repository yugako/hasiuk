import React from "react"
import Particles from "react-tsparticles"

import { Layout } from "../Layout"

import { options } from "../utils/particles-options"

import { HomeWrapper } from "../assets/styles/home.styles"
import { LayoutContainer } from "../Layout/Layout.styles"
import { Greetings } from "../components/Greetings"

export default function Home() {
  return (
    <Layout>
      <HomeWrapper>
        <Particles
          id="particles"
          className='home-bg'
          options={options}
        />
        <LayoutContainer>
          <Greetings />
        </LayoutContainer>
      </HomeWrapper>
    </Layout>
  )
}
