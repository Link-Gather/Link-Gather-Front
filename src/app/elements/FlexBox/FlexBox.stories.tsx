import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from './FlexBox';

type ArgTypes = ComponentProps<typeof FlexBox>;

export default {
  title: 'elements/FlexBox',
  component: FlexBox,
  args: {
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
