/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import React from 'react';

const Window = dynamic(() => import('@segersniels/window'), {
  ssr: false,
});
const Image = dynamic(() => import('@segersniels/image'));

const Loader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/dmzjyuyyv/image/fetch/w_${width},q_${
    quality || 75
  }/${src}`;
};

export default {
  code: (props: any) => <Window {...props} />,
  image: (props: any) => (
    <div style={{ textAlign: 'center' }}>
      <Image {...props} priority loader={Loader} />
    </div>
  ),
};
