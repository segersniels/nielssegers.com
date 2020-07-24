import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Fragment, ReactNode } from 'react';

import { Container } from './styles';

interface Props {
  children: ReactNode;
  className?: string;
}

const Layout = (props: Props) => {
  const { children, className = 'Layout' } = props;
  const router = useRouter();
  const { asPath } = router;

  return (
    <Fragment>
      <Head>
        <title>Niels Segers</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />

        <meta key="description" name="description" />
        <meta key="og:sitename" property="og:sitename" content="Niels Segers" />
        <meta
          key="og:title"
          property="og:title"
          content="Full Stack Developer at delta.app"
        />

        <link
          key="canonical"
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL}${asPath}`}
        />
        <meta
          key="og:url"
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL}${asPath}`}
        />
      </Head>

      <Header />

      <Navigation />

      <Container className={className}>{children}</Container>
    </Fragment>
  );
};

export default Layout;
