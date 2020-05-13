import styled, { StyledComponent } from "styled-components";

export const IconContainer: StyledComponent<"div", {}> = styled("div")`
   color: ${props => props.theme.colors.test};
`;
