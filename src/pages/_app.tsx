import 'styles/core.css';

import { PageProvider } from 'context/PageContext';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import React, { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_TRACKING_ID, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        page_path: url,
      });
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
};

export default MyApp;
