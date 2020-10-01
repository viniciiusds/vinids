import React from 'react';
import type { AppProps } from 'next/app'

import '@/scss/app.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
   return <Component {...pageProps} />;
}

export default MyApp;
