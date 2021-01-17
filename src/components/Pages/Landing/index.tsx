import Head from 'components/Head';
import Link from 'next/link';
import React, { Fragment } from 'react';

import { Container, DescriptionBox, Highlight, Wrapper } from './styles';

const Landing = () => {
  return (
    <Fragment>
      <Head />
      <Container>
        <Wrapper>
          <DescriptionBox>
            <Link href="/blog" prefetch={false} passHref>
              <Highlight>Blog.</Highlight>
            </Link>

            <Highlight href="https://github.com/segersniels" target="_blank">
              Github.
            </Highlight>

            <Highlight href="https://twitter.com/segersniels_" target="_blank">
              Twitter.
            </Highlight>

            <Highlight
              href="https://www.linkedin.com/in/nielssegers/"
              target="_blank"
            >
              LinkedIn.
            </Highlight>
          </DescriptionBox>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Landing;
