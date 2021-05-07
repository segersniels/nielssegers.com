import renderers from 'helpers/renderers';
import React, { AnchorHTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import Post from 'types/Post';

import sharedStyles from '../Post.module.css';
import styles from './Short.module.css';

type Props = Partial<Post> & Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

// eslint-disable-next-line react/display-name
const Item = React.forwardRef<HTMLAnchorElement, Props>((props: Props, ref) => {
  const { title, excerpt, href, onClick } = props;

  return (
    <div className={sharedStyles.container}>
      <div>
        <a href={href} onClick={onClick} ref={ref} className={styles.redirect}>
          <h2 className={sharedStyles.subtitle}>{title}</h2>
          <ReactMarkdown source={excerpt} renderers={renderers} />
        </a>
      </div>
    </div>
  );
});

export default Item;
