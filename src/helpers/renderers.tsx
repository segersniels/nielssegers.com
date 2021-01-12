/* eslint-disable react/display-name */
import Image from '@segersniels/image';
import Window from '@segersniels/window';
import React from 'react';
import styled from 'styled-components';

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
