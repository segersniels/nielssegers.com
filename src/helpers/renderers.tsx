/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import React from 'react';

const Image = dynamic(() => import('@segersniels/image'));
const Window = dynamic(() => import('components/Window'));

export default {
  code: (props: any) => <Window {...props} />,
  image: (props: any) => (
    <div style={{ textAlign: 'center' }}>
      <Image {...props} priority />
    </div>
  ),
};
