import React from 'react';
import Layout from 'components/Layout';
import Post from 'components/Post';
import sanity from 'sanity';
import { Container } from 'styles/shared';

interface Props {
  posts: any[];
}

const Home = (props: Props) => {
  const { posts } = props;
  return (
    <Layout>
      <Container>
        {posts.map(
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
        )}
      </Container>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return {
    posts: await sanity.fetch(
      `*[_type == "post" && publishedAt < now()]|order(publishedAt desc) { title, slug, "author": author->name, body, publishedAt }`,
    ),
  };
};

export default Home;
