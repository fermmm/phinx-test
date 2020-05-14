// tslint:disable: typedef
import styled from "styled-components";

export const Divider = styled("div")`
   background-color: ${props => props.theme.colors.divider};
   box-shadow: ${props => props.theme.shadows.dividerShadow};
   width: 1px;
   height: 37px;
   margin: 0 25px;
   position: relative;
`;
