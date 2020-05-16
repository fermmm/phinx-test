import React, { FC } from "react";
import { hot } from "react-hot-loader";
import {
   ComicDataContainer,
   ComicFullInfoContainer,
   CoverImage,
   Description,
   Details,
   Title,
} from "./ComicFullInfo.styles";
import { uppercaseFirstLetter } from "../../../../tools/string";

interface PropsComicFullInfo {
   title: string;
   publishedDate: string;
   creators: { role: string; name: string }[];
   description: string;
   coverImageUrl: string;
}

const ComicFullInfo: FC<PropsComicFullInfo> = ({
   title,
   publishedDate,
   creators,
   description,
   coverImageUrl,
}) => {
   return (
      <ComicFullInfoContainer>
         <CoverImage src={coverImageUrl} />
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
            <Description>{description}</Description>
         </ComicDataContainer>
      </ComicFullInfoContainer>
   );
};

export default hot(module)(ComicFullInfo);
