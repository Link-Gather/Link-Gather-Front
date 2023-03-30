import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from './FlexBox';

type ArgTypes = ComponentProps<typeof FlexBox>;

export default {
  title: 'elements/FlexBox',
  component: FlexBox,
  args: {
    width: '100%',
    height: '100%',
  },
  argTypes: {
    justifyContent: { type: 'string' },
    justifyItems: { type: 'string' },
    alignContent: { type: 'string' },
    alignItems: { type: 'string' },
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
