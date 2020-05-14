import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { MainPageContainer } from "./MainPage.styles";
import SearchBar from "./SearchBar/SearchBar";
import CharacterGallery from "./CharacterGallery/CharacterGallery";
import ComicList from "./ComicList/ComicList";

const MainPage: FC = () => {
   return (
      <MainPageContainer>
         <SearchBar />
         <CharacterGallery />
         <ComicList />
      </MainPageContainer>
   );
};

export default hot(module)(MainPage);
