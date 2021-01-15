/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import React from 'react';

export default {
  code: (props: any) => {
    const Window = dynamic(import('@segersniels/window'));

    return <Window {...props} />;
  },
  image: (props: any) => {
    const Image = dynamic(import('@segersniels/image'));

    return (
      <div style={{ textAlign: 'center' }}>
        <Image {...props} priority={true} />
      </div>
    );
  },
};
