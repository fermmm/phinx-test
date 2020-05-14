import React, { FC } from "react";
import { hot } from "react-hot-loader";
import Modal from "../../../UIComponents/Modal/Modal";
import ComicItem from "./ComicInfoSmall/ComicItem";

const ComicList: FC = () => {
   return (
      <Modal visible={true} title={"Spider-man"} >
         <ComicItem />
         <ComicItem />
         <ComicItem />
         <ComicItem />
         <ComicItem />
         <ComicItem />
         <ComicItem />
         <ComicItem />
         <ComicItem />
         <ComicItem />
      </Modal>
   );
};

export default hot(module)(ComicList);