import React from 'react';
import { Container, Item, Icon } from './styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <Container>
      <Item target="_blank" href="https://github.com/segersniels">
        <Icon>
          <FaGithub />
        </Icon>
      </Item>

      <Item target="_blank" href="https://www.linkedin.com/in/nielssegers/">
        <Icon>
          <FaLinkedin />
        </Icon>
      </Item>
    </Container>
  );
};

export default Header;
