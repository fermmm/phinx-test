import React, { FC } from "react";
import { hot } from "react-hot-loader";
import {
   ComicItemContainer,
   ComicItemDataContainer,
   Description,
   IconButtonStyled,
   ImageContainer,
   PreviewImage,
   Title,
} from "./ComicItem.styles";

interface PropsComic {
   title: string;
   description: string;
   thumbnailUrl: string;
   onClick: () => void;
}

const ComicItem: FC<PropsComic> = ({title, description, thumbnailUrl, onClick}) => {
   return (
      <ComicItemContainer onClick={onClick}>
         <ImageContainer>
            <PreviewImage src={thumbnailUrl} />
         </ImageContainer>
         <ComicItemDataContainer>
            <Title>
               {title}
               {/* <IconButtonStyled iconId={"star_border"} /> */}
            </Title>
            <Description>{description}</Description>
         </ComicItemDataContainer>
      </ComicItemContainer>
   );
};

export default hot(module)(ComicItem);
