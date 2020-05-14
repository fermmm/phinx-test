import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { InputContainer, InputStyled } from "./Input.styles";

interface PropsInput extends React.HTMLAttributes<HTMLDivElement> {
   value?: string;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   placeholder?: string;
   icon?: React.ReactNode;
}

export const Input: FC<PropsInput> = ({
   value,
   onChange,
   placeholder,
   icon,
   ...remainingProps
}) => (
   <InputContainer {...remainingProps}>
      {icon}
      <InputStyled value={value} onChange={onChange} placeholder={placeholder} />
   </InputContainer>
);

export default hot(module)(Input);
