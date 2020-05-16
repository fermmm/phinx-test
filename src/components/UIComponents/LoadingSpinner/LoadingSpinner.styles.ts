// tslint:disable: typedef
import styled from "styled-components";

export const SpinnerContainer = styled("div")`
   width: 40px;
   height: 40px;

   position: relative;
   margin: 100px auto;
`;

export const Circle1 = styled("div")`
   width: 100%;
   height: 100%;
   border-radius: 50%;
   background-color: #333;
   opacity: 0.6;
   position: absolute;
   top: 0;
   left: 0;

   -webkit-animation: sk-bounce 2s infinite ease-in-out;
   animation: sk-bounce 2s infinite ease-in-out;

   @keyframes sk-bounce {
      0%,
      100% {
         transform: scale(0);
      }
      50% {
         transform: scale(1);
      }
   }
`;

export const Circle2 = styled(Circle1)`
   animation-delay: -1s;
`;
