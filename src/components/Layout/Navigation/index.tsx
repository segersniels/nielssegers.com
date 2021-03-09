import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './Navigation.module.css';

const Navigation = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href={router.pathname.includes('slug') ? '/blog' : '/'} passHref>
        <div className={styles.info}>
          <h1 className={styles.title}>Niels Segers</h1>
          <h2 className={styles.subtitle}>Full Stack Developer.</h2>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
