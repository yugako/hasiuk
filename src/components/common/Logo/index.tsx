import * as React from "react";
import { Link } from "gatsby";
import { LogoLink } from "./Logo.styles";

const HomeLink = ({...props}) => (
  <Link {...props} to='/'>
    {props.children}
  </Link>
)

export const Logo = () => (
  <LogoLink as={HomeLink}>
    Hasiuk
  </LogoLink>
) 