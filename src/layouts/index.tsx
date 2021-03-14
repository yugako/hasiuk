import React, { useEffect, useState } from "react"
import Particles from "react-tsparticles"

import { Header } from "../components/common/Header"
import { GlobalStyles } from "./Layout.styles"

import { options } from "../utils/particles-options"

export const Layout = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    setScrollTop(document.body.offsetTop)
  }

  useEffect(() => {
    document.body.addEventListener("scroll", onScroll)
    return () => document.body.removeEventListener("scroll", onScroll)
  })

  console.log(scrollTop)

  return (
    <>
      <GlobalStyles />
      <Particles id="particles" className="home-bg" options={options} />
      <Header />
      {children}
    </>
  )
}
