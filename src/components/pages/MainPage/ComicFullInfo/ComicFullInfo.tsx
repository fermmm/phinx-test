import React, { FC, useContext } from "react";
import { hot } from "react-hot-loader";
import { getThumbnailUrl } from "../../../../Api/characters/characters";
import { GlobalStateContext } from "../../../../context/store";
import { uppercaseFirstLetter } from "../../../../tools/string";
import {
   ComicDataContainer,
   ComicFullInfoContainer,
   CoverImage,
   Description,
   Details,
   Title,
} from "./ComicFullInfo.styles";

const ComicFullInfo: FC = () => {
   const { state } = useContext(GlobalStateContext);

   if (!state.selectedComic) {
      return null;
   }

   const {
      title,
      publishedDate,
      creators,
      description,
      thumbnailData: thumbnailUrl,
   } = state.selectedComic;
   return (
      <ComicFullInfoContainer>
         <CoverImage src={getThumbnailUrl(thumbnailUrl)} />
         <ComicDataContainer>
            <Title>{title}</Title>
            <Details>
               Published: {publishedDate} <br />
               {creators.map(creator => (
                  <span key={creator.name + creator.role}>
                     {uppercaseFirstLetter(creator.role)}: {creator.name} <br />
                  </span>
               ))}
            </Details>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
         </ComicDataContainer>
      </ComicFullInfoContainer>
   );
};

export default hot(module)(ComicFullInfo);
