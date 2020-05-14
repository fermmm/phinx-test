// tslint:disable: typedef
import styled from "styled-components";
import { IconButton } from '../../../../UIComponents/IconButton/IconButton';

export const ComicItemContainer = styled("div")`
   display: flex;
   flex-direction: row;
   margin-bottom: 21px;
`;

export const ComicItemDataContainer = styled("div")`
   display: flex;
   flex-direction: column;
`;

export const ImageContainer = styled("div")`
   overflow: hidden;
   height: 94px;
   margin-right: 13px;
   border-radius: 5px;
`;

export const PreviewImage = styled("img")`
   width: 94px;
`;

export const IconButtonStyled = styled(IconButton)`
   color:  ${props => props.theme.colors.text1};

   i {
      font-size: 23px;
   }
`;

export const Title = styled("div")`
   color:  ${props => props.theme.colors.text2};
   font-family: ${props => props.theme.fonts.font2};
   font-size: ${props => props.theme.fonts.size5};
   font-weight: ${props => props.theme.fonts.weight2};
   display: flex;
   align-items: center;
`;

export const Description = styled("div")`
   color:  ${props => props.theme.colors.text5};
   font-family: ${props => props.theme.fonts.font2};
   font-size: ${props => props.theme.fonts.size5};
   font-weight: ${props => props.theme.fonts.weight1};
`;