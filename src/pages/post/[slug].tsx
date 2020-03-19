import Item from 'components/Post';
import Head from 'next/head';
import React from 'react';
import sanity from 'sanity';
import { Container } from 'styles/defaults';
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

Post.getInitialProps = async ({ ctx }: any) => {
  return {
    post: await sanity.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
      title,
      "author": author->name,
      body,
      publishedAt
    }`,
      { slug: ctx.query.slug },
    ),
  };
};

export default Post;
