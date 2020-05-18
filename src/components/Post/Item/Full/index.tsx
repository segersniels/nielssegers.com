/* eslint-disable react/display-name */
import React from 'react';
import { SubTitle } from 'styles/shared';
import { Body } from '../styles';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock';

export interface Props {
  title: string;
  content: any;
  author: string;
  excerpt: string;
  publishedAt: string;
}

const CustomHead = (props: { title: string; excerpt: string }) => {
  const { title, excerpt } = props;
  return (
    <Head>
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={excerpt} />

      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={excerpt}
      />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>
  );
};

const Item = (props: Props) => {
  const { title, content, excerpt } = props;

  return (
    <Body>
      <CustomHead excerpt={excerpt} title={title} />
      <SubTitle>{title}</SubTitle>
      <ReactMarkdown
        source={content}
        renderers={{
          code: CodeBlock,
        }}
      />
    </Body>
  );
};

export default Item;
