import React from "react"
import { GreetingsPosition, GretingsSubtitle, GretingsTitle, GretingsWrapper } from "./Greetings.styles"

export const Greetings = () => {
  return (
    <GretingsWrapper>
      <GretingsSubtitle>Hi there, I'm</GretingsSubtitle>
      <GretingsTitle>Yurii Hasiuk</GretingsTitle>
      <GreetingsPosition>Frontend &amp; Wordpress developer</GreetingsPosition>
    </GretingsWrapper>
  )
}
