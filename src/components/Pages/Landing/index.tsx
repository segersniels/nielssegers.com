import Link from 'next/link';
import React from 'react';
import { Redirect } from 'styles/shared';

import { Container, DescriptionBox, Highlight, Wrapper } from './styles';

const gradients = [
  ['#21ad7c', '#1735aa'],
  ['#da4301', '#593ad1'],
  ['#7b5988', '#8d6c5c'],
  ['#4c5d65', '#44a95e'],
  ['#9242e9', '#7c3399'],
  ['#d69155', '#5ad3c5'],
  ['#84cc99', '#0a9134'],
];

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

const Navigation = () => {
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

export default Navigation;
