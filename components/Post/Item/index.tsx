import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles';
import { Redirect, SubTitle, Text } from 'styles/defaults';
import { Author, Body } from './styles';
import BlockContent from '@sanity/block-content-to-react';
import sanity from 'sanity';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Head from 'next/head';

interface Props {
  link?: boolean;
  shorten?: boolean;
  slug: any;
  title: string;
  body: any[];
  author: string;
}

const findFirstImage = (body: any[]) => {
  for (const block of body) {
    if (block.asset) {
      const image = block.asset._ref
        .replace('image-', '')
        .replace('-png', '.png');
      return `https://cdn.sanity.io/images/9coakvkk/production/${image}`;
    }
  }

  return '';
};

const shortenText = (body: any[]) => {
  let block = body[0];
  const MAX_TEXT_LENGTH = 200;
  let totalLength = 0;
  let text = '';

  // First block is not a block of text but an image so try to fetch the next available text block
  if (!block.children) {
    block = body.find(b => b.children);
  }

  for (const child of block.children) {
    if (totalLength > MAX_TEXT_LENGTH) {
      continue;
    }

    text += child.text;
    totalLength += child.text.length;
  }

  if (text.length < MAX_TEXT_LENGTH) {
    return text;
  }

  return `${text.substr(0, MAX_TEXT_LENGTH)}...`;
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
    </Head>
  );
};

const serializers = {
  types: {
    // eslint-disable-next-line react/display-name
    code: (props: any) => (
      <SyntaxHighlighter language={props.node.language}>
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
  hardBreak: false,
};

const Item = (props: Props) => {
  const { link = false, shorten = false, slug, title, body, author } = props;

  const { t } = useTranslation();

  return link ? (
    <Link href={'/post/[slug]'} as={`/post/${slug.current}`} passHref>
      <Redirect color={colors.darkGrey}>
        <SubTitle>{title}</SubTitle>
        <Text>{shortenText(body)}</Text>
        <Author>
          {t('list.by')}
          {author}
        </Author>
      </Redirect>
    </Link>
  ) : (
    <Body>
      <SubTitle>{title}</SubTitle>
      {shorten ? (
        <Text>{shortenText(body)}</Text>
      ) : (
        <>
          <CustomHead body={body} title={title} />
          <BlockContent
            blocks={shorten ? body.slice(0, 1) : body}
            imageOptions={{ fit: 'max' }}
            {...sanity.config()}
            serializers={serializers}
          />
        </>
      )}
      <Author>
        {t('list.by')}
        {author}
      </Author>
    </Body>
  );
};

export default Item;
