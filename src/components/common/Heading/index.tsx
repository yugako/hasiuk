import * as React from "react"
import { HeadingBlock } from "./Heading.styles"

export const Heading = ({text, ...props}) => {
  return (
    <HeadingBlock {...props}>{text}</HeadingBlock>
  )
}