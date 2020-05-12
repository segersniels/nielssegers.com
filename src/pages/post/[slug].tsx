import Item from 'components/Post';
import Head from 'next/head';
import React from 'react';
import * as api from 'api';
import { Container } from 'styles/shared';
import Layout from 'components/Layout';

interface Props {
  post: any;
}

const Post = (props: Props) => {
  const { post } = props;
  const { title, author, body, publishedAt } = post;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Item
          title={title}
          author={author}
          body={body}
          publishedAt={publishedAt}
        />
      </Container>
    </Layout>
  );
};

Post.getInitialProps = async (props: any) => {
  return {
    post: await api.getPost(props.query.slug),
  };
};

export default Post;
