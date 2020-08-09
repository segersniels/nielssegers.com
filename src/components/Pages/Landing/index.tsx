import NextHead from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { gradients } from 'styles/colors';
import { Redirect } from 'styles/shared';

import { Container, DescriptionBox, Highlight, Wrapper } from './styles';

const Head = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <NextHead>
      <title>Niels Segers</title>

      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
      />

      <meta key="og:title" property="og:title" content="Niels Segers" />
      <meta key="og:sitename" property="og:sitename" content="Niels Segers" />
      <meta
        key="description"
        name="description"
        content="Full Stack Developer"
      />
      <meta
        key="og:description"
        property="og:description"
        content="Full Stack Developer"
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
    </NextHead>
  );
};

const getRandomGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)].join(',');
};

const Description = ({ children, ...props }: any) => {
  return (
    <Highlight gradient={getRandomGradient()} {...props}>
      {children}
    </Highlight>
  );
};

const Landing = () => {
  return (
    <>
      <Head />
      <Container>
        <Wrapper>
          <DescriptionBox>
            <Link href="/blog" passHref>
              <Description>Blog.</Description>
            </Link>

            <Redirect href="https://github.com/segersniels" target="_blank">
              <Description>Github.</Description>
            </Redirect>

            <Redirect href="https://twitter.com/segersniels_" target="_blank">
              <Description>Twitter.</Description>
            </Redirect>

            <Redirect
              href="https://www.linkedin.com/in/nielssegers/"
              target="_blank"
            >
              <Description>LinkedIn.</Description>
            </Redirect>
          </DescriptionBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default Landing;
