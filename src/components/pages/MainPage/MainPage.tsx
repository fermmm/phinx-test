import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { MainPageContainer } from "./MainPage.styles";
import SearchBar from "./SearchBar/SearchBar";

const MainPage: FC = () => {
   return (
      <MainPageContainer>
         <SearchBar/>
      </MainPageContainer>
   );
};

export default hot(module)(MainPage);
