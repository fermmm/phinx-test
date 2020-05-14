// tslint:disable: typedef
import styled from "styled-components";

export const InputContainer = styled("div")`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;

   i {
      margin-right: 5px;
      cursor: default;
      user-select: none;
   }
`;

export const InputStyled = styled("input")`
   width: 100%;
   color: ${props => props.theme.colors.text3};
   font-family: 'Roboto', sans-serif;
   font-size: 20px;  
   border: none;
   &::placeholder {
      color: ${props => props.theme.colors.text1};
      opacity: 0.6;
   }
`;

