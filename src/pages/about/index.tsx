import * as React from "react"
import { Layout } from "../../layouts"
import {
  AboutContent,
  AboutImage,
  AboutText
} from "../../components/screens/About/about.styles"
import { Socials } from "../../components/common/Socials"
import { Heading } from "../../components/common/Heading"
import { LayoutContainer, FlexWrapper } from "../../layouts/Layout.styles"
// @ts-ignore
import AuthorImage from "../../assets/images/yurii_hasiuk.jpg"
import SEO from "../../components/common/SEO"

export default function About() {
  return (
    <Layout>
      <SEO title={'AboutEn'} />
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
