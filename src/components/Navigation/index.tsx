import React from 'react';
import { Container, Title, Info } from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
