/**
 * This is needed to have SSR enabled with styled-components, this basically injects the stylesheet in <head />
 * As seen here: https://github.com/zeit/next.js/tree/master/examples/with-styled-components
 */
import Document from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styles';

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
