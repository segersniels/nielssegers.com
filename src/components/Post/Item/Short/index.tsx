import React from 'react';
import Link from 'next/link';
import colors from 'styles/colors';
import { Redirect, SubTitle } from 'styles/shared';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';

export interface Props {
  slug: { current: string };
  title: string;
  excerpt: string;
  author: string;
}

const Item = (props: Props) => {
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
