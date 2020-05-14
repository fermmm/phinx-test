import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { CharactersContainer, GalleryContainer } from './CharacterGallery.styles';
import Character from "./Character/Character";

const CharacterGallery: FC = () => {
   return (
      <GalleryContainer>
         <CharactersContainer>
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
         </CharactersContainer>
      </GalleryContainer>
   );
};

export default hot(module)(CharacterGallery);
