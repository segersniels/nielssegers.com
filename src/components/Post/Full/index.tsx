/* eslint-disable react/display-name */
import { Post } from 'api';
import CodeBlock from 'components/Post/CodeBlock';
import { Container } from 'components/Post/styles';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SubTitle } from 'styles/shared';

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

const Item = (props: Partial<Post>) => {
  const { title, content, excerpt } = props;

  return (
    <Container>
      <CustomHead excerpt={excerpt} title={title} />
      <SubTitle>{title}</SubTitle>
      <ReactMarkdown
        source={content}
        renderers={{
          code: CodeBlock,
        }}
      />
    </Container>
  );
};

export default Item;
