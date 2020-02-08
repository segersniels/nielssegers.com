import React from 'react';
import { Container, PostWrapper } from './styles';
import Short from './Item/Short';
import Full from './Item/Full';

type Props = {
  slug?: any;
  title: string;
  body: any[];
  author: string;
  publishedAt: string;
  shorten?: boolean;
  redirect?: boolean;
};

const Post = (props: Props) => {
  const {
    slug = '',
    title,
    body,
    author,
    publishedAt,
    redirect = false,
    shorten = false,
  } = props;

  return (
    <Container>
      <PostWrapper>
        {shorten ? (
          <Short
            slug={slug}
            title={title}
            body={body}
            author={author}
            link={redirect}
          />
        ) : (
          <Full
            title={title}
            body={body}
            author={author}
            publishedAt={publishedAt}
          />
        )}
      </PostWrapper>
    </Container>
  );
};

export default Post;
