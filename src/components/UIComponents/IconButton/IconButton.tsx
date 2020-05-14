import React, { FC } from "react";
import { ButtonStyled } from "./IconButton.styles";
import { Icon } from "../Icon/Icon";

interface PropsIconButton extends React.HTMLAttributes<HTMLButtonElement> {
   id: string;
}

export const IconButton: FC<PropsIconButton> = ({ id, ...remainingProps }) => (
   <ButtonStyled {...remainingProps}>
      <Icon id={id}/>
   </ButtonStyled>
);
