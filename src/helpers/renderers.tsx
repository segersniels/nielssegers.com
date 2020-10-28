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
  }) => <Image alt={alt} src={src} title={title} unsized />,
};
