import Link from 'next/link';
import React from 'react';
import { gradients } from 'styles/colors';
import { Redirect } from 'styles/shared';

import { Container, DescriptionBox, Highlight, Wrapper } from './styles';

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
  );
};

export default Landing;
