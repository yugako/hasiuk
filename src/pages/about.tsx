import * as React from "react"
import { Layout } from "../Layout"
import {
  AboutContent,
  AboutImage,
  AboutText
} from "../assets/styles/about.styles"
import { Socials } from "../components/Socials"
import { Heading } from "../components/Heading"
import { LayoutContainer, FlexWrapper } from "../Layout/Layout.styles"
// @ts-ignore
import AuthorImage from "../assets/images/yurii_hasiuk.jpg"
import SEO from "../components/SEO"

export default function About() {
  return (
    <Layout>
      <SEO title={'About'} />
      <FlexWrapper>
        <LayoutContainer>
          <AboutContent>
            <AboutImage src={AuthorImage} />
            <AboutText>
              <Heading
                text={"Frontend & Wordpress Developer. Based in Lviv. I'm Code & Design things for web."}
              />
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
      </FlexWrapper>
    </Layout>
  )
}
