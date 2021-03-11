import dynamic from 'next/dynamic';
import React from 'react';

import styles from './Window.module.css';

const Default = dynamic(() => import('@segersniels/window'), {
  ssr: false,
});

const Window = (props: any) => {
  return (
    <div className={styles.container}>
      <Default {...props} />
    </div>
  );
};

export default Window;
