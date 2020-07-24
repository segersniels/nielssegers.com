import { Post } from 'api';
import CodeBlock from 'components/Post/CodeBlock';
import { Container } from 'components/Post/styles';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Redirect, SubTitle } from 'styles/shared';

const Item = (props: Partial<Post>) => {
  const { slug, title, excerpt } = props;

  return (
    <Container>
      <Link href={'/blog/[slug]'} as={`/blog/${slug}`} passHref>
        <Redirect>
          <SubTitle>{title}</SubTitle>
          <ReactMarkdown
            source={excerpt}
            renderers={{
              code: CodeBlock,
            }}
          />
        </Redirect>
      </Link>
    </Container>
  );
};

export default Item;
