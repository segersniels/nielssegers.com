import { PageProvider } from 'context/PageContext';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import React, { useEffect } from 'react';
import GlobalStyle from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      (window as any).gtag(
        'config',
        process.env.NEXT_PUBLIC_ANALYTICS_TRACKING_ID,
        {
          // eslint-disable-next-line @typescript-eslint/camelcase
          page_path: url,
        },
      );
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
    </>
  );
};

export default App;
