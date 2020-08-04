import * as api from 'api';
import { Post as PostType } from 'api';
import Layout from 'components/Layout';
import Item from 'components/Post';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { ViewportAwareContainer } from 'styles/shared';

interface Props {
  post: PostType;
}

const Post = (props: Props) => {
  const { post } = props;
  if (!post) {
    return null;
  }

  const { title, author, content, publishedAt, excerpt } = post;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <ViewportAwareContainer>
        <Item.Full
          title={title}
          author={author}
          content={content}
          publishedAt={publishedAt}
          excerpt={excerpt}
        />
      </ViewportAwareContainer>
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
    revalidate: 1,
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
