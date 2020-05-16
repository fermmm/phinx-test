import React, { FC } from "react";
import { hot } from "react-hot-loader";
import {
   CharacterMainContainer,
   CharacterName,
   CharacterUIContainer,
   IconButtonStyled,
   ThumbnailImage,
} from "./Character.styles";

export interface PropsCharacter {
   name: string;
   thumbnailUrl: string;
   id: number;
   onClick?: () => void;
}

const Character: FC<PropsCharacter> = ({ name, thumbnailUrl, onClick }) => {
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

export default hot(module)(Character);
