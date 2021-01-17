/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import React from 'react';

const Window = dynamic(() => import('@segersniels/window'));
const Image = dynamic(() => import('@segersniels/image'));

export default {
  code: (props: any) => {
    return <Window {...props} />;
  },
  image: (props: any) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <Image {...props} priority={true} />
      </div>
    );
  },
};
