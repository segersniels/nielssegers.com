import Posts from 'components/Pages/Posts';
import * as api from 'api';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await api.getPosts(),
    },
  };
};

export default Posts;
