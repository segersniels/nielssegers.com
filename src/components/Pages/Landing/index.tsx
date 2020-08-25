import Head from 'components/Head';
import Link from 'next/link';
import randomGradient from 'random-gradient';
import React from 'react';
import { Redirect } from 'styles/shared';

import { Container, DescriptionBox, Highlight, Wrapper } from './styles';

interface DescriptionProps {
  text: string;
}

const Description = (props: DescriptionProps) => {
  const { text } = props;
  const gradient = randomGradient(text);

  return <Highlight gradient={gradient}>{text}</Highlight>;
};

const Landing = () => {
  return (
    <>
      <Head />
      <Container>
        <Wrapper>
          <DescriptionBox>
            <Link href="/blog" passHref>
              <Description text="Blog." />
            </Link>

            <Redirect href="https://github.com/segersniels" target="_blank">
              <Description text="Github." />
            </Redirect>

            <Redirect href="https://twitter.com/segersniels_" target="_blank">
              <Description text="Twitter." />
            </Redirect>

            <Redirect
              href="https://www.linkedin.com/in/nielssegers/"
              target="_blank"
            >
              <Description text="LinkedIn." />
            </Redirect>
          </DescriptionBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default Landing;
