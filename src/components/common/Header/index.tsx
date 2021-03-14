import * as React from "react"
import { LayoutContainer } from "../../../layouts/Layout.styles"
import { Logo } from "../Logo"
import { Navigation } from "../Navigation"
import { MenuToggleButton } from "../MenuToggle/MenuToggle"
import { HeaderNav, HeaderWrapper } from "./Header.styles"

export const Header = () => {
  const [isActive, setIsActive] = React.useState(false);
  const onClick = () => {
    setIsActive(!isActive);
  }
  
  return (
    <HeaderWrapper active={isActive}>
      <LayoutContainer>
        <HeaderNav>
          <Logo />
          <Navigation active={isActive} />
          <MenuToggleButton active={isActive} clickHandler={ onClick } />
        </HeaderNav>
      </LayoutContainer>
    </HeaderWrapper>
  )
}
