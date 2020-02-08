import React from 'react';
import Layout from 'components/Layout';
import sanity from 'sanity';
import { Container } from 'styles/defaults';
import Post from 'components/Post';
import Head from 'next/head';

interface Props {
  posts: any[];
}

const Home = (props: Props) => {
  const { posts } = props;

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

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
