import Home from 'components/Pages/Home';
import * as api from 'api';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: await api.getPosts(),
    },
  };
};

export default Home;
