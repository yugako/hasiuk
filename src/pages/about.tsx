import React from "react"
import { Layout } from "../Layout"

import {
  AboutContent,
  AboutImage,
  AboutText,
  AboutWrapper,
} from "../assets/styles/about.styles"
import { LayoutContainer } from "../Layout/Layout.styles"

import AuthorImage from "../assets/images/yurii_hasiuk.jpg"
import { Socials } from "../components/Socials"

export default function About() {
  return (
    <Layout>
      <AboutWrapper>
        <LayoutContainer>
          <AboutContent>
            <AboutImage src={AuthorImage} />
            <AboutText>
              <h1>
                Frontend & Wordpres Developer. Based in Lviv. I'm Code & Design
                things for web.
              </h1>
              <p>
                Hello! I’m Yurii Hasiuk a self-taught & hard-working Frontend &
                Wordpress Developer with over 2 years work experience. If you
                want a blog, site for your company or even some Single Page
                Application, then you're in the right place.
              </p>
              <Socials />
            </AboutText>
          </AboutContent>
        </LayoutContainer>
      </AboutWrapper>
    </Layout>
  )
}
