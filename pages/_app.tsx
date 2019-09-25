import translations from '@resources/translations';
import i18n from 'i18next';
import NextApp from 'next/app';
import React from 'react';
import { initReactI18next } from 'react-i18next';
import { theme, ThemeProvider } from 'styles';

interface Props {
  store: any;
}

class App extends NextApp<Props> {
  public static async getInitialProps({ Component, ctx }: any) {
    const { isServer } = ctx;

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps, isServer };
  }

  constructor(props: any, context: any) {
    super(props, context);
    this.setupTranslations();
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }

  /**
   * Setup translations
   * https://react.i18next.com/guides/quick-start#configure-i-18-next
   */
  private setupTranslations() {
    // https://www.i18next.com/how-to/add-or-load-translations
    i18n
      .use(initReactI18next)
      .init({
        resources: {
          en: {
            translation: translations,
          },
        },
        lng: 'en',
        fallbackLng: 'dev',
        keySeparator: false,
        interpolation: {
          escapeValue: false,
        },
      })
      // tslint:disable-next-line: no-console
      .catch(err => console.warn(err));
  }
}

export default App;
