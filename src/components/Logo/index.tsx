import { Link } from "gatsby";
import React from "react";
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