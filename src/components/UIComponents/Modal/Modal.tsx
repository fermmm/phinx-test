import React, { FC } from "react";
import { hot } from "react-hot-loader";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
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
   loadingSpinnerVisible?: boolean;
   onCloseClick?: () => void;
}

const Modal: FC<PropsInput> = ({
   visible,
   title,
   loadingSpinnerVisible,
   children,
   onCloseClick,
   ...remainingProps
}) => {
   if (!visible) {
      return null;
   }

   return (
      <ModalContainer {...remainingProps}>
         <ModalDimmer />
         <ModalWindow>
            <CloseButton iconId={"close"} onClick={onCloseClick} />
            <ModalTitle>{title}</ModalTitle>
            <ChildrenContainer>
               {loadingSpinnerVisible && <LoadingSpinner />}
               {children}
            </ChildrenContainer>
         </ModalWindow>
      </ModalContainer>
   );
};

export default hot(module)(Modal);
