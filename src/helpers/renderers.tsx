/* eslint-disable react/display-name */
import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';

const Window = dynamic(import('@segersniels/window'));
const Image = dynamic(import('@segersniels/image'));

const Wrapper = styled.p`
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
        <Image src={src} alt={alt} title={title} />
      </Wrapper>
    );
  },
};
