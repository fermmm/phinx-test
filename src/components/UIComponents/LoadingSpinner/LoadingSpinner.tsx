import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { SpinnerContainer, Circle1, Circle2 } from './LoadingSpinner.styles';

const LoadingSpinner: FC = () => {
   return (
      <SpinnerContainer>
         <Circle1 />
         <Circle2/>
      </SpinnerContainer>
   );
};

export default hot(module)(LoadingSpinner);
