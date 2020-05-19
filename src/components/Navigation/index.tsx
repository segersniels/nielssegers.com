import React from 'react';
import { Container, Title, Item, Info, Description } from './styles';
import Link from 'next/link';

const Navigation = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <Info>
          <Item>
            <Title>Niels Segers</Title>
          </Item>
          <Description>Full Stack Developer </Description>
        </Info>
      </Link>
    </Container>
  );
};

export default Navigation;
