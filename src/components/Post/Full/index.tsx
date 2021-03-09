import { Post } from 'api';
import renderers from 'helpers/renderers';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import sharedStyles from '../Post.module.css';

const CustomHead = (props: Partial<Post>) => {
  const { title, excerpt, coverImage, content } = props;
  const url = /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/.exec(content)?.[1];

  return (
    <Head>
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={excerpt} />
      <meta key="og:image" property="og:image" content={coverImage ?? url} />

      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={excerpt}
      />
      <meta
        key="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        key="twitter:image"
        property="twitter:image"
        content={coverImage ?? url}
      />
    </Head>
  );
};

const Item = (props: Partial<Post>) => {
  const { title, content } = props;

  return (
    <div className={sharedStyles.container}>
      <CustomHead {...props} />
      <h2 className={sharedStyles.subtitle}>{title}</h2>
      <ReactMarkdown source={content} renderers={renderers} plugins={[gfm]} />
    </div>
  );
};

export default Item;
