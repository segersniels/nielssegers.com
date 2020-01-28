import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubTitle } from 'styles/defaults';
import { Author, Body, Text } from '../styles';
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
  const { title, body, author } = props;
  const { t } = useTranslation();
  const mentions = useWebmentions();

  return (
    <Body>
      <CustomHead body={body} title={title} />
      <SubTitle>{title}</SubTitle>
      <BlockContent
        blocks={body}
        imageOptions={{ fit: 'max' }}
        {...sanity.config()}
        serializers={serializers}
      />
      <Author>
        {t('list.by')}
        {author}
      </Author>

      {mentions.length > 0 && (
        <Text>
          <b>{mentions.length}</b> people liked this.
        </Text>
      )}
    </Body>
  );
};

export default Item;
