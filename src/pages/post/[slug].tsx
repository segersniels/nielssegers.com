import Item from 'components/Post';
import Head from 'next/head';
import React from 'react';
import * as api from 'api';
import { Container } from 'styles/shared';
import Layout from 'components/Layout';
import { GetStaticProps, GetStaticPropsContext } from 'next';

interface Props {
  post: any;
}

const Post = (props: Props) => {
  const { post } = props;
  const { title, author, content, publishedAt, excerpt } = post;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Item
          title={title}
          author={author}
          content={content}
          publishedAt={publishedAt}
          excerpt={excerpt}
        />
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  return {
    props: {
      post: await api.getPost(context.params.slug as string),
    },
  };
};

export const getStaticPaths = async () => {
  const allPosts = await api.getPosts();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
};

export default Post;
