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
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
