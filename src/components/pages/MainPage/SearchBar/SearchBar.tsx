import React, { FC, useEffect } from "react";
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

let previousSearchBarText: string;

interface PropsSearchBar {
   value: string;
   onChange: (value: string) => void;
   onUserStopsTyping: () => void;
}

const SearchBar: FC<PropsSearchBar> = props => {
   useEffect(() => {
      updateSearchBarHistory();
      const timer = setTimeout(
         () => !searchBarChanged() && props.onUserStopsTyping(),
         600,
      );
      return () => clearTimeout(timer);
   }, [props.value]);
   const updateSearchBarHistory = () => previousSearchBarText = props.value;
   const searchBarChanged = () => previousSearchBarText !== props.value;

   return (
      <SearchBarContainer>
         <img src={marvelLogo} />
         <Divider />
         <InputStyled
            icon={<SearchIconStyled iconId={"search"} />}
            placeholder={"Buscar..."}
            value={props.value}
            onChange={event => props.onChange(event.target.value ?? "")}
         />
         <IconButtonStyled iconId={"star_border"} onClick={() => console.log("clicked")} />
         <Divider />
      </SearchBarContainer>
   );
};

export default hot(module)(SearchBar);
