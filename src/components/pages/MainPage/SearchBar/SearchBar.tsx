import { History } from "history";
import React, { FC, useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import { useHistory } from "react-router-dom";
import {
   clearCharactersListAction,
   requestCharactersAction,
} from "../../../../context/actions/characters/charactersActions";
import { GlobalStateContext } from "../../../../context/store";
import { Divider } from "../../../UIComponents/Divider/Divider.styles";
import { InputStyled, SearchBarContainer, SearchIconStyled } from "./SearchBar.styles";

// @ts-ignore
import marvelLogo from "../../../../assets/marvelLogo.png";

const SearchBar: FC = () => {
   const { dispatch } = React.useContext(GlobalStateContext);
   const [searchBarText, setSearchBarText] = useState<string>("");
   const history: History = useHistory();

   useEffect(() => {
      const timer = setTimeout(onUserStopsTyping, 600);
      return () => clearTimeout(timer);
   }, [searchBarText]);

   const onUserStopsTyping = () => {
      if (searchBarText) {
         dispatch(clearCharactersListAction());
         dispatch(requestCharactersAction(searchBarText));
         history.push("/");
      }
   };

   return (
      <SearchBarContainer>
         <img src={marvelLogo} />
         <Divider />
         <InputStyled
            icon={<SearchIconStyled iconId={"search"} />}
            placeholder={"Buscar..."}
            value={searchBarText}
            onChange={event => setSearchBarText(event.target.value ?? "")}
         />
         {/* <IconButtonStyled iconId={"star_border"} onClick={() => console.log("clicked")} /> */}
         <Divider />
      </SearchBarContainer>
   );
};

export default hot(module)(SearchBar);
