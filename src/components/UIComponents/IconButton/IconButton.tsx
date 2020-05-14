import React, { FC } from "react";
import { ButtonStyled } from "./IconButton.styles";
import { Icon } from "../Icon/Icon";

interface PropsIconButton extends React.HTMLAttributes<HTMLButtonElement> {
   iconId: string;
}

export const IconButton: FC<PropsIconButton> = ({ iconId, ...remainingProps }) => (
   <ButtonStyled {...remainingProps}>
      <Icon iconId={iconId}/>
   </ButtonStyled>
);
