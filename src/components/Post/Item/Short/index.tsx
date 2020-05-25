import React from 'react';
import Link from 'next/link';
import colors from 'styles/colors';
import { Redirect, SubTitle } from 'styles/shared';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import { Post } from 'api';

const Item = (props: Partial<Post>) => {
  const { slug, title, excerpt } = props;

  return (
    <Link href={'/post/[slug]'} as={`/post/${slug}`} passHref>
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
  );
};

export default Item;
