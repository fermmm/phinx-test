import React, { FC } from "react";

interface PropsIcon extends React.HTMLAttributes<HTMLElement> {
   id: string;
}

export const Icon: FC<PropsIcon> = ({ id, ...remainingProps }) => (
   <i {...remainingProps} className={`material-icons ${remainingProps.className}`}>
      {id}
   </i>
);
