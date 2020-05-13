import 'styles/core.css';
import React from 'react';
import { AppProps } from 'next/app';
import App from 'next/app';
import { PageProvider } from 'context/PageContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
};

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
