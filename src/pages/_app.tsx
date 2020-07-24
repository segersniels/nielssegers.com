import 'styles/core.css';

import { PageProvider } from 'context/PageContext';
import { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
};

export default MyApp;
