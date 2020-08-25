import Head from 'components/Head';
import Link from 'next/link';
import gradient from 'random-gradient';
import React from 'react';
import { Redirect } from 'styles/shared';

import { Container, DescriptionBox, Highlight, Wrapper } from './styles';

const Landing = () => {
  return (
    <>
      <Head />
      <Container>
        <Wrapper>
          <DescriptionBox>
            <Link href="/blog" passHref>
              <Highlight gradient={gradient()}>Blog.</Highlight>
            </Link>

            <Redirect href="https://github.com/segersniels" target="_blank">
              <Highlight gradient={gradient()}>Github.</Highlight>
            </Redirect>

            <Redirect href="https://twitter.com/segersniels_" target="_blank">
              <Highlight gradient={gradient()}>Twitter.</Highlight>
            </Redirect>

            <Redirect
              href="https://www.linkedin.com/in/nielssegers/"
              target="_blank"
            >
              <Highlight gradient={gradient()}>LinkedIn.</Highlight>
            </Redirect>
          </DescriptionBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default Landing;
