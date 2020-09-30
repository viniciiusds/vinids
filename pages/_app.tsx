import type { AppProps } from 'next/app'

import '@/scss/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />;
}

export default MyApp;
