// tslint:disable: typedef
import { maxWidth, minWidth } from './../../../../tools/breakpoints';
import styled from "styled-components";

export const ComicFullInfoContainer = styled("div")`
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin-bottom: 21px;
   padding-top: 14px;
   padding-left: 10px;
   padding-right: 10px;

   ${maxWidth.sm`
      flex-direction: column;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
	`}
`;

export const ComicDataContainer = styled("div")`
   display: flex;
   flex-direction: column;
   max-width: 548px;
   padding-top: 2px;

   ${maxWidth.sm`
      width: 100%;
      max-width: unset;
	`}
`;

export const CoverImage = styled("img")`
   width: 550px;
   margin-right: 32px;
   ${maxWidth.sm`
      width: 100%;
      margin-right: 0px;
      margin-bottom: 20px;
	`}
`;

export const Title = styled("div")`
   color:  ${props => props.theme.colors.text3};
   font-family: ${props => props.theme.fonts.font2};
   font-size: ${props => props.theme.fonts.size4};
   font-weight: ${props => props.theme.fonts.weight2};
   letter-spacing: ${props => props.theme.fonts.letterSpacing1};
   display: flex;
   align-items: center;
   margin-bottom: 46px;
`;

export const Details = styled("div")`
   color:  ${props => props.theme.colors.text2};
   font-family: ${props => props.theme.fonts.font2};
   font-size: ${props => props.theme.fonts.size6};
   font-weight: ${props => props.theme.fonts.weight1};
   line-height: ${props => props.theme.fonts.lineHeight1};
   letter-spacing: ${props => props.theme.fonts.letterSpacing1};
   margin-bottom: 64px;
`;

export const Description = styled("div")`
   color:  ${props => props.theme.colors.text5};
   font-family: ${props => props.theme.fonts.font2};
   font-size: ${props => props.theme.fonts.size6};
   font-weight: ${props => props.theme.fonts.weight1};
   line-height: ${props => props.theme.fonts.lineHeight1};
   letter-spacing: ${props => props.theme.fonts.letterSpacing1};
`;