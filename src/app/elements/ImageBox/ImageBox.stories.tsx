import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ImageBox } from './ImageBox';

type ArgTypes = ComponentProps<typeof ImageBox>;

export default {
  title: 'elements/ImageBox',
  component: ImageBox,
  args: {
    width: '100%',
    height: '100%',
    children: (
      <>
        <div css={{ border: '1px solid #aaaaaa' }}>First Child</div>
        <div css={{ border: '1px solid #aaaaaa' }}>Second Child</div>
        <div css={{ border: '1px solid #aaaaaa' }}>Third Child</div>
      </>
    ),
  },
  argTypes: {
    justifyContent: { type: 'string' },
    justifyItems: { type: 'string' },
    alignContent: { type: 'string' },
    alignItems: { type: 'string' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
