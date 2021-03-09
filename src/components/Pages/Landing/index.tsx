import Head from 'components/Head';
import Link from 'next/link';
import React, { Fragment } from 'react';

import styles from './Landing.module.css';

const Landing = () => {
  return (
    <Fragment>
      <Head />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles['description-box']}>
            <Link href="/blog" prefetch={false} passHref>
              <a className={styles.highlight}>Blog.</a>
            </Link>

            <a
              className={styles.highlight}
              href="https://github.com/segersniels"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github.
            </a>

            <a
              className={styles.highlight}
              href="https://twitter.com/segersniels_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter.
            </a>

            <a
              className={styles.highlight}
              href="https://www.linkedin.com/in/nielssegers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn.
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
