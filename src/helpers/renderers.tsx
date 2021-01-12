/* eslint-disable react/display-name */
import Window from '@segersniels/window';
import Image from 'next/image';
import React from 'react';

export default {
  code: Window,
  image: ({
    alt,
    src,
    title,
  }: {
    alt?: string;
    src?: string;
    title?: string;
  }) => {
    // https://cdn.sanity.io/images/9coakvkk/production/6c82d42a7f5cf54f6c505ae95064ae1b98423a22-3024x4032.jpg
    const filename = /[^/]*$/.exec(src)[0];
    const [width, height] = filename.split('-')[1].split('.')[0].split('x');

    return (
      <Image
        alt={alt}
        src={src}
        title={title}
        layout="intrinsic"
        height={height}
        width={width}
      />
    );
  },
};
