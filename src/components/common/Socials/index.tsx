import * as React from "react"
import { IEnvelope, ILinkedin, IGithub, ITelegram, IFacebook, IInstagram } from "../Icons"
import { SocialsWrapper } from "./Socials.styles"

const links = [
  {
    to: "mailto:hasiuk.george@gmail.com",
    icon: IEnvelope
  },
  {
    to: "https://www.linkedin.com/in/yurii-hasiuk/",
    icon: ILinkedin
  }, {
    to: "https://github.com/yugako",
    icon: IGithub
  }, {
    to: "https://t.me/george_hs",
    icon: ITelegram
  }, {
    to: "https://www.facebook.com/yurko.hasiuk/",
    icon: IFacebook
  }, {
    to: "https://www.instagram.com/yurko_hasiuk/",
    icon: IInstagram
  }
]

interface ISocials {
  horizontal?: string
}

export const Socials: React.FC<ISocials> = ({ horizontal }) => (
  <SocialsWrapper horizontal={horizontal}>
    {links.map(link => (
      <a target={"_blank"} key={link.to} href={link.to}>
        <link.icon color="var(--light)" />
      </a>
    ))}
  </SocialsWrapper>
)