import cx from 'classnames';
import Layout from 'components/Layout';
import Post from 'components/Post';
import usePagination from 'hooks/usePagination';
import React from 'react';
import viewportStyles from 'styles/Viewport.module.css';
import PostType from 'types/Post';

import styles from './Blog.module.css';

interface Props {
  posts: PostType[];
}

const Blog = (props: Props) => {
  const { posts } = props;
  const { select, pages, size, index, page: currentPage } = usePagination(
    posts,
  );

  return (
    <Layout>
      <div className={viewportStyles.container}>
        {posts
          .map(
            ({ title, slug, author, content, publishedAt, excerpt }, index) =>
              slug && (
                <Post.Short
                  slug={slug}
                  title={title}
                  content={content}
                  author={author}
                  publishedAt={publishedAt}
                  excerpt={excerpt}
                  key={index}
                />
              ),
          )
          .slice(index - size, index)}

        <div className={styles.container}>
          {Array.from({ length: pages }, (_v, i) => i + 1).map((page) => (
            <a
              className={cx(styles.button, {
                [styles.active]: currentPage === page,
              })}
              onClick={() => select(page)}
              key={page}
            >
              {page}
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
