import React, { FC } from 'react';
import { IconContainer } from './Icon.styles';

interface PropsIcon {
   id: string;
}

export const Icon: FC<PropsIcon> = ({ id }) => (
   <IconContainer>
      <i className={'material-icons'}>{id}</i>
   </IconContainer>
);
