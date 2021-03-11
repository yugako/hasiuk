import React, { useEffect, useState } from "react"
import { LayoutContainer } from "../../Layout/Layout.styles"
import { Logo } from "../Logo"
import { Navigation } from "../Navigation"
import { MenuToggle } from "../MenuToggle/MenuToggle"
import { HeaderNav, HeaderWrapper } from "./Header.styles"

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <HeaderWrapper active={isActive}>
      <LayoutContainer>
        <HeaderNav>
          <Logo />
          <Navigation active={isActive} />
          <MenuToggle active={isActive} clickHandler={() => setIsActive(!isActive)} />
        </HeaderNav>
      </LayoutContainer>
    </HeaderWrapper>
  )
}
