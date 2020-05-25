import React from 'react';
import Layout from 'components/Layout';
import Post from 'components/Post';
import { Container } from 'styles/shared';
import { Button } from './styles';
import usePagination from 'hooks/usePagination';
import { Post as PostType } from 'api';

interface Props {
  posts: PostType[];
}

const Home = (props: Props) => {
  const { posts } = props;
  const { next, isLast, index } = usePagination(posts);

  return (
    <Layout>
      <Container>
        {posts
          .map(
            ({ title, slug, author, content, publishedAt, excerpt }, index) =>
              slug && (
                <Post
                  slug={slug}
                  title={title}
                  content={content}
                  author={author}
                  publishedAt={publishedAt}
                  excerpt={excerpt}
                  shorten
                  key={index}
                />
              ),
          )
          .slice(0, index)}

        {!isLast && <Button onClick={next}>View More</Button>}
      </Container>
    </Layout>
  );
};

export default Home;
