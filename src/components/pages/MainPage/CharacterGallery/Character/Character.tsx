import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { CharacterContainer, CharacterName, IconButtonStyled } from './Character.styles';

const Character: FC = () => {
   return (
      <CharacterContainer >
         <IconButtonStyled iconId={'star'}/>
         <CharacterName>
            Spider-Man
         </CharacterName>
      </CharacterContainer>
   );
};

export default hot(module)(Character);
