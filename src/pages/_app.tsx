import 'styles/core.css';
import React from 'react';
import { AppProps } from 'next/app';
import App from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext: any) => {
  const { isServer } = appContext;
  const appProps: any = await App.getInitialProps(appContext);
  return { ...appProps, isServer };
};

export default App;
