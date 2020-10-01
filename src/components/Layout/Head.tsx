import React from 'react';
import NextHead from 'next/head';

const Head: React.FC = () => {
   return (
      <NextHead>
        <title>vini</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=0" />

        <link rel="icon" href="/static/favicon-32x32.png" sizes="32x32" />
        <link rel="manifest" href="/static/manifest.json" />
      </NextHead>
   );
}

export default Head;
