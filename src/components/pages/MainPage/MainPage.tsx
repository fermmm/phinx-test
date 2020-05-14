import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { MainPageContainer } from "./MainPage.styles";
import SearchBar from "./SearchBar/SearchBar";
import CharacterGallery from "./CharacterGallery/CharacterGallery";

const MainPage: FC = () => {
   return (
      <MainPageContainer>
         <SearchBar />
         <CharacterGallery />
      </MainPageContainer>
   );
};

export default hot(module)(MainPage);
