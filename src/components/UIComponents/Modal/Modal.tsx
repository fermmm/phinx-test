import React, { FC } from "react";
import { hot } from "react-hot-loader";
import {
   ChildrenContainer,
   CloseButton,
   ModalContainer,
   ModalDimmer,
   ModalTitle,
   ModalWindow,
} from "./Modal.styles";

interface PropsInput extends React.HTMLAttributes<HTMLDivElement> {
   title: string;
   visible: boolean;
   onCloseClick?: () => void;
}

const Modal: FC<PropsInput> = ({ visible, title, children, onCloseClick, ...remainingProps }) => {
   if (!visible) {
      return null;
   }
   
   return (
      <ModalContainer {...remainingProps}>
         <ModalDimmer />
         <ModalWindow>
            <CloseButton iconId={"close"} onClick={onCloseClick} />
            <ModalTitle>{title}</ModalTitle>
            <ChildrenContainer>{children}</ChildrenContainer>
         </ModalWindow>
      </ModalContainer>
   );
};

export default hot(module)(Modal);
