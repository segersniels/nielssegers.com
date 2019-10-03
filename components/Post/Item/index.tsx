import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles';
import { Redirect, SubTitle, Text } from 'styles/defaults';
import { Author, Body } from './styles';
import BlockContent from '@sanity/block-content-to-react';
import sanity from 'sanity';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface Props {
  link?: boolean;
  shorten?: boolean;
  slug: any;
  title: string;
  body: any[];
  author: string;
}

const shortenText = (block: any) => {
  const MAX_TEXT_LENGTH = 200;
  let totalLength = 0;
  let text = '';

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

const serializers = {
  types: {
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
        <Text>{shortenText(body[0])}</Text>
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
        <Text>{shortenText(body[0])}</Text>
      ) : (
        <BlockContent
          blocks={shorten ? body.slice(0, 1) : body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...sanity.config()}
          serializers={serializers}
        />
      )}
      <Author>
        {t('list.by')}
        {author}
      </Author>
    </Body>
  );
};

export default Item;
