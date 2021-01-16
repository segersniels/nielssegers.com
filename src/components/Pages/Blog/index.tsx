import { Post as PostType } from 'api';
import Layout from 'components/Layout';
import Post from 'components/Post';
import usePagination from 'hooks/usePagination';
import React from 'react';
import { ViewportAwareContainer } from 'styles/shared';

import { Button, PageContainer } from './styles';

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
      <ViewportAwareContainer>
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

        <PageContainer>
          {Array.from({ length: pages }, (_v, i) => i + 1).map((page) => (
            <Button
              onClick={() => select(page)}
              key={page}
              active={currentPage === page}
            >
              {page}
            </Button>
          ))}
        </PageContainer>
      </ViewportAwareContainer>
    </Layout>
  );
};

export default Blog;
