import React, { FC } from "react";
import { hot } from "react-hot-loader";
import Character, { PropsCharacter } from "./Character/Character";
import { CharactersContainer, GalleryContainer } from "./CharacterGallery.styles";

interface PropsCharacterGallery {
   characters: PropsCharacter[];
   onClick: (character: PropsCharacter) => void;
}

const CharacterGallery: FC<PropsCharacterGallery> = ({ characters, onClick }) => {
   return (
      <GalleryContainer>
         <CharactersContainer>
            {characters.map(character => (
               <Character onClick={() => onClick(character)} {...character} key={character.id} />
            ))}
         </CharactersContainer>
      </GalleryContainer>
   );
};

export default hot(module)(CharacterGallery);
