import React from 'react';
import { Container, PostWrapper, Text } from './styles';
import Item from './Item';
import useWebmentions from 'hooks/useWebmentions';

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
  const mentions = useWebmentions();

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

      {!redirect && mentions.length > 0 && (
        <Text>
          <b>{mentions.length}</b> people liked this.
        </Text>
      )}
    </Container>
  );
};

export default Post;
