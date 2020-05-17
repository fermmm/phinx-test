// tslint:disable: typedef
import styled from "styled-components";
import { IconButton } from '../../../../UIComponents/IconButton/IconButton';

export const CharacterMainContainer = styled("div")`
   position: relative;
   width: 258px;
   height: 384px;
   margin: 15px 17.5px;
   border-radius: ${props => props.theme.borders.borderRadius1};
   overflow: hidden;
   cursor: pointer;
`;

export const CharacterUIContainer = styled("div")`
   display: flex;
   align-items: flex-end;
   position: absolute;
   width: 100%;
   height: 100%;
   padding: 26px 23px;
   border-radius: ${props => props.theme.borders.borderRadius1};
   overflow: hidden;
`;

export const ThumbnailImage = styled("img")`
   width: 100%;
   position: absolute;
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
