import { Fragment, useEffect, useReducer, useRef } from 'react';
import { Button } from '@material-ui/core';

import styles from '@/scss/Home.module.scss';
import Head from '@/components/Layout/Head';

const colors = [
   'red',
   'black',
   'blue',
   'black',
   'green',
   'black',
   'white',
   'black',
   'yellow',
   'black',
   'purple',
   'black',
   'grey',
   'black',
   'orange',
   'black',
   'brown',
   'black',
   'aqua',
   'black',
   'wheat',
   'black',
   'blueviolet',
   'black',
   'chartreuse',
   'black',
   'cornflowerblue',
   'black',
   'crimson',
   'black',
];

let interval: NodeJS.Timer;

export default function Vinids() {

   const container = useRef(null);

   const [clicked, toggleClicked] = useReducer(v => !v, false);

   useEffect(() => {
      if (clicked) {
         let i = 0;

         const fnChangeBackground = () => {
            container.current.style.backgroundColor = colors[i];
            i = (i + 1) % colors.length;
         };

         interval = setInterval(fnChangeBackground, 50);
      } else {
         clearInterval(interval);
         container.current.style.backgroundColor = 'black';
      }
   }, [clicked]);

   return (
      <Fragment>
         <Head />

         <div className={styles.container} ref={container}>
            <Button onClick={toggleClicked}>vini</Button>
         </div>

      </Fragment>
   );
}
