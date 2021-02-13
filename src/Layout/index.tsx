import React from "react";
import { Header } from "../components/Header";
import { GlobalStyles } from "./Layout.styles";

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    {children}
  </>
)