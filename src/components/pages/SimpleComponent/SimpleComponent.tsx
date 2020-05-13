import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { Icon } from '../../UIComponents/Icon/Icon';
// @ts-ignore
import styles from './SimpleComponent.scss';

interface SimpleComponentProps {
   // ... Your props here ...
}

export const SimpleComponent: FC<SimpleComponentProps> = () => {
   return (
      <div className={styles.simpleComponent}>
         Example of a simple component.
         <div>
            <Icon id={'star'}/>
            <Icon id={'star_border'}/>
         </div>
      </div>
   );
};

export default hot(module)(SimpleComponent);
