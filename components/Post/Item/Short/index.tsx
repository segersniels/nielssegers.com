import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles';
import { Redirect, SubTitle, Text } from 'styles/defaults';
import { Author, Body } from '../styles';

interface Props {
  link?: boolean;
  slug: any;
  title: string;
  body: any[];
  author: string;
}

export const shortenText = (body: any[]) => {
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

const Item = (props: Props) => {
  const { link = false, slug, title, body, author } = props;

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
      <Text>{shortenText(body)}</Text>
      <Author>
        {t('list.by')}
        {author}
      </Author>
    </Body>
  );
};

export default Item;
