// tslint:disable: typedef
import styled from "styled-components";
import { IconButton } from "../IconButton/IconButton";

export const CloseButton = styled(IconButton)`
   position: absolute;
   top: 13px;
   right: 11px;

   i {
      font-size: 23px;
   }
`;

export const ModalContainer = styled("div")`
   display: flex;
   position: fixed;
   align-items: center;
   justify-content: center;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
`;

export const ModalDimmer = styled("div")`
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: black;
   opacity: .76;
   z-index: 1000;
`;

export const ModalWindow = styled("div")`
   display: flex;
   flex-direction: column;
   position: relative;
   width: 95vw;
   height: 95vh;
   max-width: 442px;
   max-height: 454px;
   padding-top: 26px;
   padding-left: 22px;
   padding-right: 13px;
   background-color: white;
   border-radius: ${props => props.theme.borders.borderRadius2};
   z-index: 1001;
`;

export const ModalTitle = styled("div")`
   color:  ${props => props.theme.colors.text6};
   font-family: ${props => props.theme.fonts.font2};
   font-size: ${props => props.theme.fonts.size4};
   font-weight: ${props => props.theme.fonts.weight2};
   margin-bottom: 24px;
   padding-right: 30px;
`;

export const ChildrenContainer = styled("div")`
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   overflow-y: auto;

   &::-webkit-scrollbar {
      width: 4px;
   }
`;
