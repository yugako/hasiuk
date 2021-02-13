import React from "react"
import { LayoutContainer } from "../../Layout/Layout.styles"
import { Logo } from "../Logo"
import { Navigation } from "../Navigation"
import { HeaderNav, HeaderWrapper } from "./Header.styles"

export const Header = () => (
  <HeaderWrapper>
    <LayoutContainer>
      <HeaderNav>
        <Logo />
        <Navigation />
      </HeaderNav>
    </LayoutContainer>
  </HeaderWrapper>
)
