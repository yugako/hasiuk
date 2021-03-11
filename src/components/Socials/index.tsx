import React from 'react';
import { IEnvelope } from '../Icons/Envelope';
import { SocialsWrapper } from './Socials.styles';

const links = [
  {
    to: 'mailto:hasiuk.george@gmail.com',
    icon: IEnvelope
  }
  
];

export const Socials = () => {
  return (
    <SocialsWrapper>
      {links.map(link => (
        <a href={link.to}>
          <link.icon color='#fff'/>
        </a>
      ))}
    </SocialsWrapper>
  )
}