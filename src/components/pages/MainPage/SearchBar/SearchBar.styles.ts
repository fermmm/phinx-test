// tslint:disable: typedef
import styled from "styled-components";
import { Input } from '../../../UIComponents/Input/Input';
import { IconButton } from '../../../UIComponents/IconButton/IconButton';
import { Icon } from "../../../UIComponents/Icon/Icon";

export const SearchBarContainer = styled("div")`
   background-color: ${props => props.theme.colors.background2};
   box-shadow: ${props => props.theme.shadows.elevation1};
   display: flex;
   flex-direction: row;
   align-items: center;
   padding-left: 20px;
   width: 100vw;
   height: 69px;
`;

export const InputStyled = styled(Input)`
   max-width: 1164px;
`;

export const IconButtonStyled = styled(IconButton)`
   margin-left: 24px;
   color: ${props => props.theme.colors.text1};
`;

export const SearchIconStyled = styled(Icon)`
   color: ${props => props.theme.colors.text1};
`;