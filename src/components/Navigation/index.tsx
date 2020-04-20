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

          <Link href="https://github.com/segersniels" passHref>
            <Item>
              <Text>projects</Text>
            </Item>
          </Link>

          <Link href="https://www.linkedin.com/in/nielssegers/" passHref>
            <Item>
              <Text>about</Text>
            </Item>
          </Link>
        </Links>
      </Row>
    </Container>
  );
};

export default Navigation;
