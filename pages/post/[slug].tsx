import React from 'react';
import Layout from '../../components/Layout';
import sanity from 'sanity';
import { Container } from 'styles/defaults';
import Item from 'components/Post';

interface Props {
  post: any;
}

const Post = (props: Props) => {
  const { post } = props;
  const { title, author, body } = post;

  return (
    <Layout>
      <Container>
        <Item title={title} author={author} body={body} />
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
      body
    }`,
      { slug: ctx.query.slug },
    ),
  };
};

export default Post;
