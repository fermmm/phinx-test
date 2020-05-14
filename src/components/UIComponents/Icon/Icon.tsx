import React, { FC } from "react";

interface PropsIcon extends React.HTMLAttributes<HTMLElement> {
   iconId: string;
}

export const Icon: FC<PropsIcon> = ({ iconId: id, ...remainingProps }) => (
   <i {...remainingProps} className={`material-icons ${remainingProps.className}`}>
      {id}
   </i>
);
