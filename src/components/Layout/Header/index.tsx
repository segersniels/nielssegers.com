import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Container, Icon, Item } from './styles';

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
