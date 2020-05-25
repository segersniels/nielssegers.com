import React from 'react';
import { Container, PostWrapper } from './styles';
import Item from './Item';
import { Post as PostType } from 'api';

type Props = Partial<PostType> & {
  shorten?: boolean;
};

const Post = (props: Props) => {
  const {
    slug = '',
    title,
    content,
    author,
    publishedAt,
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
