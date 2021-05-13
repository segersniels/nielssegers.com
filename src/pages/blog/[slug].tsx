import * as api from 'api';
import Layout from 'components/Layout';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import viewportStyles from 'styles/Viewport.module.css';
import PostType from 'types/Post';

const Item = dynamic(() => import('components/Post/Full'));

interface Props {
  post: PostType;
}

const Post = (props: Props) => {
  const { post } = props;

  if (!post) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className={viewportStyles.container}>
        <Item
          title={post.title}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          excerpt={post.excerpt}
          coverImage={post.coverImage}
        />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const post = await api.getPost(context.params.slug as string);

  return {
    props: {
      post,
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
      })) ?? [],
    fallback: true,
  };
};

export default Post;
