/* eslint-disable react/display-name */
import React from 'react';
import { SubTitle } from 'styles/shared';
import { Body, Text } from '../styles';
import { Image } from './styles';
import BlockContent from '@sanity/block-content-to-react';
import sanity from 'sanity';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Head from 'next/head';
import { shortenText } from '../Short';
import useWebmentions from 'hooks/useWebmentions';

interface Props {
  title: string;
  body: any[];
  author: string;
  publishedAt: string;
}

const findFirstImage = (body: any[]) => {
  for (const block of body) {
    if (block.asset) {
      const image = block.asset._ref
        .replace('image-', '')
        .replace('-png', '.png');
      return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${image}`;
    }
  }

  return '';
};

const CustomHead = (props: { body: any; title: string }) => {
  const { body, title } = props;
  return (
    <Head>
      <meta key="og:image" property="og:image" content={findFirstImage(body)} />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={shortenText(body)}
      />

      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={shortenText(body)}
      />
      <meta
        key="twitter:image"
        property="twitter:image"
        content={findFirstImage(body)}
      />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>
  );
};

const serializers = {
  types: {
    code: (props: any) => (
      <SyntaxHighlighter language={props.node.language}>
        {props.node.code}
      </SyntaxHighlighter>
    ),
    image: (props: any) => {
      const image = props.node.asset._ref
        .replace('image-', '')
        .replace('-png', '.png')
        .replace('-jpg', '.jpg');
      return (
        <Image
          src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${image}`}
        />
      );
    },
  },
  hardBreak: false,
};

const Item = (props: Props) => {
  const { title, body } = props;
  const mentions = useWebmentions();

  return (
    <Body>
      <CustomHead body={body} title={title} />
      <SubTitle>{title}</SubTitle>

      <BlockContent
        blocks={body}
        {...sanity.config()}
        serializers={serializers}
      />

      {mentions.length > 0 && (
        <Text align="right">
          <b>{mentions.length}</b> people liked this.
        </Text>
      )}
    </Body>
  );
};

export default Item;
