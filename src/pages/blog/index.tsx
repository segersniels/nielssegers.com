import * as api from 'api';
import Blog from 'components/Pages/Blog';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await api.getPosts(),
    },
  };
};

export default Blog;
