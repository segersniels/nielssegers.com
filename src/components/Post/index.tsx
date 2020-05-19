import React from 'react';
import { Container, PostWrapper } from './styles';
import Item from './Item';

type Props = {
  slug?: any;
  title: string;
  content: any;
  author: string;
  excerpt: string;
  publishedAt: string;
  shorten?: boolean;
  redirect?: boolean;
};

const Post = (props: Props) => {
  const {
    slug = '',
    title,
    content,
    author,
    publishedAt,
    redirect = false,
    shorten = false,
    excerpt,
  } = props;

  return (
    <Container>
      <PostWrapper>
        {shorten ? (
          <Item.Short
            slug={slug}
            title={title}
            excerpt={excerpt}
            author={author}
            link={redirect}
          />
        ) : (
          <Item.Full
            title={title}
            content={content}
            author={author}
            publishedAt={publishedAt}
            excerpt={excerpt}
          />
        )}
      </PostWrapper>
    </Container>
  );
};

export default Post;
