import { History } from "history";
import React, { FC, useContext } from "react";
import { hot } from "react-hot-loader";
import { useHistory } from "react-router-dom";
import { getThumbnailUrl, ThumbnailSize } from "../../../../../Api/characters/characters";
import { selectComicAction } from "../../../../../context/actions/comics/comicsActions";
import { GlobalStateContext } from "../../../../../context/store";
import { ComicData } from "../../../../../context/store/comics/comicsState";
import Modal from "../../../../UIComponents/Modal/Modal";
import ComicItem from "./ComicItem/ComicItem";

interface PropsComicListModal {
   visible: boolean;
   onCloseClick: () => void;
}

const ComicListModal: FC<PropsComicListModal> = ({ visible, onCloseClick }) => {
   const { state, dispatch } = useContext(GlobalStateContext);
   const history: History = useHistory();

   const onComicClick = (comic: ComicData) => {
      onCloseClick();
      dispatch(selectComicAction(comic));
      history.push("/comic");
   };

   return (
      <Modal
         visible={visible}
         title={state.selectedCharacter?.name}
         onCloseClick={onCloseClick}
         loadingSpinnerVisible={state.comicList == null}
      >
         {state.comicList?.map(
            comic =>
               (!state.comicFilter || comic.title.startsWith(state.comicFilter)) && (
                  <ComicItem
                     title={comic.title}
                     description={comic.description}
                     thumbnailUrl={getThumbnailUrl(comic.thumbnailData, ThumbnailSize.PortraitMedium)}
                     onClick={() => onComicClick(comic)}
                     key={comic.id}
                  />
               ),
         )}
         {state.comicList?.length === 0 && "This character has no comics."}
      </Modal>
   );
};

export default hot(module)(ComicListModal);
