import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomLineInput } from './BottomLineInput';

type ArgTypes = ComponentProps<typeof BottomLineInput>;

export default {
  title: 'elements/BottomLineInput',
  component: BottomLineInput,
  // args: { children: 'Lorem Ipsum is' },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
