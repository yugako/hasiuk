import * as React from "react"
import { GreetingsPosition, GretingsSubtitle, GretingsTitle, GreetingsWrapper } from "./Greetings.styles"

export const Greetings = () => {
  return (
    <GreetingsWrapper>
      <GretingsSubtitle>Hi there, I'm</GretingsSubtitle>
      <GretingsTitle>Yurii Hasiuk</GretingsTitle>
      <GreetingsPosition>Frontend &amp; Wordpress developer</GreetingsPosition>
    </GreetingsWrapper>
  )
}
