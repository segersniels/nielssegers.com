import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Container, Info, SubTitle, Title } from './styles';

const Navigation = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href={router.pathname.includes('slug') ? '/blog' : '/'} passHref>
        <Info>
          <Title>Niels Segers</Title>
          <SubTitle>Full Stack Developer.</SubTitle>
        </Info>
      </Link>
    </Container>
  );
};

export default Navigation;
