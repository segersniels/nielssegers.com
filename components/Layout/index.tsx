import React from 'react';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import { Fragment, ReactNode } from 'react';
import 'styles/core.css';
import { Container, Wrapper } from './styles';
import { useRouter } from 'next/router';

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
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />

        <meta key="description" name="description" />
        <meta key="og:sitename" property="og:sitename" content="Niels Segers" />
        <meta key="og:title" property="og:title" content="Niels Segers" />
        <meta
          key="og:description"
          property="og:description"
          content="Personal website"
        />
        <meta
          key="og:image"
          property="og:image"
          content={`${process.env.URL}/static/images/avatar.jpg`}
        />

        <link
          key="canonical"
          rel="canonical"
          href={`${process.env.URL}${asPath}`}
        />
        <meta
          key="og:url"
          property="og:url"
          content={`${process.env.URL}${asPath}`}
        />

        <link href="https://twitter.com/segersniels_" rel="me" />
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
