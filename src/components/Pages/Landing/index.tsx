import Link from 'next/link';
import React from 'react';
import { Redirect } from 'styles/shared';

import { Container, Description, DescriptionBox, Wrapper } from './styles';

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
