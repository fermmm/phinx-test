import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { Divider } from "../../../UIComponents/Divider/Divider.styles";
import {
   IconButtonStyled,
   InputStyled,
   SearchBarContainer,
   SearchIconStyled,
} from "./SearchBar.styles";
// @ts-ignore
import marvelLogo from "../../../../assets/marvelLogo.png";

const SearchBar: FC = () => {
   return (
      <SearchBarContainer>
         <img src={marvelLogo} />
         <Divider />
         <InputStyled
            icon={<SearchIconStyled id={"search"} />}
            placeholder={"Buscar..."}
         />
         <IconButtonStyled id={"star_border"} onClick={() => console.log("clicked")} />
         <Divider />
      </SearchBarContainer>
   );
};

export default hot(module)(SearchBar);
