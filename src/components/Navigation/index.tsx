import React from "react"

import { Link } from "gatsby"
import { NavigationList } from "./Navigation.styles"

const routes = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/services",
    label: "Services",
  },
  {
    link: "/portfolio",
    label: "Portfolio",
  },
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "/contact",
    label: "Contact",
  },
]

export const Navigation = () => (
  <NavigationList>
    {routes.map(route => (
      <Link to={route.link}>{route.label}</Link>
    ))}
  </NavigationList>
)
