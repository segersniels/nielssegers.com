import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Container, Info, Title } from './styles';

const Navigation = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href={router.pathname.includes('slug') ? '/blog' : '/'} passHref>
        <Info>
          <Title>Niels Segers</Title>
        </Info>
      </Link>
    </Container>
  );
};

export default Navigation;
