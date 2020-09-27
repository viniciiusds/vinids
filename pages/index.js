import { Fragment, useEffect, useRef, useState } from 'react';
import { Button } from '@material-ui/core';

import styles from '@scss/Home.module.scss';
import Head from '@components/Layout/Head';

const colors = [
   'white',
   'red',
   'blue',
   'green',
   'yellow',
   'purple',
   'grey',
   'orange',
   'brown',
   'aqua',
   'wheat',
   'blueviolet',
   'chartreuse',
   'cornflowerblue',
   'crimson',
];

let interval;

export default function Home() {

   const container = useRef(null);

   const [clicked, setClicked] = useState(false);

   const fnClick = () => setClicked(!clicked);

   useEffect(() => {
      if (clicked) {
         let i = 0;

         const fnChangeBackground = () => {
            container.current.style.backgroundColor = colors[i];
            i = (i + 1) % colors.length;
         };

         interval = setInterval(fnChangeBackground, 100);
      } else {
         clearInterval(interval);
         container.current.style.backgroundColor = 'black';
      }
   }, [clicked]);

   return (
      <Fragment>
         <Head />

         <div className={styles.container} ref={container}>
            <Button onClick={fnClick}>vini</Button>
         </div>

      </Fragment>
   );
}
