import React from 'react';
import { Container, Title, Row, Links, Item } from './styles';
import { Text } from 'styles/shared';
import Link from 'next/link';

const Navigation = () => {
  return (
    <Container>
      <Row>
        <Title>Niels Segers</Title>
      </Row>

      <Row>
        <Links>
          <Link href="/" passHref>
            <Item>
              <Text>home</Text>
            </Item>
          </Link>

          <Item target="_blank" href="https://github.com/segersniels">
            <Text>projects</Text>
          </Item>

          <Item target="_blank" href="https://www.linkedin.com/in/nielssegers/">
            <Text>about</Text>
          </Item>
        </Links>
      </Row>
    </Container>
  );
};

export default Navigation;
