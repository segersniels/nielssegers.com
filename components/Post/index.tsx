import React from 'react';
import { Container, PostWrapper } from './styles';
import Item from './Item';

type Props = {
  slug?: any;
  title: string;
  body: any[];
  author: string;
  shorten?: boolean;
  redirect?: boolean;
};

const Post = (props: Props) => {
  const { slug = '', title, body, author, redirect = false } = props;

  return (
    <Container>
      <PostWrapper>
        <Item
          slug={slug}
          title={title}
          body={body}
          author={author}
          link={redirect}
        />
      </PostWrapper>
    </Container>
  );
};

export default Post;
