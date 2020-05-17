import React, { FC, useContext, useState } from "react";
import { hot } from "react-hot-loader";
import { selectCharacterAction } from "../../../../context/actions/characters/charactersActions";
import {
   clearComicListAction,
   requestComicsListAction,
} from "../../../../context/actions/comics/comicsActions";
import { GlobalStateContext } from "../../../../context/store";
import { CharacterData } from "../../../../context/store/characters/charactersState";
import LoadingSpinner from "../../../UIComponents/LoadingSpinner/LoadingSpinner";
import CharacterCard from "./CharacterCard/CharacterCard";
import { CardsContainer, GalleryContainer } from "./CharacterGallery.styles";
import ComicListModal from "./ComicListModal/ComicListModal";

const CharacterGallery: FC = () => {
   const { state, dispatch } = useContext(GlobalStateContext);
   const [modalVisible, setModalVisible] = useState<boolean>(false);

   const onCharacterCardClick = (character: CharacterData) => {
      dispatch(selectCharacterAction(character));
      dispatch(clearComicListAction());
      dispatch(requestComicsListAction(character.id));
      setModalVisible(true);
   };

   return (
      <>
         {state.characterList == null && <LoadingSpinner />}
         <GalleryContainer>
            <CardsContainer>
               {state.characterList?.map(character => (
                  <CharacterCard
                     onClick={() => onCharacterCardClick(character)}
                     {...character}
                     key={character.id}
                  />
               ))}
            </CardsContainer>
         </GalleryContainer>
         <ComicListModal visible={modalVisible} onCloseClick={() => setModalVisible(false)} />
      </>
   );
};

export default hot(module)(CharacterGallery);
