import 'styles/core.css';
import React from 'react';
import { AppProps } from 'next/app';
import { PageProvider } from 'context/PageContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
};

export default MyApp;
