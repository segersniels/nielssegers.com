import { PageProvider } from 'context/PageContext';
import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
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
