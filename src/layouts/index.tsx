// @ts-ignore
import React, { useEffect, useState } from "react"
import Particles from "react-tsparticles"

import { Header } from "../components/common/Header"
import { GlobalStyles } from "./Layout.styles"

import { options } from "../utils/particles-options"

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Particles id="particles" className="home-bg" options={options} />
      <Header />
      {children}
    </>
  )
}
