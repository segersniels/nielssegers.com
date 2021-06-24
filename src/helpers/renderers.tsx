/* eslint-disable react/display-name */
import Image from '@segersniels/image';
import Window from 'components/Window';
import React from 'react';

export default {
  code: (props: any) => <Window {...props} />,
  image: (props: any) => (
    <div style={{ textAlign: 'center' }}>
      <Image {...props} priority />
    </div>
  ),
};
