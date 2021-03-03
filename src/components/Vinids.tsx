import React, { Fragment, useReducer, useRef } from 'react';
import { Button } from '@material-ui/core';

import styles from '@/scss/Home.module.scss';
import Head from '@/components/Layout/Head';

const Vinids: React.FC = () => {

   const container = useRef(null);

   const toggleClicked = () => {
      const color = Math.floor(Math.random() * 16777215).toString(16);
      container.current.style.backgroundColor = `#${color}`;
   };

   return (
      <Fragment>
         <Head />

         <div className={styles.container} ref={container}>
            <Button onClick={toggleClicked}>vini</Button>
         </div>

      </Fragment>
   );
};

export default Vinids;
