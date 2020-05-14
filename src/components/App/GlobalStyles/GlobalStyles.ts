import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const GlobalStyles: GlobalStyleComponent<{}, {}> = createGlobalStyle`
   html, body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
   }
   
   a:hover, a:visited, a:link, a:active {
      text-decoration: none;   /* Removes underline in link texts */ 
      border:          none;   /* Removes border in linked items */
      outline:         none;   /* Removes points border in images */
   }
   
   *:focus {
      outline: none;           /* Removes the selection outline from inputs and buttons */
   }
   
   *, :after, :before {
      box-sizing: border-box;  /* Do not include border and margin in the sizes numbers */
   }

   ::-webkit-scrollbar {
      width: 4px;
      margin: 2px;
   }

   ::-webkit-scrollbar-track {
      background: white;
      border-radius: 4px;
   }

   ::-webkit-scrollbar-thumb {
      background: #565656;
      border-radius: 5px;
   }
`;
