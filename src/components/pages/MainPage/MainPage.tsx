import React, { FC, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router";
import {
   clearCharactersListAction,
   randomCharacterRequestAction,
   requestCharactersAction,
} from "../../../context/actions/characters/charactersActions";
import { comicFilterAction } from "../../../context/actions/comics/comicsActions";
import { GlobalStateContext } from "../../../context/store";
import { UrlQuery, useUrlQuery } from "../../../tools/hooks";
import CharacterGallery from "./CharacterGallery/CharacterGallery";
import ComicFullInfo from "./ComicFullInfo/ComicFullInfo";
import { MainPageContainer } from "./MainPage.styles";
import SearchBar from "./SearchBar/SearchBar";

const MainPage: FC = () => {
   const urlQuery: UrlQuery = useUrlQuery();
   const { state, dispatch } = React.useContext(GlobalStateContext);

   useEffect(() => {
      requestDataUsingUrlQuery();
   }, []);

   const requestDataUsingUrlQuery = async () => {
      dispatch(clearCharactersListAction());
      if (urlQuery.character) {
         dispatch(requestCharactersAction(urlQuery.character));

         if (urlQuery.comic) {
            dispatch(comicFilterAction(urlQuery.comic));
         }
      } else {
         dispatch(randomCharacterRequestAction());
      }
   };

   return (
      <MainPageContainer>
         <SearchBar />
         <Switch>
            <Route exact path={"/"} component={CharacterGallery} />
            <Route path={"/comic"} component={ComicFullInfo} />
         </Switch>
      </MainPageContainer>
   );
};

export default hot(module)(MainPage);
