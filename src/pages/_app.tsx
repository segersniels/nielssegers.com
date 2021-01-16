import { PageProvider } from 'context/PageContext';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from 'styles/global';

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
      <ThemeProvider theme={theme}>
        <PageProvider>
          <Component {...pageProps} />
        </PageProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
