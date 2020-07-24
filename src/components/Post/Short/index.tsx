import React from 'react';
import Link from 'next/link';
import colors from 'styles/colors';
import { Redirect, SubTitle } from 'styles/shared';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/Post/CodeBlock';
import { Post } from 'api';
import { Container } from 'components/Post/styles';

const Item = (props: Partial<Post>) => {
  const { slug, title, excerpt } = props;

  return (
    <Container>
      <Link href={'/blog/[slug]'} as={`/blog/${slug}`} passHref>
        <Redirect color={colors.darkGrey}>
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
