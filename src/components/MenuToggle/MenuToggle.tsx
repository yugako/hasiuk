import React from 'react';
import { MenuLine, MenuToggleWrapper } from './MenuToggle.styles';

export const MenuToggle = ({active, clickHandler}) => {
  return (
    <MenuToggleWrapper active={active} onClick={clickHandler}>
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </MenuToggleWrapper>
  );
}