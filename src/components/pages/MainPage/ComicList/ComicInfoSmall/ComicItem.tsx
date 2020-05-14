import React, { FC } from "react";
import { hot } from "react-hot-loader";
// @ts-ignore
import testImage from "../../../../../assets/test-image.png";
import {
   ComicItemContainer,
   ComicItemDataContainer,
   Description,
   IconButtonStyled,
   ImageContainer,
   PreviewImage,
   Title,
} from "./ComicItem.styles";

const ComicItem: FC = () => {
   return (
      <ComicItemContainer>
         <ImageContainer>
            <PreviewImage src={testImage} />
         </ImageContainer>
         <ComicItemDataContainer>
            <Title>
               Spider-man
               <IconButtonStyled iconId={"star_border"} />
            </Title>
            <Description>HUNTED AFTERMATH! The fallout</Description>
         </ComicItemDataContainer>
      </ComicItemContainer>
   );
};

export default hot(module)(ComicItem);
