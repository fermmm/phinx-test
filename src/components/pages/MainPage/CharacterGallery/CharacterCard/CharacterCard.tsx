import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { CharacterData } from '../../../../../context/store/characters/charactersState';
import {
   CharacterMainContainer,
   CharacterName,
   CharacterUIContainer,
   IconButtonStyled,
   ThumbnailImage,
} from "./Character.styles";

export interface PropsCharacter extends CharacterData {
   onClick?: () => void;
}

const CharacterCard: FC<PropsCharacter> = ({ name, thumbnailUrl, onClick }) => {
   return (
      <CharacterMainContainer onClick={onClick}>
         <ThumbnailImage src={thumbnailUrl} />
         <CharacterUIContainer>
            <IconButtonStyled iconId={"star"} />
            <CharacterName>{name}</CharacterName>
         </CharacterUIContainer>
      </CharacterMainContainer>
   );
};

export default hot(module)(CharacterCard);
