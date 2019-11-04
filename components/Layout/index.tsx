import React from 'react';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import { Fragment, ReactNode } from 'react';
import 'styles/core.css';
import { Container, Wrapper } from './styles';

interface Props {
  children: ReactNode;
  className?: string;
}

const Layout = (props: Props) => {
  const { children, className = 'Layout' } = props;

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <meta key="description" name="description" />

        <meta key="og:sitename" property="og:sitename" />
        <meta key="og:title" property="og:title" />
        <meta key="og:description" property="og:description" />
        <meta key="og:url" property="og:url" />

        <link
          rel="webmention"
          href="https://webmention.io/nielssegers.com/webmention"
        />
      </Head>

      <Wrapper>
        <Navigation />
        <Container className={className}>{children}</Container>
        <Footer />
      </Wrapper>
    </Fragment>
  );
};

export default Layout;
