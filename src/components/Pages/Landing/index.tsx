import Head from 'components/Head';
import { generateRandomGradient } from 'helpers/gradient';
import Link from 'next/link';
import React, { Fragment } from 'react';

import {
  Container,
  DescriptionBox,
  Highlight as DefaultHighlight,
  Wrapper,
} from './styles';

interface Props {
  children: any;
  href?: string;
  target?: string;
}

const Highlight = (props: Props) => {
  const { children, href, target } = props;

  return (
    <DefaultHighlight
      href={href}
      target={target}
      gradient={generateRandomGradient()}
    >
      {children}
    </DefaultHighlight>
  );
};

const Landing = () => {
  return (
    <Fragment>
      <Head />
      <Container>
        <Wrapper>
          <DescriptionBox>
            <Link href="/blog" passHref>
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
