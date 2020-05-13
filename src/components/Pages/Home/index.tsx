import React from 'react';
import Layout from 'components/Layout';
import Post from 'components/Post';
import * as api from 'api';
import { Container } from 'styles/shared';
import { Button } from './styles';
import usePagination from 'hooks/usePagination';
import { Props as Full } from 'components/Post/Item/Full';
import { Props as Short } from 'components/Post/Item/Short';

interface Props {
  posts: (Short & Full)[];
}

const Home = (props: Props) => {
  const { posts } = props;
  const { next, isLast, index } = usePagination(posts);

  return (
    <Layout>
      <Container>
        {posts
          .map(
            ({ title, slug, author, body = [], publishedAt }) =>
              slug && (
                <Post
                  slug={slug}
                  title={title}
                  body={body}
                  author={author}
                  publishedAt={publishedAt}
                  shorten
                  redirect
                  key={slug.current}
                />
              ),
          )
          .slice(0, index)}

        {!isLast && <Button onClick={next}>View More</Button>}
      </Container>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return {
    posts: await api.getPosts(),
  };
};

export default Home;
