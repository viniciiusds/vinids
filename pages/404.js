import { Fragment, useEffect } from 'react';

import styles from '@scss/NotFound.module.scss';
import Head from '@components/Layout/Head';

const colors = [
   '#F94144',
   '#F3722C',
   '#F8961E',
   '#F9844A',
   '#F9C74F',
   '#90BE6D',
   '#43AA8B',
   '#4D908E',
   '#577590',
   '#277DA1',
];

export default function NotFound() {
   useEffect(() => {
      let i = 0;
      const elContainer = document.getElementById('container');

      const change = () => {
         elContainer.style.backgroundColor = colors[i];
         i = (i + 1) % colors.length;
      };

      setInterval(change, 1500);
   }, []);

   return (
      <Fragment>
         <Head />
         <div className={styles.container} id="container">
            <h1>Dude, get out here!</h1>
         </div>
      </Fragment>
   );
}
