/* eslint-disable react/display-name */
import Window from '@segersniels/window';
import NextImage from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ResponsiveImage = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) => {
  const [width, setWidth] = useState<null | number>(null);
  const [height, setHeight] = useState<null | number>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setWidth(img.naturalWidth);
      setHeight(img.naturalHeight);
      setLoaded(true);
    };
  }, [src, height, width, loaded]);

  if (!loaded || !height || !width) {
    return null;
  }

  return (
    <NextImage
      src={src}
      quality="85"
      width={width}
      height={height}
      alt={alt}
      title={title}
    />
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

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
    return (
      <Wrapper>
        <ResponsiveImage src={src} alt={alt} title={title} />
      </Wrapper>
    );
  },
};
