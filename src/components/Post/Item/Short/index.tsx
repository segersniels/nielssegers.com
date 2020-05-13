import React from 'react';
import Link from 'next/link';
import colors from 'styles/colors';
import { Redirect, SubTitle } from 'styles/shared';
import { Body, Text } from '../styles';

export interface Props {
  link?: boolean;
  slug: { current: string };
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
    block = body.find((b) => b.children);
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
  const { link = false, slug, title, body } = props;

  return link ? (
    <Link href={'/post/[slug]'} as={`/post/${slug.current}`} passHref>
      <Redirect color={colors.darkGrey}>
        <SubTitle>{title}</SubTitle>
        <Text>{shortenText(body)}</Text>
      </Redirect>
    </Link>
  ) : (
    <Body>
      <SubTitle>{title}</SubTitle>
      <Text>{shortenText(body)}</Text>
    </Body>
  );
};

export default Item;
