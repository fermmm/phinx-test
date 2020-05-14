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
      font-size:  ${props => props.theme.fonts.size2};
   }
`;

export const InputStyled = styled("input")`
   width: 100%;
   color: ${props => props.theme.colors.text3};
   font-family: ${props => props.theme.fonts.font1};
   font-size:  ${props => props.theme.fonts.size3};  
   border: none;
   &::placeholder {
      color: ${props => props.theme.colors.text1};
      opacity: 0.6;
   }
`;

