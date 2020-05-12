import React, { useState } from 'react';
import Layout from 'components/Layout';
import Post from 'components/Post';
import * as api from 'api';
import { Container } from 'styles/shared';
import { Button } from './styles';

interface Props {
  posts: any[];
}

const Home = (props: Props) => {
  const { posts } = props;
  const [page, setPage] = useState(0);
  const size = 5;
  const ableToLoadMore = page * size + size < posts.length;

  return (
    <Layout>
      <Container>
        {posts
          .map(
            ({ title = '', slug = '', author = '', body = [], publishedAt }) =>
              slug && (
                <Post
                  slug={slug}
                  title={title}
                  body={body}
                  author={author}
                  publishedAt={publishedAt}
                  shorten
                  redirect
                  key={slug}
                />
              ),
          )
          .slice(0, page * size + size)}

        {ableToLoadMore && (
          <Button onClick={() => setPage(page + 1)}>View More</Button>
        )}
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
