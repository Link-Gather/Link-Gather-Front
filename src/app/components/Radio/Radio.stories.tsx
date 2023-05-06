import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

type ArgTypes = ComponentProps<typeof Radio>;

export default {
  title: 'components/Radio',
  component: Radio,
  args: {
    label: 'Radio',
    required: true,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
