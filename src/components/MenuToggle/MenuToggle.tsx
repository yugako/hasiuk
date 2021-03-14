import * as React from 'react';
import { MenuToggle } from './MenuToggle.styles';

export const MenuToggleButton = ({active, clickHandler}) => {
  return (
    <MenuToggle active={active} onClick={clickHandler} />
  );
}