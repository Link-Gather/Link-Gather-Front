import React, { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from './FlexBox';

type ArgTypes = ComponentProps<typeof FlexBox>;

export default {
  title: 'elements/FlexBox',
  component: FlexBox,
  args: {
    width: '50%',
    height: '50%',
    children: (
      <>
        <div css={{ border: '1px solid #aaaaaa' }}>First Child</div>
        <div css={{ border: '1px solid #80daa2' }}>Second Child</div>
        <div css={{ border: '1px solid #a84444' }}>Third Child</div>
      </>
    ),
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
