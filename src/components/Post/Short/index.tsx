import { Post } from 'api';
import { Container } from 'components/Post/styles';
import renderers from 'helpers/renderers';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { SubTitle } from 'styles/shared';

const Redirect = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Item = (props: Partial<Post>) => {
  const { slug, title, excerpt } = props;

  return (
    <Container>
      <Link href={'/blog/[slug]'} as={`/blog/${slug}`} passHref>
        <Redirect>
          <SubTitle>{title}</SubTitle>
          <ReactMarkdown source={excerpt} renderers={renderers} />
        </Redirect>
      </Link>
    </Container>
  );
};

export default Item;
