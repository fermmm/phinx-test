// tslint:disable: typedef
import styled from "styled-components";
import { IconButton } from '../../../../UIComponents/IconButton/IconButton';

export const CharacterContainer = styled("div")`
   display: flex;
   align-items: flex-end;
   position: relative;
   width: 258px;
   height: 384px;
   background-color: red;
   margin: 15px 17.5px;
   padding: 26px 23px;
   border-radius: ${props => props.theme.borders.borderRadius1};
`;

export const CharacterName = styled("div")`
   color:  ${props => props.theme.colors.text4};
   font-family: ${props => props.theme.fonts.font2};
   font-size: ${props => props.theme.fonts.size1};
   font-weight: ${props => props.theme.fonts.weight1};
`;

export const IconButtonStyled = styled(IconButton)`
   color:  ${props => props.theme.colors.text4};
   position: absolute;
   right: 7px;
   top: 11px;

   i {
      font-size: 27px;
   }
`;
